import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { OPEND_ALERT, CLOSED_ALERT } from './reducers/modal';

import Alert from './Alert';

const Container = () => {
  const dispatch = useDispatch();
  const { alertStatus } = useSelector((state) => state.modal);

  const onClickAlertBtn = useCallback(() => {
    dispatch({
      type: OPEND_ALERT,
    });
  }, []);

  const closeAlert = useCallback(() => {
    dispatch({
      type: CLOSED_ALERT,
    });
  }, []);

  return (
    <>
      <button type="button" onClick={onClickAlertBtn}>alert btn</button>
      {alertStatus === 'opend' && <Alert type="warning" message="alert message" onClose={closeAlert} />}
    </>
  );
};

export default Container;
