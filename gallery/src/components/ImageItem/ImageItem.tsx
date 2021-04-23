import React from "react";
import './ImageItem.css';

type ImageItemProp = {
    url: string
}

export const ImageItem: React.FC<ImageItemProp> = ({ url }) => {
    return (
        <div key={Math.random()} className="image-list__item ">
            <img className="item__image" src={url} alt="NO_IMAGE" />
        </div>
    )
}