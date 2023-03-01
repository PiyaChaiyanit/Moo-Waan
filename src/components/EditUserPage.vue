<template>
    <div class="block is-size-1">
        Edit User
        <div class="container">
                <div class="box is-size-6 has-background-info">
                    SELECT USER
                    <div class="column">
                        <input class="input is-rounded mx-1" type="text"><br><br>
                        <input class="input is-large is-rounded mx-1" type="text"><br><br>
                        <div class="button is-rounded">
                            DELETE
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'EditUserPage',
    props: {
        msg: String
    }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>