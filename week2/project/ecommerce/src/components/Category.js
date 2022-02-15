import { Button } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles({
  button1: {
    backgroundColor: '#bdbdbd!important',
    textTransform: 'capitalize!important',
  },
});

function Category({
  chosenCategory,
  categories,
  setProducts,
  updateProducts,
  setChosenCategory,
}) {
  const classes = useStyles();
  const handleCategory = (categoryName) => {
    if (chosenCategory === categoryName) {
      setProducts(updateProducts);
      setChosenCategory('');
    } else {
      const result = updateProducts.filter(
        (item) => item.category === categoryName,
      );
      setChosenCategory(categoryName);
      setProducts(result);
    }
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      rowGap={1}
      columnGap={1}
      marginBottom={5}
    >
      {categories.map((categoryName, index) => {
        return (
          <Button
            key={index}
            className={classes.button1}
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
      })}
    </Grid>
  );
}

export default Category;
