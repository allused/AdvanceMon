import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

function OptionsContainer(props) {

    const style = useStyle();
    //const firstOption = props.firstOption; 
    const secondOption = props.secondOption;
    const thirdOption = props.thirdOption;
    const fourthOption = props.fourthOption;

    return (
        <div className={style.containerStyle}>
            <ThemeProvider theme={optionsTheme}>
                {props.firstOption}
                {props.secondOption}
                {props.thirdOption}
                {props.fourthOption}
            </ThemeProvider>
        </div>
    )
}

const optionsTheme = {
    sharedStyle: {
        paddingLeft: '20px',
        display: 'flex',
        height: '35px',
        width: '290px',
        border: '2px solid red',
        margin: 'auto',
        alignItems: 'center'

    },
    firstOptionStyle: {
        marginTop: '7px',
    }
}

const useStyle = makeStyles({
    containerStyle: {
        display: 'table-cell',
        border: '2px solid yellow'
    }
})

export default OptionsContainer
