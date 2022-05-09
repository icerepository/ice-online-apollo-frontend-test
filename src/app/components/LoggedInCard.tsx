import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import forbidden from './forbidden.gif';

export const LoggedInCard: React.FC<{ id?: string }> = function ({ id }) {
  return (
    <Card id={id}>
      <CardContent>
        <Typography variant="h4">Content visible ONLY for logged in user</Typography>
        <CardMedia component="img" height="600" image={forbidden} />
      </CardContent>
    </Card>
  );
};
