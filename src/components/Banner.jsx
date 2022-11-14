import background from '../assets/Background.png'
import bannerImage from '../assets/bannerImage.png'
import bannerMobile from '../assets/bannerMobile.png'
import kalenEmsley from '../assets/kalenEmsley.png'
import '../style/banner.css'

function Banner() {
    return (
        <section className="bannerContainer">
            <img src={kalenEmsley} alt='trees, rocks, sea' className='bannerAboutImage'/>
            <img src={bannerMobile} alt='trees, rocks, sea' className='bannerMobileImage'/>
            <img src={bannerImage} alt='trees, rocks, sea' className='bannerImage'/>
            <img src={background} alt='black background' className='bannerBackground'/>
            
            <p>Chez vous, partout et ailleurs</p>
        </section>
    )
}

export default Banner;