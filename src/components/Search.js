import React ,{useState}from 'react'
import '../css/Search.css'
function Search({handleclick,searchlol,searchlol1}) {
    
    const [termFromSearchBar,settermFromSearchBar]=useState("");
    return (
        <div className="search-container">
            <img alt="log" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"></img>
            <input type="text" onChange={e=>{settermFromSearchBar(e.target.value)}} value={termFromSearchBar}></input>
            <button onClick={()=>{
                searchlol()
                searchlol1()
                handleclick(termFromSearchBar)
                
                }}  >Search</button>
        </div>
    )
}

export default Search
