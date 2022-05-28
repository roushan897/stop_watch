import React,{ useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(5);
  const [totalPageCount, setTotalPageCount] = useState(0);

  // const pageCount = limit*page;
  // console.log(pageCount);


//?_page=${page}&_limit=5
  useEffect(() =>{
    const getTodo = async () => {
      let res = await axios.get(`http://localhost:8000/todos?_page=${page}&_limit=${limit}`);
      setTodos(res.data);
      setTotalCount(Number(res.headers["x-total-count"]));
      // console.log(res);
    };
    getTodo();
  }, [page,limit, totalPageCount])

  return (

    <div>
      <div>
        
        {/* ${totalCount-totalPageCount} */}
        <p>{`Page: ${page} of ${totalCount-page*limit}`}</p>
        <button disabled={page<=1} onClick={()=>setPage(page-1)}> {"<"} </button>
        <select onChange={(e)=>setLimit(Number(e.target.value))} >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>

        <button disabled={totalCount <= page*limit} onClick={()=>setPage(page+1)}> {">"} </button>
      </div>

      {todos.map((todo)=>{
        return <div key={todo.id}> {todo.value} </div>
      })}      
    </div>
   
  );
}

export default App;
