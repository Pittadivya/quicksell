
export function group_by(raw, field){
    //return a map of field name (status) and array of that field

    const fieldMap = new Map()

    raw.forEach(e => {
        const f = e[field]

        if (fieldMap.has(f)){
            fieldMap.get(f).push(e)
        }
        else {
            fieldMap.set(f, [e])
        }
    })

    return  new Map([...fieldMap.entries()].sort());
}
