import React, { useState } from 'react';
import { Button, Typography, IconButton, TextField, MenuItem, Select, InputLabel, FormControl, FormControlLabel, Checkbox, Box, Chip } from '@material-ui/core';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';

const ModelWidget = ({model, idx, formik, onRemovedFromArray, onAddToArray}) => {
    const [recentChoiceValue, setRecentChoiceValue] = useState('');

    const {values} = formik;
    const otherModels = [...values.models.slice(0, idx), ...values.models.slice(idx + 1)];

    const onModelFieldAdded = (model, idx) => {
        formik.setFieldValue(
            `models.${idx}.fields`, 
            [...model.fields, {'type': 'Integer', 'name': '', 'nullable': false, 'default': '', 'choices': []}]
        );
    };

    const onModelFieldDeleted = (model, idx, fieldIdx) => {
        formik.setFieldValue(
            `models.${idx}.fields`, 
            [...model.fields.slice(0, fieldIdx), ...model.fields.slice(fieldIdx + 1)]
        );
    };

    const onModelDeleted = (models, idx) => {
        formik.setFieldValue(
            `models`, 
            [...models.slice(0, idx), ...models.slice(idx + 1)]
        );
    };

    return (
        <div className="model-container" key={idx}>
            <div>
                <TextField
                    value={model.title}
                    id={`models.${idx}.title`}
                    name={`models.${idx}.title`}
                    onChange={formik.handleChange}
                    variant="standard"
                    className="model-title"
                />

                <IconButton onClick={() => onModelDeleted(values.models, idx)} color="primary" aria-label="delete model" component="span">
                    <DeleteIcon />
                </IconButton>
            </div>
                <div>
                    {values.models[idx].fields && values.models[idx].fields.length > 0 ? (
                        values.models[idx].fields.map((field, fieldIdx) => (
                            <div className="model-field" key={fieldIdx}>
                                {
                                    field.type === 'Relation' ? (
                                        <FormControl fullWidth>
                                            <InputLabel id={`relation-selector-${idx}-${fieldIdx}`}>Relation to</InputLabel>
                                            <Select
                                                labelid={`relation-selector-${idx}-${fieldIdx}`}
                                                id={`models.${idx}.fields.${fieldIdx}.name`}
                                                name={`models.${idx}.fields.${fieldIdx}.name`}
                                                value={field.name}
                                                onChange={formik.handleChange}
                                                label="Relation to"
                                            >
                                                {
                                                    otherModels.map((realtionModel, relModelIdx) => (
                                                        <MenuItem key={relModelIdx} value={realtionModel.title.toLowerCase()}>{realtionModel.title.toLowerCase()}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    ) : (
                                        <TextField
                                        fullWidth
                                        label="Name"
                                        variant="outlined"
                                        value={field.name}
                                        onChange={formik.handleChange}
                                        id={`models.${idx}.fields.${fieldIdx}.name`}
                                        name={`models.${idx}.fields.${fieldIdx}.name`}
                                    />
                                    )
                                }

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
                                        <MenuItem value={"Text"}>String</MenuItem>
                                        <MenuItem value={"Date"}>Date</MenuItem>
                                        <MenuItem value={"DateTime"}>DateTime</MenuItem>
                                        <MenuItem value={"enum"}>Text Choice</MenuItem>
                                        <MenuItem value={"Float"}>Float</MenuItem>
                                        <MenuItem value={"Boolean"}>Boolean</MenuItem>
                                        <MenuItem value={"Relation"}>Relation</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    fullWidth
                                    label="Default value"
                                    variant="outlined"
                                    value={field.default}
                                    onChange={formik.handleChange}
                                    id={`models.${idx}.fields.${fieldIdx}.default`}
                                    name={`models.${idx}.fields.${fieldIdx}.default`}
                                />

                                <FormControlLabel control={
                                    <Checkbox
                                        checked={field.nullable}
                                        onChange={formik.handleChange}
                                        id={`models.${idx}.fields.${fieldIdx}.nullable`}
                                        name={`models.${idx}.fields.${fieldIdx}.nullable`}
                                    />
                                } label="null acceptable" />

                                {
                                    field.type === 'enum' && (
                                        <div className="chip-array-row">
                                            <Box sx={{display: 'flex', justifyContent: 'flex-start', listStyle: 'none', p: 0, m: 0,}}component="ul">
                                                {
                                                    field.choices.map((choiceValue, choiceIdx) => {
                                                        return (
                                                            <li className="list-item" key={choiceIdx}>
                                                                <Chip
                                                                    label={choiceValue}
                                                                    onDelete={() => onRemovedFromArray(`models.${idx}.fields.${fieldIdx}.choices`, field.choices, choiceIdx)}
                                                                />
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </Box>

                                            <TextField
                                                fullwidth
                                                label="Enter choice"
                                                variant="standard"
                                                onChange={(e) => setRecentChoiceValue(e.target.value)}
                                                value={recentChoiceValue}
                                                onKeyUp={(e) => e.keyCode === 13 && onAddToArray(`models.${idx}.fields.${fieldIdx}.choices`, field.choices, recentChoiceValue, setRecentChoiceValue)}
                                            />
                                        </div>
                                    )
                                }
                                
                                <IconButton onClick={() => onModelFieldDeleted(model, idx, fieldIdx)} color="primary" aria-label="delete model field" component="span">
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
    )
};

const FormPageTwo = ({formik, onRemovedFromArray, onAddToArray}) => {
    const {values} = formik;

    const onModelAdded = () => {
        formik.setFieldValue(
            `models`, 
            [...formik.values.models, {'title': 'Model', relations: [], fields: []}]
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
                        values.models.map((model, idx) => {
                            return <ModelWidget model={model} idx={idx} formik={formik} onRemovedFromArray={onRemovedFromArray} onAddToArray={onAddToArray}/>
                        })
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