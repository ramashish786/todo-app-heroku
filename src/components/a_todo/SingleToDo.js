import React from 'react';

export default function SingleToDo(props) {
    const dragStart = e =>{
        const target = e.target;
        e.dataTransfer.setData( 'toDoId', props.item.toDoId);
        e.dataTransfer.setData( 'title',props.item.title);
        e.dataTransfer.setData(  'desc',props.item.desc);
        e.dataTransfer.setData( 'toDoCat',props.item.toDoCat);
       
        setTimeout(()=>{
            
        },0);
    }
    const dragOver = e =>{
        e.stopPropagation();
    }

    const callMe = ()=>{
        props.setEdit(true);
        let newtask =props.item;
        props.setUpdateToDo(newtask);
    }

    return (
        <div>
            <div className='item' onDragStart={dragStart} onDragOver={dragOver} draggable='true'>
                <div className="icons">
                    <button onClick={() =>{callMe()}} className='btn edit-btn' >Edit</button>
                    <button onClick={() => props.deleteToDo(props.item)} className='btn delete-btn'>Delete</button>
                </div>
                <div className="title">
                    <p>Title</p>
                    <p>{props.item.title}</p>
                </div>
                <div className="desc">
                    <p>Description</p>
                    <p>{props.item.desc}</p>
                </div>

            </div>
        </div>
    )
}
