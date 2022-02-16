import { useParams } from 'react-router-dom'
import { useGetCharacter } from '../../hooks/useGetCharacter';
import { CharacterContainer } from '../../components/Container';
import { Card, CardBody } from '../../components/Cards';

export const Characther = () =>{

    const params = useParams();
    
    const character = [useGetCharacter(params.id)];

    return(
        <CharacterContainer>
            {
                character.map(({image, name, origin, location, status, species, gender}, index)=>{
                    return(
                        <Card flex key={index}>
                            <img src={image} alt={name} />
                            <CardBody>
                                <h3><span>Name: </span>{name}</h3>
                                <p><span>Origin: </span>{origin != undefined ? origin.name : 'unknown'}</p>
                                <p><span>Location: </span>{location != undefined ? location.name : 'unknown'}</p>
                                <div className="about">
                                    <p className={`status-${status}`} >Status: {status}</p>
                                    <p>Specie: {species}</p>
                                    <p>Gender: {gender}</p>
                                </div>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </CharacterContainer>
    )
}