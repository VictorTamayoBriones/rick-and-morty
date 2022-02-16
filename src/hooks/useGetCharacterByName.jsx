import { useState, useEffect } from 'react';
import axios from "axios"

export const useGetCharacterByName = (name)=>{
    
    const[character, setCharacter]=useState({});

    const getCharacter = async () =>{
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
        setCharacter(res.data);
    }

    useEffect(()=>{
        getCharacter();
    }, []);
    
    return character;

}