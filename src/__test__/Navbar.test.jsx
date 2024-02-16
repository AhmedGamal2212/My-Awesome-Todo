import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import Navbar from '../components/Navbar';
import {StaticRouter} from 'react-router-dom/server';
import {APP_TITLE} from '../constants';

describe('Navbar Component', () => {
    beforeEach(() => {
        render(
            <>
                <StaticRouter location={`/tasks`}>
                    <Navbar/>
                </StaticRouter>
            </>
        );
    });

    it('should be in the document', () => {
        const navBar = screen.getByTestId('navbar');
        expect(navBar).toBeInTheDocument();
    });

    it('should contain a brand section', () => {
        const brandSection = screen.getByTestId('navbar-brand');
        expect(brandSection).toBeInTheDocument();
    });

    it('should contain a brand link to the landing page', () => {
        const linkElement = screen.getByTestId('navbar-brand-home-link');
        expect(linkElement).toBeInTheDocument();
    });

    it('should contain a brand icon', () => {
        const brandIcon = screen.getByTestId('brand-icon');
        expect(brandIcon).toBeInTheDocument();
    });

    it('should contain brand title with the title of the app', () => {
        const brandTitle = screen.getByTestId('brand-title');
        expect(brandTitle).toBeInTheDocument();
        expect(brandTitle.textContent).toBe(APP_TITLE);
    })

    it('should contain buttons section that has two buttons', () => {
        const navbarButtons = screen.getByTestId('navbar-buttons');
        expect(navbarButtons).toBeInTheDocument();
        expect(navbarButtons.childElementCount).toBe(2);
    });
});
