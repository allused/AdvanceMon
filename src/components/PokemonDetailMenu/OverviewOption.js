import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';

/* 
This componant represents the Pokemon Detail page Overview Option, not finished yet, 
TODO - should be clickable, on click: shows the Overview Option Content on the Main screen.
*/
function OverviewOption() {


    const overStyle = useTheme();
    const useStyle = makeStyles(overStyle);
    const style = useStyle();
    
    return (
        <div className={`${style.sharedStyle} ${style.firstOptionStyle}`}>
            <h3 >Overview</h3>
        </div>
    )
}

export default OverviewOption;
