import { useState } from 'react';
import { signUpWithEmailAsync } from '../../store/user/authSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeLastName = (event) => {
    setLastName(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const actionResult = await dispatch(signUpWithEmailAsync({name, lastname, email, password}));
      const payload = unwrapResult(actionResult);
  
      // el payload lo dejamos para manejar info despues si queremos
      window.alert('Registro exitoso!');
    } catch (error) {
      // Si hay un error, mostramos el mensaje de error.
      window.alert('El Email ya se encuentra en uso.');
    }
  };

  return (
    <form id='signup-form' onSubmit={handleSubmit} className='flex flex-col'>
      <input type="text" value={name} onChange={handleChangeName} id='name' className='m-2 p-1 min-w-full rounded-md' placeholder='Nombre' />
      <input type="text" value={lastname} onChange={handleChangeLastName} id='lastName' className='m-2 p-1 min-w-full rounded-md' placeholder='Apellido' />
      <input
        type='email'
        placeholder='Correo electrónico'
        id='signup-email'
        value={email}
        onChange={handleChangeEmail}
        className='m-2 p-1 min-w-full rounded-md'
      />
      <input
        type='password'
        placeholder='Contraseña'
        id='signup-password'
        value={password}
        onChange={handleChangePassword}
        className='m-2 p-1 min-w-full rounded-md'
      />
      <button type='submit' className='bg-blue-200 rounded-2xl m-1 p-1 hover:bg-blue-300'>
        Registrarme
      </button>
    </form>
  );
};

export default SignupForm;
