import { useState, useEffect } from 'react';
import { classCreate, classUpdate, classDelete, studentCreate, studentUpdate, studentDelete } from './actions';
import { connect } from 'react-redux';

const View = ({ onClassCreate, classUpdate, classDelete, studentCreate, studentDelete, studentUpdate }) => {

    useEffect(() => {
        console.log(classCreate)
    }, [])

    return (
        <>
            <div>hello</div>
            <button onClick={() => {
                onClassCreate({
                    id: 1,
                    name: 'class1'
                })
            }}>student create</button>
            <button onClick={() => {
                studentUpdate()
            }}>student update</button>
            <button onClick={() => {
                studentDelete()
            }}>student delete</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
    orm: state
}}

const mapDispatchToProps = dispatch => {
    return {
        onClassCreate: (payload) => dispatch(classCreate(payload)),
        classUpdate: (payload) => dispatch(classUpdate(payload)),
        classDelete: (id) => dispatch(classDelete(id)),
        studentCreate: (payload) => dispatch(studentCreate(payload)),
        studentUpdate: (payload) => dispatch(studentUpdate(payload)),
        studentDelete: (id) => dispatch(studentDelete(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);