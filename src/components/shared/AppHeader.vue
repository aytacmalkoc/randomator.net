<script>
    export default {
        name: 'AppHeader',
    }
</script>

<template>
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link :to="{name: 'Home'}" class="navbar-item logo has-text-primary">
                <span class="is-primary">./</span>
                randomator.net
            </router-link>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <router-link :to="{name: 'About'}" class="navbar-item">
                    <i class="fal fa-hand-peace pr-2"></i>
                    what is randomator.net?
                </router-link>
                <router-link to="/documents" class="navbar-item">
                    <i class="fal fa-book-alt pr-2"></i>
                    documents
                </router-link>
                <router-link to="/forum" class="navbar-item">
                    <i class="fal fa-hands-helping pr-2"></i>
                    forum
                </router-link>
                <router-link to="/login" class="navbar-item">
                    <i class="fal fa-sign-in-alt pr-2"></i>
                    login
                </router-link>
            </div>
        </div>
    </nav>
</template>