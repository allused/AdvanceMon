import React from 'react'
/* 
This component used for displaying media elements on the Pokemon Detail Mainscreen, in the Overview option
Props: containerStyle - This is container div div style, which contains the images and the type name style
        typeNameStyle - It conatains the style class for the type name
        imageStyle - It contains the style class for the images
        frontImgSrc - It contains the source of the front image to display
        backImgsrc  - It contains the back image to display
*/
function MediaContent(props) {
    return (
        <div className={`${props.containerStyle}`}>
            <h3 className={`${props.typeNameStyle}`}>{props.name === undefined ? "Default" : props.name}</h3>
            {props.min_level !== undefined && <p className={props.levelStyle}>{props.min_level}</p> }
            <img  className={`${props.imageStyle}`} alt="Not Found" src={`${props.frontImgSrc}`}></img>
            <img  className={`${props.imageStyle}`} alt="Not Found" src={`${props.backImgSrc}`}></img>
        </div>
    )
}

export default MediaContent
