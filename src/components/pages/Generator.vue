<script>
    export default {
        name: 'Generator',
        data() {
            return {
                mobileClass: '',
                randomType: ''
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
            isNumber: (evt) => {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
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
                <form action="">
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
                                <select class="choose">
                                    <option value="" selected disabled>choose encryption</option>
                                    <option value="password">MD5</option>
                                    <option value="string">BASE64</option>
                                    <option value="text">SHA1</option>
                                    <option value="number">Random String</option>
                                </select>
                            </div>
                        </div>
                        <div class="control">
                            <input class="input" type="text" placeholder="max length" @keypress="isNumber($event)">
                        </div>
                        <div class="control">
                            <button type="submit" class="button is-outlined">generate!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </section>
</template>