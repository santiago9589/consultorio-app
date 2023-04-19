import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import FormComponent from "../component/form/FormComponent"
import InputComponent from "../component/input/InputComponent"

interface contactProps {
    email: string,
    name: string,
    cellNumber: string
}


const initValues: contactProps = {
    email: "",
    name: "",
    cellNumber: ""
}



const ContactsUs = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(),
        name: Yup.string().required(),
        cellNumber: Yup.string().required()
    })

    const formik = useFormik<contactProps>({

        initialValues: initValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            handleReset(values)
        }
    })

    const { handleSubmit, handleReset, values, errors, touched, handleChange } = formik

    return (
        <FormComponent handleSubmit={handleSubmit}>
            <InputComponent
                type='text'
                placeholder='ingresar name'
                name="name"
                handleChange={handleChange}
                value={values.name}
                error={errors.name!}
                touched={touched.name!}
            />
             <InputComponent
                type='text'
                placeholder='ingresar email'
                name="email"
                handleChange={handleChange}
                value={values.email}
                error={errors.email!}
                touched={touched.email!}
            />
            <InputComponent
                type='text'
                placeholder='ingresar numero telefono'
                name="cellNumber"
                handleChange={handleChange}
                value={values.cellNumber}
                error={errors.cellNumber!}
                touched={touched.cellNumber!}
            />

        </FormComponent>
    )
}

export default ContactsUs
