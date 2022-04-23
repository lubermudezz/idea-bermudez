import { Container, Nav, NavBar as Barra, NavDropdown } from "react-dom"
import CartWidget from "./CartWidget";

 const NavBar = () => {
    return (
        <Barra>
            <Container>
                <Barra.Brand>Minecraft By Jockerel</Barra.Brand>
                <Nav>
                    <NavDropdown>Categorías
                    <NavDropdown.Item>Mundos XL</NavDropdown.Item>
                    <NavDropdown.Item>Mundos Small</NavDropdown.Item>                }
                    </NavDropdown>
                    <CartWidget/>

                    </Nav>
            </Container>
        </Barra>
    )
}

export default NavBar;