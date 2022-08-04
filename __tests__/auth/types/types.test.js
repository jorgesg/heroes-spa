import { types } from '../../../src/auth';

describe('Testing "Types.js"', () => {

    test('should return correct types', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });

    });

})