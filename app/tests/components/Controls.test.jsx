import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
var $ = require('jQuery');

import Controls from '../../components/Controls';

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });
  });

  it('should render Start when paused', () => {
    let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
    let $el = $(ReactDOM.findDOMNode(controls));
    let $startButton = $el.find('button:contains(Start)');

    expect($startButton.length).toBe(1);
  });

});
