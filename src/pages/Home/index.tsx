import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useFetch } from '../../services/useFetch';

/**
 * Assets
 */
import logoPhoenix from '../../assets/images/phoenix.png';
import { useHistory } from 'react-router-dom';
import Header from '../Header';

export interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  born: Date;
  type: string;
}
function Home() {
  const { data } = useFetch('/desafio');
  const { push } = useHistory();
  if (!data) {
    return <p>Carregando...</p>;
  }
  return (
    <Box>
      <Header />
      <Box height='100vh' display='flex' flexDirection='column' margin='2.2rem'>
        <Typography variant='h4'>
          Listagem de Usuários
        </Typography>
        <ul>
          {data.map((user: UserProps) => (
            <li key={user.id} style={{ margin: '0.5rem' }}>
              ID: {user.id}<br />
              Nome: {user.name}<br />
              Email: {user.email}<br />
              Nascimento: {new Date(user.born).toLocaleDateString()}<br />
              Tipo: {user.type}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default Home;