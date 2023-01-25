import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  firstName: string;
  lastName: string;
}

const Test = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        onSubmit={(values: Values) => {
          if (!values.firstName && !values.lastName) {
            console.log("Tüm alanları doldurunuz!");
            return;
          }
          console.log(values);
        }}
      >
        <Form>
          <div>
            <label>FirstName</label>
            <Field name="firstName" />
          </div>
          <div>
            <label>LastName</label>
            <Field name="lastName" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Test;
