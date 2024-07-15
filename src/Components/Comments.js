import { useSelector } from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import NormalSnackbar from './NormalSnackbar';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    backdropFilter: 'blur(5px)',
    overflow: 'scroll',
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export default function Comments({ comments }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [snack, setSnack] = React.useState(false)
    const IsLogged = useSelector(state => state.IsLogged)

    React.useEffect(() => {
        setTimeout(() => {
            setSnack(false)
        }, 5000)
    })

    const addComment = () => {
        if(IsLogged){

        }
        else{
            setSnack(true)
        }
    }

    return (
        <>
            {snack && <NormalSnackbar text={'Please Login or Sign Up first'} />}
            <div className='d-flex my-3' style={{ cursor: 'pointer' }} onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1"></path></svg>
                <p>{Object.keys(comments).length} Comment</p>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='mb-3' style={{ color: 'white' }}>
                        Comments
                    </Typography>

                    {Object.values(comments).map((element, index) => {
                        return <Card key={index} sx={{ maxWidth: 345 }} className='mb-3'>
                            <CardHeader
                                avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
                                title="Shrimp and Chorizo Paella"
                            />

                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {element}
                                </Typography>
                            </CardContent>
                        </Card>
                    })}

                    <TextField
                        id="filled-multiline-static"
                        label="Add Comment Here"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                        style={{ backgroundColor: '#ffffff88', width: '100%', borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}
                    />
                    <Button onClick={addComment} style={{ width: '100%' }} variant="contained" endIcon={<SendIcon />}>
                        Add
                    </Button>

                </Box>




            </Modal>
        </>
    )
}
