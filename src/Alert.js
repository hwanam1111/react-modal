import React from 'react';
import { AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { BsCheckCircle } from 'react-icons/bs';


import { AlertWrapper, AlertTitle, AlertMessage } from './AlertStyles';

const Alert = ({ type, message, onClose }) => {
  return (
    <AlertWrapper className={type}>
      <AlertTitle>
        <div>
          {type === 'success' && <BsCheckCircle />}
          {type === 'error' && <RiErrorWarningLine />}
          {type === 'warning' && <AiOutlineWarning />}
          {type === 'info' && <AiOutlineInfoCircle />}
          <h1>알림</h1>
        </div>
        <button type="button" onClick={onClose}>X</button>
      </AlertTitle>
      <AlertMessage>
        {message}
      </AlertMessage>
    </AlertWrapper>
  );
};

export default Alert;
