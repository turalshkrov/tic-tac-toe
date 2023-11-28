import { useAppSelector } from "../hooks";
import { wictoryConditions } from "../components/reducer/GameReducer";

const gridItems = useAppSelector(state => state.game.gridItems)
const currentPlayer = useAppSelector(state => state.game.currentPlayer)

class AI {
  
}