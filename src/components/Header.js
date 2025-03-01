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
                {/* <div className="title"><h1>조별과제(Movie관련 페이지_강은교,차현욱,황회순)</h1></div> */}
                <div className="title"><h1>CHK MOVIE</h1></div>
                <nav className='primary-nav'>
                    <Link to="/news">NEWS</Link>
                    <Link to="/qna">QnA</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;