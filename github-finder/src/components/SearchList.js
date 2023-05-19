import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function SearchList(props) {
   return (
      <ul className="search-list">
         {props.searchList.map((user) => {
            return (
               <li key={user.id}>
                  <div className="user">
                     <img className="avatar" src={user.avatar_url} />
                     <span className="name">{user.login}</span>
                  </div>
                  <div className="user-link">
                     <Link to={"/user/" + user.login}>Profile</Link>
                  </div>
               </li>
            );
         })}
      </ul>
   );
}
