const valObjToString = (newObj, countValueObj) => {
    let str = '';
    const obj = Object.values(newObj)

    if(obj.length < countValueObj) {
        for(let i = 0; i < obj.length; i++) {
            str += obj[i] + ' '
        }
    } else {
        for(let i = 0; i < countValueObj; i++) {
            str += obj[i] + ' '
        }
    }

    return str.trim();
}

export default valObjToString