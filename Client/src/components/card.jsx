import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/router';

export default function Card({ prodName, proId, prodDesc, prodPrice, addtoCart }) {
    let router = useRouter()
    let onCardClick = (id) => router.push(`/product/${id}`)

    return (
        <div className="item-container"
            style={{ backgroundColor: '#fff', width: '17rem', height: 'auto', margin: '1rem', padding: '1rem', borderRadius: '1rem', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)', }}>
            <div onClick={() => onCardClick(proId)} className="item-top" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            </div>
            <div onClick={() => onCardClick(proId)} className="main-item" style={{ cursor: 'pointer', width: '200px', display: 'block', margin: '0 auto', height: '7rem' }}>
                <img style={{ width: '180px', paddingLeft: '15px', paddingBottom: '5px' }} src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/01/Asus-ROG.jpg?ssl=1&quality=80&w=f" alt="" />
            </div>
            <h2 className="item-heading" onClick={() => onCardClick(proId)} style={{ cursor: 'pointer', textTransform: 'capitalize', textAlign: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif', height: '3rem', marginBottom: '3rem' }}>
                {prodName}
            </h2>
            <p className="item-description" onClick={() => onCardClick(proId)} style={{ cursor: 'pointer', margin: '.5rem 0', fontSize: '.9rem', fontWeight: 200, opacity: '80%', lineHeight: '0.5 rem', height: '12rem' }}>
                {prodDesc}
            </p>
            <ul className="rating" style={{ textAlign: 'center' }}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </ul>
            <p className="item-price" style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '0.5rem' }}><sup>$</sup>{prodPrice}</p>
            <button onClick={() => addtoCart(proId)}
                className="item-cart-btn" style={{ border: 'none', backgroundColor: 'transparent', margin: '0 auto', width: '100%', border: '1px', fontWeight: 'bold', padding: '.5rem 1rem', backgroundColor: 'rgb(200, 142, 254)', color: '#fff', borderRadius: '2rem', fontSize: '1.2rem', fontWeight: 200, position: 'relative', cursor: 'pointer', transition: 'all .3s linear' }}>
                Add To Cart <span style={{ paddingLeft: '10px' }}><i className="fa-solid fa-cart-shopping"></i></span>
            </button>
        </div>
    );
}

