<template>
    <div>
        <hr>
        <li>
            <strong>Всего контактов: {{countContacts}} |
            Найдено: {{getCountContactsSerche}}
            </strong>
        </li>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters({
                countContacts: 'getCountContacts',
                getCountContactsSerche: 'getCountContactsSerche'
            })
        },
        methods: {}
    }
</script>

<style scoped>
    li {
        list-style: none;
    }
</style>