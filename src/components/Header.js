import { Link } from 'react-router-dom';
import logo from '../imgs/logo.jpg';
import './Header.css';

const Header = () => {

    return (
        <div>
            <div className="header">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <h1>이자리에 네비게이터 들어가면 돼</h1>
            </div>
    
        </div>
    );
};


export default Header;