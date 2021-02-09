import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const imagess = props.imagesarr.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list"> {imagess}</div>
}

export default ImageList
