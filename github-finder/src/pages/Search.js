import React, { useState } from "react";
import "./index.css";
import { searchUser } from "../api";
import SearchList from "../components/SearchList";

function Search() {
   const [inputVal, setInputVal] = useState("");
   const [searchList, setSearchList] = useState([]);
   const buttonDisabled = inputVal === "";

   const [showNotFound, setShowNotFound] = useState(false);

   function handleSearch() {
      searchUser(inputVal).then((res) => {
         const resList = res.data?.items || [];

         const isNotFound = resList.length === 0;
         setShowNotFound(isNotFound);
         if (!isNotFound) {
            setSearchList(res.data?.items || []);
         }
      });
   }
   return (
      <div className="container">
         <h1>Github Finder</h1>
         <div className="input-container">
            <input onChange={(e) => setInputVal(e.target.value)} value={inputVal} type="text" placeholder="Profile" />
            <button onClick={handleSearch} disabled={buttonDisabled}>
               SEARCH
            </button>
         </div>
         {showNotFound && <div className="not-found">User not found. Please try again</div>}

         <SearchList searchList={searchList} />
      </div>
   );
}

export default Search;
