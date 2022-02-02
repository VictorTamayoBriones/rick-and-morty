import { NavLink } from 'react-router-dom'
import { Nav } from './style'
import Icon from '../../icon.png';

export const Navbar = () =>{
    return(
        <Nav>
            <img src={Icon} alt="icon" />
            <ul>
                <li><NavLink className={ ({isActive})=> (isActive ? 'active' : '')} to="/" >Home</NavLink></li>
                <li><NavLink className={ ({isActive})=> (isActive ? 'active' : '')} to="/characters" >Characters</NavLink></li>
                <li><NavLink className={ ({isActive})=> (isActive ? 'active' : '')} to="/locations" >Locations</NavLink></li>
                <li><NavLink className={ ({isActive})=> (isActive ? 'active' : '')} to="/episodes" >Episodes</NavLink></li>
            </ul>
        </Nav>
    )
}