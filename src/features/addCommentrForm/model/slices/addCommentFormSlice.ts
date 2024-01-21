import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    error: undefined,
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(loginByUsername.pending, (state) => {
        //     state.error = undefined;
        //     state.isLoading = true;
        // });
        // builder.addCase(loginByUsername.fulfilled, (state, action) => {
        //     state.isLoading = false;
        // });
        // builder.addCase(loginByUsername.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // });
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
