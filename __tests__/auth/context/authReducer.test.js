import { authReducer, types } from '../../../src/auth';


describe('Testing authReducer', () => {

    const defaultState = {
        logged: false
    }

    test('should return default value', () => {
        const state = authReducer(defaultState, {});

        expect(state).toEqual(defaultState);
    });

    test('should login, set user and logged = true', () => {
        const user = { id: 'ABC', name: 'Test' };
        const action = { type: types.login, payload: user };

        const state = authReducer(defaultState, action);
        expect(state).toEqual({
            logged: true,
            user: user
        });
        // expect(state.logged).toBeTruthy();
        // expect(JSON.stringify(state.user)).toBe(JSON.stringify(action.payload));
    });

    test('should logout, remove user and logged = false', () => {
        const state = {
            logged: true,
            user: {
                id: '123',
                name: 'John'
            }
        }
        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);
        expect(newState).toEqual({logged: false});
        
    });

})