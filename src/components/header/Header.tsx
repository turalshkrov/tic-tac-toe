import { Button, Container, Navbar } from "react-bootstrap"
import { MdRestartAlt, MdOutlineSettings } from "react-icons/md";
import { useAppDispatch } from "../../hooks";
import { restart } from "../reducer/ScoreReducder";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useAppDispatch()
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="fw-bold">tic-tac-toe</Navbar.Brand>
        <div className="toogle-btns d-flex">
          <Button 
            variant="outline"
            className="header-btn me-2"
            onClick={() => dispatch(restart())}>
            <MdRestartAlt size={25}/>
          </Button>
          <Link to='/settings'>
            <Button 
              variant="outline"
              className="header-btn" >
              <MdOutlineSettings size={25}/>
            </Button>
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}
