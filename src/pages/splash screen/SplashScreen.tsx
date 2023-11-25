import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import './SplashScreen.scss'

export default function SplashScreen() {
  return (
    <Container>
      <div className="">
        <div className="d-flex justify-content-center align-items-center h-90">
          <div className="start-btn-container">
            <Link to='/settings'>
              <div className="start-btn d-flex flex-column align-items-center justify-content-center">
                <span className='fw-bold'>tic-</span>
                <span className='fw-bold'>tac-</span>
                <span className='fw-bold'>toe.</span>
              </div>
              <div className="start-btn-shadow">
              </div>
            </Link>
          </div>
        </div>
        <div className="attribution text-center">
          <p>Made by Tural Shukurov</p>
        </div>
      </div>
    </Container>
  )
}
