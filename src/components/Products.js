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
                    (item) => item.id === 14 || item.id === 15 || item.id === 16     // Replace with your IDs
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
                <h2 className="text-center mb-5" data-aos="fade-up" data-aos-duration="1200" style={{ fontWeight: '700', color: "#4E4E4E" }}>
                    สินค้าล่าสุดของเรา
                </h2>
                <div className="row g-4">
                    {product.length > 0 ? (
                        product.map((item) => (
                            <div className="col-12 col-sm-6 col-md-4" key={item.id}>
                                <div className="card border-0 h-100" data-aos="fade-up" data-aos-duration="1200">
                                    <a href={`/product/${item.id}`} className="text-decoration-none">
                                        <div className="card-img-top overflow-hidden" style={{ height: "200px" }}>
                                            {showImage(item)}
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title mb-2 text-dark" style={{ fontWeight: '600' }}>{item.name}</h5>
                                            <p className="card-text text-muted mb-2">{item.price.toLocaleString('th-TH')} บาท</p>
                                        </div>
                                    </a>
                                    <div className="card-footer border-0 bg-transparent text-center">
                                        <a href={`/product/${item.id}`} className="btn btn-outline-secondary btn-sm">
                                            ดูรายละเอียด
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-muted">ไม่มีสินค้าในขณะนี้</p>
                    )}
                </div>
            </div>
        </div>

        // อันเก่า
        // <div id="products" className="products-section py-5">
        //     <div className="container">
        //         <h2 className="text-center mb-4" data-aos='zoom-in' data-aos-duration='1400'>
        //             สินค้าล่าสุดของเรา
        //         </h2>
        //         <div className="row">
        //             {product.length > 0 ? (
        //                 product.map((item) => (
        //                     <div className="col-12 col-md-4" key={item.id}>
        //                         <div className="card" data-aos='zoom-in' data-aos-duration='1400'>
        //                         <a href={`/product/${item.id}`}>
        //                                 {showImage(item)}
        //                                 </a>
        //                             <div className="card-body">
        //                             <a href={`/product/${item.id}`}>
        //                                     <p className="card-title">{item.name}</p>
        //                                     <p className="card-text">{item.price.toLocaleString('th-TH')} บาท</p>
        //                                     </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))
        //             ) : (
        //                 <p className="text-center">No products available.</p>
        //             )}
        //         </div>
        //     </div>
        // </div>
    );
}

export default Products;
