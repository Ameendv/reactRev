import {useState, useEffect} from 'react'

function ApiCall(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(data, 'sdf')

    useEffect(()=>{

        try {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
              setData(json.slice(0, 5)); // Fetch first 5 posts
              setLoading(false);
            });
        } catch (error) {
            console.log(error)
        }

        
    },[])

    return (
        <div style={{ padding: "20px" }}>
          <h1>Posts</h1>
          {loading?<p>Loading...</p>:
          
          <ul>
                    {data.map(values => {
                        return (
                            <li key={values.id}>
                                <h3>{values.title}</h3>
                                <p>{values.body}</p>
                            </li>
                        )
                    })}
          </ul>
          }
        </div>
      );

}

export default ApiCall