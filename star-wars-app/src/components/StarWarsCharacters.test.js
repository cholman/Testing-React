import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';
import { getCharacters } from './StarWarsCharacters';

//jest.mock('./StarWarsCharacters');


test('renders starwars characters', async () => {
    //AAA - arrange, act, assert
    /* tasks:
    - render component
    - query component for 
        - all three inputs/text areas
        - submit button
    */
    const {getByLabelText, getByText} = render(<StarWarsCharacters />);
    const nextButton = getByText(/next/i);
    const previousButton = getByText(/previous/i);

    fireEvent.click(nextButton);
    fireEvent.click(previousButton);

    //expect(getCharacters).toHaveBeenCalledTimes(1);


});