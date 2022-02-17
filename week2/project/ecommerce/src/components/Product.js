import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

const productsURL = 'https://fakestoreapi.com/products/';

function Product({ products, setFilteredProducts, setProducts }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const response = await fetch(productsURL);
        const product = await response.json();
        setFilteredProducts(product);
        setProducts(product);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    };
    fetchAllProduct();
  }, [setFilteredProducts, setProducts]);
  if (hasError) {
    return "Oops, Couldn't get the categories";
  }

  if (isLoading) {
    return <p>Products are loading ...</p>;
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      rowGap={2}
      columnGap={2}
      gridRow={4}
    >
      {products.map((product, index) => {
        return (
          <Card sx={{ maxWidth: 250 }} key={index}>
            <CardMedia
              component="img"
              height="300"
              image={product.image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                component="h1"
                variant="caption"
                color="text.secondary"
              >
                {product.title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
}

export default Product;
