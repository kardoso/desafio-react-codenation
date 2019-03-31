import React from 'react';
import { mount } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(<Navbar />)
    })
    test('Should be Navbar', () => {
        expect(wrapper.is('Navbar')).toBeTruthy();
    })

    test('Should have a input field', () => {
        expect(wrapper.find('input').length).toBe(1)
    })

    // Add more tests here
})