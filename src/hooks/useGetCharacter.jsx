import { useState, useEffect } from 'react';
import axios from "axios"

export const useGetCharacter = (id) =>{

    const[character, setCharacter]=useState({});

    const getCharacter = async () =>{
        const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setCharacter(res.data);
    }

    useEffect(()=>{
        getCharacter();
    }, []);
    
    return character;

}