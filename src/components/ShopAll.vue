<template>
    <div class="block is-size-1 has-text-centered">
        All Item
    </div>

    <div class="tile is-ancestor">
        <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">Hello World</p>
                <p class="subtitle">What is up?</p>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">Foo</p>
                <p class="subtitle">Bar</p>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">Third column</p>
                <p class="subtitle">With some content</p>
                <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
                        tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUpPage',
    props: {
        msg: String
    }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>