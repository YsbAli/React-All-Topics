import {legacy_createStore as CreateStore} from 'redux'
import { Reducer } from './Reducer'


export const Store = CreateStore(Reducer)