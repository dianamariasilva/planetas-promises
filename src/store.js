import createStore from 'redux-zero'
import {dishes, shopDishes, selectedFood} from './planets'

const initialState = {
   planets: planets,
}

const store = createStore(initialState)
export default store