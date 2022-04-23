import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import allowed from './allowed.gif';
import { useAppSelector } from '../hooks';
import { getName } from '../../features/auth/authSlice';
import useAuth from '../hooks/useAuth';

export const NonLoggedInCard: React.FC<{ id?: string }> = ({ id }) => {
  const name = useAppSelector(getName);
  // const { name } = useAuth(); // our goal

  return (
    <Card id={id}>
      <CardContent>
        <Typography variant="h4">Content visible ONLY for non-logged in user</Typography>
        {name && <Typography variant="h5">Hello {name}</Typography>}
        <CardMedia component="img" height="600" image={allowed} />
      </CardContent>
    </Card>
  );
};
