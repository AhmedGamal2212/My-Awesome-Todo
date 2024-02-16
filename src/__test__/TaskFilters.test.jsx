import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskFilters from '../components/TaskFilters';
import { FILTERS_TEXT } from '../constants';
import { it, describe, beforeEach, expect } from 'vitest';

describe('TaskFilters component', () => {
    beforeEach(() => {
        render(<TaskFilters />);
    });

    it('should be rendered correctly', () => {
        expect(screen.getByRole('button')).toHaveTextContent(FILTERS_TEXT[0]);
    });

    it('should toggle the dropdown menu on click', () => {
        const button = screen.getByRole('button');
        const menu = screen.getByTestId('dropdown-menu');

        expect(menu).not.toBeVisible();

        fireEvent.click(button);
        expect(menu).toBeVisible();
        
        fireEvent.click(button);
        expect(menu).not.toBeVisible();
    });

    it('should change the button text on selecting an option', () => {
        const button = screen.getByRole('button');
        const menu = screen.getByTestId('dropdown-menu');

        fireEvent.click(button);
        expect(menu).toBeVisible();

        fireEvent.click(screen.getByText(FILTERS_TEXT[1]));
        expect(button).toHaveTextContent(FILTERS_TEXT[1]);
        expect(menu).not.toBeVisible();
    });
});
