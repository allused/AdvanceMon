import React from 'react'

function MediaContent(props) {
    return (
        <div className={`${props.containerStyle}`}>
            <h3 className={`${props.typeNameStyle}`}>Default</h3>
            <img  className={`${props.imageStyle}`} alt="Not Found" src={`${props.frontImgSrc}`}></img>
            <img  className={`${props.imageStyle}`} alt="Not Found" src={`${props.backImgSrc}`}></img>
        </div>
    )
}

export default MediaContent
