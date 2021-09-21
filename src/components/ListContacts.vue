<template>
    <div>
        <ul class="list"
            v-if="contactsS.length === 0 && inputText === ''">
            <li class="list-item-cec"
                v-for="(cont, i) in contacts"
                v-bind:key="cont.id"
            >
                <span class="input-cec">

                    {{valObjToString(cont.data, 4)}}</span>
                <button class="btn danger" v-on:click="removeCont(cont.id)">X</button>
                <button class="btn primary" v-on:click="editContacts(cont.id)">Изменить</button>
            </li>
        </ul>
        <ul class="list" v-else-if="contactsS.length > 0">
            <li class="list-item-cec"
                v-for="(cont, i) in contactsS"
                v-bind:key="cont.id"
            >
                <span class="input-cec">
                    {{valObjToString(cont.data, 4)}}</span>
                <button class="btn danger" v-on:click="removeCont(cont.id)">X</button>
                <button class="btn primary" v-on:click="editContacts(cont.id)">Изменить</button>
            </li>
        </ul>
        <h2 v-show="contactsS.length === 0 & contacts.length === 0">Добавьте новый контакт</h2>
        <h2 v-show="contactsS.length <= 0 && inputText !== ''">С введенными данными контактов не найдено!</h2>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";
    import valObjToString from "../func/valObjToString";

    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters({
                contacts: 'getListContacts',
                contactsS: 'getListContactsSerche',
                inputText: 'getInputText'
            }),
        },
        methods: {
            editContacts (id) {
                this.$store.dispatch('editContact', id)
                this.$router.push({
                    name: 'EditContact',
                    params: {id: id}})
            },
            removeCont(idContact) {
                this.$store.dispatch('removeContact', idContact)
            },
            valObjToString: valObjToString
        },
        components: {
        },
        created() {

        }
    }
</script>
<style scoped>
    .input-cec {
        margin-right: 5px;
        margin-bottom: 5px;
        outline: none;
        border: 2px solid #ccc;
        display: block;
        width: 100%;
        color: black;
        padding: 0.5rem 1.5rem;
        border-radius: 3px;
        font-size: 1rem;
        background-color: darkgray;
    }
</style>