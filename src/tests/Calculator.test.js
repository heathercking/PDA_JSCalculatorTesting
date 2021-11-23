import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add two numbers together', () => {
    const button1 = container.find('#number1');
    const buttonplus = container.find('#operator_add');
    const button4 = container.find('#number4');
    const buttonequal = container.find('#operator-equals');
    button1.simulate('click');
    buttonplus.simulate('click');
    button4.simulate('click');
    buttonequal.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })
})

