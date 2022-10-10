import { makeStyles } from "@mui/styles";
import {Paper, Typography, TextField, Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {useState} from 'react';
import { Link } from '@mui/material';

// import ChangeEventHa


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
    const [formData, changeForm] = useState<{login: string; password: string}>({
        login: '', password: ''
    })

    const handleLogin = (evt: React.ChangeEvent<HTMLInputElement>) => {
        changeForm({...formData, login: evt.target.value});
    }
    const handlePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
        changeForm({...formData, password: evt.target.value});
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    return(
    <Paper  className={classes.loginForm} elevation={12} sx={{borderRadius:'15px'}}>
        <div style={{ textAlign:'center'}} className='black'>
            <Typography variant="h3" sx={{ textAlign:'center', marginBottom:"5%"}}>Авторизация</Typography>
            <TextField variant="outlined" label='Login' placeholder="Введите логин" className={classes.textFieldForm} sx={{marginBottom:'5%'}} onChange={handleLogin}/>
            <TextField variant="outlined" label='Password' placeholder="Введите пароль" className={classes.textFieldForm} type='password' sx={{marginBottom:'5%'}} onChange={handlePassword}/><br/>
            <Button variant='contained' color='secondary' size='large'  endIcon={<SendIcon />} onClick={handleSubmit}>Войти</Button><br/><br/>
            <Link underline='hover' href='/registration'>Еще нет учетной записи</Link>
        </div>
    </Paper>
    )
}