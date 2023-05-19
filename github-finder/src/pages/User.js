import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRepo, getUser } from "../api";
import Repos from "../components/RepoList";
function User() {
   const { username } = useParams();

   const [user, setUser] = useState(null);

   const [repoList, setRepoList] = useState([]);
   useEffect(() => {
      getUser(username).then((res) => {
         setUser(res.data);
      });

      getRepo(username).then((res) => {
         setRepoList(res?.data || []);
      });
   }, []);
   return (
      <div className="container">
         {user && (
            <>
               <div className="user-container">
                  <div>
                     <img className="avatar" src={user.avatar_url} />
                  </div>
                  <h1>{user.login}</h1>

                  <div className="stats-container">
                     <div className="stats">
                        <div className="top">{user.public_repos}</div>
                        <div className="bottom">REPOSITORIES</div>
                     </div>
                     <div className="stats">
                        <div className="top">{user.followers}</div>
                        <div className="bottom">FOLLOWERS</div>
                     </div>
                     <div className="stats">
                        <div className="top">{user.following}</div>
                        <div className="bottom">FOLLOWINGS</div>
                     </div>
                  </div>

                  <a className="link-to-github" href={user.html_url}>
                     Go To Github
                  </a>
               </div>

               <Repos data={repoList} />
            </>
         )}
      </div>
   );
}

export default User;
