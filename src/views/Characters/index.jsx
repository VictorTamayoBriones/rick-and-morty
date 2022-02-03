import { Card, CardBody } from "../../components/Cards";
import { CharactersContainer } from "../../components/Container";
import { Navbar } from "../../components/Navbar"
import { Search } from "../../components/Search"
import { useGetCharacters } from "../../hooks/useGetCharacters"


export const Characters = () =>{

    const characters = useGetCharacters();
    
    return(
        <>
            <Navbar/>
            <Search/>
            <CharactersContainer>
                {
                    characters.results?.map(({id, image, name, status, species, gender, origin, location})=>{
                        return(
                            <Card key={ id } flex >
                                <img src={ image } alt={ name } title={ name } />
                                <CardBody>
                                    <h3>Name: { name }</h3>
                                    <p>Status: { status }</p>
                                    <p>Specie: { species }</p>
                                    <p>Gender: { gender }</p>
                                    <p>Origin: { origin.name }</p>
                                    <p>Location: { location.name }</p>
                                </CardBody>
                            </Card>
                        )
                    })
                }
            </CharactersContainer>
        </>
    )
}