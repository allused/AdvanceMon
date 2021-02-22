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
        paddingLeft: '16px',
        display: 'flex',
        height: '35px',
        width: '293px',
        border: '2px solid red',
        margin: 'auto',
        alignItems: 'center',
        borderRadius: '5px',
        "&:hover":{
            backgroundColor: '#ff000082'
        }

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
