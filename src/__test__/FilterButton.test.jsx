import React from 'react';
<<<<<<< HEAD
import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import TasksFilter from '../components/TasksFilter';
=======
import { render, fireEvent, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import FilterButton from '../components/FilterButton';
>>>>>>> parent of 26d642f (reformat project files using jetbrains editor)

describe('TasksFilter component', () => {
    it('renders correctly with given props', () => {
        const text = 'Filter';
        const action = vi.fn();
        render(
            <TasksFilter
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
            <TasksFilter
                text={text}
                action={action}
            />
        );
        const button = screen.getByText(text);
        fireEvent.click(button);
        expect(action).toHaveBeenCalledTimes(1);
    });
});
