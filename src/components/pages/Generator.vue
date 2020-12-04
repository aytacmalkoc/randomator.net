<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Generator',
        data() {
            return {
                mobileClass: '',
                randomType: '',
                encryptionType: '',
                result: '',
                generateStatus: false,
                copyText: 'copy'
            }
        },
        created() {
            if (this.$device.mobile) {
                this.mobileClass = 'is-grouped-multiline'
            } else {
                this.mobileClass = 'is-grouped'
            }
        },
        computed: {
            ...mapGetters([
                'getResult'
            ])
        },
        methods: {
            generate(){
                this.copyText = 'copy'
                this.generateStatus = true
                this.$store.dispatch('generate', {
                    random_type: this.randomType,
                    encryption_type: this.encryptionType
                }).then(() => {
                    this.generateStatus = false
                })
            },
            onCopySuccess(e) {
                this.copyText = 'copied!'
            }
        },
    }
</script>

<template>
    <div>
        <form @submit.prevent="generate">
            <fieldset :disabled="generateStatus">
                <div class="field is-grouped-centered is-centered search" :class="mobileClass">
                    <div class="control random_type">
                        <div class="select">
                            <select class="choose" v-model="randomType">
                                <option value="" selected disabled>choose random</option>
                                <option value="password">Random Password</option>
                                <option value="name">Random Name</option>
                                <option value="text">Random Text</option>
                                <option value="number">Random Number</option>
                            </select>
                        </div>
                    </div>
                    <div class="control encryption_type" v-if="randomType == 'password'">
                        <div class="select">
                            <select class="choose" v-model="encryptionType">
                                <option value="" selected disabled>choose encryption</option>
                                <option value="md5">MD5</option>
                                <option value="sha256">SHA256</option>
                                <option value="string">String</option>
                            </select>
                        </div>
                    </div>
                    <div class="control encryption_type" v-if="randomType == 'name'">
                        <div class="select">
                            <select class="choose" v-model="encryptionType">
                                <option value="" selected disabled>choose gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>
                    </div>
                    <div class="control encryption_type" v-if="randomType == 'name'">
                        <div class="select">
                            <select class="choose" v-model="encryptionType">
                                <option value="" selected disabled>choose language</option>
                                <option value="tr">Turkish</option>
                                <option value="en">English</option>
                                <option value="fr">French</option>
                            </select>
                        </div>
                    </div>
                    <div class="control">
                        <button type="submit" class="button is-outlined">generate!</button>
                    </div>
                </div>
            </fieldset>
        </form>
        <p v-if="getResult">Your generated {{ randomType }} is:<br>
            <span class="has-text-primary cursor-pointer">
                {{ getResult }}
            <span class="has-text-dark cursor-pointer ml-3" v-clipboard:copy="getResult" v-clipboard:success="onCopySuccess">
                {{ copyText }}
            </span>
            </span>
        </p>
    </div>
</template>