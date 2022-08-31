import Image from 'next/image'
import Global from '../public/images/png_globe.png'
import HeroImg from '../public/images/heroImg.png'
import Clouds from '../public/images/clouds.png'

export default function Herosection() {

  const styling = {
    backgroundImage:  `url(${HeroImg.src})`,
  }
  const styling1 = {
    backgroundImage:  `url(${Clouds.src})`,
  }
    return (
      <>
        <div className="hero_section vh-100 d-flex justify-content-center align-items-center position-relative" style={styling}>
            <Image src={Global} className="img_global "  />
            <div className='could_img' style={styling1}></div>
        </div>
      </>
    )
  }