import React from "react";
import "./index.css";

export default function Repos(props) {
   function formatDate(str) {
      const date = new Date(str);
      return date.toLocaleString("default", {
         year: "numeric",
         month: "short",
         day: "numeric",
      });
   }
   return (
      <div className="repo-list-container">
         <h3>Repositories</h3>
         <ul className="repo-list">
            {props.data.map((data, i) => {
               return (
                  <li key={data.id + i}>
                     <div className="repo">
                        <div className="name">{data.name}</div>
                        <div className="desc">{data.description}</div>
                     </div>
                     <div className="update-time">Updated at {formatDate(data.updated_at)}</div>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
