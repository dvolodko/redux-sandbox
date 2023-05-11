import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasksSlice';
import { Form, Field } from './TaskForm.styled';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </Form>
  );
};
