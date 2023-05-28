import React from 'react';
import InputFomik from '../input/InputFomik';
import { Formik } from 'formik';
import * as yup from 'yup';
import RadioFormik from '../radio/RadioFormik';
import CheckboxFormik from '../checkbox/CheckboxFormik';
import SelectFormik from '../select/SelectFormik';

const RegisterFormik = () => {
  const formatPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const formatUser = /^[A-Za-z0-9 ]+$/;
  return (
    <>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          gender: 'male',
          terms: false,
          job: '',
        }}
        validationSchema={yup.object({
          username: yup
            .string()
            .required('This field is required')
            .matches(formatUser, {
              message: 'Can not contains special characters',
            }),
          email: yup
            .string()
            .email('Invalid email')
            .required('This field is required'),
          password: yup
            .string()
            .required('This field is required')
            .matches(formatPass, {
              message:
                'Must be one lowercase, one upercase, one number, one special characters',
            }),
          gender: yup.string().required('Please set your gender'),
          terms: yup.boolean().oneOf([true], 'Please check the terms'),
          job: yup.string().required('Please choose one job'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {(formik) => {
          const watchGender = formik.values.gender;
          return (
            <form
              autoComplete='off'
              className='w-full max-w-xs mx-auto my-10'
              onSubmit={formik.handleSubmit}
            >
              {/* username */}
              <InputFomik
                label='Username'
                type='text'
                name='username'
                id='username'
                placeholder='Enter username ...'
              />
              {/* email */}
              <InputFomik
                label='Email'
                type='email'
                name='email'
                id='email'
                placeholder='Enter email ...'
              />
              {/* password */}
              <InputFomik
                label='Password'
                type='password'
                name='password'
                id='password'
                placeholder='Enter password ...'
              />
              {/* radio */}
              <div className='flex flex-col gap-3 mt-5'>
                <span>Gender</span>
                <div className='flex items-center gap-5'>
                  <RadioFormik
                    label='Male'
                    name='gender'
                    id='male'
                    value='male'
                    checked={watchGender === 'male'}
                  />

                  <RadioFormik
                    label='Female'
                    name='gender'
                    id='female'
                    value='female'
                    checked={watchGender === 'female'}
                  />
                </div>
              </div>

              {/* select */}
              <SelectFormik
                title='Choose your job'
                name='job'
                setFieldVal={formik.setFieldValue}
              />

              {/* terms */}
              <CheckboxFormik
                name='terms'
                id='terms'
                text='I agree the policy and terms'
              />

              {/* button */}
              <button
                className='mt-5 w-full p-3 bg-blue-400 text-lg font-medium text-white rounded-lg grid place-items-center disabled:opacity-50'
                type='submit'
                disabled={formik.isSubmitting}
              >
                <span>{formik.isSubmitting ? 'Loading...' : 'Submit'}</span>
              </button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterFormik;
