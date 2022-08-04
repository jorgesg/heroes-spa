import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AppRouter } from '../../../src/router/AppRouter';
import { AuthContext } from '../../../src/auth/context/AuthContext';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Testing <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 'ABC',
            name: 'Steven'
        },
        logout: jest.fn()
    };

    beforeEach(() => jest.clearAllMocks());

    test('should display user name', () => {

        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText(contextValue.user.name)).toBeTruthy();
    });

    test('should call logout and navigate when logout button is clicked', () => {

        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logoutButton = screen.getByRole('button');
        fireEvent.click(logoutButton);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});

    });

})