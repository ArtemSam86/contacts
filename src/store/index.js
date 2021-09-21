import {createStore} from "vuex";

const getUuid = require('uuid-by-string')
import {getContacts, getContactsSerche, deleteContacts, saveNewContact, saveContact} from "./contactsMass";

export default createStore({
    state: {
        counter_Create_Contact: 0,
        titleContact: 'КОНТАКТЫ',
        title_h_CreateContact: 'Создать новый контакт',
        newObjContact: [],
        combainedFieldValue: {},
        combainedNewObj: {},
        field_s: [],
        value_s: [],
        inputTxt: '',
        idContact: '',
        contactsSerche: [],
        contacts: [],
        countContacts: 0,
        kMass: [],
        vMass: [],
        strConcatkv: '',
        inputText: '',
        contactsSercheLength: 0
    },
    getters: {
        get_counter_Create_Contact: state => {
            return state.counter_Create_Contact += 1
        },
        getInputText: state => {
            return state.inputText
        },
        getIdContact: state => {
            return state.idContact
        },
        getCombainedFieldValue: state => {
            return state.combainedFieldValue
        },
        getCountContacts: state => {
            return state.contacts.length
        },
        getCountContactsSerche: state => {
            return state.contactsSercheLength;
        },
        getTitleContact: state => {
            return state.titleContact;
        },
        getTitleCreateContact: state => {
            return state.title_h_CreateContact;
        },
        getListContacts: state => {
            debugger
            console.log('Метод: getListContacts')
            //console.log(getContacts(), getContactsSerche())
            return state.contacts = getContacts()
        },
        getListContactsSerche: state => {
            return state.contactsSerche
        }
    },
    mutations: {
        SAVE_CONTACT(state, idContact) {

            state.contactsSercheLength = 0
            state.contactsSerche = []
            state.inputText = ''
            saveContact(state.combainedFieldValue, idContact);


        },
        SAVE_NEW_CONTACT(state) {

            saveNewContact(state.combainedFieldValue);

        },
        REMOVE_CONTACT(state, idContact) {
            if (confirm('Вы уверены, что хотите удалить контакт?')) {


                // const index = state.contacts.findIndex(n => n.id === idContact);
                // if (index !== -1) {
                //     state.contacts.splice(index, 1);
                // }


                // state.contacts = []
                // console.log(state.contacts)
                // state.contacts = deleteContacts(idContact);
                //
                // console.log(state.contacts)

                state.contacts.splice(0, 1)
                if (state.contactsSerche.mass.length !== 0) {
                    state.contactsSerche.mass.splice(idContact, 1)
                    if (state.contactsSerche.mass.length === 0) {
                        state.contactsSerche = {
                            mass: [],
                            unknownСhar: false,
                            lastContact: true,
                            NotStr: 'С введенными данными контактов больше нет!'
                        }
                    }
                }
            }
        },
        ADD_COMBAINED_FIELDS_VALUE(state, combainedFieldValue) {
            //console.log(Object.keys(fieldValue))
            //console.log(Object.values(fieldValue))
            //state.combainedFieldValue = {}
            for (let i = 0; i < Object.keys(combainedFieldValue).length; i++) {
                state.combainedFieldValue[Object.keys(combainedFieldValue)[i]] = Object.values(combainedFieldValue)[i]
            }
        },
        REMOVE_FIELDS(state, keys) {
            delete state.combainedFieldValue[keys]
        },
        SERCHE_CONTACT(state, inputText) {
            state.inputText = inputText
            state.contactsSerche = getContactsSerche(state.contacts, inputText)
            if (inputText === '') {
                state.contactsSercheLength = 0
            } else {
                state.contactsSercheLength = state.contactsSerche.length
            }
        },
        EDIT_CONTACT(state, id) {

            const contactOBJ = state.contacts.find(item => item.id === id)

            if (contactOBJ !== undefined) {
                //Если метод find не undefined, то контакт получен
                //и мы этот контакт добавляем методом push в новый массив,
                //которы потом вернем для отображения в компоненте
                state.combainedFieldValue = contactOBJ.data
                state.idContact = id
            }
        },
        FIELD_VALUE_OBJECT_CHANGE(state, fieldValueObj_Change) {
            state.combainedFieldValue = fieldValueObj_Change;
        }
    },
    actions: {
        async fieldValueObjChange({commit}, fieldValueObj_Change) {
            commit('FIELD_VALUE_OBJECT_CHANGE', fieldValueObj_Change)
        },
        async sercheContact({commit}, inputText) {
            commit('SERCHE_CONTACT', inputText)
        },
        async saveContact({commit}, idContact) {
            commit('SAVE_CONTACT', idContact)
        },
        async saveNewContact({commit}) {
            commit('SAVE_NEW_CONTACT')
        },
        async removeFields({commit}, keys) {
            commit('REMOVE_FIELDS', keys)
        },
        async addCombainedFieldValue({commit}, combainedFieldValue) {
            commit('ADD_COMBAINED_FIELDS_VALUE', combainedFieldValue)
        },
        async removeContact({commit}, idContact) {
            commit('REMOVE_CONTACT', idContact)
        },
        async editContact({commit}, id) {
            commit('EDIT_CONTACT', id)
        }
    },
    modules: {},
});
