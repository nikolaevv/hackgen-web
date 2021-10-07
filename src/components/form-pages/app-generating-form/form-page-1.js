import React, { useState } from 'react';
import InputColor from 'react-input-color';
import { withRouter } from 'react-router';
import { TextField, Button, Select, InputLabel, MenuItem, FormControl, OutlinedInput, InputAdornment, Chip, Box, Paper, Typography } from '@material-ui/core';

const FormPageOne = ({formik, history}) => {
    const [recentComponentName, setRecentComponentName] = useState('');

    const addValueToArray = (event, field, values, value) => {
        if (event.keyCode === 13) {
            formik.setFieldValue(field, [...values, value]);
            setRecentComponentName('');
        }
    };

    const onContinueClicked = () => {
        if (formik.isValid) {
            history.push('/app/create/2');
        }
    };

    return (
        <div>
            <Typography color="seconary" variant="h5">1 of 2</Typography>
            <TextField
                fullWidth
                label="Title"
                variant="outlined"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helpertext={formik.touched.title && formik.errors.title}
                id="title"
                name="title"
            />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Theme</InputLabel>
                <Select
                    labelid="demo-simple-select-label"
                    id="theme"
                    name="theme"
                    value={formik.values.theme}
                    onChange={formik.handleChange}
                    error={formik.touched.theme && Boolean(formik.errors.theme)}
                    helpertext={formik.touched.theme && formik.errors.theme}
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
                    value={formik.values.mainColor}
                    onChange={formik.handleChange}
                    error={formik.touched.mainColor && Boolean(formik.errors.mainColor)}
                    helpertext={formik.touched.mainColor && formik.errors.mainColor}
                    label="Main Color"
                    endAdornment={
                        <InputAdornment position="end">
                            <InputColor initialValue={formik.values.mainColor} onChange={(color) => formik.setFieldValue("mainColor", color.hex)} />
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
                    value={formik.values.contrastColor}
                    onChange={formik.handleChange}
                    error={formik.touched.contrastColor && Boolean(formik.errors.contrastColor)}
                    helpertext={formik.touched.contrastColor && formik.errors.contrastColor}
                    label="Contrast Color"
                    endAdornment={
                        <InputAdornment position="end">
                            <InputColor initialValue={formik.values.contrastColor} onChange={(color) => formik.setFieldValue("contrastColor", color.hex)} />
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
                    value={formik.values.secondaryColor}
                    onChange={formik.handleChange}
                    error={formik.touched.secondaryColor && Boolean(formik.errors.secondaryColor)}
                    helpertext={formik.touched.secondaryColor && formik.errors.secondaryColor}
                    label="Secondary Color"
                    endAdornment={
                        <InputAdornment position="end">
                            <InputColor initialValue={formik.values.secondaryColor} onChange={(color) => formik.setFieldValue("secondaryColor", color.hex)} />
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
                    value={formik.values.secondaryContrastColor}
                    error={formik.touched.secondaryContrastColor && Boolean(formik.errors.secondaryContrastColor)}
                    helpertext={formik.touched.secondaryContrastColor && formik.errors.secondaryContrastColor}
                    label="Secondary contrast color"
                    endAdornment={
                        <InputAdornment position="end">
                            <InputColor initialValue={formik.values.secondaryContrastColor} onChange={(color) => formik.setFieldValue("secondaryContrastColor", color.hex)} />
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
                        formik.values.componentNames.map((name, idx) => {
                            return (
                                <li className="list-item" key={idx}>
                                    <Chip
                                        label={name}
                                        onDelete={() => {}}
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
                    onKeyUp={(e) => addValueToArray(e, "componentNames", formik.values.componentNames, recentComponentName)}
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