import React, { useImperativeHandle, forwardRef, useRef, useState } from 'react';
const ForwardRef = forwardRef((props, ref)=>{
    return(
        <div>
            <span ref={ref}>123</span>
        </div>
    )
})

const Imperative =forwardRef((props, refs)=>{
    const inputRef = useRef();
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    useImperativeHandle(refs,()=>({
        name: 'zhangsan',
        focus(){
            inputRef.current.focus();
        },
        count
    }),[num])
    return(
        <div>
            <input type="text" ref={inputRef}/>
            <span>count:{count}</span>
            <br/>
            <button onClick={()=>{
                setCount(count+1)
            }}>count++</button>
            <br/>
            <span>num:{num}</span>
            <br/>
            <button onClick={()=>{
                setNum(num+1)
            }}>num++</button>
        </div>
    )
})
export default ()=>{
    const el = useRef(null) // 获取子组件的dom
    const Imref = useRef(null);
    return (
        <div>
            <span>useImperativeHandle</span>
            <ForwardRef ref={el}/>
            <button onClick={()=>{
                console.log(el)
            }}>获取子组件dom</button>

            <Imperative ref={Imref}/>
            <button onClick={()=>{
                console.log(Imref.current)
                Imref.current.focus()
            }}>获取子组件自定义方法或者属性</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ul>
                <li>
                  <span>useImperativeHandle可以让你在使用ref时自定义暴露给父组件的实例值。在大多数情况下。应当避免使用ref这样的命令时代码，useImperativeHandle应当与forwardRef一起</span>
                </li>
                <li>useImperativeHandle(ref(传递来的),()=>{},[])</li>
            </ul>
        </div>
    )
}