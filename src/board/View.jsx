import { useState, useEffect } from 'react';
import { classCreate, classUpdate, classDelete, studentCreate, studentUpdate, studentDelete } from './actions';
import { connect } from 'react-redux';
import orm from './models';
// import { classListSelector, ormSelector } from './selectors';

const View = ({ classCreate, classUpdate, classDelete, studentCreate, studentDelete, studentUpdate }) => {
    const [classId, setClassId] = useState(0)
    const [studentId, setStudentId] = useState(0)
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
    }, [])

    return (
        <>
            <div>hello</div>
            <button onClick={() => {
                classCreate({
                    class_id: classId,
                    name: 'class' + classId
                })
                setClassId(classId + 1)

            }}>class create</button>
            <button onClick={() => {
                classUpdate({
                    class_id: classId-1,
                    name: 'class0 updated'
                })
            }}>class update</button>
            <button onClick={() => {
                classDelete(classId-1)
            }}>class delete</button>

            <hr></hr>

            <button onClick={() => {
                studentCreate({
                    student_id: studentId,
                    name: 'student'+studentId,
                    student_class_id: 0,
                })
                setStudentId(classId + 1)

            }}>student delete</button>
            <button onClick={() => {
                studentUpdate({
                    student_id: studentId-1,
                    name: 'student'+studentId+'updated',
                    student_class_id: 0,
                })
            }}>student delete</button>
            <button onClick={() => {
                studentDelete(studentId-1)
            }}>student delete</button>

        </>
    )
}

const mapStateToProps = state => {
    return {
        orm: state,
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