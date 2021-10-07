import React, {useState} from 'react';
import { Button, Typography, IconButton, TextField } from '@material-ui/core';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Formik, Form, Field, FieldArray } from 'formik';

const ModelWidget = ({title, fields, formik, id}) => {
    const [name, setName] = useState("Name");

    return (
        <div>
            <Typography variant="h6">{title}</Typography>
            {
                fields.map((field, idx) => {
                    return (
                        <div key={idx} className="field">
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                initialValue={field.name}
                                onChange={setName('dd') && formik.setFieldValue("models", [...formik.values, {...formik.values.models[id], name: name}])}
                                error={formik.touched.models && Boolean(formik.errors.models)}
                                helpertext={formik.touched.models && formik.errors.models}
                            />

                            <TextField
                                fullWidth
                                label="Type"
                                variant="outlined"
                                value={field.type}
                                onChange={formik.handleChange}
                                error={formik.touched.models && Boolean(formik.errors.models)}
                                helpertext={formik.touched.models && formik.errors.models}
                                id="type"
                                name="type"
                            />
                        </div>
                    );
                })
            }
        </div>
    );
};

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
            
            <FieldArray
                name="models"
                render={arrayHelpers => (
                    <div>
                    </div>
                )}

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