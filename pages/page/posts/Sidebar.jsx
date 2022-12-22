import style from "../../../styles/sidebar.module.css";
import PostDetail from "./postDetail";
import { postTitle } from "./data/postTitle";
import { useRef } from "react";


export default function Sidebar({ clicked, posts, updateTabs }) {
  let posted = posts
  console.log(posts);
  return (
    <aside className={style.sidebar}>
      {postTitle.map((postValue) => {
       switch (postValue.id){
        case "post1": posted.post1 = postValue.text
        case "post2": posted.post2 = postValue.text
        case "post3": posted.post3 = postValue.text
        case "post4": posted.post4 = postValue.text
        case "post5": posted.post5 = postValue.text; 
       }
        return (
          <div key={postValue.id} className={style.postContainer}>
            <h1 onClick={() => clicked(postValue.id, postValue.text)}>
              {postValue.text}
            </h1>
          </div>
        );
      })}
    </aside>
  );
}
