import { Button } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#bdbdbd',
  },
});

function Categories({ handleCategory, categoryName, chosenCategory }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => {
        handleCategory(categoryName);
      }}
      variant={chosenCategory === categoryName ? 'outlined' : 'contained'}
      color={chosenCategory === categoryName ? 'primary' : 'grey'}
      value={categoryName}
    >
      {`FAKE: ${categoryName}`}
    </Button>
  );
}

export default Categories;
