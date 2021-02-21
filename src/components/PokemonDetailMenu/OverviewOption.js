import React from 'react'
import { makeStyles } from '@material-ui/styles';
/* 
This componant represents the Pokemon Detail page Overview Option, not finished yet, 
TODO - should be clickable, on click: shows the Overview Option Content on the Main screen.
*/
function OverviewOption() {


    const useStyle = makeStyles({
        textContainer: {
            marginTop: '15px',
            paddingLeft: '20px',
            display: 'table-cell',
        },


    })


    const style = useStyle();

    return (
        <div className={style.textContainer}>
            <h3 >Overview</h3>
        </div>
    )
}

export default OverviewOption;
