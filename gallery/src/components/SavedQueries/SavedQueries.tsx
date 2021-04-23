import React, { useEffect, useState } from 'react';
import { useChipsContext } from '../../context/ChipsContext';
import { ChipT } from '../../types/types';
import { SavedChip } from '../SavedChip/SavedChip';
import './SavedQueries.css'



export const SavedQueries: React.FC = () => {

    const [open, setOpen] = useState(false);
    //
    const { savedChips } = useChipsContext()

    const handleOpen = () => {
        setOpen(s => !s)
    }
    const handleClose = () => {
        setOpen(false)

    }

    return (
        <div className={`saved-queries ${open && 'open'}`}>
            <button className="saved-queries__main "
                onClick={handleOpen}>
                <p className="saved-queries__value">Queries</p>
                <i className="material-icons  ">{open ? 'expand_less' : 'expand_more'}</i>
            </button>
            <div className="saved-queries__list">
                {savedChips.length ? savedChips.map((sChip: ChipT) =>
                 (<SavedChip key={Math.random()} savedChip={sChip}/>))
                    :
                    (<div key={Math.random()} className="list__item no-Query">
                        <p className="item__value ">No query</p>
                    </div>)}


            </div>
            <div className="saved-queries__backdrop"
                onClick={handleClose}
            />

        </div>
    )
}