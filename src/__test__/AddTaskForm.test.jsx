import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import AddTaskForm from '../components/AddTaskForm';

describe('AddTaskForm Component', () => {
    it('should render the component', () => {
        render(<AddTaskForm/>);
        expect(
            screen.getByPlaceholderText('Add a new task...')
        ).toBeInTheDocument();
        expect(screen.getByText('+')).toBeInTheDocument();
    });

    it('should submit a valid task title', async () => {
        render(<AddTaskForm/>);
        const input = screen.getByPlaceholderText('Add a new task...');
        const button = screen.getByText('+');
        console.log = vi.fn();
        fireEvent.change(input, {target: {value: 'Do homework'}});
        fireEvent.click(button);
        await waitFor(() => {
            expect(console.log).toHaveBeenCalledWith({
                'task-title': 'Do homework',
            });
            expect(input.value).toBe('');
        });
    });

    it('should submit an empty task title', () => {
        render(<AddTaskForm/>);
        const button = screen.getByText('+');

        console.log = vi.fn();

        fireEvent.click(button);
        expect(console.log).not.toHaveBeenCalled();
    });
});
