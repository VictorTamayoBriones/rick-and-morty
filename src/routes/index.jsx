import { Routes, Route } from 'react-router-dom'
import { Home } from '../views/Home';
import { Characters } from '../views/Characters';
import { Locations } from '../views/Locations';
import { Episodes } from '../views/Episodes';

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/characters" element={<Characters/>} />
            <Route path="/locations" element={<Locations/>} />
            <Route path="/episodes" element={<Episodes/>} />
        </Routes>
    );
}