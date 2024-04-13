import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function RegistrationScreen({ navigation }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Implement user registration logic here (e.g., call an API)
    console.log('Registered:', data);
    navigation.navigate('Login');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username:</label>
      <input type="text" {...register('username', { required: true })} />
      {errors.username && <p className="error">Username is required</p>}

      <label>Email:</label>
      <input type="email" {...register('email', { required: true })} />
      {errors.email && <p className="error">Valid email is required</p>}

      <label>Password:</label>
      <input type="password" {...register('password', { required: true })} />
      {errors.password && <p className="error">Password is required</p>}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationScreen;
