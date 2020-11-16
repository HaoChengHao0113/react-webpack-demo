import React from 'react';
import { Card } from "antd";

export default function (){
    let arr = ['1', 2, 3,'dad'];
    let str = 'dsadasdsa';
    let num = 121321;
    let und;
    let nul = null;
    console.log(arr instanceof Array)
    console.log(new String(str) instanceof String)
    console.log(num instanceof Number)

    return (
        <div>
            <Card>
                <span>基本数据类型有哪些?</span>
                <ul>
                    <li>String</li>
                    <li>Number</li>
                    <li>Boolean</li>
                    <li>Null</li>
                    <li>undefined</li>
                    <li>Symbol</li>
                </ul>
                <br/>
                <span>引用数据类型</span>
                <ul>
                    <li>Object</li>
                </ul>
                <br/>
                <span>判断数据类型的方法</span>
                <ul>
                    <li>1、typeof</li>
                    <ul>
                    let arr = ['1', 2, 3,'dad']; console.log(typeof arr) // object
                        <br/>
                    let str = 'dsadasdsa';  console.log(typeof str) //String
                        <br/>
                    let num = 121321; console.log(typeof num) // Number
                        <br/>
                    let und;  console.log(typeof und) // undefined
                        <br/>
                    let nul = null; console.log(typeof nul) //object
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <li>instanceof  等于检查原型链</li>
                    let arr = ['1', 2, 3,'dad']; console.log(arr instanceof Array) // true
                     <br/>
                    let str = 'dsadasdsa';  console.log(str instanceof String) //false 检查原型链会找到 undefined
                    <br/>
                    let num = 121321; console.log(num instanceof Number) // false
                    <br/>
                    <li>constructor</li>
                    <li>toString ---- (Object.prototype.toString.call('变量'))</li>
                </ul>
            </Card>
        </div>
    )
}