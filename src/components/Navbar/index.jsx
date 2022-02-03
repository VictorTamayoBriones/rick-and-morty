import { NavLink, useNavigate } from 'react-router-dom'
import { Nav } from './style'
import Icon from '../../images/icon.png';

export const Navbar = () =>{

    const navigate = useNavigate();

    const handleClick = ()=> navigate('/')

    return(
        <Nav>
            <img src={Icon} alt="icon" onClick={handleClick} />
            <ul>
                <li><NavLink className={ ({isActive})=> (isActive ? 'active' : '')} to="/" >Home</NavLink></li>
                <li><NavLink className={ ({isActive})=> (isActive ? 'active' : '')} to="/characters" >Characters</NavLink></li>
                <li><NavLink className={ ({isActive})=> (isActive ? 'active' : '')} to="/locations" >Locations</NavLink></li>
                <li><NavLink className={ ({isActive})=> (isActive ? 'active' : '')} to="/episodes" >Episodes</NavLink></li>
            </ul>
        </Nav>
    )
}