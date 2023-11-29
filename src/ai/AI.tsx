import { useAppSelector } from "../hooks";
import { wictoryConditions } from "../components/reducer/GameReducer";

const gridItems = useAppSelector(state => state.game.gridItems)

export class AI {
  playAbleSpace = gridItems.filter(item => item.mark == '')
  
  static play() {
    return this.
  }
}