// Wherever you build your reducers
import AppNavigation from '../Navigation/AppNavigation'


const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}

const rootReducer = combineReducers({
  nav: navReducer,
  // other reducers here

})