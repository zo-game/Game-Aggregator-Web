import { makeStyles } from "@mui/styles";
import {Paper, Typography, TextField, Button, InputAdornment, IconButton} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {useState} from 'react';
import { registration } from "../api/send-api-action";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const useStyles = makeStyles((theme) => ({
    loginForm: 
    {
        position:'fixed',
        width: '30%',
        height: '65%',
        left: '35%',
        top: '15%',
        padding: '2vh 2vw 1vh 2vw',        
    },

    textFieldForm: {
        width: '70%',
    }
}))
export function RegisterForm():JSX.Element{
    const classes = useStyles();
    const [isPassVisible, setPassVisible] = useState(false);
    const [isPassRepeatVisible, setPassRepeatVisible] = useState(false);

    const [loginDirty, setLoginDirty] = useState(false);
    const [loginError, setLoginError] = useState('');

    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const [password2Dirty, setPassword2Dirty] = useState(false);
    const [password2Error, setPassword2Error] = useState('');

    const [formData, changeForm] = useState<{login: string; password: string, password2: string}>({
        login: '', password: '', password2: ''
    })

    const handleLogin = (evt: React.ChangeEvent<HTMLInputElement>) => {
        changeForm({...formData, login: evt.target.value});
        setLoginDirty(false);
    }
    const handlePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
        changeForm({...formData, password: evt.target.value});
        setPasswordDirty(false);
    }

    const handlePassword2 = (evt: React.ChangeEvent<HTMLInputElement>) => {
        changeForm({...formData, password2: evt.target.value});
        setPassword2Dirty(false);
    }

    const handleSubmit = () => {
        console.log(formData);
        isLoginEmptyChecking();
        isPasswordEmptyChecking();
        isPasswordShortChecking();
        isPasswordEqualChecking();//
        
        registration(formData.login, formData.password);
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

    const isPasswordEqualChecking = () => {
        if(formData.password !== formData.password2){
            setPassword2Error('Пароли не совпадают')
            setPassword2Dirty(true);
        }
    }

    const isPasswordShortChecking = () => {
        if(formData.password.length > 0 && formData.password.length <= 5){
            setPasswordError('Слишком короткий пароль')
            setPasswordDirty(true);            
        }
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
            case 'password2':
                isPasswordEqualChecking();
        }
    }

    return(
    <Paper  className={classes.loginForm} elevation={12} sx={{borderRadius:'15px'}}>
        <div style={{ textAlign:'center'}} className='black'>
            <Typography variant="h3" sx={{ textAlign:'center', marginBottom:"5%"}}>Регистрация</Typography>
            <TextField variant="outlined" label='Логин' placeholder="Введите логин" 
                className={classes.textFieldForm} sx={{marginBottom:'5%'}} onChange={handleLogin}
                onBlur={e => blurHandler(e)} name='login' error={loginDirty} helperText={loginDirty ? loginError : ''}/>

            <TextField variant="outlined" label='Пароль' placeholder="Введите пароль" className={classes.textFieldForm} 
            type={isPassVisible ? 'text' : 'password'} sx={{marginBottom:'5%'}} onChange={handlePassword} name='password' onBlur={(e) => blurHandler(e)}
            error={passwordDirty} helperText={passwordDirty ? passwordError : ''}
                       InputProps={{
                           endAdornment: (
                               <InputAdornment position="end">

                                   <IconButton aria-label="toggle password"
                                               edge="end"
                                               onClick={(e)=> { setPassVisible(!isPassVisible)
                                               }}
                                   >
                                       {
                                           !isPassVisible
                                               ? <VisibilityOffIcon color={"disabled"}
                                                                    sx={{fontSize: 30, paddingLeft: 0}}/>
                                               : <VisibilityIcon color={"secondary"}
                                                                 sx={{fontSize: 30, paddingLeft: 0}}/>
                                       }
                                   </IconButton>
                               </InputAdornment>
                           )
                       }}/><br/>

            <TextField variant="outlined" label='Повторите пароль' placeholder="Введите пароль" className={classes.textFieldForm} 
            type={isPassRepeatVisible ? 'text' : 'password'} sx={{marginBottom:'5%'}} onChange={handlePassword2} name='password2' onBlur={(e) => blurHandler(e)}
            error={password2Dirty} helperText={password2Dirty ? password2Error : ''}
                       InputProps={{
                           endAdornment: (
                               <InputAdornment position="end">

                                   <IconButton aria-label="toggle password"
                                               edge="end"
                                               onClick={(e)=> { setPassRepeatVisible(!isPassRepeatVisible)
                                               }}
                                   >
                                       {
                                           !isPassRepeatVisible
                                               ? <VisibilityOffIcon color={"disabled"}
                                                                    sx={{fontSize: 30, paddingLeft: 0}}/>
                                               : <VisibilityIcon color={"secondary"}
                                                                 sx={{fontSize: 30, paddingLeft: 0}}/>
                                       }
                                   </IconButton>
                               </InputAdornment>
                           )
                       }}/><br/>

            {/* <TextField variant="outlined" label='Повторите пароль' placeholder="Введите пароль" className={classes.textFieldForm} type='password' sx={{marginBottom:'5%'}} onChange={handlePassword2}/><br/> */}
            <Button variant='contained' color='secondary' size='large'  endIcon={<SendIcon />} onClick={handleSubmit}>Зарегистрироваться</Button>
        </div>
    </Paper>
    )
}