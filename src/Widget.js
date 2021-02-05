import './Widget.scss';
// import Modal from './Modal.js';
import {ReactComponent as WishList} from './img/wishlist.svg';
import {ReactComponent as Bathroom} from './img/bathroom.svg';
import {ReactComponent as Bedroom} from './img/bedroom.svg';
import {ReactComponent as Building} from './img/building.svg';
import {ReactComponent as Land} from './img/land.svg';

function Widget({setPropertyData,setOpen,setIndex,slideActive}) {
    return setPropertyData.map((item, i) =>
        <div slide-id={i} data-active={i === slideActive} key={i} className="card slider--item">
            <div className="card--header">
                <img src={item.media.thumbnail} alt={item.title} className="card--headerImg"/>
            </div>
            <div className="card--body">
                <div className="card--bodyMeta">
                    <span className="primary">{item.status}</span>
                    {item.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                    <span className="wishlist">
                    <WishList/>
                </span>
                </div>
                <div className="card--bodyPricing">
                    <span className="totalPrice">{item.price_str}</span>
                    Cicilan {item.installment}
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
                        setIndex(i);
                        setOpen(true)
                    }}>Lihat Detail
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Widget;
