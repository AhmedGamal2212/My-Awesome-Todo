import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { secondsToMilliseconds } from '../utilities';

describe('secondsToMilliseconds function', () => {
    it('should should return the number of seconds multiplied by 1000', () => {
        expect(secondsToMilliseconds(1000)).toBe(1000 * 1000);
    });
});
