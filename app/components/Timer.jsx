import React from 'react';
import ReactDOM from 'react-dom';

import Controls from './Controls';
import Clock from './Clock';

export default class Timer extends React.Component {

  constructor(props){
  	super(props);
    this.state = {
      count: 0,
      timerStatus: 'stopped'
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.timerStatus !== prevState.timerStatus){
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  handleStart(){
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  handleStatusChange(newTimerStatus){
    this.setState({timerStatus: newTimerStatus});
  }

  render(){
    let {count, timerStatus} = this.state;
  	return(
  		<div>
    		<h1 className="page-title">Timer</h1>
          <Clock totalSeconds={count} />
          <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
    	</div>
  	);

  }
}
