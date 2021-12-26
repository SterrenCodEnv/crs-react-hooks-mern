import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';


describe('Test in CounterApp.js', () => {
    
    // Intelligence functions persist
    let wrapper = shallow( <CounterApp year={2021} />);
    beforeEach(() => {
        wrapper = shallow( <CounterApp year={2021} /> )
    });

    test('Show year app', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("The title is 'CounterApp - 2021'", () => {
        const year = 2021
        const wrapper = shallow(<CounterApp year={year}/>)
        const titleText = wrapper.find('h1').text();
        expect(titleText).toBe(`CounterApp - ${year}`);
    })

    test('Verify handleAdd function in add button', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('1');
    });

    test('Verify handleSubstract function in substract button', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('-1');
    });

    test('Verify handleReset function in reset button', () => {
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('0');
    });

});