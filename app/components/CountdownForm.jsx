import React from 'react';
import ReactDOM from 'react-dom';

export default class CountdownForm extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    let strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)){
        this.refs.seconds.value = ''
        this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {
    return (
      <div>
        <form className="Countdown-form" ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="seconds" placeholder="Enter time in seconds" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}
