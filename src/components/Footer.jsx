import logo from '../assets/logobw.png'
import '../style/footer.css'

function Footer() {
    return (
        <footer className="footerContainer">  
            <img src={logo} alt='logo application Kasa'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;