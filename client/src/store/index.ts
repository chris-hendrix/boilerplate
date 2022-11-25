import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from './counter'
import pingReducer from './ping'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    ping: pingReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store