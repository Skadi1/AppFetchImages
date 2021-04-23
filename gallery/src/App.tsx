import './App.css';
import { Footer } from './components/Footer/Footer';
import { ImageList } from './components/ImagesList/ImagesList';
import { Search } from './components/Search/Search';
import { ImagesContext } from './context/ImagesContext';
import { ChipsContext } from './context/ChipsContext';
import { useChips } from './hooks/useChips';
import { useImages } from './hooks/useImages';

function App() {

  const { ready, chips, savedChips, selectOneChip,deleteStorageChip, addChip, deleteChip, handleSavingChip } = useChips()
  const { urls, loading, fetchImages } = useImages()

  return (
    <>
      {ready && (
        <ImagesContext.Provider
          value={{ urls, loading, fetchImages }}>
          <div className="App">
            <div className="App__container">
              <ChipsContext.Provider
                value={{ loading, urls, selectOneChip,fetchImages, savedChips, chips, addChip, deleteChip, handleSavingChip, deleteStorageChip }}>
                <Search />
              </ChipsContext.Provider>
              <ImageList />
            </div>
            <Footer />
          </div>
        </ImagesContext.Provider>
      )}
    </>
  );
}

export default App;
