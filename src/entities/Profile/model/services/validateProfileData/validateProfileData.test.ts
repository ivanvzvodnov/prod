import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

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
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, firstname: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('without age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('without country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('without all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
