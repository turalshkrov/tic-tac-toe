import { Container, Form } from 'react-bootstrap'

export default function Settings() {
  return (
    <Container>
      <div className="row text-center m-4">
        <div className="row col-12 ">
          <div className="title">
            <h2 className="fs-bold">tic-tac-toe</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <Form className='col-10 col-md-8 col-lg-6'>
            <Form.Group className='d-flex align-items-center'>
              <Form.Label>Game mode: </Form.Label>
                <span className="ms-3">
                  <Form.Check type='radio' className='btn-check' name='game-mode' id='pvc'/>
                  <Form.Label className='btn game-mode-radio btn-secondary px-4' htmlFor='pvc'>PvC</Form.Label>
                  <Form.Check type='radio' className='btn-check' name='game-mode' id='pvp'/>
                  <Form.Label className='btn game-mode-radio btn-secondary ms-3 px-4' htmlFor='pvc'>PvP</Form.Label>
                </span>
            </Form.Group>
          </Form>
        </div>
      </div>
    </Container>
  )
}
