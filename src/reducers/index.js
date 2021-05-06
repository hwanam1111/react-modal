import { combineReducers } from 'redux';
import modal from './modal';

// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
  switch (action.type) {
    default: {
      const combineReducer = combineReducers({
        modal,
      });

      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
