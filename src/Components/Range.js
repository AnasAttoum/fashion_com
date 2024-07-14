import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import styles from './Range.module.css'

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

export default function MinimumDistanceSlider({ setShowOriginal, data, setData }) {
    const [value1, setValue1] = React.useState([0, 500]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
        setData({ ...data, low: value1[0], high: value1[1] })
        setShowOriginal(false)
    };



    return (
        <>
            <Box sx={{ width: '12vw' }} className={styles.box}>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                    max={500}
                />
            </Box>
            <div className='d-flex justify-content-between' style={{ width: '100%' }}>
                <p style={{ backgroundColor: '#ccc', borderRadius: '5px', padding: '5px' }}>min: {value1[0]}$</p>
                <p style={{ backgroundColor: '#ccc', borderRadius: '5px', padding: '5px' }}>max: {value1[1]}$</p>
            </div>
        </>
    );
}
