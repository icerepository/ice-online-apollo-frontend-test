import React from 'react';
import { Alert, Button, Card, CardActions, CardContent, LinearProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { isAuthenticated, login } from '../../features/auth/authSlice';
import useAuth from '../hooks/useAuth';

const Login: React.FC = function () {
  const isAuth = useAppSelector(isAuthenticated);
  const dispatch = useAppDispatch();
  // const { isAuth, login } = useAuth(); // our goal

  /**
   * =============== *
   * Part of task II *
   * =============== *
   */
  const [isFetching] = React.useState(false);
  if (isFetching) {
    return <LinearProgress variant="indeterminate" />;
  }

  return (
    <Card>
      <CardContent>
        {!isAuth && <Alert severity="warning">Please, login</Alert>}
        {isAuth && <Alert severity="success">You are in!</Alert>}
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            dispatch(login({ login: 'login', passwd: 'passwd' }));
          }}
        >
          Login
        </Button>
      </CardActions>
    </Card>
  );
};

export default Login;
