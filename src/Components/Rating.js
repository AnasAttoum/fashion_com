import * as React from 'react';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSize() {
  const [star, setStar] = useState(2)
  return (
    <div className='d-flex align-items-center mt-4'>
      <Stack spacing={1}>
        <Rating id='rate' name="size-medium" defaultValue={star} onChange={(e, val) => {
          setStar(val)
        }} />
      </Stack>
      <span className='ms-3'>{star}</span>
      <span className='ms-2'>(156)</span>
    </div>
  );
}