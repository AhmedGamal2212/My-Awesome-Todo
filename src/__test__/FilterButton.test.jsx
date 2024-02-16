import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import FilterButton from '../components/FilterButton';

describe('FilterButton component', () => {
    it('renders correctly with given props', () => {
        const text = 'Filter';
        const action = vi.fn();
        render(
            <FilterButton
                text={text}
                action={action}
            />
        );
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
    });

    it('calls action prop when clicked', () => {
        const text = 'Filter';
        const action = vi.fn();
        render(
            <FilterButton
                text={text}
                action={action}
            />
        );
        const button = screen.getByText(text);
        fireEvent.click(button);
        expect(action).toHaveBeenCalledTimes(1);
    });
});
