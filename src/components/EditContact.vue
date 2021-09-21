<template>
    <div class="card">
        <h1>Изменить контакт</h1>
        <div>
            <input type="text" placeholder="Поле" class="input-cec" v-model="f">
            <input type="text" placeholder="Значение" class="input-cec" v-model="v">
            <button class="btn" v-bind:disabled="checkValAdd" v-on:click.prevent="addFieldsVal()">Добавить поля</button>
        </div>


        <hr>

        <ul class="list">
            <li class="list-item-cec" v-for="(fd, i) in Object.keys(getCombainedFieldValue)" v-bind:key="i">
                <input type="text"
                       placeholder="Поле"
                       class="input-cec"
                       v-bind:value="fd"
                       v-on:focusin="getFieldsValInput_focus(fd, getCombainedFieldValue)"
                       v-on:input="getFieldsValInput_change"
                       v-on:mouseout="zeroInputKey"
                >
                <input type="text"
                       placeholder="Значение"
                       class="input-cec"
                       v-bind:value="getCombainedFieldValue[fd]"
                       v-on:focusin="getFieldsValInput_focus(getCombainedFieldValue[fd], getCombainedFieldValue)"
                       v-on:input="getFieldsValInput_change"
                >
                <button class="btn danger" v-on:click="removeFields(fd)">X</button>
            </li>
        </ul>
        <hr>
        <button class="btn" v-bind:disabled="checkValSave" v-on:click="saveContact(idContact)">Сохранить</button>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                f: '',
                v: '',
                InputKey: '',
                fieldValue_Focus: '',
                fieldValueObj_Focus: {},
                fieldValueObj_Focus_Change: {},
                fieldValue_Change: '',
            }
        },
        computed: {
            ...mapGetters({
                contacts: 'getListContacts',
                getCombainedFieldValue: 'getCombainedFieldValue',
                idContact: 'getIdContact'

            }),
            checkValAdd: function () {
                //console.log('checkVal')
                return this.f != '' && this.v != '' ? false : true;
            },
            checkValSave: function () {
                // if(this.InputKey === '') {
                //     return true
                // }
                // return false
            }
        },
        methods: {
            getFieldsValInput_focus(fieldValue, addCombainedFieldValue) {
                this.fieldValue_Focus = fieldValue;
                this.fieldValueObj_Focus = addCombainedFieldValue
            },
            getFieldsValInput_change: function (event) {
                //this.fieldValue_Focus = event.target.value.trim();
                let fieldValueObj_Change = {}
                let fldValFocus = this.fieldValue_Focus
                let eventVal = event.target.value
                let massK = []
                let massV = []
                massK = Object.keys(this.fieldValueObj_Focus)
                massV = Object.values(this.fieldValueObj_Focus)

                //console.log(fldValFocus)

                massK.forEach(function (item, index) {
                    if (fldValFocus === item) {
                        massK[index] = eventVal
                        //console.log(item, fldValFocus)
                    }
                })

                massV.forEach(function (item, index) {
                    if (fldValFocus === item) {
                        massV[index] = eventVal
                        //console.log(item, fldValFocus)
                    }
                })

                for (let i = 0; i < massV.length; i++) {
                    fieldValueObj_Change[massK[i]] = massV[i];
                }

                this.fieldValueObj_Focus_Change = fieldValueObj_Change

                this.$store.dispatch('fieldValueObjChange', this.fieldValueObj_Focus_Change)

                //console.log(this.fieldValueObj_Focus_Change)

                // console.log(massK)
                // console.log(massV)

                //console.log(this.fieldValueObj_Focus)
            },
            zeroInputKey: function (event) {
                // console.log(this.InputKey)
                // this.InputKey = event.target.value
                // console.log(this.InputKey)
            },
            // getFieldsValInput_change() {
            //     console.log('getFieldsValInput_change')
            //     //console.log(document.getElementById(this.fieldValue_Focus).value)
            // },
            saveContact(idContact) {

                console.log(idContact)
                this.$store.dispatch('saveContact', idContact)
                this.$router.push({name: 'Home'})
            },
            addFieldsVal() {
                const fieldValue = {}
                fieldValue[this.f] = this.v;
                this.$store.dispatch('addCombainedFieldValue', fieldValue)
                this.f = ''
                this.v = ''
            },
            removeFields(index) {
                this.$store.dispatch('removeFields', index)
            }
        },
        created() {
            //console.log(this.getEditContactANDindex)
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