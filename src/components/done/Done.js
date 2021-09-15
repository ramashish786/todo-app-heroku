import React from 'react'
import SingleToDo from '../a_todo/SingleToDo'


export default function Done(props) {
    const drop = e => {
        e.preventDefault();
        // const singleDo = e.dataTransfer.getData('singleDo');
        const toDoId = e.dataTransfer.getData('toDoId');
        const title = e.dataTransfer.getData('title');
        const desc = e.dataTransfer.getData('desc');
        const toDoCat = e.dataTransfer.getData('toDoCat');
        let id = parseInt(toDoId);
        console.log(toDoCat);
        props.addToDoDrag(id, title, desc, 'done');
        props.deleteToDoDrag(id, toDoCat);
    }

    const dragOver = e => {
        e.preventDefault()
    }

    return (
        <div>
            <div className="board" onDrop={drop} onDragOver={dragOver}>
                <h1>Done</h1><div className="add-btn" id="add-btn" onClick={() => { props.setModalOpen(true) }}>+</div>
    <div className="card-container">
                {
                    props.done.length === 0 ? <p className="text-center">List is empty</p> :
                        props.done.map((item) => {
                            return <SingleToDo item={item} deleteToDo={props.deleteToDo} setEdit={props.setEdit} setUpdateToDo={props.setUpdateToDo} />
                        })

                }
    </div>

            </div>

        </div>
    )
}