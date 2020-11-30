import { makeStyles } from '@material-ui/styles';
import React,{useContext} from 'react';
import ThemeContext from './ThemeContext';


function ThemeToggle(props) {

    const themes = useContext(ThemeContext);

    const useStyle = makeStyles({

        toggleButton: {

            border: '1px solid black',
            backgroundColor: 'white',
            height: '70%',
            float: 'right'
        }
    })

    const style = useStyle();
    return (

        <div className={style.toggleButton}>
            <h3 onClick={props.toggle}>{themes === true ? "Dark" : "Light" }</h3>
        </div>
    )
}

export default ThemeToggle
