import React from 'react';
import SingleToDo from '../a_todo/SingleToDo';


export default function Todo({ deleteToDoDrag,todo,deleteToDo,setModalOpen,setEdit,setUpdateToDo,addToDoDrag}) {
 const drop = e =>{
     e.preventDefault();
     const toDoId = e.dataTransfer.getData('toDoId');
     const title = e.dataTransfer.getData('title');
     const desc = e.dataTransfer.getData('desc');
     const toDoCat = e.dataTransfer.getData('toDoCat');
    let  id = parseInt(toDoId);
     console.log(toDoCat);
     addToDoDrag(id,title,desc,'todo');
     deleteToDoDrag(id,toDoCat);
 }
 const dragOver = e =>{
e.preventDefault()
 }

    return (
        <div>
            <div className="board" onDrop={drop} onDragOver={dragOver}>
               <h1>To Do</h1><div className="add-btn" id="add-btn" onClick={()=>{setModalOpen(true)}}>+</div>
               <div className="card-container">
               {
                   todo.length === 0 ? <p className="text-center">List is empty</p> : 
                   todo.map((item) => {
                        return <SingleToDo item={item} deleteToDo={deleteToDo}  setEdit={setEdit} setUpdateToDo={setUpdateToDo}/>
                    })

                }
               </div>
            </div>

        </div>
    )
}
