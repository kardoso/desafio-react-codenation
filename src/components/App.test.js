import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Navbar from './Navbar'

describe('App', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(<App />)
    })

    test('Should be App', () => {
        expect(wrapper.is('App')).toBeTruthy();
    })

    test('Should contains Navbar', () => {
        expect(wrapper.contains(Navbar)).toBeTruthy();
    })

    test('updateSearch method should setState({searchString})', () => {
        wrapper.instance().updateSearch({target: {value:'test_value'}});
        expect(wrapper.state('searchString')).toEqual('test_value');

    })
    
    // Add more tests here
})