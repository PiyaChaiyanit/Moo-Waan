<template>
    <div class="container">
        <p class="is-size-1">Edit Item</p>
        <div class="box has-background-primary">
            <p class="is-size-5">Select Item</p>
            <input class="input" type="select_use"><br><br>
            <input class="input is-rounded is-large" type="select_item"><br><br>
            <div class="columns">
                <div class="column is-half">
                    <p>
                        Amount:
                    </p>
                    <input class="input" type="text">
                </div>
                <div class="column is-half">
                    <p>Price:</p>
                    <input class="input" type="text">
                </div>
            </div>
            <button class="button is-rounded is-warning">Update</button>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'EditItemPage',
    props: {
        msg: String
    }
}
</script>
    
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
    