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
                    characters.results?.map(({id, image, name, status, species})=>{
                        return(
                            <Card key={ id } flex >
                                <img src={ image } alt={ name } title={ name } />
                                <CardBody>
                                    <h3><span>Name: </span>{ name }</h3>
                                    <div className="about">
                                        <p className={`status-${status}`} >Status: { status }</p>
                                        <p>Specie: { species }</p>
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    })
                }
            </CharactersContainer>
        </>
    )
}