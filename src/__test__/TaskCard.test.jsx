// Import the required modules
import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskCard from '../components/TaskCard';
import { describe, it, expect } from 'vitest';

describe('TaskCard', () => {
    const mockTask = {
        title: 'Buy groceries',
        description: 'Milk, eggs, bread, cheese',
        priority: 'L',
        dueDate: '2024-02-10',
        status: false,
    };

    it('renders the component with the mock task', () => {
        render(<TaskCard task={mockTask} />);
        expect(screen.getByText(mockTask.title)).toBeInTheDocument();
        expect(screen.getByText(mockTask.description)).toBeInTheDocument();
        expect(screen.getByText('Low')).toBeInTheDocument();
        expect(
            screen.getByText(`Due: ${mockTask.dueDate}`)
        ).toBeInTheDocument();
        expect(screen.getByTestId('pending-icon')).toBeInTheDocument();
        expect(screen.getByTestId('edit-icon')).toBeInTheDocument();
        expect(screen.getByTestId('delete-icon')).toBeInTheDocument();
    });
});
