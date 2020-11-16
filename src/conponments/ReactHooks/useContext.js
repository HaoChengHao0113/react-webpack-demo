import React, { useContext, useState } from 'react';
import { Button } from "antd";
import MyContext from './createContext';
const themes = {
    light: {
        foreground: '#c29090',
        background: '#eeeeee',
        isUse: false,
    },
    dark: {
        foreground: '#eeeeee',
        background: '#c29090',
        isUse: true,
    }
}
function ChildButton(props){
    let theme = useContext(MyContext)
    console.log('value', theme)
    return (
        <div>
            <Button onClick={props.onClick} style={{backgroundColor: theme.dark.isUse? theme.dark.background: theme.light.background}}>changeThemes</Button>
        </div>
    )
}
export default function (){
    const [theme1, changeTheme] = useState(themes)
    return(
        <MyContext.Provider value={theme1}>
            <ChildButton
                onClick={()=>{
                    changeTheme(()=>{
                        theme1.dark.isUse = !theme1.dark.isUse
                        return {...theme1}
                    })
            }}
            >
            </ChildButton>
            <Button style={{backgroundColor: theme1.dark.isUse? theme1.dark.background: theme1.light.background}}>11111111</Button>
        </MyContext.Provider>
    )
}