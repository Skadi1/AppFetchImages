import { useChipsContext } from "../../context/ChipsContext";
import { Chip } from "../Chip/Chip";
import { ChipT } from '../../types/types';


export const ChipsList: React.FC = () => {
    //
    const { chips, deleteChip, handleSavingChip } = useChipsContext()

    return (
        < >
            {chips.map((chip: ChipT) => <Chip key={Math.random()} chip={chip} deleteChip={deleteChip} handleSavingChip={handleSavingChip} />)}
        </>
    )


}