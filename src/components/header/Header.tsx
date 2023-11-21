import { Button, Container, Navbar } from "react-bootstrap"
import { MdRestartAlt, MdOutlineWbSunny } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="">Tic Tac Toe</Navbar.Brand>
        <div className="toogle-btns d-flex">
          <Button className="header-btn me-2" variant="outline">
            <MdRestartAlt size={25}/>
          </Button>
          <Button onClick={toggleTheme} className="header-btn" variant="outline">
            <MdOutlineWbSunny size={25}/>
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}
