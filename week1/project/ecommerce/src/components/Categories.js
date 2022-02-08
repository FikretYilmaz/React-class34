import { Button } from '@mui/material';
import React from 'react';
import { allCategories } from '../fake-data/all-categories';

function Categories({ handleCategory, sliceCategory }) {
  return sliceCategory.map((categoryName, index) => {
    return (
      <Button
        id="Button11"
        variant="outlined"
        key={index}
        // onClick={handleCategory('JEWELERY')}
      >
        {`FAKE: ${categoryName}`}
      </Button>
    );
  });
}

export default Categories;
