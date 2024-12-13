import {useMemo, useState} from 'react'

function UseMemo(){
    const [searchTerm, setSearchTerm] = useState("")
    const [count, setCount]= useState(0)

    const items = ["Apple", "Banana", "Cherry", "Date", "Grape", "Lemon", "Mango"];

    const filteredItems = useMemo(()=>{
        console.log('filtering items', items)
        return items.filter(item=>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        )
    },[searchTerm])

    return(
        <div>
            <h1>Use memo sample</h1>

            <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>Re render count:{count}</button>
            <ul>
                {
                    filteredItems.map((data, index)=>{
                        return (
                           <li key={index}>{data}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default UseMemo