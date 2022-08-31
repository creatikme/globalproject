import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Loginpopup(props) { 
  
    return (
      <>
         <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className='login_popup'
            >
              <Modal.Header closeButton>
                <Modal.Title >
                  Login
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form className='px-4 pb-4'>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Your Email" required />
                  </Form.Group>
                  <Form.Group className="mb-4 pb-2" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Enter Your Passward" required />
                  </Form.Group>
                  <Button variant="primary w-100 py-2" type="submit">
                     Login
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
      </>
    )
  }
