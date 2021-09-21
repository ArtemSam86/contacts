<template>
    <div>
        <input type="search"
               class="input-foot"
               placeholder="Найти контакт"
               v-model="inputDataInSercher"
               v-on:input="serchCont"
        >
        <!--<p>{{inputDataInSercher}}</p>-->
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                inputDataInSercher: ''
            }
        },
        computed: {
            ...mapGetters({
                contacts: 'getListContacts',

            })
        },
        methods: {
            serchCont() {
                //console.log(this.inputDataInSercher.trim())
                let val = this.inputDataInSercher.trim()


                this.$store.dispatch('sercheContact', val)

            }

        },
        created() {

        }
    }
</script>

<style scoped>
    .input-foot {
        margin-right: 5px;
        margin-bottom: 5px;
        margin-top: 5px;
        outline: none;
        border: 2px solid #ccc;
        display: block;
        width: 100%;
        color: #2c3e50;
        padding: 0.5rem 1.5rem;
        border-radius: 3px;
        font-size: 1rem;
    }
</style>
