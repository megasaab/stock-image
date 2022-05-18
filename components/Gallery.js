import Img1 from '../public/static/images/Img1.jpg'
import Img2 from '../public/static/images/Img2.jpg'
import Img3 from '../public/static/images/Img3.jpg'
import Img4 from '../public/static/images/Img4.jpg'
import Img5 from '../public/static/images/Img5.jpg'
import Img6 from '../public/static/images/Img6.jpg'
import Img7 from '../public/static/images/Img7.jpg'
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
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <Image  src={item.imgSrc} style={{width: '100%', borderRadius: '8px'}}/>
                            <div className="gallery-overlay">
                                <div className="d-flex align-items-center justify-content-between overlay-icons">
                                    <i className="fa-solid fa-2x fa-heart" />
                                    <i className="fa-light fa-arrow-up-right-and-arrow-down-left-from-center" />
                                    <i className="fa-solid fa-2x fa-down-to-bracket"/>
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
