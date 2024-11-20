function copy(obj) {
    if (obj) {
        let necessarys = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const necessaryCopy = obj[key].bind();
                necessarys.push({necessaryCopy, key})
            }
        }
        const stringObj = JSON.parse(JSON.stringify(obj));
        for (const neces of necessarys) {
            stringObj[neces.key] = neces.necessaryCopy;
        }
        console.log(stringObj)
        return stringObj;
    }
    throw new Error('Attention ERROR')
}
copy({id:8, name:'petya', func() {}});