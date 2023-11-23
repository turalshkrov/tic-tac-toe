import { Container } from 'react-bootstrap'
import Header from '../../components/header/Header'
import { useAppSelector } from '../../hooks'
import { HiXMark } from "react-icons/hi2";
import { LiaCircle } from "react-icons/lia";
import './PlayScreen.scss'
import { useState } from 'react';

const gridItems: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function PlayScreen() {
  const [ currentPlayer, setCurrentPlayer ] = useState<'player-1' | 'player-2'>('player-2')
  const score = useAppSelector(state => state.score);
  const settings = useAppSelector(state => state.settings)
  return (
    <div id="play-screen">
      <Header/>
      <Container>
        <div className="row justify-content-center align-items-center my-3 my-md-4" id="score">
          <h3 className='col-12 text-center mb-5'>
            { score.player1 } - { score.player2 }
          </h3>
          <div className="col-3 col-lg-4 p-4 player-label d-none d-md-block" id='player-1'>
            <HiXMark/>
            <span className="player-name fw-bold">
              { settings.players.player1 }
            </span>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="row" id='grid-container'>
              {
                gridItems.map(item => {
                  return <div className="grid-item col-4" id={`item-${item}`} key={item}>
                    
                  </div>
                })
              }
            </div>
          </div>
          <div className="col-3 col-lg-4 p-4 player-label d-none d-md-block" id='palyer-2'>
            <LiaCircle/>
            <span className="player-name fw-bold">
              { settings.players.player2 ? settings.players.player2 : 'A.I.'}
            </span>
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <div id="player-switcher">
              <div className={
                currentPlayer === 'player-1' ? 'switcher-btn'
                : 'switcher-btn switcher-btn-active'
                }>
                  {
                    currentPlayer === 'player-1' 
                    ? settings.players.player1 :
                    settings.players.player2 ? settings.players.player2 
                    : 'A.I.'
                  }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
