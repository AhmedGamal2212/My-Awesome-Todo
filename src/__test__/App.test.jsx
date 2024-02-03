import { screen, render } from '@testing-library/react';
import { beforeAll, describe, it, expect } from 'vitest';
import App from '../App'
import { BrowserRouter } from 'react-router-dom';

describe('app component', () => {
    beforeAll(() => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    });

    it('should be in the document', () => {
        expect(screen.getByTestId('app')).toBeInTheDocument();
    });
});
