import React from 'react'
import Home from '../Pages/Home'
import About from "../Pages/About"
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import PageNotFound from '../Pages/ErrorPage'
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
const MainRouter = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand > <Link to={'/'}>Home
                    </Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link> <Link to={'about'}>About
                        </Link></Nav.Link>
                        <Nav.Link><Link to={'contact'}>Contact
                        </Link></Nav.Link>
                        <Nav.Link > <Link to={'services'}>Services
                        </Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="services" element={<Services />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default MainRouter