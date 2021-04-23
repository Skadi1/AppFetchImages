import R, { useContext } from 'react';

export const ChipsContext = R.createContext()

export const useChipsContext = () => useContext(ChipsContext)