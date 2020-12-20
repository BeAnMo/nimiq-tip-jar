import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';


const useContent = (status) => {
  switch (status) {
    case 'error':
      return { color: 'red', children: 'Error!' };

    case 'loading':
      return {
        color: 'light-blue',
        children: (
          <div className="flex flex-row align-items-center">
            Loading
            &ensp;
            <Spinner />
          </div>
        )
      };

    case 'success':
      return { color: 'green', children: 'Success!' };

    default:
      return { color: 'gold' };
  }
}

const Button = ({ status, defaultText, onClick }) => {
  const { color, children } = useContent(status);

  return <button
    class={`nq-button-pill ${color} inverse`}
    onClick={onClick}
  >
    {children || defaultText}
  </button>
}

Button.defaultProps = {
  defaultText: 'Contribute'
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.oneOf(['init', 'error', 'loading', 'success']).isRequired,
  defaultText: PropTypes.string
}

export default Button;