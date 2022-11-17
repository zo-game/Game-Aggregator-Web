import axious from 'axios';


export const registration = async (login: string, password: string) => {
    try{
        const response = await axious.post('http://127.0.0.1:8000',{
            login, 
            password
        });
        alert(response.data.message);
    }
    catch(e){
        alert(e);
    }

}