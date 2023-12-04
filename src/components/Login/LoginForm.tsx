import React from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};


const LoginForm: React.FC = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Email is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Email is required'
            } else if (values.password.length < 3) {
                errors.password = 'Password should be 3 or more symbols'
            }
            return errors
        },
        onSubmit: values => {
            // dispatch(loginTC(values))
            alert(JSON.stringify(values));
            // formik.resetForm()
        },
    })

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={formik.handleSubmit}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                validateStatus={formik.touched.email && formik.errors.email ? 'error' : ''}
                help={
                    formik.touched.email && formik.errors.email ? (
                        <span style={{color: 'red'}}>{formik.errors.email}</span>
                    ) : null
                }
            >
                <Input
                    {...formik.getFieldProps('email')}
                    name="email"
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                validateStatus={formik.touched.password && formik.errors.password ? 'error' : ''}

                help={
                    formik.touched.password && formik.errors.password ? (
                        <span style={{color: 'red'}}>{formik.errors.password}</span>
                    ) : null
                }
            >
                <Input.Password
                    {...formik.getFieldProps('password')}
                    name="password"
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
            </Form.Item>

            <Form.Item<FieldType>
                name="rememberMe"
                valuePropName={formik.values.rememberMe ? 'unchecked' : 'checked'}
                wrapperCol={{offset: 8, span: 16}}
            >
                <Checkbox
                    checked={formik.values.rememberMe}
                    {...formik.getFieldProps('rememberMe')}
                >Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    )
};

export default LoginForm;


//Types
type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

type FormikErrorType = {
    email?: string
    password?: string
}