import SearchIcon from '../../images/search.svg'
import { SearchBar } from './style';

export const Search = () =>{
    return(
        <SearchBar>
            <img src={ SearchIcon } alt="" />
            <input type="text" placeholder='Search Something...' />
        </SearchBar>
    );
}