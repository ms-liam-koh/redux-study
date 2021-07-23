import { useState, useEffect } from "react";
import {
  classCreate,
  classUpdate,
  classDelete,
  studentCreate,
  studentUpdate,
  studentDelete,
  countPlus,
  countMinus
} from "./actions";
import { connect } from "react-redux";
import orm from "./models";
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { classListSelector, studentListSelector } from "./selectors";
// import { classListSelector, ormSelector } from './selectors';

const View = ({
  classList,
  studentList,
  classCreate,
  classUpdate,
  classDelete,
  studentCreate,
  studentDelete,
  studentUpdate,
  counterNum,
  countPlus,
  countMinus,
  countUndo,
  countRedo
}) => {
  const [classId, setClassId] = useState(0);
  const [studentId, setStudentId] = useState(0);
  useEffect(() => {
      console.log(counterNum)
  }, []);

  return (
    <>
      <h3>Counter</h3>
      {counterNum}
      <button
        onClick={() => {
          countPlus();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          countMinus();
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          countUndo();
        }}
      >
        undo
      </button>
      <hr></hr>
      <div>hello</div>
      <button
        onClick={() => {
          classCreate({
            class_id: classId,
            name: "class" + classId,
          });
          setClassId(classId + 1);
        }}
      >
        class create
      </button>
      <button
        onClick={() => {
          classUpdate({
            class_id: classId - 1,
            name: "class0 updated",
          });
        }}
      >
        class update
      </button>
      <button
        onClick={() => {
          classDelete(classId - 1);
        }}
      >
        class delete
      </button>
      <button
        onClick={() => {
        //   classUndo();f
        }}
      >
        class undo
      </button>

      <hr></hr>

      <button
        onClick={() => {
          studentCreate({
            student_id: studentId,
            name: "student" + studentId,
            student_class_id: 0,
          });
          setStudentId(classId + 1);
        }}
      >
        student creaate
      </button>
      <button
        onClick={() => {
          studentUpdate({
            student_id: studentId - 1,
            name: "student" + studentId + "updated",
            student_class_id: 0,
          });
        }}
      >
        student delete
      </button>
      <button
        onClick={() => {
          studentDelete(studentId - 1);
        }}
      >
        student update
      </button>
      <hr></hr>
      <h3>Class LIst</h3>
      {classList.map((cls) => {
        return (
          <div style={{ border: "1px solid black" }} key={cls.id}>
            <div>id: {cls.id}</div>
            <div>name: {cls.name}</div>
          </div>
        );
      })}
      <h3>Student LIst</h3>
      {studentList.map((student) => {
        return (
          <div style={{ border: "1px solid black" }} key={student.id}>
            <div>id: {student.id}</div>
            <div>name: {student.name}</div>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    orm: state,
    classList: classListSelector(state),
    studentList: studentListSelector(state),
    counterNum: state.counter.present.value // state.counter.present 에 접근
  };
};

const mapDispatchToProps = (dispatch) => ({
  classCreate: (payload) => dispatch(classCreate(payload)),
  classUpdate: (payload) => dispatch(classUpdate(payload)),
  classDelete: (id) => dispatch(classDelete(id)),
  studentCreate: (payload) => dispatch(studentCreate(payload)),
  studentUpdate: (payload) => dispatch(studentUpdate(payload)),
  studentDelete: (id) => dispatch(studentDelete(id)),
  countPlus: (payload) => dispatch(countPlus(payload)),
  countMinus: (payload) => dispatch(countMinus(payload)),
  countUndo: () => dispatch(UndoActionCreators.undo()),
  countRedo: () => dispatch(UndoActionCreators.redo())
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
