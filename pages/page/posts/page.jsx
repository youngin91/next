import styles from "../../../styles/page.module.css";
import Sidebar from "./Sidebar";
import PostDetail from "./postDetail";
import React, { useState,useRef } from "react";
import { tabContent } from "./data/postTitle";

export default function Page() {
  const [posts, setPosts] = useState({
    post1: "",
    post2: "",
    post3: "",
    post4: "",
    post5: ""
  });
  //usestate to call add() @postDetail
  const [shouldAddPost, setShouldAddPost] = useState(false);
  const tabStore = useRef(tabContent)
  const [antTab, setAntTab] = useState(tabStore.current);

  function handleTitleChange(postID, postPosts) {    
    //change content of ant based on what was clicked
    setPosts({ ...posts, [postID]: postPosts });
  }
  function addPostTitle(fn, title, children){

    return fn(title,children)
  }
  
  return (
    <div className={styles.page}>
      <Sidebar
        clicked={handleTitleChange}
        setPosts={setPosts}
        posts={posts}
        addPostTitle={addPostTitle}
      />

      <div className={styles.containDetail}>
        <PostDetail
          posts={posts}
          antTab={antTab}
          shouldAddPost={shouldAddPost}
        />
      </div>
    </div>
  );
}
