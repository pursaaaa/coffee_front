import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import config from '../config';
import '../styles/Products.css';

function Products() {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(config.apiPath + '/product/list')

            if (res.data.results !== undefined) {
                const selectedProducts = res.data.results.filter(
                    (item) => item.id === 10 || item.id === 11 || item.id === 12     // Replace with your IDs
                );

                setProducts(selectedProducts);
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // Cleanup the observer when the component unmounts
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, [product]);

    function showImage(item) {
        if (item.img !== undefined) {
            let imgPath = config.apiPath + '/uploads/' + item.img;

            if (item.img === "") imgPath = "default_image.png"

            return <img className='card-img-top object-fit-contain mt-3' height='250px' width='250px' src={imgPath} alt={item.name} />
        }
    }

    return (
        <div id="products" className="products-section py-5">
            <div className="container">
                <h1 className="text-center mb-4" style={{ color: '#86592d' }}>
                    Our Latest Products!
                </h1>
                <div className="row">
                    {product.length > 0 ? (
                        product.map((item) => (
                            <div className="col-md-4 mb-4" key={item.id}>
                                <div className="card hidden" style={{ background: '#1a1a1a', border: 'none' }}>
                                    <a href={`/product/${item.id}`}>
                                        {showImage(item)}
                                    </a>
                                    <div className="card-body" style={{ color: 'whitesmoke' }}>
                                        <a href={`/product/${item.id}`}
                                            style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                            <h5 className="card-title">{item.name}</h5>
                                            <h6 className="card-text">{item.price.toLocaleString('th-TH')}</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No products available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;
