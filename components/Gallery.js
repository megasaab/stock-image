import Img1 from '../public/static/images/Img1.jpg';
import Img2 from '../public/static/images/Img2.jpg';
import Img3 from '../public/static/images/Img3.jpg';
import Img4 from '../public/static/images/Img4.jpg';
import Img5 from '../public/static/images/Img5.jpg';
import Img6 from '../public/static/images/Img6.jpg';
import Img7 from '../public/static/images/Img7.jpg';
import favoriteIco from '../public/static/images/favorite.png';
import maximaizeIco from '../public/static/images/maximize.png';
import downloadIco from  '../public/static/images/download.png';
import Image from "next/image";
import {useState} from "react";

function Gallery() {
    let data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id: 6,
            imgSrc: Img6
        },
        {
            id: 7,
            imgSrc: Img7
        }
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState({});

    const getImg = (src) => {
        setTempImgSrc(src);
        setModel(true);
    }

    return (
        <div className="gallery__wrapper">
            <div className={model ? 'model open' : 'model'}>
                <img  src={tempImgSrc.src} />
                <i className="fa fa-times fa-2x" onClick={() => setModel(false)} />
            </div>

            <div className="gallery mt-5">
                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index}>
                            <Image  src={item.imgSrc} style={{width: '100%', borderRadius: '8px'}}/>
                            <div className="gallery-overlay d-flex justify-content-between align-items-center">
                                <div className="me-5">
                                    <Image src={favoriteIco} />
                                </div>
                                <div className="me-5"  onClick={() => getImg(item.imgSrc)}>
                                    <Image src={maximaizeIco} />
                                </div>
                                <div >
                                    <Image src={downloadIco} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery;