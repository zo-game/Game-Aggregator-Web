import axious from 'axios';

// type AuthData = {
//     login: string,
//     password: string, 
//     url: string
// }

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

// export default function SendData(password, login, url) : void{
//     const message =async () => {
//         try{
//             let res = await axious.get(url);
//             let result = res.data;
//         }
//         catch(error){
//             console.log(error);
//         }
        
//     }
// }