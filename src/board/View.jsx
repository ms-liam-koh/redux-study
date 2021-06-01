import { useState, useEffect } from 'react';
import { classCreate, classUpdate, classDelete, studentCreate, studentUpdate, studentDelete } from './actions';
import { connect } from 'react-redux';
import orm from './models';
import { classListSelector, ormSelector } from './selectors';

const View = ({ classCreate, classUpdate, classDelete, studentCreate, studentDelete, studentUpdate, classList }) => {

    useEffect(() => {
        const emptyState = orm.getEmptyState();
        const session = orm.session(emptyState);

        session.ClassModel.create({
            class_id: 1,
            name: 'class1'
        })

        const res = session.ClassModel.all().toRefArray().map(elem => {
            return {
                ...elem
            }
        });

        console.log('##### res', classList())

    }, [])

    return (
        <>
            <div>hello</div>
            <button onClick={() => {
                classCreate({
                    class_id: 1,
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
        orm: state,
        classList: classListSelector
    }
}

const mapDispatchToProps = dispatch => ({
    classCreate: (payload) => dispatch(classCreate(payload)),
    classUpdate: (payload) => dispatch(classUpdate(payload)),
    classDelete: (id) => dispatch(classDelete(id)),
    studentCreate: (payload) => dispatch(studentCreate(payload)),
    studentUpdate: (payload) => dispatch(studentUpdate(payload)),
    studentDelete: (id) => dispatch(studentDelete(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(View);