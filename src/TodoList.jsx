import React, { useState, useEffect } from 'react';
import { create, update, read, remove } from './redux/store'
import orm, { ormCreate, ormUpdate, ormRemove } from './redux/model'
import { connect } from 'react-redux';
import { todoLists } from './redux/selectors';
import View from './board/View';

const TodoList = ({ todoList, onCreate, onUpdate, onRemove, onOrmCreate }) => {


    useEffect(() => {
        console.log('selector', todoLists);
    }, [])

    return (
        <div>
            <h1>redux orm todolist</h1>
            <View></View>
            {/* <button onClick={() => {
                onCreate({
                    id: 1,
                    title: 'new title',
                    content: 'new content',
                    like: false,
                })
            }}>create</button>
            <button onClick={() => {
                onUpdate({
                    id: 1,
                    title: 'new title updated',
                    content: 'new content updated',
                    like: false,
                })
            }}>update</button>
            <button onClick={() => {
                onRemove(1);
            }}>delete</button>
            {todoList.todoList.map((todo, index) => {
                return (
                    <div key={index} style={{ 'margin': '10px', 'border': '1px solid black' }}>
                        <div>id: {todo.id}</div>
                        <div>title: {todo.title}</div>
                        <div>content: {todo.content}</div>
                        <div>like: {todo.like === true ? 'yes' : 'no'}</div>
                    </div>
                )
            })} */}
        </div>
    )
}

const mapStateToProps = state => ({
    todoList: state,
    todoLists: todoLists(),
    
})

const mapDispatchToProps = dispatch => {
    return {
        onCreate: (newTodo) => dispatch(create(newTodo)),
        onUpdate: (newTodo) => dispatch(update(newTodo)),
        onRemove: (id) => dispatch(remove(id)),
        onOrmCreate: (newTodo) => dispatch(ormCreate(newTodo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);