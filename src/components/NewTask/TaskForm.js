import classes from './TaskForm.module.css'
import { useRef } from 'react';

const TaskForm = (props) => {

  const taskInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = taskInput.current.value;
    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={taskInput} />
      <button>{props.loading ? 'Sending' : 'Add Tak'}</button>
    </form>
  )
}
export default TaskForm;