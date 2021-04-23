import { useCallback, useEffect, useState } from "react";
import * as _ from 'lodash';
import { ChipT } from '../types/types';


const storageName = 'USER_SAVED_CHIPS'


export const useChips = () => {
  const [chips, setChips] = useState<ChipT[]>([]);
  const [savedChips, setSavedChips] = useState<ChipT[]>([]);
  const [ready, setReady] = useState<boolean>(false);

  const addChip = useCallback((value: string): boolean => {
    if (chips.filter((chip: ChipT) => chip.value === value).length) return false

    const existChip = savedChips.filter((chip: ChipT) => chip.value === value).length ? true : false

    const newChip: ChipT = {
      value,
      isSave: existChip
    }
    setChips(chips => chips.concat([newChip]))
    return true
  }, [savedChips, chips])

  const deleteChip = useCallback((value: string | null) => {
    if (!value) {
      setChips(chips => {
        let newArray = [...chips];
        newArray.pop();
        return newArray;
      });
      return
    }
    else setChips(chips => chips.filter(chip => chip.value !== value))

  }, [])

  const handleSavingChip = useCallback((value: string) => {

    let changedChips = chips.map((chip: ChipT) => {
      if (chip.value === value) chip.isSave = !chip.isSave
      return chip
    })

    setChips(changedChips)

    let toStorageChips = changedChips.filter(chip => chip.isSave === true)
    let whitoutDuplicateChips = _.uniqWith(toStorageChips, _.isEqual)
    setStorageChips(whitoutDuplicateChips)

    setSavedChips(whitoutDuplicateChips)

  }, [chips])

  const getStorageChips = (): ChipT[] => {
    const storageData = localStorage.getItem(storageName)

    if (storageData) {
      const storageChips = JSON.parse(storageData)
      return storageChips
    }
    return []
  }

  const setStorageChips = (ar: ChipT[]): void => {
    localStorage.setItem(storageName, JSON.stringify(ar))
  }

  const deleteStorageChip = (value: string): void => {
    let storageChips = getStorageChips()
    let filteredChips = storageChips?.filter(chip => chip.value !== value)
    setStorageChips(filteredChips)

    setChips(chips => chips.map(chip => {
      if (chip.value === value) chip.isSave = false
      return chip
    }))
    setSavedChips(filteredChips)

  }
  const selectOneChip = (value: string) => {
    let chip = { value, isSave: true }
    setChips([chip])
  }
  useEffect(() => {
    let storageChips = getStorageChips()

    if (storageChips.length) setSavedChips(storageChips)

    setReady(true)



  }, [])

  return { ready,selectOneChip, savedChips, deleteStorageChip, chips, addChip, deleteChip, handleSavingChip }
}


