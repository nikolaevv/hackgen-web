import React from 'react';
import { Button, Typography, IconButton } from '@material-ui/core';
import AddBoxIcon from '@mui/icons-material/AddBox';

const FormPageTwo = ({formik}) => {
    return (
        <div>
            <Typography color="seconary" variant="h5">2 of 2</Typography>

            <div className="models-header">
                <Typography color="seconary" variant="h4">Models</Typography>

                <IconButton>
                    <AddBoxIcon color="primary"/>
                </IconButton>
            </div>
            
            <div>
                {formik.values.models.map((model) => {
                    return (
                        <div>
                        <Typography color="secondary" variant="h6">User</Typography>
                        </div>
                    );
                })}
            </div>

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