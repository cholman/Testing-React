// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import StarWarsCharacters from './components/StarWarsCharacters';

test('renders starwars characters', async () => {
    //AAA - arrange, act, assert
    /* tasks:
    - render component
    - query component for 
        - all three inputs/text areas
        - submit button
    */
    const {getByLabelText, getByText} = render(<StarWarsCharacters />);
    getByText(/next/i);
    getByText(/previous/i);
});