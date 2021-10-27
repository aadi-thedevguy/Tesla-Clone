import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { selectCar } from '../features/car/CarSlice'
import { useSelector } from 'react-redux'

const Header = () => {

    const [burgerStatus, setBurgerStatus] = useState(false)

    const cars = useSelector(selectCar)

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu >
                {cars && cars.map((car,index) => {
                    return <a key={index} href="/">{car}</a>
                })}
                
            </Menu>

            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>   
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                    {cars && cars.map((car,index) => {
                      return <li key={index}><a href="/">{car}</a></li>
                })}
                
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">Trade In</a></li>
                <li><a href="/">Cyber Truck</a></li>
                <li><a href="/">Roadster</a></li>
                <li><a href="/">About SpaceX</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div
    `
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:1;
    min-height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 1.2em;
    `

const Menu = styled.div
    `
    display:flex;
    align-items:center;
    flex:1;
    justify-content:center;
    flex-wrap:nowrap;

    a {
        font-weight:600;
        text-transform:uppercase;
        padding:0 .8em;
        
    }

    @media (max-width:768px) {
        display:none;
    }
   
    `

const RightMenu = styled.div
`
display:flex;
align-items:center;

a {
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;

}
`

const CustomMenu = styled(MenuIcon)
`
cursor:pointer;
`

const BurgerNav = styled.div
`
position:fixed;
z-index:10;
top:0;
bottom:0;
right:0;
background-color: white;
width:300px;
display:flex;
flex-direction:column;
padding: 20px;
transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ease-in;
height:100vh;


li {
    padding: 15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    text-align:left;

    a {
        font-weight:600;
    }
}

`

const CustomClose = styled(CloseIcon)
`
    cursor:pointer;


`
const CloseWrapper = styled.div
`
    display:flex;
    justify-content:flex-end;

    
`