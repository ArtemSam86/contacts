const getUuid = require('uuid-by-string')
const contacts = [
    {
        id: getUuid('Петр-Петрович-Петров'),
        data: {
            'Имя': 'Петр',
            'Отчество': 'Петрович',
            'Фамилия': 'Петров'
        }
    },
    {
        id: getUuid('Иван-Иванович-Иванов'),
        data: {
            "Имя": "Иван",
            "Отчество": "Иванович",
            "Фамилия": "Иванов",
            "Телефон": "89261306901",
            "Email": "mail@mail.ru"
        }
    },
    {
        id: getUuid('Сидр-Сидорович-Сидоров'),
        data: {
            "Имя": "Сидр",
            "Отчество": "Сидорович",
            "Фамилия": "Сидоров",
            "Телефон": "89261306901",
            "Email": "mail@mail.ru"
        }
    }
]


const deleteContacts = (idContact) => {
    const index = contacts.findIndex(n => n.id === idContact);
    if (index !== -1) {
        contacts.splice(index, 1);
        return contacts
    }
}

const saveContact = (newContactObject, id) => {
    //const valStr = Object.values(newContactObject).join('-')
    const removeContObj = {
        id: id,
        data: newContactObject
    }

    const contactOBJ = contacts.find(item => item.id === removeContObj.id)

    const contactOBJIndex = contacts.findIndex(item => item.id === removeContObj.id)

    contacts.splice(contactOBJIndex, 1)

    contacts.push(removeContObj)


}

const saveNewContact = (newContactObject) => {
    const valStr = Object.values(newContactObject).join('-')
    const newContObj = {
        id: getUuid(valStr),
        data: newContactObject
    }

    const contactOBJ = contacts.find(item => item.id === newContObj.id)
    if (contactOBJ === undefined) {
        contacts.push(newContObj)
    }

}


const getContacts = (id = '') => {

    if (id === '') {
        return contacts
    }

    const contactOBJ = contacts.find(item => item.id === id)

    if (contactOBJ === undefined) {
        return 'Контакт с id: [' + id + '] не найден!'
    }

    return contactOBJ;


}

const findContact = (id = '') => {

    if (id === '') {
        return -1;
    }

    const contactOBJ = contacts.find(item => item.id === id)

    if (contactOBJ === undefined) {
        return -1;
    }

    return contactOBJ.data;


}

const getContactsSerche = (mass = [], inputText = '') => {
    const newMass = [];
    let kMass = [];
    let vMass = [];
    let strConcatValue = '';
    let combainedNewObj = {};

    //Запуск цикла для поиска контакта в котором есть введенные символы
    for (let i = 0; i < mass.length; i++) {
        kMass = Object.keys(mass[i].data)
        vMass = Object.values(mass[i].data)
        //Получаем строку из контакта i-го и скрепляем ее для поиска в ней введенных символов
        //strConcatValue = kMass.join(' ').toLowerCase() + ' ' + vMass.join(' ').toLowerCase();
        strConcatValue = vMass.join(' ');
        combainedNewObj = {};
        for (let j = 0; j < kMass.length; j++) {
            combainedNewObj[kMass[j]] = vMass[j];

        }
        //Проверка введенного строки на наличие введенного символа
        if (strConcatValue.toLowerCase().search(inputText) !== -1 || strConcatValue.toUpperCase().search(inputText) !== -1) {
            //Если символ найден и он не пустой
            //получаем i-й контакт в котором найден символ в массиве контактов и возвращаем его в contactOBJ
            const contactOBJ = contacts.find(item => item.id === mass[i].id)
            //Проверяем что вернул метод find
            if (contactOBJ !== undefined) {
                //Если метод find не undefined, то контакт получен
                //и мы этот контакт добавляем методом push в новый массив,
                //которы потом вернем для отображения в компоненте
                newMass.push(contactOBJ)
            }
            //Если контакт не получен то ни чего не делаем


            //Если введенный символ не найден в строке
            //значит нужно
        }/* else if (newMass.find(item => item.id === mass[i].id !== undefined)) {
            newMass.splice(newMass.indexOf(combainedNewObj, 0), 1)
        }*/


    }

    // if(newMass.length > 0) {
    //     return newMass
    // }

    return newMass


}

export
{
    getContacts as getContacts,
    getContactsSerche as getContactsSerche,
    deleteContacts as deleteContacts,
    saveNewContact as saveNewContact,
    saveContact as saveContact
}