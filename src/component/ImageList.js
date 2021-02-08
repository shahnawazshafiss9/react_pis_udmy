import React from 'react'

const ImageList = (props) => {
    const imagess = props.imagesarr.map((image) => {
        return <img src={image.urls.regular} alt="" key={image.id} width="150" />
    });

    return <div> {imagess}</div>
}

export default ImageList
