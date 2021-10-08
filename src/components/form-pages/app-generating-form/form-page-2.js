import React from 'react';
import { Button, Typography, IconButton, TextField, MenuItem, Select, InputLabel, FormControl, FormControlLabel, Checkbox } from '@material-ui/core';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import { Field, FieldArray } from 'formik';

const FormPageTwo = ({formik}) => {
    const {values} = formik;

    const onModelFieldAdded = (model, idx) => {
        formik.setFieldValue(
            `models.${idx}.fields`, 
            [...model.fields, {'type': 'Integer', 'name': '', 'isNullAcceptable': false, 'defaultValue': ''}]
        );
    };

    const onModelAdded = () => {
        formik.setFieldValue(
            `models`, 
            [...formik.values.models, {'title': 'Model', fields: []}]
        );
    };

    const onModelFieldDeleted = (model, idx, fieldIdx) => {
        formik.setFieldValue(
            `models.${idx}.fields`, 
            [...model.fields.slice(0, fieldIdx), ...model.fields.slice(fieldIdx + 1)]
        );
    };

    return (
        <div>
            <Typography color="seconary" variant="h5">2 of 2</Typography>

            <div className="models-header">
                <Typography color="seconary" variant="h4">Models</Typography>

                <IconButton onClick={onModelAdded}>
                    <AddBoxIcon color="primary"/>
                </IconButton>
            </div>
            
            <div>
                <div>
                    {values.models && values.models.length > 0 ? (
                        values.models.map((model, idx) => (
                            <div className="model-container" key={idx}>
                                <TextField
                                    value={model.title}
                                    id={`models.${idx}.title`}
                                    name={`models.${idx}.title`}
                                    onChange={formik.handleChange}
                                    variant="standard"
                                    className="model-title"
                                />
                                    <div>
                                        {values.models[idx].fields && values.models[idx].fields.length > 0 ? (
                                            values.models[idx].fields.map((field, fieldIdx) => (
                                                <div className="model-field" key={fieldIdx}>
                                                    <TextField
                                                        fullWidth
                                                        label="Name"
                                                        variant="outlined"
                                                        value={field.name}
                                                        onChange={formik.handleChange}
                                                        id={`models.${idx}.fields.${fieldIdx}.name`}
                                                        name={`models.${idx}.fields.${fieldIdx}.name`}
                                                    />

                                                    <FormControl fullWidth>
                                                        <InputLabel id={`type-selector-${idx}-${fieldIdx}`}>Type</InputLabel>
                                                        <Select
                                                            labelid={`type-selector-${idx}-${fieldIdx}`}
                                                            id={`models.${idx}.fields.${fieldIdx}.type`}
                                                            name={`models.${idx}.fields.${fieldIdx}.type`}
                                                            value={field.type}
                                                            onChange={formik.handleChange}
                                                            label="Type"
                                                        >
                                                            <MenuItem value={"Integer"}>Integer</MenuItem>
                                                            <MenuItem value={"String"}>String</MenuItem>
                                                            <MenuItem value={"Float"}>Float</MenuItem>
                                                            <MenuItem value={"Boolean"}>Boolean</MenuItem>
                                                            <MenuItem value={"Relation"}>Relation</MenuItem>
                                                        </Select>
                                                    </FormControl>

                                                    <TextField
                                                        fullWidth
                                                        label="Default value"
                                                        variant="outlined"
                                                        value={field.defaultValue}
                                                        onChange={formik.handleChange}
                                                        id={`models.${idx}.fields.${fieldIdx}.defaultValue`}
                                                        name={`models.${idx}.fields.${fieldIdx}.defaultValue`}
                                                    />

                                                    <FormControlLabel control={
                                                        <Checkbox
                                                            checked={field.isNullAcceptable}
                                                            onChange={formik.handleChange}
                                                            id={`models.${idx}.fields.${fieldIdx}.isNullAcceptable`}
                                                            name={`models.${idx}.fields.${fieldIdx}.isNullAcceptable`}
                                                        />
                                                    } label="null acceptable" />
                                                    
                                                    <IconButton onClick={() => onModelFieldDeleted(model, idx, fieldIdx)} color="primary" aria-label="upload picture" component="span">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </div>
                                            ))
                                        ) : <div></div>}
                                    </div>
                                    <Button 
                                        className="model-field-add-btn" 
                                        size="small" 
                                        variant="outlined" 
                                        onClick={() => onModelFieldAdded(model, idx)}
                                    >
                                        Add field
                                    </Button>
                            </div>
                        ))
                    ) : <div/>}
                </div>
            </div>

            <Button
                variant="contained"
                type="submit"
                className="submit-btn"
            >
                    Create app
            </Button>
        </div>
    );
};

export default FormPageTwo;