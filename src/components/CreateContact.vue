<template>
    <div class="card">
        <h1>{{title_h_CreateContact}}</h1>
        <div>
            <input type="text" placeholder="Поле" class="input-cec" v-model="f">
            <input type="text" placeholder="Значение" class="input-cec" v-model="v">
            <button class="btn" v-bind:disabled="checkValAdd" v-on:click.prevent="addCombainedFieldValue()">
                Добавить поля
            </button>
        </div>

        <div>
            <hr>
            <ul class="list">
                <li class="list-item-cec" v-for="(fd, i) in Object.keys(combainedFieldValue)" v-bind:key="i">
                    <input type="text" placeholder="Поле" class="input-cec" v-bind:value="fd">
                    <input type="text" placeholder="Значение" class="input-cec" v-bind:value="combainedFieldValue[fd]">
                    <button class="btn danger" v-on:click="removeFields(fd)">X</button>
                </li>
            </ul>
            <hr>
        </div>
        <button class="btn" v-bind:disabled="checkValSave" v-on:click.prevent="saveNewContact()">Сохранить</button>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                f: '',
                v: '',
            }
        },
        computed: {
            ...mapGetters({
                //contacts: 'getListContacts',
                combainedFieldValue: 'getCombainedFieldValue',
                title_h_CreateContact: 'getTitleCreateContact'

            }),
            checkValAdd: function () {
                if (this.f !== '' && this.v !== '') {
                    return false
                }
                return true;

                //return this.f != '' && this.v != '' ? false : true;
            },
            checkValSave: function () {
                if (Object.keys(this.combainedFieldValue).length !== 0) {
                    return false;
                }
                return true;
            }
        },
        methods: {
            saveNewContact() {
                this.$store.dispatch('saveNewContact')
                this.$router.push({name: 'Home'})
            },
            addCombainedFieldValue() {
                let combainedFieldValue = {}
                combainedFieldValue[this.f] = this.v;
                this.$store.dispatch('addCombainedFieldValue', combainedFieldValue)
                this.f = ''
                this.v = ''
            },
            removeFields(keys) {
                this.$store.dispatch('removeFields', keys)
            }
        },

        forceRerender() {
            this.componentKey += 1;
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
    //display: block; //width: 100%; color: #2c3e50; padding: 0.5rem 1.5rem; border-radius: 3px; font-size: 1rem;
    }
</style>