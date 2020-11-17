import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav>
            <h1>React eCommerce</h1>
            <div className='nav-icon' onClick={handleClick}>
                <i className= {clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <li><NavLink onClick={handleClick} to='/'>Home</NavLink></li>
                <li><NavLink onClick={handleClick} to='/products'>Products</NavLink></li>
                <li><NavLink onClick={handleClick} to='/about'>About</NavLink></li>
            </ul>
        </nav>
    )

}
export default Nav;
