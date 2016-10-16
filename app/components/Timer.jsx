import React from 'react';
import ReactDOM from 'react-dom';

import Controls from './Controls';
import Clock from './Clock';

export default class Timer extends React.Component {

  constructor(props){
  	super(props);
    this.state = {
      count: 0,
      countdownStatus: 'paused'
    }
    this.handleSetTimer = this.handleSetTimer.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleSetTimer(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange(newStatus){
    this.setState({countdownStatus: newStatus});
  }

  startTimer(){
    this.timer = setInterval( () => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
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
    this.timer = undefined;
  }

  render(){
    let {count, countdownStatus} = this.state;
    let renderControlArea = ()=> {
      if (countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      }
    };

  	return(
  		<div>
    		<h1 className="page-title">Timer</h1>
          <Clock totalSeconds={count} />
          {renderControlArea()}
    	</div>
  	)

  }
}
