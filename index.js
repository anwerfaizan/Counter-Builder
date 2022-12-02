import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ResetBoxes(props){

  const resetParentCounter=props.resetParentCounter;

  const [counterNumberValue,setCounterNumberValue]=React.useState();
  const [counterValue,setCounterValue]=React.useState();

  const setInput1=(e)=>{
    setCounterNumberValue(e.target.value);
  }

  const setInput2=(e)=>{
    setCounterValue(e.target.value);
  }

  const resetCounter=()=>{
    resetParentCounter(counterNumberValue,counterValue);
   }

  return(
    <div className='names'>
      <h2>Reset Counter</h2>
      <div>Counter Number:<input value={counterNumberValue}  onChange={setInput1}/></div>
      <div>    Counter     Value :<input value={counterValue}  onChange={setInput2}/></div>
      <button onClick={resetCounter}>Reset Counter </button>
    </div>
  )
}

function Counter(props){
  let [count,updateCount]=useState(0);
  let number=props.counterNumber;
  if(number== props.resetCounterNum && count!= props.resetCounterVal)
  {
    updateCount(props.resetCounterVal);
    props.resetParentProps();
  }


  const incrementCounter= () =>{
    count=Number(count);
    updateCount (count+1);
  }

  const decrementCounter= () =>{
    updateCount(count-1);
  }
  return(
    <div className='counter'>
      <h1>Counter Number :{props.counterNumber}</h1>
      <button onClick={incrementCounter}>+</button>
      <h1>count:{count}</h1>
      <button onClick={decrementCounter}>-</button>
    </div>
  )
}

function Counters(props){
  let resetCounterNum=props.resetCounterNum;
  let resetCounterVal=props.resetCounterVal;
  let resetParentProps=props.resetParentProps;

  return(
    <div className='counters'>

    <Counter counterNumber={1} 
    resetCounterNum={resetCounterNum}  
    resetCounterVal={resetCounterVal}
    resetParentProps={resetParentProps}
    />
    

    <Counter counterNumber={2} 
    resetCounterNum={resetCounterNum}  
    resetCounterVal={resetCounterVal}
    resetParentProps={resetParentProps}
    />

    <Counter counterNumber={3} 
    resetCounterNum={resetCounterNum}  
    resetCounterVal={resetCounterVal}
    resetParentProps={resetParentProps}
    />
    </div>
  );
}

function ResetCounters(){
  let [resetCounterNum,setResetCounterNum] = React.useState("");
  let [resetCounterVal,setResetCounterVal] = React.useState("");

  function resetParentCounter(counterNumber,curCounterVal){
    console.log(counterNumber + "  "+curCounterVal);
    setResetCounterNum(counterNumber);
    setResetCounterVal(curCounterVal);
  }

  function resetParentProps(){
    setResetCounterNum("");
    setResetCounterVal("");
  }

  return(
  <div>
    <div className='border'></div>
  <ResetBoxes resetParentCounter={resetParentCounter}></ResetBoxes>
  <div className='border-small'></div>
  <Counters resetCounterNum={resetCounterNum}  resetCounterVal={resetCounterVal}  resetParentProps={resetParentProps}></Counters>
  </div>
  );
}

ReactDOM.render(<ResetCounters />,document.getElementById("root"));
