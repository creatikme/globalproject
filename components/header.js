import { useState } from 'react'
import { Nav } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import LoginIcon from '../public/images/login.svg'
import  Modal from '../components/login-popup'

export default function Header() {   
  
  const [modalShow, setModalShow] = useState(false);

    return (
      <>
        <Nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-fixed top-0 start-0 end-0">
          <div className="container-xl">
            <Link href="/">
              <a className="navbar-brand">LOGO</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07XL">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item px-5">
                    <a className="nav-link px-3" onClick={() => setModalShow(true)}><span className=' me-2 d-flex' ><Image src={LoginIcon} className="icon-span"  /></span> Login</a>
                </li>
                <li className="nav-item">
                  <Link href="/write">
                    <a className="nav-link"><span className=' me-2 d-flex'><Image src={LoginIcon} className="icon-span"  /></span> Register</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Nav>
        <Modal show={modalShow} onHide={() => setModalShow(false)} />
      </>
    )
  }
