<script>
    import {
        required,
        minLength,
        sameAs
    } from 'vuelidate/lib/validators'

    export default {
        name: 'RegisterForm',
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                repeatPassword: '',
                submitStatus: false,
                errors: {
                    firstName: false,
                    lastName: false,
                    email: false,
                    emailValidation: false,
                    password: false,
                    repeatPassword: false
                }
            }
        },
        validations: {
            repeatPassword: {
                sameAsPassword: sameAs('password')
            }
        },
        methods: {
            submit() {
                console.log(this.validation())
                if (this.validation()) {
                    this.submitStatus = true
                }
            },
            validation() {
                if (!this.firstName) {
                    this.errors.firstName = true
                } else {
                    this.errors.firstName = false
                }
                if (!this.lastName) {
                    this.errors.lastName = true
                } else {
                    this.errors.lastName = false
                }
                if (!this.email) {
                    this.errors.email = true
                } else {
                    this.errors.email = false
                }
                if (this.email && !this.validateEmail(this.email)) {
                    this.errors.emailValidation = true
                } else {
                    this.errors.emailValidation = false
                }
                if (!this.password) {
                    this.errors.password = true
                } else {
                    this.errors.password = false
                }
                if (!this.repeatPassword) {
                    this.errors.repeatPassword = true
                } else {
                    this.errors.repeatPassword = false
                }
                if (this.errors.firstName == false && this.errors.lastName == false && this.errors.email == false && this.errors.emailValidation == false && this.errors.password == false && this.errors.repeatPassword == false) {
                    return true
                } else {
                    return false
                }
            },
            validateEmail(email) {
                const re =
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
        }
    }
</script>

<template>
    <section class="section sizer">
        <div class="columns is-multiline">
            <div class="column is-6 is-offset-3 has-text-centered mb-5">
                <h1 class="title is-2 is-spaced is-center">Register</h1>
                <h2 class="subtitle is-6 has-text-grey-light">you can access our api services by registering</h2>
            </div>
            <div class="column is-6 is-offset-3">
                <form @submit.prevent="submit">
                    <fieldset :disabled="submitStatus">
                        <div class="field">
                            <label class="label">First Name</label>
                            <div class="control has-icons-right">
                                <input class="input" :class="errors.firstName ? 'is-danger' : ''" type="text"
                                    placeholder="First Name" v-model="firstName">
                                <span class="icon is-small is-right" v-if="errors.firstName">
                                    <i class="fal fa-exclamation-triangle has-text-danger"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="errors.firstName">this field cannot be empty</p>
                        </div>
                        <div class="field">
                            <label class="label">Last Name</label>
                            <div class="control has-icons-right">
                                <input class="input" :class="errors.lastName ? 'is-danger' : ''" type="text"
                                    placeholder="Last Name" v-model="lastName">
                                <span class="icon is-small is-right" v-if="errors.firstName">
                                    <i class="fal fa-exclamation-triangle has-text-danger"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="errors.lastName">this field cannot be empty</p>
                        </div>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-right">
                                <input class="input" :class="errors.email ? 'is-danger' : ''" type="email"
                                    placeholder="Email" v-model="email">
                                <span class="icon is-small is-right" v-if="errors.email || errors.emailValidation">
                                    <i class="fal fa-exclamation-triangle has-text-danger"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="errors.email">this field cannot be empty</p>
                            <p class="help is-danger" v-if="errors.emailValidation">enter a valid email format</p>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control has-icons-right">
                                <input class="input" :class="errors.password ? 'is-danger' : ''" type="password"
                                    placeholder="Password" v-model="password">
                                <span class="icon is-small is-right" v-if="errors.password">
                                    <i class="fal fa-exclamation-triangle has-text-danger"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="errors.password">this field cannot be empty</p>
                        </div>
                        <div class="field">
                            <label class="label">Confirm Password</label>
                            <div class="control has-icons-right">
                                <input class="input" :class="errors.repeatPassword ? 'is-danger' : ''" type="password"
                                    placeholder="Confirm Password" v-model="repeatPassword">
                                <span class="icon is-small is-right" v-if="errors.repeatPassword">
                                    <i class="fal fa-exclamation-triangle has-text-danger"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="errors.repeatPassword">this field cannot be empty</p>
                            <p class="help is-danger"
                                v-if="$v.repeatPassword.$model.length > 0 && !$v.repeatPassword.sameAsPassword">the
                                passwords you entered do not match</p>
                        </div>
                        <div class="field pt-5">
                            <div class="control">
                                <button type="submit" class="button is-primary is-outlined is-fullwidth" :class="submitStatus ? 'is-loading' : ''"
                                    :disabled="submitStatus">Register</button>
                            </div>
                        </div>
                    </fieldset>

                    <div class="field pt-5 has-text-right">
                        <p class="has-text-grey">do you already have an account? <router-link :to="{name: 'Login'}"
                                class="has-text-primary">login now</router-link>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    </section>
</template>