import style from "../../../styles/postdetail.module.css";
import React, { useRef, useState } from "react";
import { tabContent } from "./data/postTitle";
import { Tabs } from "antd";


const addTab = () => {

}

export default function PostDetail({ posts, antTab, shouldAddPost, addPost }) {
  const editedAntTab = {
    label: posts.post1,
    key: "1",
    children: `Content of Tab Pane 1`,
    closable:false
  }
  antTab[0] = editedAntTab
  
  const tab = [antTab[0]];
  const postsContainer = [
    posts.post1,
    posts.post2,
    posts.post3,
    posts.post4,
    posts.post5
  ];

  const [activeKey, setActiveKey] = useState(tabContent[0].key);
  const [items, setItems] = useState(tab);
  const newTabIndex = useRef(0);
  const editableKey = useRef(1);

  //update selected item after add/remove event 
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };

  const add = (label, children) => {
    if (editableKey <= 5) {
      editableKey.current = items.length;
    }
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: label,
      children: children,
      key: newActiveKey
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey) => {
    editableKey.current = items.length - 1;

    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  //handle add and remove events
  const onEdit = (targetKey, action) => {
    if (action === "add" && items.length < 5) {
      add(postsContainer[items.length], antTab[items.length].children);
    } else {
      remove(targetKey);
    }
  };

  //allow onClick adding functionality
  if(shouldAddPost){
    add()
  }

  return (
    <div className={style.postdetail}>
      <div className={style.tabsContainer}>
        <Tabs
          type="editable-card"
          className={style.tabs}
          onChange={onChange}
          activeKey={activeKey}
          onEdit={onEdit}
          items={items}
        />
      </div>
    </div>
  );
}
export {addTab}