import { makeStyles } from "@mui/styles";
import {Paper, Typography, TextField, Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {useContext, useState} from 'react';
import { Link } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {InputProps} from "@mui/material";
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    loginForm: 
    {
        position:'fixed',
        width: '30%',
        height: '55%',
        left: '35%',
        top: '15%',
        padding: '2vh 2vw 1vh 2vw',        
    },

    textFieldForm: {
        width: '70%',
    }
}))
export function LoginForm():JSX.Element{
    const classes = useStyles();
    const [isPassNotVisible, setPassVisible] = useState(true);

    const [loginDirty, setLoginDirty] = useState(false);
    const [loginError, setLoginError] = useState('');

    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [formData, changeForm] = useState<{login: string; password: string}>({
        login: '', password: ''
    })

    const handleLogin = (evt: React.ChangeEvent<HTMLInputElement>) => {
        changeForm({...formData, login: evt.target.value});
        setLoginDirty(false);
    }
    const handlePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
        changeForm({...formData, password: evt.target.value});
        setPasswordDirty(false);
    }

    const handleSubmit = () => {
        console.log(formData);
        isLoginEmptyChecking();
        isPasswordEmptyChecking();
        isPasswordShortChecking();
    }

    const blurHandler = (e : React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
        switch(e.target.name){
            case 'login':
                isLoginEmptyChecking();
                break   
            case 'password':
                isPasswordEmptyChecking();
                isPasswordShortChecking();
                break
        }
    }
    const isLoginEmptyChecking = () => {
        if(formData.login === ''){
            setLoginError('Поле Логин не должно быть пустым')
            setLoginDirty(true);
        }
    }
    const isPasswordEmptyChecking = () => {
        if(formData.password === ''){
            setPasswordError('Поле Пароль не должно быть пустым')
            setPasswordDirty(true);
        }
    }
    const isPasswordShortChecking = () => {
        if(formData.password.length > 0 && formData.password.length <= 5){
            setPasswordError('Слишком короткий пароль')
            setPasswordDirty(true);            
        }
    }

    return(
    <Paper  className={classes.loginForm} elevation={12} sx={{borderRadius:'15px'}}>
        <div style={{ textAlign:'center'}} className='black'>
            <Typography variant="h3" sx={{ textAlign:'center', marginBottom:"5%"}}>Авторизация</Typography>
            <TextField variant="outlined" label='Логин' placeholder="Введите логин" 
                className={classes.textFieldForm} sx={{marginBottom:'5%'}} onChange={handleLogin}
                onBlur={e => blurHandler(e)} name='login' error={loginDirty} helperText={loginDirty ? loginError : ''}/>



            <TextField variant="outlined" label='Пароль' placeholder="Введите пароль" className={classes.textFieldForm} 
            type={isPassNotVisible ? 'password' : 'text'} sx={{marginBottom:'5%'}} onChange={handlePassword}
                       name='password' onBlur={(e) => blurHandler(e)}
            error={passwordDirty} helperText={passwordDirty ? passwordError : ''} style={{ }}
                       InputProps={{
                           endAdornment: (
                               <InputAdornment position="end">

                                        <IconButton aria-label="toggle password"
                                                   edge="end"
                                                    onClick={(e)=> { setPassVisible(!isPassNotVisible)
                                                    }}
                                        >
                                            {
                                                isPassNotVisible
                                                    ? <VisibilityOffIcon color={"disabled"}
                                                                         sx={{fontSize: 30, paddingLeft: 0}}/>
                                                    : <VisibilityIcon color={"secondary"}
                                                                      sx={{fontSize: 30, paddingLeft: 0}}/>
                                            }
                                        </IconButton>
                               </InputAdornment>
                           )
                       }}
            />
            <br/>

            <Button variant='contained' color='secondary' size='large'  endIcon={<SendIcon />} onClick={handleSubmit}>Войти</Button><br/><br/>
            <Link underline='hover' href='/registration'>Еще нет учетной записи</Link>
        </div>
    </Paper>
    )
}
