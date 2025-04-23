import style from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    console.log("handleSubmit", values);
    onSubmit(values.search);
    actions.resetForm();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.search.trim()) {
      errors.search = "Це поле не може бути порожнім";
      toast.error(errors.search);
    }
    return errors;
  };

  return (
    <header className={style.header}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={handleSubmit}
        validate={validate}
      >
        <Form className={style.form}>
          <Field
            className={style.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={style.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
};

export default SearchForm;
