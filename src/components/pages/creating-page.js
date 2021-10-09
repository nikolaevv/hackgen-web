import React from 'react';
import { Typography, Button, Link, Card, CardContent } from '@material-ui/core';
import { urlBase } from '../../services/generating';
import CircularProgress from '@mui/material/CircularProgress';
import { Redirect } from 'react-router';
import './pages.css';

const ProcessingWidget = () => {
    return (
        <div className="creating-block">
            <CircularProgress />
            <Typography variant="body1">Creating and building app</Typography>
        </div>
    );
};

const CreatingPage = ({appId, appStatus}) => {
    console.log(appId);

    if (appStatus !== 'DONE') {
        return <ProcessingWidget/>;
    }

    if (!appId) {
        return <Redirect to="/app/create/1"/>
    }

    return (
        <div className="creating-block">
            <Card>
                <CardContent className="card-content">
                    <Typography variant="h5">Done! ✅</Typography>
                    <Typography variant="body2">Now you can download code sources</Typography>
                    <br/>
                    <Link href={`${urlBase}/app/${appId}/source`}>
                        <Button variant="contained">Download</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreatingPage;