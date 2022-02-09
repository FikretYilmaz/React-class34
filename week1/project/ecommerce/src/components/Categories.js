import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

function Categories({ handleCategory, categoryName, alignment }) {
  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={() => {
        handleCategory(categoryName);
      }}
    >
      <ToggleButton
        variant="outlined"
        value={categoryName}
      >{`FAKE: ${categoryName}`}</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Categories;
