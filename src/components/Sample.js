import React, { useEffect } from "react";
import { getUsers } from "../lib/api";

const Sample = ({ loadingPost, loadingUsers, post, users }) => {

  useEffect(()=>{
    console.log(post);
  },[])

  const getUsers = () => {
    if(!loadingUsers && users){
        return users.map((user) => {
            return(
                <div key={user.id}>{user.username}</div>
            )
        })
    }
  }


  return (
    <div>
      <section>
            <h1>posts</h1>
            {loadingPost && 'loading...'}
            {!loadingPost && post && (
                <div>
                    <h3>{post.title}</h3>
                    <h3>{post.body}</h3>
                </div>
            )}
        </section>
        <section>
            <h1>user list</h1>
            {loadingUsers && 'loading...'}
            {getUsers()}
      </section>
    </div>
  );
};

export default Sample;
