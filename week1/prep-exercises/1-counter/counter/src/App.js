import { useState } from 'react';
import Button1 from '@mui/material/Button';

function App() {
  function Counter() {
    const [count, setCount] = useState(0);
    const [giveFeedback, setGiveFeedback] = useState("Let's begin counting");

    const increase = (value) => {
      let increment = count + value;
      setCount(increment);
      feedback(increment);
    };

    const decrease = (value) => {
      let decrement = count - value;
      setCount(decrement);
      if (decrement < 0) {
        setCount(0);
      }
      feedback(decrement);
    };
    const feedback = (param) => {
      if (param < 0) {
        return <p>{setGiveFeedback('Counting is begin with 0')}</p>;
      }
      if (param < 10) {
        return <p>{setGiveFeedback('Keep counting...')}</p>;
      }
      if (param >= 10) {
        return <p>{setGiveFeedback("It's higher than 10!")}</p>;
      }
    };

    function Count(props) {
      return (
        <div>
          <p>{props.count}</p>
          <p>{props.feedback}</p>
        </div>
      );
    }

    function Button(props) {
      return (
        <Button1
          variant="outlined"
          color={props.color}
          type="button"
          className={props.className}
          onClick={props.onClick}
        >
          {props.name}
        </Button1>
      );
    }
    return (
      <div>
        <Count count={count} feedback={giveFeedback} />
        <Button
          onClick={() => {
            increase(1);
          }}
          color="success"
          name="Add 1!"
        />
        <Button
          onClick={() => {
            decrease(1);
          }}
          color="error"
          name="Subtraction 1!"
        />
        <Button
          onClick={() => {
            increase(2);
          }}
          color="success"
          name="Add 2!"
        />
        <Button
          onClick={() => {
            decrease(2);
          }}
          color="error"
          name="Subtraction 2!"
        />
      </div>
    );
  }
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
export default App;
