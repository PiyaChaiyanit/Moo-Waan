<template>
    <div class="container">
        <div class="notification is-warning">
            <p>Card Number</p>
            <input class="input" type="cardnumber">
            <p>Name Holder</p>
            <input class="input" type="nameholder">
            <p>Expire Date</p>
            <input class="input" type="mountexpire">
            <input class="input" type="year">
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