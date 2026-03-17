import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData =[
  {
    id:0,
    isDone:false,
    content:"React 공부하기",
    date:new Date().getTime(),
  },
  {
    id:1,
    isDone:false,
    content:"빨래하기",
    date:new Date().getTime(),
  },
  {
    id:2,
    isDone:false,
    content:"노래 연습하기",
    date:new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockData); //mockData에 있는 데이터 가져오기
  const idRef = useRef(3); //

  const onCreate = (content) => { //React 서버에 추가
    const newTodo = {
      id: idRef.current++,
      isDone:false,
      content:content,
      date:new Date().getTime()
    };

    setTodo([newTodo, ...todo]);
  }

  const onUpdate = (targetId) => { //추가된 내용을 실제 리스트에 업로드(업데이트)
    setTodo(todo.map((todo)=>todo.id === targetId 
    ? {...todo, isDone: !todo.isDone} 
    : todo));

    // {
    //   if(todo.id === targetId){
    //     return {
    //       ...todo,
    //       isDone: !todo.isDone
    //     };
    //   };

    //   return todo;
    // }
  };

  const onDelete = (targetId) => { //삭제
    setTodo(todo.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate}/>
      <List todo={todo} onDelete={onDelete} onUpdate={onUpdate}/>
    </div>
  )
}

export default App
