import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {Route, withRouter}from 'react-router';
import { schema } from '../schemas';
import { FormPageOne, FormPageTwo } from '../form-pages/app-generating-form';
import { useCreateApp, useAppCreatingStatus } from '../../services/generating';
import { Container } from '@material-ui/core';
import CreatingPage from './creating-page';
import './pages.css';

const AppGeneratingForm = ({history}) => {
    const [appId, generateApp] = useCreateApp();
    const [appStatus, getAppStatus] = useAppCreatingStatus();

    useEffect(() => {
        if (appId && appStatus !== 'DONE') {
            let processId = setInterval(() => getAppStatus(appId), 5000);
            return () => clearInterval(processId);
        }
    }, [appId, getAppStatus, appStatus, history]);

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
                {'title': 'User', relations: [], fields: [{'type': 'Integer', 'name': 'age', 'nullable': false, 'default': '', 'choices': ['AIRPORT', 'BUSINESS']}, {'type': 'Integer', 'name': 'isGood', 'nullable': true, 'default': '', 'choices': []}]}
            ]
        },
        validationSchema: schema,

        onSubmit: (values) => {
            generateApp(values);
            history.push('/app/creating');
        },
    });

    const onRemovedFromArray = (name, arr, idx) => {
        formik.setFieldValue(
            name, 
            [...arr.slice(0, idx), ...arr.slice(idx + 1)]
        );
    };

    const onAddToArray = (field, values, value, callback) => {
        formik.setFieldValue(field, [...values, value]);
        
        console.log(callback)
        callback('');
    };
    
    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <Route path="/app/create/1" render={() => (
                    <FormPageOne formik={formik} onRemovedFromArray={onRemovedFromArray} onAddToArray={onAddToArray}/>
                )}/>

                <Route path="/app/create/2" render={() => (
                    <FormPageTwo formik={formik} onRemovedFromArray={onRemovedFromArray} onAddToArray={onAddToArray}/>
                )}/>
            </form>

            <Route path="/app/creating" render={() => (
                <CreatingPage appId={appId} appStatus={appStatus}/>
            )}/>
        </Container>

    );
};

export default withRouter(AppGeneratingForm);