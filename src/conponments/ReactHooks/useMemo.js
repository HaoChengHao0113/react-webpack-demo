import React, { useMemo, useState } from 'react';
import { Button } from 'antd';
export default ()=>{
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    let res = useMemo(()=>{
        return {count, num}
    },[num])
    return(
        <div>
            <span>有缓存问题-------count:---{res.count}----num:---{res.num}</span>
            <Button onClick={()=>{
                setCount(count+1)
            }}>count+1</Button>
            <Button onClick={()=>{
                setNum(num+1)
            }}>num+1</Button>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ul>useMemo
                <li>shouldConponmentUpdate类似作用,在渲染过程中避免重复渲染的问题， 当状态或父组件传来的属性发生变化时，更新组件</li>
                <li>useMemo就是用的`memoization`来提高性能的</li>
                <li>memoization就是js的一种缓存技术</li>
                <li>useMemo和useEffect执行时间不同， useEffect是conponmentDidmount后执行的 usememo是在渲染时执行的  useMemo->useEffect</li>
            </ul>
        </div>
    )
}