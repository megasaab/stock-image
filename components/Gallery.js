import favoriteIco from '../public/static/images/favorite.png';
import maximaizeIco from '../public/static/images/maximize.png';
import downloadIco from '../public/static/images/download.png';
import grid from '../public/static/images/grid.svg';
import gridMobile from '../public/static/images/grid-mobile.svg';
import rectangle from '../public/static/images/rectangle.svg';
import rectangleMobile from '../public/static/images/rectangle-mobile.svg';

import Image from "next/image";
import {useEffect, useState} from "react";
import {apiRequest} from "../pages/api/api";


function Gallery() {

    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (src) => {
        setTempImgSrc(src);
        setModel(true);
    }


    useEffect(() => {
        apiRequest.getPhotos(page).then((data) => setPhotos([...photos, ...data]));
    }, [page]);

    return (
        <div className="gallery__wrapper">
            <div className={model ? 'model open' : 'model'}>
                <img src={tempImgSrc} onClick={() => setModel(false)}/>
            </div>

            <div className="grid-icons">
                <div className="mt-5 d-flex justify-content-center">
                    <div className="me-3">
                        <Image src={rectangle}/>
                    </div>
                    <div>
                        <Image src={grid}/>
                    </div>
                </div>
            </div>

            <div className="grid-icons-mobile">
                <div className="d-flex mt-5 justify-content-center">
                    <div className="me-3">
                        <Image src={rectangleMobile}/>
                    </div>
                    <div>
                        <Image src={gridMobile}/>
                    </div>
                </div>
            </div>

            <div className="gallery mt-5">
                {photos.map((item) => {
                    return (
                        <div className="pics" key={item?.id}>
                            <img src={item.urls?.regular} style={{width: '100%', borderRadius: '8px'}}/>
                            <div className="gallery-overlay d-flex justify-content-between align-items-center">
                                <div className="me-5" onClick={() => apiRequest.likePhoto(item?.id)}>
                                    <Image src={favoriteIco}/>
                                </div>
                                <div className="me-5" onClick={() => getImg(item.urls?.regular)}>
                                    <Image src={maximaizeIco}/>
                                </div>
                                <div>
                                    <Image src={downloadIco}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => window.scrollTo(0, 0)} className="button-up d-flex  mb-1 p-3 fixed-bottom fixed" style={{right: '0', left: '95%', width: "2.3%"}}><i
                className="fa-solid fa-arrow-up "/></button>
        </div>
    )
}

export default Gallery;
