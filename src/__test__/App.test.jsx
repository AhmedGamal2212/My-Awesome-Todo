import {render, screen} from '@testing-library/react';
import {beforeAll, describe, expect, it} from 'vitest';
import App from '../App'
import {BrowserRouter} from 'react-router-dom';

describe('App Component', () => {
    beforeAll(() => {
        render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        );
    });

    it('should be in the document', () => {
        expect(screen.getByTestId('app')).toBeInTheDocument();
    });
});
