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

  it('should be able to add 1 to 4 to get 5', () => {
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

  it('should be able to subtract 4 from 7 to get 3', () => {
    const button7 = container.find('#number7');
    const buttonminus = container.find('#operator-subtract');
    const button4 = container.find('#number4');
    const buttonequal = container.find('#operator-equals');
    button7.simulate('click');
    buttonminus.simulate('click');
    button4.simulate('click');
    buttonequal.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const buttontimes = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const buttonequal = container.find('#operator-equals');
    button3.simulate('click');
    buttontimes.simulate('click');
    button5.simulate('click');
    buttonequal.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide 21 by 7 to get 3', () => {
    container.find('#number2').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number7').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to concatenate multiple number button clicks', () => {
    container.find('#number9').simulate('click');
    container.find('#number8').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#number7').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('9847');
  })

  it('should be able to chain multiple operations together', () => {
    container.find('#number2').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number2').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('6');
  })


})

