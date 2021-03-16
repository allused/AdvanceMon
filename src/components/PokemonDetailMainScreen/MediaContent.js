import React from 'react'
/* 
This component used for displaying media elements on the Pokemon Detail Mainscreen, in the Overview option
Props: containerStyle - This is container div div style, which contains the images and the type name style
        typeNameStyle - It conatains the style class for the type name
        imageStyle - It contains the style class for the images
        frontImgSrc - It contains the source of the front image to display
        backImgsrc  - It contains the back image to display
        name  -  It's an optional field, to be able to use it as pokemon name, if it's not given it will indicate that you see the Default sprite
        minLevel  -  It's an optional props, you can pass the pokemon level here
*/
function MediaContent(props) {
    console.log(props.minLevel)
    return (
        <div className={`${props.containerStyle}`}>
            <h3 className={`${props.typeNameStyle}`}>{props.name == undefined ? "Default" : props.name}</h3>
            {props.evo && <p className={props.levelStyle}>minimum level : {props.minLevel == null ? "?" : props.minLevel}</p> }
            <img  className={`${props.imageStyle}`} alt="Not Found" src={`${props.frontImgSrc}`}></img>
            {props.backImgSrc != undefined && <img  className={`${props.imageStyle}`} alt="Not Found" src={`${props.backImgSrc}`}></img>}
        </div>
    )
}

export default MediaContent
