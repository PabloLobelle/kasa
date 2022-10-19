import background from '../assets/Background.png'
import dotbackground from '../assets/dotbackground.png'
import IMG from '../assets/IMG.png'

function Banner() {
    return (
        <section className="bannerContainer">
            <div className="imageContainer">
                <img src={background} alt='logo application Kasa' className='background'/>
                <img src={IMG} alt='logo application Kasa' className='imageBanner'/>
                <img src={dotbackground} alt='logo application Kasa' className='imageDot'/>
                <p>
                   Chez vous, partout et ailleurs
                </p>
            </div>
        </section>
    )
}

export default Banner;