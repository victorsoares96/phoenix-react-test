import { AppBar, Button, Toolbar } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Assets
 */
import logoPhoenix from '../../assets/images/phoenix.png';

function Header() {
  const { push } = useHistory();
  return (
    <AppBar position='sticky'>
        <Toolbar>
          <img src={logoPhoenix} style={{ width: '192px' }} />
          <Button color="inherit" style={{ marginLeft: 'auto' }} onClick={() => push('/')}>
            Ver Usuários
          </Button>
          <Button color="inherit" onClick={() => push('/register')}>
            Criar Usuário
          </Button>
        </Toolbar>
      </AppBar>
  )
}

export default Header;