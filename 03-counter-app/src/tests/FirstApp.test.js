import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import FirstApp from '../FirstApp';


describe('Test in FirstApp.js', () => {

    test('Show data JSON', () => {
        const wrapper = shallow(<FirstApp portMessage='Listening on port' portNumber='3000'/>)
        expect(wrapper).toMatchSnapshot();
    });

    test("portNumber return 'Listening on port 3000'", () => {
        const portMessage = 'Listening on port';
        const portNumber = '3000'
        const wrapper = shallow(<FirstApp portMessage={portMessage} portNumber={portNumber}/>)
        const paragraphText = wrapper.find('p').text();
        expect(paragraphText).toBe(`${portMessage} ${portNumber}`);
    })
});