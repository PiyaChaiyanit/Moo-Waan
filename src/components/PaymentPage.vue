<template>
    <div class="container">
        <div class="box has-background-warning">
            <p>Card Number</p>
            <input class="input" type="number" v-model="card" placeholder="1234567890123456">
            <p>Name Holder</p>
            <input class="input" type="text" v-model="name" placeholder="name">
            <div class="comlumns">
                <p>Expire Date</p>
                <div class="column">
                    <input class="input" type="text" v-model="expire" placeholder="MM/YY"><br><br>
                </div>
                <!-- <div class="column">
                    <input class="input" type="number">
                </div> -->
            </div>
            <p>CVC</p>
            <input class="input" type="number" v-model="cvc" placeholder="000">


        </div>
        <br>
    </div>
    <div class="block">
        <button class="button is-rounded is-primary" @click="checkPay">
            Submit
        </button>
    </div>
</template>

<script>
export default {
    name: 'PaymentPage',
    props: {
        msg: String
    },
    data() {
        return {
            card: '',
            name: '',
            expire: '',
            cvc: ''
        }
    },
    methods: {
        checkPay() {
            if (this.card === "" || this.name === "" || this.expire === "" || this.cvc === "" || this.password === "") {
                alert("Please input every box")
            }
            else {
                alert("Success")
                this.$router.push("/")
            }
        }
    }
}

</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>