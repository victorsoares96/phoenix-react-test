import React from 'react';
import { Box, Button, IconButton, MenuItem, Select, TextField, Toolbar, Typography } from '@material-ui/core';
import * as Yup from 'yup';
import { Field, Form, Formik, FormikProps } from 'formik';
import Header from '../Header';
import { KeyboardDatePicker } from '@material-ui/pickers';
import axios from 'axios';

interface FormValues {
  name: string;
  email: string;
  password: string;
  password_confirmed: string;
  born: Date;
  type: string;
}

function RegisterForm(props: FormikProps<FormValues>) {
  const { values, touched, errors, handleChange, handleBlur, isSubmitting } = props;
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <Form>
      <Typography variant='h4' color='textPrimary' style={{ marginBottom: '1.5rem' }}>
        Criar Usuário
      </Typography>
      <Typography variant='body1' color='textSecondary' style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
        Crie seu usuário aqui!
      </Typography>
      <Box>
        <Typography variant='subtitle1' color='textSecondary' style={{ fontWeight: 600 }}>
          Nome:
        </Typography>
        <TextField 
        fullWidth
        name='name' 
        label='Nome' 
        variant="outlined" 
        placeholder='Nome:' 
        onChange={handleChange} 
        onBlur={handleBlur}
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}/>

        <Typography variant='subtitle1' color='textSecondary' style={{ fontWeight: 600, marginTop: '1.2rem' }}>
          E-Mail:
        </Typography>
        <TextField 
        fullWidth
        name='email' 
        label='E-Mail' 
        variant="outlined" 
        placeholder='E-Mail:' 
        onChange={handleChange} 
        onBlur={handleBlur}
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}/>

        <Typography variant='subtitle1' color='textSecondary' style={{ fontWeight: 600, marginTop: '1.2rem' }}>
          Senha:
        </Typography>
        <TextField 
        fullWidth
        type='password'
        name='password' 
        label='Senha' 
        variant="outlined" 
        placeholder='Senha:' 
        onChange={handleChange} 
        onBlur={handleBlur}
        helperText={touched.password ? errors.password : ""}
        error={touched.password && Boolean(errors.password)} />

        <Typography variant='subtitle1' color='textSecondary' style={{ fontWeight: 600, marginTop: '1.2rem' }}>
          Confirmar Senha:
        </Typography>
        <TextField 
        fullWidth
        type='password'
        name='password_confirmed' 
        label='Senha' 
        variant="outlined" 
        placeholder='Senha:' 
        onChange={handleChange} 
        onBlur={handleBlur}
        helperText={touched.password_confirmed ? errors.password_confirmed : ""}
        error={touched.password_confirmed && Boolean(errors.password_confirmed)}/>

        <Typography variant='subtitle1' color='textSecondary' style={{ fontWeight: 600, marginTop: '1.2rem' }}>
          Data de Nascimento:
        </Typography>
        <input name='born' type='date' onChange={handleChange} onBlur={handleBlur} />
        {errors.born && <Typography>{errors.born}</Typography>}

        <Typography variant='subtitle1' color='textSecondary' style={{ fontWeight: 600, marginTop: '1.2rem' }}>
          Tipo:
        </Typography>
        <Select
          name='type'
          value={values.type}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.type && Boolean(errors.type)}
          label="Tipo"
        >
          <MenuItem value="Administrador">Administrador</MenuItem>
          <MenuItem value='Colaborador'>Colaborador</MenuItem>
          <MenuItem value='Gerente'>Gerente</MenuItem>
        </Select>
      </Box>
      
      <Button 
      type='submit' 
      variant='contained' 
      disableElevation 
      color='secondary' 
      disabled={isSubmitting}
      style={{ fontWeight: 600, marginTop: '2.2rem' }}>
        Criar Usuário
      </Button>
    </Form>
  )
}
function Register() {
  const initialValues: FormValues = { 
    name: '',
    email: '',
    password: '',
    password_confirmed: '',
    born: new Date(),
    type: 'Administrador'
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Invalid password')
      .min(8, 'Digite uma senha entre 8 e 20 digitos')
      .max(20, 'Digite uma senha entre 8 e 20 digitos'),
    password_confirmed: Yup.string().required('Você precisa digitar a senha novamente')
      .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais'),
  });
  return (
    <Box>
      <Header />
      <Box height='100vh' display='flex' flexDirection='column' margin='2.2rem'>
        <Formik
        initialValues={initialValues} 
        onSubmit={async (values, actions) => {
          console.log({ values, actions });
          try {
            await axios.post('https://5ee6cbe252bb0500161fcfeb.mockapi.io/desafio', values);
            alert('Cadastrado')
            actions.resetForm();
          } catch (error) {
            alert('Erro!');
            console.log(error);
          } finally {
            actions.setSubmitting(false);
          }
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validationSchema}
        component={RegisterForm} />
      </Box>
    </Box>
  );
}

export default Register;