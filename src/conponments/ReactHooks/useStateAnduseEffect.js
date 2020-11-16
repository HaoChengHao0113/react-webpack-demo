import React, { useState, useEffect } from 'react';
import { Button } from "antd";

export default function (){
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    useEffect(()=>{
        console.log('监听到值变化了')
        return () =>{
            console.log('conponmentWillUnmount')
        }
    },[num])
    return(
        <div>
            <span>useState: count--{count}</span>
            <Button
                onClick={()=>{
                    setCount(count+1)
                }}
            >
                点我加1
            </Button>
            <br/>
            <span>useState: num:{num}</span>
            <Button
                onClick={()=>{
                    setNum(num+1)
                }}
            >
                点我+count---
            </Button>
        </div>
    )
}