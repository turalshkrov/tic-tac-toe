import { useAppDispatch, useAppSelector } from '../../hooks'
import { HiXMark } from "react-icons/hi2";
import { LiaCircle } from "react-icons/lia";
import { Container } from 'react-bootstrap'
import Header from '../../components/header/Header'
import './PlayScreen.scss'
import { played, newGame } from '../../components/reducer/GameReducer';

export default function PlayScreen() {
  const currentPlayer = useAppSelector(state => state.game.currentPlayer)
  const winner = useAppSelector(state => state.game.winner)
  const gridItems = useAppSelector(state => state.game.gridItems)
  const score = useAppSelector(state => state.game.score)
  const settings = useAppSelector(state => state.settings)
  const dispatch = useAppDispatch()
  const userPlayed = (id: number) => {
    dispatch(played({ id: id }))
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
                    className={`grid-item col-4 d-flex justify-content-center align-items-center ${item.class ? 'grid-item-active' : '' }`}
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
              { settings.gameMode === 'pvp' ? settings.players.player2 : 'A.I.'}
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
                    settings.gameMode === 'pvp' ? settings.players.player2 
                    : 'A.I.'
                  }
              </div>
            </div>
          </div>
        </div>
      </Container>
      {
        winner ?
        <div className={`winner-label ${winner ? 'winner-label-active' : ''}`} onClick={() => dispatch(newGame())}>
          <h2>
            {
              winner === 'draw' ? 'It\'s a draw.' : 
              <>
                <span className='fw-bold'>
                  { winner === 'player-1' ? settings.players.player1 : settings.players.player2 || 'A.I.'}
                </span> takes the game!
              </>
            }
          </h2>
        </div>
        : null
      }
    </div>
  )
}
