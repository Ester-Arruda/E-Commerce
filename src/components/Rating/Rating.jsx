import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useEffect } from 'react';

export function RatingProduct({ evaluation, valueReadOnly }) {
  const [value, setValue] = React.useState(null);

  useEffect(() => {
    setValue(evaluation);
  }, [evaluation])
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <div>
        <Rating name="read-only" value={value} readOnly={valueReadOnly} />
      </div>
    </Box>
  );
}
