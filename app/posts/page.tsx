'use client'

import { useEffect, useState } from "react";

function Posts() {
  
  const [inputValue, setInputValue] = useState('');
  const [inputName, setInputName] = useState('');
  const [postsList, setPostsList] = useState([]);

  /* 
  [
        {
            id: 1, name: 'ABC', post: 'Hey, I am ABC',
        },
        {
            id: 2, name: 'DEF', post: 'Hey, I am DEF',
        },
        {
            id: 3, name: 'GHI', post: 'Hey, I am GHI',
        },
  ]
  */
  
  const addPost = async () => {
     const newPostsList = {
        id: Math.random(),
        name: inputName,
        post: inputValue
      };
    
    const fetchList = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(newPostsList)
    }).then(res => res.json());
    console.log(fetchList);
  }

  const loadPosts = async () => {
    const fetchList = await fetch('/api/users').then(res => res.json());

    setPostsList(fetchList);
  };

  return (
    <>
      <div>Posts:</div>
      <div  style={{ backgroundColor:'#ADD8E6'}}>
      {postsList.length !== 0 ?
      postsList.map((value: any) => {
        return <li style={{margin: '10px', marginLeft: "20px"}} key={value.id}>{value.post} -By {value.name}</li>
      }) :
          <p style={{ margin: '10px', paddingLeft: "250px"}}>No Posts yet</p>
        }
        </div>

      <input id="name" style={{border: '1px solid black'}} placeholder="Please Enter Name" value={inputName} onChange={(ev) => setInputName(ev.target.value)}/>
      <input id="post" style={{marginLeft: "50px", border: '1px solid black'}} placeholder="Please Write Post" value={inputValue} onChange={(ev) => setInputValue(ev.target.value)}/>
      
      <button style={{marginLeft: "50px", backgroundColor: 'grey'}} onClick={() => loadPosts()}>Load Post</button>
      <button style={{marginLeft: "50px", backgroundColor: 'grey'}} onClick={() => addPost()}>Add Post</button>
    </>
  )
}

export default Posts