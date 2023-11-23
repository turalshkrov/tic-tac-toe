import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { gameModeChange, updatePlayer1, updatePlayer2 } from '../../components/reducer/SettingsReducer'
import { Button, Container, Form } from 'react-bootstrap'
import './Settings.scss'

export default function Settings() {
  const [ isFormDisabled, setIsFormDisabled ] = useState(true)
  const settings = useAppSelector(store => store.settings)
  const dispatch = useAppDispatch()
  const submitChecker = () => {
    return settings.gameMode === 'pvc' && settings.players.player1 ? false 
    : settings.gameMode === 'pvp' && settings.players.player1 && settings.players.player2 ? false
    : true
  }
  useEffect(() => {
    setIsFormDisabled(submitChecker())
  }, [ settings ])
  
  return (
    <Container>
      <div className="row m-2 justify-content-center">
        <div className="row col-12 ">
          <div className="mt-5 mt-md-2 title text-center">
            <h2 className="fw-bold">tic-tac-toe.</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <Form className='col-10 col-md-8 col-lg-6 mt-5 px-3 py-4 p-md-5 rounded' id='settings-form'>
            <Form.Group className='row align-items-center justify-content-between'>
              <Form.Label className='col-12 col-md-4 text-md-end fw-bold m-0'>Game mode: </Form.Label>
                <span className="mt-2 mt-md-0 row col-12 col-md-7 m-0 me-md-3 justify-content-start">
                  <div className="col-6 p-0 pe-2">
                    <Form.Label 
                      className={settings.gameMode === 'pvc' ? 'btn game-mode-radio fw-bold m-0 mode-active' : 'btn game-mode-radio fw-bold m-0'}
                      htmlFor='pvc'
                      onClick={() => dispatch(gameModeChange('pvc'))}>
                      PvC
                    </Form.Label>
                  </div>
                  <div className="col-6 p-0 ps-2">
                    <Form.Label 
                      className={settings.gameMode === 'pvp' ? 'btn game-mode-radio fw-bold m-0 mode-active' : 'btn game-mode-radio fw-bold m-0'}
                      htmlFor='pvc'
                      onClick={() => dispatch(gameModeChange('pvp'))}>
                      PvP
                    </Form.Label>
                  </div>
                </span>
            </Form.Group>
            <Form.Group className='row justify-content-between mt-2 mt-md-4'>
              <Form.Label className='col-12 col-md-4 text-md-end fw-bold m-0'>Players Name: </Form.Label>
              <span className="row col-12 col-md-7 m-0 me-md-3 flex-column">
                <Form.Label className='player-name-label p-0 m-0 mb-2'>Player 1 - X</Form.Label>
                <input className='form-control'
                  required 
                  value={settings.players.player1}
                  onChange={e => dispatch(updatePlayer1(e.target.value.trim()))}
                />
              </span>
              <span className="row col-12 col-md-7 m-0 me-md-3 flex-column ms-auto mt-2 mt-md-3">
                <Form.Label className='player-name-label p-0 m-0 mb-2'>Player 2 - O</Form.Label>
                <input className='form-control' 
                  required
                  disabled={settings.gameMode === 'pvc' ? true : false}
                  value={settings.players.player2}
                  onChange={e => dispatch(updatePlayer2(e.target.value.trim()))}
                  />
              </span>
            </Form.Group>
          </Form>
          <div className="row col-12 justify-content-center mt-5">
            <div className="col-10 col-md-4">
              {
                isFormDisabled ?
                  <Button 
                    className='play-btn fw-bold' 
                    type='submit' 
                    form='settings-form'
                    disabled={isFormDisabled}
                  >
                    Let the games begin!
                </Button>
                : 
                <Link to='/play'>
                  <Button 
                    className='play-btn fw-bold' 
                    type='submit' 
                    form='settings-form'
                    disabled={isFormDisabled}
                    >
                      Let the games begin!
                  </Button>
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
