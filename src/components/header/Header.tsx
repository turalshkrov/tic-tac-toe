import { Container, Navbar } from "react-bootstrap"
import { MdRestartAlt, MdOutlineWbSunny } from "react-icons/md";

export default function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="text-light">Tic Tac Toe</Navbar.Brand>
        <div className="toogle-btns text-light d-flex">
          <div className="me-2" id="restart-btn">
            <MdRestartAlt size={25}/>
          </div>
          <div className="me-2" id="theme-switcher">
            <MdOutlineWbSunny size={25}/>
          </div>
        </div>
      </Container>
    </Navbar>
  )
}
