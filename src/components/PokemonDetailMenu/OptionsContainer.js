import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';

function OptionsContainer(props) {

    const style = useStyle();

    return (
        <div className={style.containerStyle}>

            
        </div>
    )
}

const optionsTheme = {
    sharedStyle: {
        paddingLeft: '20px',
        display: 'table-cell',
    },
    overviewStyle: {
        marginTop: '15px',
    }
}

const useStyle = makeStyles({
    containerStyle: {
        display: 'table-cell',
        border: '2px solid yellow'
    }
})

export default OptionsContainer
