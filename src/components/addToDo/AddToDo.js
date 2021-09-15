import './addToDo.css';
import React from 'react';
import { useState } from 'react';


export default function AddToDo(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert('Title or Description cannot be blank');
        }
        else {
            if (desc.length < 25) {
                alert('Description should be minimum of 25 characters.')
            }
            else {
                let regExp = /^[A-Za-z]+$/;
                if (!title.match(regExp)) {
                    alert("Please enter letters only in title.");
                }
                else {
                    props.addToDo(title, desc, category);
                    setTitle("");
                    setDesc("");
                    setCategory("todo")       
                }
            }
        }
    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            props.setModalOpen(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Add your Todo</h1>
                </div>
                <div className="body">
                    <form onSubmit={submit}>
                        <label htmlFor="">Title</label>
                        <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label>Description</label>
                        <textarea id='desc' value={desc} onChange={(e) => setDesc(e.target.value)} minLength='5'></textarea>
                        <label>Category</label>
                        <select id='category' name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="none" selected>
                                Select an Option
                            </option>
                            <option value="todo">todo</option>
                            <option value="doing">doing</option>
                            <option value="done">done</option>
                        </select>
                        <button
                            onClick={() => {
                                props.setModalOpen(false);
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
