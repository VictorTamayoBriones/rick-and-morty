import { MainContainer } from '../../components/Container'
import { Navbar } from '../../components/Navbar'
import { MainTitle } from '../../components/Titles'
import MainPng from '../../images/main.png';

export const Home = () =>{
    return(
        <>
            <Navbar/>
            <MainContainer>
                <MainTitle>Rick and Morty App</MainTitle>
                <img src={ MainPng } alt="Rick and Morty" />
            </MainContainer>
        </>
    )
}