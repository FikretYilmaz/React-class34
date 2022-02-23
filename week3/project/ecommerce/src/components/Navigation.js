import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const useStyles = makeStyles({
  link: {
    marginLeft: '5px',
  },
});

const Navigation = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      rowGap={1}
      columnGap={1}
      marginBottom={5}
    >
      <span>
        <h1>Products</h1>
      </span>
      <span>
        <Link className={classes.link} to="/">
          Products
        </Link>
        <Link className={classes.link} to="favorites">
          Favorites
        </Link>
      </span>
      <Outlet />
    </Grid>
  );
};

export default Navigation;
