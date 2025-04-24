import style from "./SearchBar.module.css";
import { Formik, Form, Field, FormikHelpers, FormikErrors } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { FC } from "react";

interface SearchFormProps {
  onSubmit: (value: string) => void;
}

interface FormValues {
  search: string;
}

const SearchForm: FC<SearchFormProps> = ({ onSubmit }) => {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log("handleSubmit", values);
    onSubmit(values.search);
    actions.resetForm();
  };

  const validate = (values: FormValues): FormikErrors<FormValues> => {
    const errors: FormikErrors<FormValues> = {};
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
