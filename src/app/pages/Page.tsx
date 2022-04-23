import { Stack } from '@mui/material';
import React from 'react';
import { LoggedInCard } from '../components/LoggedInCard';
import Login from '../components/Login';
import { NonLoggedInCard } from './NonLoggedInCard';

/**
 * ================
 * TODO: The task I
 * ================
 */
const Page: React.FC = () => (
  <Stack spacing={4}>
    <Login />
    <NonLoggedInCard id="nonLoggedIn" />
    <LoggedInCard id="loggedIn" />
  </Stack>
);

export default Page;
