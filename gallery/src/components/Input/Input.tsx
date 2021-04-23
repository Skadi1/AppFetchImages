import { useEffect, useState } from "react";
import { useChipsContext } from "../../context/ChipsContext";

export const Input: React.FC = () => {
    const [input, setInput] = useState('');
    const { addChip, deleteChip } = useChipsContext()
    const handleInput = (e: React.KeyboardEvent): void => {

        const value = e.key;

        if (value.length === 1 && value.match(/[0-9a-zA-Z]/)) {
            setInput(s => s + value);
            return;
        }
        if (value === " " && input.length) {
            if (addChip(input)) setInput('')
            return;
        }

        if (value === "Backspace") {
            if (!input.length) deleteChip()
            else setInput(s => s.slice(0, -1))
        }
    }

    return (
        <input
            className="search__input"
            value={input}
            type='text'
            onChange={e => ""}
            onKeyDown={handleInput}
        />
    )
}