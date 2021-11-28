import React from 'react'
import styled from 'styled-components'
import banner from '../images/image1.png'

function Header() {
    return (
        <HeaderStyled>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <h1>this is title</h1>
                            <p>
                                deskripsi of website
                            </p>
                            <a href="" className="btn"> Explore Now &#8594;</a>
                        </div>
                        <div className="col-2">
                            <img src={banner} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    .container{
        max-width: 1300px;
        margin: auto;
        padding-left: 25px;
        padding-right: 25px;
    }
    .row{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .col-2{
        flex-basis: 50%;
        min-width:300px;
    }
    .col-2 img{
        max-width: 100%;
        padding: 50px 0;
    }
    .col-2 h1{
        font-size: 50px;
        line-height: 60px;
        margin: 25px 0;
    }
    .btn{
        display: inline-block;
        background: #ff523b;
        color: #fff;
        padding: 8px 30px;
        margin: 30px 0;
        border-radius: 30px;
        transition: background 0.5s;
    }
    .btn:hover {
        background: #563434;
    }
    .header{
        background: radial-gradient(#fff, #ffd6d6)
    }
    .header .row{
        
    }
`

export default Header
