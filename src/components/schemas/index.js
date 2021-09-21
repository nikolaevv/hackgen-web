import * as yup from 'yup';

let schema = yup.object().shape({
    title: yup.string().required(),
    theme: yup.string().required(),
    mainColor: yup.string().required(),
    contrastColor: yup.string().required(),
    secondaryColor: yup.string().required(),
    secondaryContrastColor: yup.string().required(),
});

export {schema};