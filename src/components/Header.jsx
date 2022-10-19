import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header() {
    return (
        <header className="headerContainer">  
            <img src={logo} alt='logo application Kasa'/>
            <nav>
                <Link to="/" className='accueil'>Accueil</Link>
                <Link to="/about" className='apropos'>A propos</Link>
            </nav>
        </header>
    )
}

export default Header;