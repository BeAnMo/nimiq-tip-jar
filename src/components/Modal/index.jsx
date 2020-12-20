import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'

const Modal = ({ visible, hide }) => {
    const $self = useRef(null);
    const display = visible ? '' : 'none';

    const handleClose = function handleClose0(e) {
        if (!$self.current.contains(e.target)) {
            return hide();
        }
    }

    useEffect(() => {
        if (visible) {
            document.body.addEventListener('click', handleClose);

            return () => {
                document.body.removeEventListener('click', handleClose);
            }
        }

    }, [visible]);

    return (
        <div
            ref={$self}
            className="nq-card"
            style={{ width: '300px', top: '-50px', left: '-120px', display, position: 'absolute' }}
        >
            <div className="nq-card-header">Hello</div>

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