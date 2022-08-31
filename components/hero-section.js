import Image from 'next/image'
import Global from '../public/images/png_globe.png'

export default function Herosection() {
    return (
      <>
        <div className="hero_section vh-100 d-flex justify-content-center align-items-center position-relative">
            <Image src={Global} className="img_global "  />
            <div className='could_img'></div>
        </div>
      </>
    )
  }