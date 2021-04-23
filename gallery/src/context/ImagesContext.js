import R, { useContext } from 'react';

export const ImagesContext = R.createContext()

export const useImagesContext = () => useContext(ImagesContext)