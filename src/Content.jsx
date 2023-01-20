import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

export const Content = () => {
    return(
        <Routes>
            <Route exact path='/cart' element = {<Cart/>}></Route>
            <Route exact path='/' element = {<Home/>}></Route>
        </Routes>
    )
    
    
}