import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useRandomInspirationalQuote } from '../hooks/useRandomInspirationalQuote.js';

const MockComponent = () => {
    const quote = useRandomInspirationalQuote();
    return (
        <>
            <div data-testid='mock-quote-container'>{quote.quote}</div>
            <div data-testid='mock-author-container'>{quote.author}</div>
        </>
    );
};

describe('useRandomInspirationalQuote hook', () => {
    beforeAll(() => {
        render(
            <MockComponent />
        )
    })

    it('should return a random quote that is not empty', () => {
        const mockQuoteContainer = screen.getByTestId('mock-quote-container');
        expect(mockQuoteContainer.textContent).not.toEqual('');
        const mockAuthorContainer = screen.getByTestId('mock-author-container');
        expect(mockAuthorContainer.textContent).not.toEqual('');
    });
});
