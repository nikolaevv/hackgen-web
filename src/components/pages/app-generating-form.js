import React from 'react';
import { useFormik } from 'formik';
import {Route}from 'react-router';
import { schema } from '../schemas';
import { FormPageOne, FormPageTwo } from '../form-pages/app-generating-form';
import { Container } from '@material-ui/core';

import './pages.css';

const AppGeneratingForm = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            theme: 'light',
            mainColor: '#000',
            contrastColor: '#FFF',
            secondaryColor: '#FFF',
            secondaryContrastColor: '#000',
            componentNames: ['header', 'footer'],
            models: [
                {'title': 'User', relations: [], fields: [{'type': 'Integer', 'name': 'age', 'nullable': false, 'default': ''}, {'type': 'Integer', 'name': 'isGood', 'nullable': true, 'default': ''}]}
            ]
        },
        validationSchema: schema,

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    
    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <Route path="/app/create/1" render={() => (
                    <FormPageOne formik={formik}/>
                )}/>

                <Route path="/app/create/2" render={() => (
                    <FormPageTwo formik={formik}/>
                )}/>
            </form>
        </Container>

    );
};

export default AppGeneratingForm;