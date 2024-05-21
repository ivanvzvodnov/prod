import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validate } from '../validate/validate';
import { ValidateProfileError } from '../../consts/consts';
import { Profile } from '@/entities/Profile';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
    >(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            const formData = getProfileForm(getState());

            const errors = validate(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
    );
