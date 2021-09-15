import React from 'react'
import SingleToDo from '../a_todo/SingleToDo'
export default function Doing(props) {
    const drop = e =>{
        e.preventDefault();
        const toDoId = e.dataTransfer.getData('toDoId');
        const title = e.dataTransfer.getData('title');
        const desc = e.dataTransfer.getData('desc');
        const toDoCat = e.dataTransfer.getData('toDoCat');
        let  id = parseInt(toDoId);
        console.log(toDoCat);
        props.addToDoDrag(id,title,desc,'doing');
        console.log(title);
        props. deleteToDoDrag(id,toDoCat);

        // console.log(toDoCat);
        // props.doing.map(item=>{
        //     if(item.toDoId==singleDo){
        //         props.addToDoDrag(item.toDoId,item.title,item.desc,'doing');
        //         props.deleteToDo(item);
        //     }
        // })
    }
    const dragOver = e =>{
   e.preventDefault()
    }

    return (
        <div>
            <div className="board" onDrop={drop} onDragOver={dragOver}>
               <h1>Doing</h1><div className="add-btn" id="add-btn" onClick={()=>{props.setModalOpen(true)}}>+</div>
               <div className="card-container">
               {
                    props.doing.length === 0 ? <p className="text-center">List is empty</p> : 
                    props.doing.map((item) => {
                        return <SingleToDo item={item} deleteToDo={props.deleteToDo} setEdit={props.setEdit} setUpdateToDo={props.setUpdateToDo} />
                    })

                }
               </div>
            </div>

        </div>
    )
}