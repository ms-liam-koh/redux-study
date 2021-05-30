import React, { useState, useEffect } from 'react';
import {create, update, read, remove} from './redux/store'
import { connect } from 'react-redux';
import {todoLists} from './redux/selectors'

const TodoList = ({ todoList, onCreate, onUpdate, onRemove }) => {


    useEffect(()=>{
        console.log(todoList);
    },[])

    return (
        <div>
            <h1>redux orm todolist</h1>
            <button onClick={() => {
                onCreate({
                    id: 1,
                    title: 'new title',
                    content: 'new content',
                    like: false,
                })
            }}>create</button>
            <button onClick={()=>{
                onUpdate({
                    id: 1,
                    title: 'new title updated',
                    content: 'new content updated',
                    like: false,
                })
            }}>update</button>
            <button onClick={()=>{
                onRemove(1);
            }}>delete</button>
            <hr></hr>
            {todoList.todoList.map((todo, index) => {
                return (
                    <div key={index} style={{'margin': '10px', 'border': '1px solid black'}}>
                        <div>id: {todo.id}</div>
                        <div>title: {todo.title}</div>
                        <div>content: {todo.content}</div>
                        <div>like: {todo.like === true ? 'yes' : 'no'}</div>
                    </div>    
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    todoList: state
})

const mapDispatchToProps = dispatch => {
    return {
        todoLists: todoLists,
        onCreate: (newTodo) => dispatch(create(newTodo)),
        onUpdate: (newTodo) => dispatch(update(newTodo)),
        onRemove: (id) => dispatch(remove(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);