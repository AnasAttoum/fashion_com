import * as React from 'react';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

export default function NormalSnackbar({text}) {
    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
    });
    React.useEffect(()=>{
        handleClick(SlideTransition)()
    },[])

    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition,
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };


    return (
        <div>
            {/* <Button onClick={handleClick(SlideTransition)}>A</Button> */}
            <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message={text}
                key={state.Transition.name}
                autoHideDuration={3000}
            />
        </div>
    );
}