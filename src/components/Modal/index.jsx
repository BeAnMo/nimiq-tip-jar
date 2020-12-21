// @ts-check
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'

import './style.css';

const useHideOnOffClickRef = ({ hide, visible }) => {
  const $self = useRef(null);

  const handleGlobalClose = function handleClose(e) {
    if (!$self.current.contains(e.target)) {
      return hide();
    }
  }

  useEffect(() => {
    if (visible) {

      document.body.addEventListener('click', handleGlobalClose);

      return () => {
        document.body.removeEventListener('click', handleGlobalClose);
      }
    }
  }, [visible]);


  return $self
}

const Modal = ({ visible, hide }) => {
  const clickOffRef = useHideOnOffClickRef({ hide, visible });
  const display = visible ? '' : 'none';

  return (
    <div
      ref={clickOffRef}
      className="nq-card"
      style={{ width: '300px', top: '-50px', left: '-120px', display, position: 'absolute' }}
    >
      <div className="nq-card-header">Hello <button onClick={hide}>X</button></div>

      <div className="nq-card-body">Body</div>

      <div className="nq-card-footer">Footer</div>
    </div>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired
}

export default Modal;