import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import NormalSnackbar from './NormalSnackbar';

export default function RatingSize({ rating, num, id ,refresh,setRefresh }) {
  const [snack, setSnack] = React.useState(false)
  const dispatch = useDispatch()
  const IsLogged = useSelector(state => state.IsLogged.log)

  React.useEffect(()=>{
    setTimeout(()=>{
      setSnack(false)
    },5000)
  })

  return (
    <div className='d-flex align-items-center mt-4'>
      {snack && <NormalSnackbar text={'Please Login or Sign Up first'}/>}
      <Stack spacing={1}>
        <Rating id='rate' name="size-medium" defaultValue={0} onChange={(e, val) => {
          if(IsLogged){
            dispatch({ type: 'RATING', payload: { myRating: val, id: id } })
            setRefresh(!refresh)
          }
          else{
            setSnack(true)
          }
          
        }} />
      </Stack>
      <span className='ms-3'>{rating}</span>
      <span className='ms-2'>({num})</span>
    </div>
  );
}