import { NavLink } from 'react-router-dom'
import { Home } from '../../views/Home'
import { Characters } from '../../views/Characters'
import { Locations } from '../../views/Locations'
import { Episodes } from '../../views/Episodes'

export const Navbar = () =>{
    return(
        <nav>
            <ul>
                <li><NavLink to={ Home } >Home</NavLink></li>
                <li><NavLink to={ Characters } >Characters</NavLink></li>
                <li><NavLink to={ Locations } >Locations</NavLink></li>
                <li><NavLink to={ Episodes } >Episodes</NavLink></li>
            </ul>
        </nav>
    )
}