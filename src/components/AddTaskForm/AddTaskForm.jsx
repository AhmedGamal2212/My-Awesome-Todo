import React from 'react';
import { Formik, Field, Form } from 'formik';

const initialValues = {
    'task-title': '',
};

const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
};

const AddTaskForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <Form className='columns'>
                <div className='box control has-border-white column is-half is-offset-one-quarter has-background-black is-flex is-justify-content-center is-align-items-center has-text-white is-three-fifths-mobile is-offset-one-fifth-mobile'>
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
