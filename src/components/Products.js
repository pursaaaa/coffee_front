import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import config from '../config';

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

            return <img className='card-img-top object-fit-contain' height='200px' src={imgPath} alt={item.name} />
        }
    }

    return (
        <section id="products" className="products-section py-5" style={{ backgroundColor: '#FAF3E0' }}>
            <div className="container">
                <h2 className="text-center mb-5" style={{ color: '#4E342E' }}>Our Coffee Beans</h2>
                <div className="row">
                    {product.length > 0 ? product.map(item =>
                        <div className="col-md-4 mb-4" key={item.id}>
                            <div className="card shadow-sm" style={{ borderColor: '#D7CCC8' }}>
                                {showImage(item)}
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.price.toLocaleString('th-TH')}</p>
                                    <a href="/" className="btn btn-warning">Buy</a>
                                </div>
                            </div>
                        </div>
                    ) : (<p className="text-center">No products available.</p>)}
                </div>
            </div>
        </section>
    );
}

export default Products;
