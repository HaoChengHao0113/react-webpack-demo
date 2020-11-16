const initState= {
    value: 0,
}
const reducer = (state=initState,action) =>{
    switch (action.type){
        case "musicList":return {...state, ...action}
        default: return {...state, ...action}
    }
    // return Object.assign({},state,action);

}
export default reducer