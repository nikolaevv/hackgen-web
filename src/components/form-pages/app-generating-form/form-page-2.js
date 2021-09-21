import React from 'react';
import { Button, Typography } from '@material-ui/core';

const FormPageTwo = ({formik}) => {
    return (
        <div>
            <Typography color="seconary" variant="h5">2 of 2</Typography>
        
            <Button
                variant="contained"
                type="submit"
            >
                    Create app
            </Button>
        </div>
    );
};

export default FormPageTwo;