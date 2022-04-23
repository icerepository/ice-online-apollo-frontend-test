import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export type AuthState = {
  isAuthenticated: boolean;
  name?: string;
};

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ login: string; passwd: string }>) => {
      state.isAuthenticated = action.payload.login === 'login' && action.payload.passwd === 'passwd';
      if (state.isAuthenticated) {
        state.name = 'Peter';
      }
    },
  },
});

export const isAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const getName = (state: RootState) => state.auth.name;

export const { login } = authSlice.actions;

export default authSlice.reducer;
