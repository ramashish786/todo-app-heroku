import './edit.css';
import React from 'react';
import { useState } from 'react';


export default function Edit(props) {
    const [editTitle, setEditTitle] = useState(props.updateToDoData.title);
    const [editDesc, setEditDesc] = useState(props.updateToDoData.desc);
    const [editCategory, setEditCategory] = useState(props.updateToDoData.toDoCat);
    const submit = (e) => {
        e.preventDefault();
        if (!editTitle || !editDesc) {
            alert('Title or Description cannot be blank');
        }
        else {
            if(editDesc.length < 25){
                alert('Description should be minimum of 25 characters.')
            }
            let newEdit = {

            }
            props.editToDo(props.updateToDoData.toDoId , editTitle ,editDesc,editCategory);
            setEditTitle("");
            setEditDesc("");
            setEditCategory("todo")
        }
    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            props.setEdit(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Edit your Todo</h1>
                </div>
                <div className="body">
                    <form onSubmit={submit}>
                        <label htmlFor="">Title</label>
                        <input type="text" id='title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)}  />
                        <label>Description</label>
                        <textarea id='desc' value={editDesc} onChange={(e) => setEditDesc(e.target.value)} minLength='5'></textarea>
                        <label>Category</label>
                        <select id='category' name="category" value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
                            <option value="none" selected>
                                Select an Option
                            </option>
                            <option value="todo">todo</option>
                            <option value="doing">doing</option>
                            <option value="done">done</option>
                        </select>
                        <button
                            onClick={() => {
                                props.setEdit(false);
                            }}
                            id="cancelBtn"
                        >
                            Cancel
                        </button>
                        <button type='submit'>Submit</button>
                    </form>

                </div>
                {/* <div className="footer">
                    
                </div> */}
            </div>
        </div>
    );
}
