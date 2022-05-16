import React, {useState, useEffect,ChangeEvent} from 'react';
import { Grid , Box, Typography , TextField, Button} from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import {login} from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

// useState : primeiro Hook responsável por fazer controle do estado do componente, um gancho para adicionar um estado em um componente funcional

function Login(){
  let history = useHistory();
  const [token,setToken] = useLocalStorage('token');
  // setUserLogin : atualizar com novos dados, já que eles estão vazio
  const [userLogin,setUserLogin] = useState<UserLogin>(
    {
      id:0,
      usuario:'',
      senha:'',
      token:''
    }
    )

    function updatedModel(e:ChangeEvent<HTMLInputElement>){
      setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value  
      })
    }

        useEffect(()=>{
            if(token!==''){
              history.push('/home')
            }
        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
      // e.preventDefault();  : previne o comportamento padrão do botão, é ele que impede a atualização da tela
      e.preventDefault();
      try{
          await login('/usuarios/logar', userLogin, setToken)
          alert('Usuário logado com sucesso!');
      }catch(error){
          alert('Dados do usuário inconsistentes. Erro ao logar!');
      }
    }

  return(
      // direction='row' => transformar essa estrutura em uma linha, logo depois eu alinho o conteúdo no centro, e o que está dentro dele (itens) também no centro
      <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid  alignItems='center' xs={6}>
            <Box paddingX={20}>
                <form onSubmit={onSubmit}>
                  {/* gutterBottom : margem inferior */}
                  {/* style={{fontWeight:'bold'}}  => colocar em negrito */}
                  <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos'>Entrar</Typography>
                  <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth/>
                  <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                  <Box marginTop={2} textAlign='center'>
                    {/* a tag link é utilizada para colocar o botão */}
                    
                      {/* submit: para envio de informações, no caso os dados de usuario e senha  */}
                        <Button type='submit'  variant='contained' color='primary'>
                          Logar
                        </Button>
                    
                  </Box>
                </form>
                <Box display='flex' justifyContent='center' marginTop={2}>
                  <Box marginRight={1}>
                    <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                  </Box>
                  {/* Depois de criar a rota la em App.tsx, agora eu irei criar o link */}
                  <Link to ='/cadastrousuario'>
                      <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                  </Link>
                 
                </Box>
            </Box>
        </Grid>
        <Grid xs={6} className='imagem'>

        </Grid>
      </Grid>  
  );
}

export default Login;