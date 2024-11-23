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
                <h1 className="text-center mb-4" data-aos='zoom-in' data-aos-duration='1400' style={{ color: '#eab94c' }}>
                    สินค้าล่าสุด!
                </h1>
                <div className="row">
                    {product.length > 0 ? (
                        product.map((item) => (
                            <div className="col-md-4 mb-4" key={item.id}>
                                <div className="card" data-aos='zoom-in' data-aos-duration='1400' style={{ background: '#1a1a1a', border: 'none' }}>
                                    <a href={`/product/${item.id}`}>
                                        {showImage(item)}
                                    </a>
                                    <div className="card-body" style={{ color: 'whitesmoke' }}>
                                        <a href={`/product/${item.id}`}
                                            style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                            <h5 className="card-title">{item.name}</h5>
                                            <h6 className="card-text">{item.price.toLocaleString('th-TH')} บาท</h6>
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
