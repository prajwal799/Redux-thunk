import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from "./api";

const GithubInput = () => {
    const [search , setSearch] = useState("");
    const [page , setPage] = useState(1);
    
     const dispatch = useDispatch();
      const handleSearch = ()  => {
          dispatch(fetchRequest(search,page))
      }
       
       const handlePageChangeNext = () => {
           setPage(page+1);
            dispatch(fetchRequest(search,page))
       }
       const handlePageChangePrev = () => {
        setPage(page-1);
         dispatch(fetchRequest(search,page))
    }

    return (
       <>
        <div>
             <input placeholder="search user name" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
        </div>
        <button onClick={handlePageChangePrev}>prev</button>
        <button onClick={handlePageChangeNext}>next</button>
         
        </>
    )
}
export default GithubInput;