import './App.css';
import Todo from './components/todo/Todo';
import Doing from './components/doing/Doing';
import Done from './components/done/Done';
import AddToDo from './components/addToDo/AddToDo';
import React, { useState, useEffect } from 'react';
import Edit from './components/edit/Edit';

function App() {
  let initToDo, initDoing, initDone;

  if (localStorage.getItem('todo') === null) {
    initToDo = [];
  } else {
    initToDo = JSON.parse(localStorage.getItem('todo'));
  }
  if (localStorage.getItem('doing') === null) {
    initDoing = [];
  } else {
    initDoing = JSON.parse(localStorage.getItem('doing'));
  }
  if (localStorage.getItem('done') === null) {
    initDone = [];
  } else {
    initDone = JSON.parse(localStorage.getItem('done'));
  }



  const [todo, setTodo] = useState(initToDo);
  const [doing, setDoing] = useState(initDoing);
  const [done, setDone] = useState(initDone);
  const[updateToDo,setUpdateToDo] = useState([]);
  const [isEdit,setEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  
  const [toDoId, setToDoId] = useState(0);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
    localStorage.setItem('doing', JSON.stringify(doing));
    localStorage.setItem('done', JSON.stringify(done));
  }, [todo, doing, done]);

  const addToDo = (title, desc, category) => {
    let newToDoId = todo.length+ doing.length+ done.length + 1;
    setToDoId(newToDoId);
    const newToDo = {
      toDoId: newToDoId,
      toDoCat: category,
      title: title,
      desc: desc
    }
    switch (category) {
      case 'todo':
        setTodo([...todo, newToDo]);

        break;
      case 'doing':
        setDoing([...doing, newToDo]);

        break;
      case 'done':
        setDone([...done, newToDo])
        break;
    }
  }
  const addToDoDrag = (id,title, desc, category) => {    
    const newToDo = {
      toDoId: id,
      toDoCat: category,
      title: title,
      desc: desc
    }
    switch (category) {
      case 'todo':
        setTodo([...todo, newToDo]);

        break;
      case 'doing':
        setDoing([...doing, newToDo]);

        break;
      case 'done':
        setDone([...done, newToDo])
        break;
    }
  }

  const editToDo= (id,title, desc, category)=>{
    switch (category){
      case 'todo':
      let temp1 = todo;
      temp1.map((item)=>{
        if(item.toDoId===id){
           item.toDoId = id;
           item.toDoCat = category;
           item.title = title;
           item.desc = desc;

        }
      });
      setTodo(temp1);
   
        break;
      case 'doing':
        let temp2 = doing;
        temp2.map((item)=>{
          if(item.toDoId===id){
             item.toDoId = id;
             item.toDoCat = category;
             item.title = title;
             item.desc = desc;
  
          }
        });
        setDoing(temp2);

        break;
      case 'done':
        let temp3 = done;
        temp3.map((item)=>{
          if(item.toDoId===id){
             item.toDoId = id;
             item.toDoCat = category;
             item.title = title;
             item.desc = desc;
  
          }
        });
        setDone(temp3);
        break;
    }
  }

  const deleteToDo = (argToDo) => {
    switch (argToDo.toDoCat) {
      case 'todo':
        let tempToDo = [...todo].filter(temp => temp.toDoId !== argToDo.toDoId)
        setTodo(tempToDo);
        break;
      case 'doing':
        let tempDoing = [...doing].filter(temp => temp.toDoId !== argToDo.toDoId)
        setDoing(tempDoing);
        console.log(tempDoing)
        break;
      case 'done':
        let tempDone = [...done].filter(temp => temp.toDoId !== argToDo.toDoId)
        setDone(tempDone);
        break;
    }

  }
  const deleteToDoDrag = (id,cat) => {
    // id = parseInt(id);
    switch (cat) {
      case 'todo':
        let tempToDo = [...todo].filter(temp => temp.toDoId !== id);
        console.log(tempToDo);
        setTodo(tempToDo);
        break;
      case 'doing':
        let tempDoing = [...doing].filter(temp => temp.toDoId !== id)
        setDoing(tempDoing);
        console.log(tempDoing);
        break;
      case 'done':
        let tempDone = [...done].filter(temp => temp.toDoId !== id)
        setDone(tempDone);
        break;
    }

  }


  return (
    <>
      <div className='flex-container'>
        <Todo addToDoDrag={addToDoDrag}  deleteToDoDrag={ deleteToDoDrag} todo={todo} setModalOpen={setModalOpen} deleteToDo={deleteToDo} setEdit={setEdit} setUpdateToDo={setUpdateToDo} />
        <Doing addToDoDrag={addToDoDrag}   deleteToDoDrag={ deleteToDoDrag} doing={doing} setModalOpen={setModalOpen} deleteToDo={deleteToDo} setEdit={setEdit} setUpdateToDo={setUpdateToDo} />
        <Done addToDoDrag={addToDoDrag}  deleteToDoDrag={ deleteToDoDrag} done={done} setModalOpen={setModalOpen} deleteToDo={deleteToDo} setEdit={setEdit} setUpdateToDo={setUpdateToDo} />
        {modalOpen && <AddToDo setModalOpen={setModalOpen} addToDo={addToDo} />}
        {isEdit && <Edit setEdit={setEdit} editToDo={editToDo} updateToDoData={updateToDo} />}
      </div>



    </>

  );
}

export default App;
