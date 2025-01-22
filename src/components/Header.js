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
                <div className="title"><h1>Movie</h1></div>
                <nav>
                    <Link to="/news">News</Link>
                    <Link to="/qna">QnA</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;