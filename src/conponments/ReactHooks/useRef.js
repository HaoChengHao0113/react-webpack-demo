import React, { useRef } from 'react';
import { Input, Button } from "antd";

export default function (){
    const inputText = useRef(null)
    return(
        <div>
            <Input ref={inputText}/>
            <Button onClick={()=>{
                inputText.current.focus()
            }}>useRef: 获取输入框的值</Button>
        </div>
    )
}
