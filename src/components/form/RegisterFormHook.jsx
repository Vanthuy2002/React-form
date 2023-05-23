import { useForm } from 'react-hook-form';
import InputHook from '../input/InputHook';
import RadioHook from '../radio/RadioHook';
import CheckboxHook from '../checkbox/CheckboxHook';
import SelectHook from '../select/SelectHook';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const RegisterFormHook = () => {
  const formatPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const formatUser = /^[A-Za-z0-9 ]+$/;
  const schema = yup.object({
    username: yup
      .string()
      .required('Field is required')
      .matches(formatUser, { message: 'Can not contains special characters' }),
    email: yup
      .string()
      .required('This field is required')
      .email('This field must be email'),
    password: yup
      .string()
      .required('Please set a password')
      .matches(formatPass, {
        message:
          'One lowercase, one uppercase, one number, one special character',
      }),
    gender: yup
      .string()
      .required('Please set your gender')
      .oneOf(['male', 'female'], 'Must be choose one of them'),
    job: yup.string().required('Please choose one job'),
    terms: yup.boolean().required('Please accept the terms and policy'),
  });

  const { formState, handleSubmit, control, setValue, reset, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      gender: 'male',
    },
  });

  const watchGender = watch('gender');

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);

        reset({
          username: '',
          email: '',
          password: '',
          gender: 'male',
          job: '',
          terms: false,
        });
      }, 3000);
    });
  };

  return (
    <form
      autoComplete='off'
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-xs mx-auto my-10'
    >
      {/* username */}
      <div className='flex flex-col gap-3 mt-5'>
        <label className='cursor-pointer' htmlFor='username'>
          Username
        </label>
        <InputHook
          control={control}
          name='username'
          id='username'
          placeholder='Enter username...'
        />
        {formState.errors?.username && (
          <p className='text-red-500 text-sm'>
            {formState.errors?.username.message}
          </p>
        )}
      </div>

      {/* email */}
      <div className='flex flex-col gap-3 mt-5'>
        <label className='cursor-pointer' htmlFor='email'>
          Email
        </label>
        <InputHook
          control={control}
          name='email'
          id='email'
          placeholder='Enter email...'
          type='email'
        />
        {formState.errors?.email && (
          <p className='text-red-500 text-sm'>
            {formState.errors?.email.message}
          </p>
        )}
      </div>

      {/* password */}
      <div className='flex flex-col gap-3 mt-5'>
        <label className='cursor-pointer' htmlFor='password'>
          Password
        </label>
        <InputHook
          control={control}
          name='password'
          id='password'
          placeholder='Enter password...'
          type='password'
        />
        {formState.errors?.password && (
          <p className='text-red-500 text-sm'>
            {formState.errors?.password.message}
          </p>
        )}
      </div>

      {/* gender */}
      <div className='flex flex-col gap-3 mt-5'>
        <span>Gender</span>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-x-3'>
            <RadioHook
              name='gender'
              id='male'
              value='male'
              checked={watchGender === 'male'}
              control={control}
            />
            <label htmlFor='male'>Male</label>
          </div>

          <div className='flex items-center gap-x-3'>
            <RadioHook
              name='gender'
              id='female'
              value='female'
              checked={watchGender === 'female'}
              control={control}
            />
            <label htmlFor='female'>Female</label>
          </div>
        </div>

        {formState.errors?.gender && (
          <p className='text-red-500 text-sm'>
            {formState.errors?.gender.message}
          </p>
        )}
      </div>

      {/* Are you is ??? */}
      <div className='flex flex-col gap-3 mt-5'>
        <label className='cursor-pointer'>Are You is ???</label>
        <SelectHook
          control={control}
          setValue={setValue}
          name='job'
          title='Select Your Job'
        />

        {formState.errors?.job && (
          <p className='text-red-500 text-sm'>
            {formState.errors?.job.message}
          </p>
        )}
      </div>

      {/* terms */}
      <div className='flex flex-col gap-3 mt-5'>
        <CheckboxHook
          control={control}
          name='terms'
          id='terms'
          text='I accept the terms and conditions'
        />

        {formState.errors?.terms && (
          <p className='text-red-500 text-sm'>
            {formState.errors?.terms.message}
          </p>
        )}
      </div>

      <button
        className='mt-5 w-full p-3 bg-blue-400 text-lg font-medium text-white rounded-lg grid place-items-center disabled:opacity-50'
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting ? (
          <span className='inline-block w-6 h-6 rounded-full border-2 border-white border-t-transparent animate-spin'></span>
        ) : (
          <span>Submit</span>
        )}
      </button>
    </form>
  );
};

export default RegisterFormHook;
