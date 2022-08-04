import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { AppRouter } from '../../src/router/AppRouter';

describe('Testing <AppRouter />', () => {

    test('should display login page if not auth', () => { 

        const contextValue = {
            logged: false
        };

        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        
        expect(screen.getAllByText('Login').length).toBe(2);
    });

    test('should display Marvel component if auth', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC123',
                name: 'Jimmy'
            }
        }

        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('Marvel Comics')).toBeTruthy();
    });

})