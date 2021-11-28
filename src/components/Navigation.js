import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'


function Navigation() {
    return (
        <NavigationStyled>

            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} width="125px" alt="logo" />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" activeClassName="active-class" exact>Product</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" activeClassName="active-class" exact>Account</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    .navbar{
        display: flex;
        align-item: center;
        padding: 20px;
    }
    nav{
        flex: 1;
        text-align: right;
    }
    nav ul{
        display: inline-block;
        list-style-type: none;
    }
    nav ul li{
        display: inline-block;
        margin-right: 20px;
    }
    a{
        text-decoration: none;
        color: #555;
    }
    p{
        color: #555;
    }
    .container{
        max-width: 1300px;
        margin: auto;
        padding-left: 25px;
        padding-right: 25px;
    }
`

export default Navigation
