import React, { useCallback, useState } from 'react';
export default ()=>{
    const [count, setCount] = useState(0);
    let callback = useCallback(()=>{
        console.log('callback')
        return count;
    })
    return(
        <div>
            <ul>useCallback
                <li>作用：避免组件重复渲染，提高性能（和usememo类似），可以控制组件什么时候更新</li>
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <span>count状态-------{count}</span>
            <span>callback-------{callback()}</span>
            <button onClick={()=>{
                setCount(count+1)
            }}>change count</button>
        </div>
    )
}
