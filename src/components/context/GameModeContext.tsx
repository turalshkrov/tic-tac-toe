import { createContext, useState } from "react";

type GameMode = 'pvc' | 'pvp'
type GameModeContext = { gameMode: GameMode, changeMode: () => void }
type GameModeProviderProps = { 
  children: React.ReactNode
}

export const GameModeContext = createContext<GameModeContext>(
  {} as GameModeContext
)

export const GameModeProvider = ({ children }: GameModeProviderProps) => {
  const [ mode, setMode ] = useState('pvc')
  const changeMode = (() => {
    setMode(curr => curr === 'pcv' ? 'pvp' : 'pvc')
  })

  return(
    <GameModeProvider>
      children
    </GameModeProvider>
  )
}