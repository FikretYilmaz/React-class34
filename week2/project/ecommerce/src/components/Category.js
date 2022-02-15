import { Button } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#bdbdbd',
    textTransform: 'capitalize',
  },
});

function Category({ handleCategory, categoryName, chosenCategory }) {
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
      {categoryName}
    </Button>
  );
}

export default Category;
