<template>
    <div class="container">
        <div class="box has-background-warning">
            <p>Card Number</p>
            <input class="input" type="cardnumber">
            <p>Name Holder</p>
            <input class="input" type="nameholder">
            <div class="comlumns">
                <p>Expire Date</p>
                <div class="column">
                    <input class="input" type="mountexpire"><br><br>
                </div>
                <div class="column">
                    <input class="input" type="year">
                </div>
            </div>
            <p>CVC</p>
            <input class="input" type="cvc">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentPage',
    props: {
        msg: String
    }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>