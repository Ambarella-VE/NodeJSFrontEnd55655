/* -------------------------------------------- */
/*                //* Counter.jsx               */
/* -------------------------------------------- */
import { useState } from 'react';
import { PropTypes } from 'prop-types';

function Counter(props) {
  const [ count, setCount ] = useState(props.initial);

  function increment() {
    if (count < props.max) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > props.min) {
      setCount(count - 1);
    }
  }

  return (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-secondary" onClick={decrement}>
        -
      </button>
      <button type="button" className="btn btn-tertiary p-2" >
        {count}
      </button>
      <button type="button" className="btn btn-secondary" onClick={increment}>
        +
      </button>
    </div>
  )
}

export default Counter

Counter.propTypes = {
  initial: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
}