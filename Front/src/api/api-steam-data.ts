import axios from "axios";
import {useState} from "react";

export const getGames = async () => {

    // const url = 'https://api.steampowered.com/ISteamApps/GetAppList/v1/?maxlength=30';
    const url = 'https://store.steampowered.com/api/appdetails?appids=57690';
    const games = await axios.get(url, {

    });

    // console.log(games)

    // "Connection": "Transfer-Encoding"
    // headers:{
    //     'Access-Control-Allow-Origin': '*',
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     "Access-Control-Allow-Credentials": "true",
    //     "Access-Control-Allow-Headers": "X-PINGOTHER content-type",
    //     "Access-Control-Max-Age": "1800",
    //     "Content-Type": "application/json"
    // }
}
