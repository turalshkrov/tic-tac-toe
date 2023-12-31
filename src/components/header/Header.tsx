import { Button, Container, Navbar } from "react-bootstrap"
import { MdRestartAlt, MdOutlineSettings } from "react-icons/md";
import { useAppDispatch } from "../../hooks";
import { Link } from "react-router-dom";
import { newGame, restart } from "../reducer/GameReducer";

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
          <Link to='/settings' onClick={() => dispatch(newGame())}>
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
