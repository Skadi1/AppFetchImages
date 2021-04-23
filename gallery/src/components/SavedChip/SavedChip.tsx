import React from "react";
import { useChipsContext } from "../../context/ChipsContext";
import { useImagesContext } from "../../context/ImagesContext";
import { ChipT } from "../../types/types";
import './SavedChip.css';

type SavedChipProp = {
    savedChip: ChipT
}
export const SavedChip: React.FC<SavedChipProp> = ({ savedChip }) => {
    const { addChip, deleteStorageChip, selectOneChip, } = useChipsContext()
    const { fetchImages } = useImagesContext()

    const handleFetchOneChip = (value: any) => {
        selectOneChip(value)
        fetchImages(value)

    }

    return (
        <div className="list__item">
            <p className="item__value"
                onClick={_ => addChip(savedChip.value)}
            >{savedChip.value}</p>
            <i className="material-icons item__search"
                onClick={_ => handleFetchOneChip(savedChip.value)}
            >search</i>
            <i className="material-icons item__close"
                onClick={_ => deleteStorageChip(savedChip.value)}
            >close</i>
        </div>
    )
}