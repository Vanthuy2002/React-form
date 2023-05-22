import { useForm } from 'react-hook-form';
import InputHook from '../input/InputHook';
import RadioHook from '../radio/RadioHook';
import CheckboxHook from '../checkbox/CheckboxHook';

const RegisterFormHook = () => {
  const { formState, handleSubmit, control } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form
      autoComplete='off'
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-xs mx-auto my-10'
    >
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
        {formState.errors.username && (
          <p className='text-red-500 text-sm'>Enter your username</p>
        )}
      </div>

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
        {formState.errors.email && (
          <p className='text-red-500 text-sm'>Enter your email</p>
        )}
      </div>

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
        {formState.errors.password && (
          <p className='text-red-500 text-sm'>Enter your password</p>
        )}
      </div>

      <div className='flex flex-col gap-3 mt-5'>
        <label className='cursor-pointer'>Gender</label>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-x-3'>
            <RadioHook name='gender' value='male' control={control} />
            <span>Male</span>
          </div>

          <div className='flex items-center gap-x-3'>
            <RadioHook name='gender' value='female' control={control} />
            <span>Female</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 mt-5'>
        <CheckboxHook
          control={control}
          name='terms'
          id='terms'
          text='I accept the terms and conditions'
        />
      </div>

      <button className='mt-5 w-full p-3 bg-blue-400 text-lg font-medium text-white rounded-lg'>
        Submit
      </button>
    </form>
  );
};

export default RegisterFormHook;
