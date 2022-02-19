import React from 'react'
import logo from '../../img/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useLoginData from '../../hooks/useLoginData'


const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useLoginData()
 

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Link to='/'>
          <img
            src={logo}
            alt=''
            style={{ width: '70px', marginRight: '40px' }}
          />
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Link className='nav-link' to='/quiz'>
              All Quiz
            </Link>

            {loggedInUser?.email === 'admin@admin.com' && (
              <Link className='nav-link' to='/addquiz'>
                Add Quiz
              </Link>
            )}
          </Nav>
          <Nav>
            {loggedInUser?.email && (
              <p className='text-warning mx-3 mt-3'>{loggedInUser?.email}</p>
            )}

            {loggedInUser ? (
              <button
                className='btn btn-primary'
                onClick={() => {
                  setLoggedInUser(
                    window.localStorage.setItem(
                      'logged-in-user',
                      JSON.stringify('')
                    )
                  )
                  window.location.reload(false)
                }}
              >
                logOut
              </button>
            ) : (
              <>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
                <Link className='nav-link' to='/register'>
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
