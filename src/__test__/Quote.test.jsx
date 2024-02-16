import { screen, render, waitFor, configure } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useRandomInspirationalQuote } from '../hooks/useRandomInspirationalQuote';
import QuoteContainer from '../components/Quote';
import {
    INITIAL_INSPIRATIONAL_QUOTE,
    QUOTES_VIEW_TIME_IN_SECONDS,
} from '../constants';
import { secondsToMilliseconds } from '../utilities';

describe('Quote Component', () => {
    beforeEach(() => {
        render(<QuoteContainer useQuote={useRandomInspirationalQuote} />);
    });

    it('should render the initial quote value first being rendered', () => {
        const quoteText = screen.getByTestId('inspirational-quote-text');
        const quoteAuthor = screen.getByTestId('inspirational-quote-author');
        expect(quoteText.textContent).toBe(
            `"${INITIAL_INSPIRATIONAL_QUOTE['quote']}"`
        );
        expect(quoteAuthor.textContent).toBe(
            `- ${INITIAL_INSPIRATIONAL_QUOTE['author']}`
        );
    });

    it(
        'should change the quote after showing quote time',
        async () => {
            await waitFor(
                () => {
                    const quoteText = screen.getByTestId(
                        'inspirational-quote-text'
                    );
                    const quoteAuthor = screen.getByTestId(
                        'inspirational-quote-author'
                    );
                    expect(quoteText.textContent).not.toBe(
                        `"${INITIAL_INSPIRATIONAL_QUOTE['quote']}"`
                    );
                    expect(quoteAuthor.textContent).not.toBe(
                        `- ${INITIAL_INSPIRATIONAL_QUOTE['author']}`
                    );
                },
                {
                    timeout: secondsToMilliseconds(
                        QUOTES_VIEW_TIME_IN_SECONDS + 1
                    ),
                }
            );
        },
        { timeout: secondsToMilliseconds(QUOTES_VIEW_TIME_IN_SECONDS + 2) }
    );
});
