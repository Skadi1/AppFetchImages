import { useImagesContext } from '../../context/ImagesContext';
import { ImageItem } from '../ImageItem/ImageItem';
import { Loader } from '../Loader/Loader';
import { NoImages } from '../NoImages/NoImages';
import { UrlsT } from '../../types/types';
import './ImagesList.css';

export const ImageList = () => {
    const { loading, urls} = useImagesContext()

    if (loading) return <Loader />

    return (
        <div className="images__list">

            {urls.length ? urls.map((image: any) => {
                return <ImageItem key={image} url={image} />
            }) : <NoImages />}

        </div>
    )
}