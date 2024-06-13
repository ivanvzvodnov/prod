import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test tests', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUserName('name'),
            ),
        ).toEqual({ username: 'name' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };

        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('321')),
        ).toEqual({ password: '321' });
    });
});
