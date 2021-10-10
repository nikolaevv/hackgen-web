import React, { useState } from 'react';
import InputColor from 'react-input-color';
import { withRouter } from 'react-router';
import { TextField, Button, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment, Chip, Box, Paper, Typography } from '@material-ui/core';

const FormPageOne = ({formik, history, onRemovedFromArray, onAddToArray}) => {
    const [recentComponentName, setRecentComponentName] = useState('');
    const {handleChange, values, touched, errors, setFieldValue} = formik;

    const onContinueClicked = () => {
        if (formik.isValid) {
            history.push('/app/create/2');
        }
    };

    return (
        <div className="form-page-one">
            <Typography color="seconary" variant="h5">1 of 2</Typography>
            <TextField
                fullWidth
                label="Title"
                variant="outlined"
                value={values.title}
                onChange={handleChange}
                error={touched.title && Boolean(errors.title)}
                helpertext={touched.title && errors.title}
                id="title"
                name="title"
            />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Theme</InputLabel>
                <Select
                    labelid="demo-simple-select-label"
                    id="theme"
                    name="theme"
                    value={values.theme}
                    onChange={handleChange}
                    error={touched.theme && Boolean(errors.theme)}
                    helpertext={touched.theme && errors.theme}
                    label="Theme"
                >
                    <MenuItem value={"light"}>light</MenuItem>
                    <MenuItem value={"dark"}>dark</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="main-color-select-label">Main color</InputLabel>
                <OutlinedInput
                    labelid="main-color-select-label"
                    id="mainColor"
                    name="mainColor"
                    value={values.mainColor}
                    onChange={handleChange}
                    error={touched.mainColor && Boolean(errors.mainColor)}
                    helpertext={touched.mainColor && errors.mainColor}
                    label="Main Color"
                    endAdornment={
                        <InputAdornment position="end">
                            <InputColor initialValue={values.mainColor} onChange={(color) => setFieldValue("mainColor", color.hex)} />
                        </InputAdornment>
                    }
                >
                </OutlinedInput>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="contrast-color-select-label">Contrast Color</InputLabel>
                <OutlinedInput
                    labelid="contrast-color-select-label"
                    id="contrastColor"
                    name="contrastColor"
                    value={values.contrastColor}
                    onChange={handleChange}
                    error={touched.contrastColor && Boolean(errors.contrastColor)}
                    helpertext={touched.contrastColor && errors.contrastColor}
                    label="Contrast Color"
                    endAdornment={
                        <InputAdornment position="end">
                            <InputColor initialValue={values.contrastColor} onChange={(color) => setFieldValue("contrastColor", color.hex)} />
                        </InputAdornment>
                    }
                >
                </OutlinedInput>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="secondary-color-select-label">Secondary Color</InputLabel>
                <OutlinedInput
                    labelid="secondary-color-select-label"
                    id="secondaryColor"
                    name="secondaryColor"
                    value={values.secondaryColor}
                    onChange={handleChange}
                    error={touched.secondaryColor && Boolean(errors.secondaryColor)}
                    helpertext={touched.secondaryColor && errors.secondaryColor}
                    label="Secondary Color"
                    endAdornment={
                        <InputAdornment position="end">
                            <InputColor initialValue={values.secondaryColor} onChange={(color) => setFieldValue("secondaryColor", color.hex)} />
                        </InputAdornment>
                    }
                >
                </OutlinedInput>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="secondary-contrast-color-select-label">Secondary contrast color</InputLabel>
                <OutlinedInput
                    labelid="secondary-contrast-color-select-label"
                    id="secondaryContrastColor"
                    name="secondaryContrastColor"
                    value={values.secondaryContrastColor}
                    error={touched.secondaryContrastColor && Boolean(errors.secondaryContrastColor)}
                    helpertext={touched.secondaryContrastColor && errors.secondaryContrastColor}
                    label="Secondary contrast color"
                    endAdornment={
                        <InputAdornment position="end">
                            <InputColor initialValue={values.secondaryContrastColor} onChange={(color) => setFieldValue("secondaryContrastColor", color.hex)} />
                        </InputAdornment>
                    }
                >
                </OutlinedInput>
            </FormControl>
            
            <Paper 
                color="secondary"
                sx={{
                    p: 2,
                }}
            >
                <Typography 
                    variant="body2" 
                    style={{
                        marginBottom: "0.5em"
                    }}
                >
                    React components
                </Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0,
                    m: 0,
                }}
                component="ul"
                >
                    {
                        values.componentNames.map((name, idx) => {
                            return (
                                <li className="list-item" key={idx}>
                                    <Chip
                                        label={name}
                                        onDelete={() => onRemovedFromArray('componentNames', values.componentNames, idx)}
                                    />
                                </li>
                            );
                        })
                    }
                </Box>

                <TextField 
                    label=""
                    variant="standard"
                    onChange={(e) => setRecentComponentName(e.target.value)}
                    value={recentComponentName}
                    onKeyUp={(e) => e.keyCode === 13 && onAddToArray('componentNames', values.componentNames, recentComponentName, setRecentComponentName)}
                />
                
            </Paper>

            <Button
                variant="contained"
                onClick={onContinueClicked}
            >
                    Continue
            </Button>
        </div>
    );
};

export default withRouter(FormPageOne);