import React, { useState } from 'react';
import logo from '../suzuki-tr.png';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    Input
  } from 'reactstrap';

  const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);
    return ( 
        <div>
      <Navbar  color="dark" dark expand="md">
        <NavbarBrand >
          <Link className="navbar-brand" to="/home"><img src={logo} alt="logo" width="60px" /></Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/atmaja007/react-bootsrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
          <InputGroup  className="col-md-3" >
          <Input />
          <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
          <DropdownToggle caret>
            Search
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem  header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
          </InputGroupButtonDropdown>
          </InputGroup>
          
          <NavLink href="/login">Sign in</NavLink>
          <Button color="danger" href="/register">Sign Up</Button>
        </Collapse>
      </Navbar>
    </div>
        // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        //     <Link className="navbar-brand" to="/home"><img src={logo} alt="logo" width="60px" /></Link>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav mr-auto">
        //         <li className="nav-item active">
        //             <Link className="nav-link" to="/home">Home </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link className="nav-link" to="#">Link</Link>
        //         </li>
        //         <li className="nav-item dropdown">
        //             <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //             Products
        //             </Link>
        //             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //             <Link className="dropdown-item" to="#">Action</Link>
        //             <Link className="dropdown-item" to="#">Another action</Link>
        //             <div className="dropdown-divider"></div>
        //             <Link className="dropdown-item" to="#">Something else here</Link>
        //             </div>
        //         </li>
        //         <li className="nav-item">
        //             <Link className="nav-link" to="/About">About</Link>
        //             {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
        //         </li>
        //         </ul>
        //         <form className="form-inline my-2 my-lg-0">
        //         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        //         <button className="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
        //         </form>
        //     </div>
        // </nav>
    
    );
}
 
export default Header;