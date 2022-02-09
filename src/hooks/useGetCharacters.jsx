import { useState, useEffect } from 'react'
import axios from "axios"

export  const useGetCharacters = ()=>{
    
    const [characters, setCharacters] = useState([]);

    const getCharacter = async ()=>{
        const res = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(res.data);
    }

    useEffect(()=>{
        getCharacter();
    }, [])


    return characters;

}