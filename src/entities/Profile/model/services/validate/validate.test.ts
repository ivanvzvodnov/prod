import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validate } from './validate';

const data: Profile = {
    username: 'arholdo',
    firstname: 'ivan',
    lastname: 'vzvodnov',
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
};

describe('validateProfileData.test tests', () => {
    test('success case', async () => {
        const result = validate(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validate({ ...data, firstname: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('without age', async () => {
        const result = validate({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('without country', async () => {
        const result = validate({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('without all', async () => {
        const result = validate({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
