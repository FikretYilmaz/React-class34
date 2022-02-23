import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ProductIdContext } from './ProductIdContext';

const ProductCard = ({ product }) => {
  const [addFavorite, setAddFavorite] = useState(false);
  const { favoritesList, setFavoritesList } = useContext(ProductIdContext);

  useEffect(() => {
    if (favoritesList.includes(product.id)) {
      setAddFavorite(true);
    } else {
      setAddFavorite(false);
    }
  }, []);

  const addToFavoriteList = () => {
    if (favoritesList.includes(product.id)) {
      setAddFavorite(false);
      setFavoritesList((prev) =>
        prev.filter((productId) => productId !== product.id),
      );
    } else {
      setAddFavorite(true);
      setFavoritesList((prev) => [...prev, product.id]);
    }
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <Link to={`product/${product.id}`}>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography component="h1" variant="caption" color="text.secondary">
            {product.title}
          </Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => {
            addToFavoriteList();
          }}
          aria-label="add to favorites"
        >
          {addFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
