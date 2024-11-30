import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductsDetail.css'; // Custom styles
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import axios from 'axios';
import config from '../config';

function ProductDetail() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null); // Store the product details
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${config.apiPath}/product/${id}`); // Replace :id with actual product ID
            if (res.data) {
                setProduct(res.data.product); // Assuming the API returns { product: {...} }
            }
        } catch (e) {
            Swal.fire({
                title: 'Error',
                text: e.message,
                icon: 'error',
            });
        }
    };

    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const showImage = (img) => {
        const imgPath = img
            ? `${config.apiPath}/uploads/${img}`
            : 'default_image.png'; // Default image if no image is provided
        return <img className="card-img-top object-fit-fill" height="150px" src={imgPath} alt="Product" />;
    };

    return (
        <>
            <Navbar />
            <div className="product-detail-container">
                {product ? (
                    <>
                        <div className="image-gallery">
                            {showImage(product.img)}
                        </div>

                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <p className="price">{product.price.toLocaleString('th-TH')} บาท</p>
                            <p>{product.description}</p>
                            <div className="product-actions">
                                <div className="quantity-control">
                                    <button onClick={handleDecrement} className="btn-decrement">
                                        -
                                    </button>
                                    <span>{quantity}</span>
                                    <button onClick={handleIncrement} className="btn-increment">
                                        +
                                    </button>
                                </div>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Loading product details...</p>
                )}
            </div>
            <Footer />
        </>
    );
}

export default ProductDetail;
