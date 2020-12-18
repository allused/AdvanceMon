import React from 'react'
import { makeStyles } from '@material-ui/styles';

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
