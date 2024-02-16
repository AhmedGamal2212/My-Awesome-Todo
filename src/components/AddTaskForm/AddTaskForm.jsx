import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

const initialValues = {
    'task-title': '',
};

const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
};

const validationSchema = Yup.object({
    'task-title': Yup.string().required(''),
});

const AddTaskForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnBlur
        >
            <Form className='columns'>
                <div
                    className='box control column is-half is-offset-one-quarter has-background-black is-flex is-justify-content-center is-align-items-center has-text-white is-three-fifths-mobile is-offset-one-fifth-mobile'>
                    <Field
                        type='text'
                        className='input'
                        placeholder='Add a new task...'
                        name='task-title'
                    />
                    <button
                        className='button is-success'
                        type='submit'
                    >
                        +
                    </button>
                </div>
            </Form>
        </Formik>
    );
};

export default AddTaskForm;
