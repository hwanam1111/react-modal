import produce from 'immer';

export const initialState = {
  alertStatus: 'closed',
};

export const OPEND_ALERT = 'OPEND_ALERT';
export const CLOSED_ALERT = 'CLOSED_ALERT';

const modalReduce = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case OPEND_ALERT:
      draft.alertStatus = 'opend';
      break;
    case CLOSED_ALERT:
      draft.alertStatus = 'closed';
      break;
    default:
      break;
  }
});

export default modalReduce;
