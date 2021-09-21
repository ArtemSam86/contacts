<template>
    <div class="card">
        <h1>{{titleContact}}</h1>
        <button type="button" class="btn"
                v-on:click="createNewContact()">Создать контакт
        </button>
        <SerContact/>
        <ListContacts/>
        <Footer/>
    </div>
</template>

<script>
    import Footer from "./Footer";
    import SerContact from "./SerContact";
    import ListContacts from "./ListContacts";
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                componentKey: 0
            }
        },
        components: {
            Footer,
            SerContact,
            ListContacts,

        },
        methods: {
            createNewContact() {
                this.$router.push({ name: 'CreateContact' })
                //const clearGetFieldsVal = {}
                //this.$store.dispatch('clear_getFieldsVal', clearGetFieldsVal)
            },
        },
        created() {
        },
        computed: {
            ...mapGetters({
                titleContact: 'getTitleContact'
            })

        },
        forceRerender() {
            this.componentKey += 1;
        }
    }
</script>

<style>
</style>
