
//dependecies
import { combineReducers} from 'redux';
import { reducer as form} from 'redux-form'

//reducers
import userId from './userId';
import info from './info';
import cars from './cars';
import history from './history';
import services from './services';
import settings from './settings';

export default combineReducers({
  userId, info, cars, history, services, settings, form
});