import { Container, Navbar } from "react-bootstrap"
import { MdRestartAlt, MdOutlineWbSunny } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../theme/themeProvider";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="">Tic Tac Toe</Navbar.Brand>
        <div className="toogle-btns d-flex">
          <div className="me-2" id="restart-btn">
            <MdRestartAlt size={25}/>
          </div>
          <div className="me-2" id="theme-switcher" onClick={toggleTheme}>
            <MdOutlineWbSunny size={25}/>
          </div>
        </div>
      </Container>
    </Navbar>
  )
}
