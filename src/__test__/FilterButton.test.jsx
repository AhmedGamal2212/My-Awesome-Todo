import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import TasksFilter from '../components/TasksFilter';

describe('TasksFilter component', () => {
    it('renders correctly with given props', () => {
        const text = 'Filter';
        const action = vi.fn();
        render(
            <TasksFilter
                text={text}
                action={action}
                selected={'Filter'}
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
                selected={'Filter'}
            />
        );
        const button = screen.getByText(text);
        fireEvent.click(button);
        expect(action).toHaveBeenCalledTimes(1);
    });
});
