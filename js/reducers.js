import { combineReducers } from "redux";
import firstTab from 'js/modules/FirstTabModule'

const nav = (state, action) => {
    return state?state:{}
};
  

export default combineReducers({
    nav,
    firstTab
});
