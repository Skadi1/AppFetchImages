import './Chip.css';
import { ChipT } from '../../types/types';

//
type ChipProps = {
    chip: ChipT,
    deleteChip: Function,
    handleSavingChip: Function
}

export const Chip: React.FC<ChipProps> = ({ chip, deleteChip, handleSavingChip }) => {
    return (
        <div
            className="chip"
            key={Math.random()}

        >  <p className="chip__value"> {chip.value}</p>
            <i className="material-icons chip__save"
                onClick={_ => handleSavingChip(chip.value)}
            >
                {chip.isSave ? 'favorite' : "favorite_border"}
            </i>
            <i className="material-icons chip__delete"
                onClick={_ => deleteChip(chip.value)}
            >close</i></div>
    )





}