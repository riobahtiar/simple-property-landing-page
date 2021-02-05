import './Modal.scss';
import {ReactComponent as WishList} from './img/wishlist.svg';
import {ReactComponent as Bathroom} from './img/bathroom.svg';
import {ReactComponent as Bedroom} from './img/bedroom.svg';
import {ReactComponent as Building} from './img/building.svg';
import {ReactComponent as Land} from './img/land.svg';
import {ReactComponent as Marker} from './img/marker.svg';
import React, {useState} from 'react'

const Modal = ({setOpen, openModalChange, indexModalChange, setPropertyData}) => {
    const [location, showLocation] = useState(false);
    const showHideModal = openModalChange ? "modal modal__show" : "modal modal__hide";
    const showHideGeneral = location ? "card--body general hide" : "card--body general show";
    const showHideLocation = location ? "card--body location show" : "card--body location hide";
    const item = setPropertyData[indexModalChange];

    return (
        <div id="modal" className={showHideModal}>
            <section className="modal-container">
                <div className="card">
                    <div className={showHideGeneral}>
                        <div className="card--header">
                            <img src={item.media.thumbnail} alt={item.title} className="card--headerImg"/>
                        </div>
                        <div className="card--bodyMeta">
                            <span className="primary">{item.status}</span>
                            {item.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                            <span className="wishlist"><WishList/></span>
                        </div>
                        <div className="card--bodyPricing">
                            <span className="totalPrice">{item.price_str}</span>
                            Cicilan {item.installment}
                        </div>

                        <div className="card--bodyInfo">
                            <h3>{item.title}</h3>
                            <span>{item.address}</span>
                        </div>

                        <div className="card--bodySpec">
                            <ul className="spec">
                                <li><Bedroom/> <span>{item.specification.bedroom} K. Tidur</span></li>
                                <li><Bathroom/> <span>{item.specification.bathroom} K. Mandi</span></li>
                                <li><Building/> <span>{item.specification.building_size}m2</span></li>
                                <li><Land/> <span>{item.specification.land_size}m2</span></li>
                            </ul>
                        </div>
                        <div className="card--bodyCTA">
                            <button type="button" onClick={() => {
                                showLocation(true)
                            }}>Lihat Peta
                            </button>
                        </div>
                    </div>
                    <div className={showHideLocation}>
                        <div className="card--header map">
                            <div className="marker">
                                <Marker/>
                            </div>
                            <img src={item.media.map_img} alt={item.title} className="card--headerImgMap"/>
                        </div>
                        <div className="card--bodyInfo">
                            <h3>{item.address}</h3>
                            <span>{item.description}</span>
                        </div>
                        <div className="card--bodyCTA">
                            <button type="button" onClick={() => {
                                showLocation(false);
                                setOpen(false)
                            }}>Tutup
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Modal;
