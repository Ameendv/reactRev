import React, {useRef} from 'react'

function UseRef(){
    const inputRef = useRef(null)

    const focusInput= ()=>{
        inputRef.current.focus()
    }

    return (
        <div>
            <input type='text' ref={inputRef} />
            <button onClick={focusInput}>yes</button>
        </div>
    )
}

export default UseRef