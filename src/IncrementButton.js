import './IncrementButton.css';
import React from "react"
import { useSelector, useDispatch } from 'react-redux';

const IncrementButton = () => {
  let counterValue = useSelector(state => state.counterValue)
  const dispatch = useDispatch();

  console.log("STATE", counterValue)


  const whenButtonPressed = () => {
    // this.setState({
    //   counterValue: this.state.counterValue + 1
    // });
    dispatch({ type: "INCREMENT" })
  }


  return (
    <>
      <button
        className="incrementButton"
        onClick={whenButtonPressed}
      >
        {counterValue}
      </button>
    </>
  );
}

export default IncrementButton;
