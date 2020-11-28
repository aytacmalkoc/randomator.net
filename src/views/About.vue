<script>
    export default {
        name: 'Home',
        metaInfo: {
            title: 'About',
            meta: [{
                vmid: 'description',
                name: 'description',
                content: 'my standard description',
            }]
        },
    }
</script>

<template>
    <section class="section sizer">
        <div class="columns">
            <div class="column is-8 is-offset-2">
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <article class="tile is-child notification has-background-white">
                            <div class="content">
                                <p class="title has-text-centered">what is randomator.net?</p>
                                <div class="content has-text-grey-dark pt-2">
                                    <p><span class="has-text-primary">randomator.net</span> is a free service where you
                                        can quickly generate random and secure passwords, words, texts or numbers.</p>
                                    <p>In addition, thanks to the API service we offer, you can use it quickly in your
                                        personal or freelance projects. In order to use our API services, you can create
                                        an account from the <a href="#" class="has-text-info">link here</a> and start
                                        using it immediately.</p>
                                    <p>randomator.net is an open source project. Anyone who wishes can use, sell or
                                        contribute to the development of this project. If you want to contribute to us,
                                        check out our <a href="#" class="has-text-info">github repo</a> :)</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>