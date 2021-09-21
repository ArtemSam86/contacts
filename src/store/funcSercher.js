const funcSercher = (mass, inputText) => {
    let inTxt = inputText.toLowerCase();
    const newMass = [];
    let kMass = [];
    let vMass = [];
    let strConcatkv = '';
    let combainedNewObj = {};
    let unkСh = false;
    let lastContact = false;
    let NotStr = '';

    for (let i = 0; i < mass.length; i++) {
        kMass = Object.keys(mass[i].data)
        vMass = Object.values(mass[i].data)
        strConcatkv = kMass.join(' ').toLowerCase() + ' ' + vMass.join(' ').toLowerCase();
        combainedNewObj = {};
        for (let j = 0; j < kMass.length; j++) {
            combainedNewObj[kMass[j]] = vMass[j];

        }
        if (strConcatkv.search(inTxt) !== -1 && inTxt !== '') {
            if (newMass.indexOf(combainedNewObj, 0) === -1) {
                newMass.push(combainedNewObj)
            }
        } else if (newMass.indexOf(combainedNewObj, 0) !== -1) {
            newMass.splice(newMass.indexOf(combainedNewObj, 0), 1)
        }


    }
    if (newMass.length === 0 && inTxt !== '') {

        unkСh = true;


    }

    return {mass: newMass, unknownСhar: unkСh, lastContact: lastContact, NotStr: NotStr}
};

export default funcSercher