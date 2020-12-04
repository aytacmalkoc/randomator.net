<script>
    import axios from 'axios'

    export default {
        name: 'Generator',
        data() {
            return {
                mobileClass: '',
                randomType: '',
                encryptionType: '',
                stringType: '',
                maxLength: null,
                generated: '',
                generateStatus: false,
                copyText: 'copy'
            }
        },
        created(){
            if (this.$device.mobile) {
                this.mobileClass = 'is-grouped-multiline'
            }else {
                this.mobileClass = 'is-grouped'
            }
        },
        methods: {
            generate() {
                this.generateStatus = true
                this.copyText = 'copy'
                axios.post(this.api_url('generate'), {
                    headers: {
                        'API_KEY': process.env.VUE_APP_API_KEY
                    },
                    random_type: this.randomType,
                    encryption_type: this.encryptionType,
                    string_type: this.stringType,
                    maxLength: this.maxLength
                }).then(res => {
                    this.generated = res.data
                    setTimeout(() => {
                        this.generateStatus = false
                    }, 1000)
                }).catch(err => {
                    console.log(err)
                })
            },
            onCopySuccess(e) {
                this.copyText = 'copied'
            }
        },
    }
</script>

<template>
    <section class="section has-text-centered sizer welcomebox">
        <div class="columns">
            <div class="column is-full">
                <h1 class="title is-1 ml9 text-wrapper is-spaced">
                    Generate with <br>
                    <span class="has-text-primary letters">randomator!</span>
                </h1>
                <h2 class="subtitle is-6 has-text-grey-light">You can generate random passwords, numbers, words
                    or texts with <span class="has-text-primary">randomator</span>.</h2>
                <form @submit.prevent="generate">
                    <fieldset :disabled="generateStatus">
                        <div class="field is-grouped-centered is-centered search" :class="mobileClass">
                            <div class="control random_type">
                                <div class="select">
                                    <select class="choose" v-model="randomType">
                                        <option value="" selected disabled>choose random</option>
                                        <option value="password">Random Password</option>
                                        <option value="string">Random String</option>
                                        <option value="text">Random Text</option>
                                        <option value="number">Random Number</option>
                                    </select>
                                </div>
                            </div>
                            <div class="control" v-if="randomType == 'password'">
                                <div class="select">
                                    <select class="choose" v-model="encryptionType">
                                        <option value="" selected disabled>choose encryption</option>
                                        <option value="md5">MD5</option>
                                        <option value="sha256">SHA256</option>
                                        <option value="random_string">Random String</option>
                                    </select>
                                </div>
                            </div>
                            <div class="control" v-if="encryptionType == 'random_string'">
                                <div class="select">
                                    <select class="choose" v-model="stringType">
                                        <option value="" selected disabled>choose string type</option>
                                        <option value="string">Only String</option>
                                        <option value="string_and_numbers">String + Numbers</option>
                                        <option value="all">String + Numbers + Symbols</option>
                                    </select>
                                </div>
                            </div>
                            <div class="control" v-if="encryptionType == 'random_string' || randomType == 'string'">
                                <input class="input" type="text" placeholder="max length" v-model="maxLength" @keypress="onlyNumber($event)">
                            </div>
                            <div class="control">
                                <button type="submit" class="button is-outlined">generate!</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <p v-if="generated.length">Your generated {{ randomType }} is:<br>
                <span class="has-text-primary cursor-pointer" v-clipboard:copy="generated" v-clipboard:success="onCopySuccess">{{ generated }}</span> 
                <span class="has-text-dark cursor-pointer ml-3" v-clipboard:copy="generated" v-clipboard:success="onCopySuccess">{{ copyText }}</span></p>
            </div>
        </div>

    </section>
</template>