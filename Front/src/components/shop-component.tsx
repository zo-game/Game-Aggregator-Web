import {getGames} from "../api/api-steam-data";
import {useEffect} from "react";

export default function ShopComponent():JSX.Element{
    useEffect(() => {
        getGames();
    },[]);

    return(
        <></>
    );
}
