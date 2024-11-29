import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, { resetForm }) => {
    const query = values.query.trim();
    if (query === "") {
      alert("Please enter a valid search query!");
      return;
    }
    onSearch(query);
    resetForm();
  };

  return (
    <div className={s.container}>
      <h2 className={s.name}>Movies search</h2>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        {() => (
          <Form className={s.form}>
            <Field
              className={s.input}
              name="query"
              placeholder="Search for movies..."
            />
            <button className={s.button} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;