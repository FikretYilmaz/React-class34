import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles({
  button1: {
    backgroundColor: '#bdbdbd!important',
    textTransform: 'capitalize!important',
  },
});

const categoryURL = 'https://fakestoreapi.com/products/categories';

function Category({
  chosenCategory,
  setProducts,
  filteredProducts,
  setChosenCategory,
  selectedCategory,
}) {
  const classes = useStyles();

  const [categories, setCategories] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await fetch(categoryURL);
        const allCategories = await response.json();
        setCategories(allCategories);
        setIsCategoryLoading(false);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    };
    fetchAllCategories();
  }, []);

  const handleCategory = (categoryName) => {
    if (chosenCategory === categoryName) {
      setProducts(filteredProducts);
      setChosenCategory('');
    } else {
      setProducts(selectedCategory);
      setChosenCategory(categoryName);
    }
  };
  if (hasError) {
    return "Oops, Couldn't get the categories";
  }

  if (isCategoryLoading) {
    return <p>Categories are loading ...</p>;
  }
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
