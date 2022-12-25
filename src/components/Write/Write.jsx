import useForm from '../../hooks/useForm';
import styles from './Write.css';

export default function Write() {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    title: '',
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formState :>> ', formState);
  };

  return (
    <form className={styles.Write} onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={(e) => handleFormChange(e)}
        />
      </label>
      <label htmlFor="content">
        <textarea
          name="content"
          value={formState.content}
          onChange={(e) => handleFormChange(e)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
