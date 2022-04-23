import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthState } from './authSlice';

/**
 * ===============
 * Part of task II
 * ===============
 *
 * This is a dummy function that simulates an HTTP request.
 */
const logIn = (login: string, passwd: string) =>
  new Promise<AuthState>((resolve) => {
    setTimeout(() => {
      const isAuthenticated = login === 'login' && passwd === 'passwd';
      resolve({
        isAuthenticated,
        name: isAuthenticated ? 'Peter' : '',
      });
    }, 3500);
  });

const api = createApi({
  reducerPath: 'authAPI',
  baseQuery: fakeBaseQuery(),

  /**
   * =================
   * TODO: The task II
   * =================
   */
  endpoints: (builder) => ({}),
});

export const {} = api;

export default api;
