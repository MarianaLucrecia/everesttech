import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right, Image } from './styledComponents';
import everestlogo from "../assets/everestlogo.jpg"

const NavBar = () => {
    return (
        <AppBar position="relative" color= "transparent">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "wblack"}}>
                    <Logo><Image src = {everestlogo} ></Image></Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/Productos' style={{color: "#147293"}}><MenuItem>Productos</MenuItem></Link>
                    <Link to='/category/Servicios' style={{color: "#147293"}}><MenuItem>Servicios</MenuItem></Link>
                    <Link to='/category/Novedades' style={{color: "#147293"}}><MenuItem>Novedades</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>LogIn</MenuItem>
                    <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "#147293"}}><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;