<script>
    import axios from 'axios'

    export default {
        name: 'LoginForm',
    }
</script>

<template>
    <section class="section sizer">
        <div class="columns is-multiline">
            <div class="column is-6 is-offset-3 has-text-centered mb-5">
                <h1 class="title is-2 is-spaced is-center">Login</h1>
                <h2 class="subtitle is-6 has-text-grey-light">you can use our api services by logging in</h2>
            </div>
            <div class="column is-6 is-offset-3">
                <form action="">
                    <div class="field">
                        <div class="control">
                            <label class="label">Email</label>
                            <input class="input" type="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label class="label">Password</label>
                            <input class="input" type="password" placeholder="Password">
                        </div>
                    </div>
                    <div class="field pt-5">
                        <div class="control">
                            <button type="submit" class="button is-primary is-outlined is-fullwidth">Login</button>
                        </div>
                    </div>
                    <div class="field pt-5 has-text-right">
                        <p class="has-text-grey">don't have an account? <router-link :to="{ name: 'Register' }" class="has-text-primary">register now</router-link></p>
                    </div>

                </form>
            </div>
        </div>
    </section>
</template>