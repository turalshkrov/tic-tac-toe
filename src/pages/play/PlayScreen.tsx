import {  useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks'
import { HiXMark } from "react-icons/hi2";
import { LiaCircle } from "react-icons/lia";
import { Container } from 'react-bootstrap'
import Header from '../../components/header/Header'
import './PlayScreen.scss'
import { played, reset } from '../../components/reducer/GameReducer';
import { player1Win,player2Win } from '../../components/reducer/ScoreReducder';

export default function PlayScreen() {
  const [ winner, setWinner ] = useState<null | 'player-1' | 'player-2'>(null)
  const [ currentPlayer, setCurrentPlayer ] = useState<'player-1' | 'player-2'>('player-1')
  const gridItems = useAppSelector(state => state.game.gridItems)
  const dispatch = useAppDispatch()
  const score = useAppSelector(state => state.game.score);
  const settings = useAppSelector(state => state.settings)
  const userPlayed = (id: number) => {
    dispatch(played({id: id, currentPlayer: currentPlayer}))
    setCurrentPlayer(currentPlayer === 'player-1' ? 'player-2' : 'player-1')
    console.log(gridItems);
    
  }

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
                gridItems.map((item, id)=> {
                  return <div 
                    className="grid-item col-4 d-flex justify-content-center align-items-center" 
                    id={`item-${item.id}`} 
                    key={item.id}
                    onClick={() => userPlayed(id)}>
                      { item.mark === 'x' ? 
                          <div className='x-mark d-flex'>
                            <HiXMark/> 
                          </div>
                          : item.mark === 'o' ? 
                          <div className='o-mark d-flex'>
                            <LiaCircle/> 
                          </div>
                          : ''}
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
