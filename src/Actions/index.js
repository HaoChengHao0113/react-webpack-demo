const add = (num) =>{
    return {
        type: 'add',
        value: num+1
    }
}
const minus = (num) =>{
    return {
        type: 'minus',
        value: num-1
    }
}
export {
    add,
    minus
}