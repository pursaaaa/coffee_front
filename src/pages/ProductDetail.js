import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductsDetail.css'; // Custom styles
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import axios from 'axios';
import config from '../config';
import QRCode from 'qrcode';
import dayjs from 'dayjs';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min';
import generatePayload from 'promptpay-qr';
import MyModal from '../components/MyModal';

function ProductDetail() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null); // Store the product details
    const [quantity, setQuantity] = useState(1);

    const [carts, setCarts] = useState([]); // Items in Carts
    const [recordInCarts, setRecordInCarts] = useState(0);
    const [sumQty, setSumQty] = useState(0);
    const [sumPrice, setSumPrice] = useState(0);
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [payDate, setPayDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
    const [payTime, setPayTime] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const [qrCodeUrl, setQrCodeUrl] = useState(''); // Stores the generated QR code URL

    useEffect(() => {
        fetchData();
        fetchDataFromLocal();
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

    const fetchDataFromLocal = () => {
        const itemInCarts = JSON.parse(localStorage.getItem('carts'));
        // setCarts(itemInCarts);
        // setRecordInCarts(itemInCarts.length);

        if (itemInCarts !== null) {
            setCarts(itemInCarts);
            setRecordInCarts(itemInCarts.length !== null ? itemInCarts.length : 0);

            computePriceAndQty(itemInCarts);
        }
    }

    const addToCart = (item) => {
        let arr = carts;

        if (arr === null) {
            arr = [];
        }

        arr.push(item);

        setCarts(arr);
        setRecordInCarts(arr.length);

        localStorage.setItem('carts', JSON.stringify(carts));

        fetchDataFromLocal();
    }

    const computePriceAndQty = (itemInCarts) => {
        let sumQty = 0;
        let sumPrice = 0;

        for (let i = 0; i < itemInCarts.length; i++) {
            const item = itemInCarts[i];
            sumQty++;
            sumPrice += parseInt(item.price);
        }

        setSumPrice(sumPrice);
        setSumQty(sumQty);
    }

    const addToCartWithFeedback = (product) => {
        // Temporarily mark as adding
        const updatedProduct = { ...product, isAdding: true };
        setProduct(updatedProduct);

        // Add to cart
        addToCart(product);

        // Trigger animation
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false); // Reset animation state
        }, 500); // Matches animation duration (0.5s)

        // Remove "isAdding" state after a short delay
        setTimeout(() => {
            setProduct({ ...product, isAdding: false });
        }, 250); 
    };



    const handleRemove = async (item) => {
        try {
            const button = await Swal.fire({
                title: 'ลบสินค้า',
                text: 'คุณต้องการลบสินค้าออกจากตระกร้าใช่หรือไม่',
                icon: 'question',
                showConfirmButton: true,
                showCancelButton: true,
            });

            if (button.isConfirmed) {
                // Create a new array by removing the first occurrence of the item
                const updatedCarts = [...carts];
                const index = updatedCarts.findIndex((cartItem) => cartItem.id === item.id);

                if (index !== -1) {
                    updatedCarts.splice(index, 1); // Remove the first occurrence
                }

                setCarts(updatedCarts);
                setRecordInCarts(updatedCarts.length);

                localStorage.setItem('carts', JSON.stringify(updatedCarts));

                computePriceAndQty(updatedCarts);

                Swal.fire({
                    title: 'สำเร็จ',
                    text: 'สินค้าได้ถูกลบออกจากตระกร้า',
                    icon: 'success',
                    timer: 1500,
                });
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error',
            });
        }
    };


    const handleSave = async () => {
        setIsSaving(true);

        try {
            const payload = {
                customerName: customerName,
                customerPhone: customerPhone,
                customerAddress: customerAddress,
                payDate: payDate,
                payTime: payTime,
                carts: carts
            }

            const res = await axios.post(config.apiPath + '/api/sale/save', payload);

            if (!customerName || !customerPhone || !customerAddress || !payDate || !payTime) {
                Swal.fire({
                    title: 'ผิดพลาด',
                    text: 'โปรดกรอกข้อมูลให้ครบทุกช่อง',
                    icon: 'error',
                });
                return;
            }

            if (res.data.message === 'success') {

                // Generate PromptPay QR Code
                const mobileNumber = '095-752-2016'; // Replace with your PromptPay phone number
                const amount = sumPrice;
                const promptPayPayload = generatePayload(mobileNumber, { amount });

                // Generate QR Code Image
                QRCode.toDataURL(promptPayPayload)
                    .then((url) => {
                        setQrCodeUrl(url); // Store QR Code URL


                        const qrModal = new Modal(document.getElementById('qrModal'));
                        qrModal.show();
                    })
                    .catch((err) => console.error('Error generating QR code:', err));

                localStorage.removeItem('carts');
                setRecordInCarts(0);
                setCustomerName('');
                setCustomerPhone('');
                setCustomerAddress('');
                setPayDate(new Date());
                setPayTime('');
                setCarts([]);

                Swal.fire({
                    title: 'บันทึกข้อมูล',
                    text: 'ระบบได้บันทึกข้อมูลของคุณแล้ว',
                    icon: 'success',
                    timer: 2000
                })

                document.getElementById('modalCart_btnClose').click();

            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
        } finally {
            setIsSaving(false);
        }
    }

    const handleDeposit = () => {
        Swal.fire({
            title: 'ยืนยันการชำระเงิน',
            text: 'ได้รับเงินเรียบร้อย',
            icon: 'success'
        })

        document.getElementById('qrModal_btnClose').click();
    }

    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    // const showImage = (img) => {
    //     const imgPath = img
    //         ? `${config.apiPath}/uploads/${img}`
    //         : 'default_image.png'; // Default image if no image is provided
    //     return <img className="card-img-top object-fit-fill" height="150px" src={imgPath} alt="Product" />;
    // };

    return (
        <>
            <Navbar />
            <div className="shop container py-5">
                {/* Cart Section */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark fw-bold" data-aos="fade-right" data-aos-duration="1200">
                        สินค้าของเรา
                    </h3>
                    <div className="my-cart d-flex align-items-center">
                        <span className="me-3 text-muted" style={{ fontSize: '1.2rem' }}>ตะกร้าของฉัน</span>
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#modalCart"
                            className={`btn btn-outline-danger d-flex align-items-center px-3 py-2 ${recordInCarts > 0 && isAnimating ? 'cart-animate' : ''
                                }`}
                            style={{ borderRadius: '25px' }}
                        >
                            <i className="fa fa-shopping-cart me-2"></i>
                            <span>{recordInCarts} ชิ้น</span>
                        </button>
                    </div>
                </div>

                <div className="container py-5">
                    {product ? (
                        <div className="row">
                            <div className="col-lg-6">
                                <img
                                    src={`${config.apiPath}/uploads/${product.img || 'default_image.png'}`}
                                    alt={product.name}
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="fw-bold">{product.name}</h2>
                                <p className="text-muted">{product.description}</p>
                                <h4 className="text-danger">{product.price?.toLocaleString('th-TH')} บาท</h4>

                                <div className="d-flex align-items-center mt-4">
                                    <button
                                        className="btn btn-outline-secondary me-2"
                                        onClick={handleDecrement}
                                    >
                                        -
                                    </button>
                                    <span className="fw-bold">{quantity}</span>
                                    <button
                                        className="btn btn-outline-secondary ms-2"
                                        onClick={handleIncrement}
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    className="btn btn-warning mt-3"
                                    onClick={() => addToCartWithFeedback(product)}
                                    disabled={product.isAdding}
                                >
                                    {product.isAdding ? 'Adding...' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p>Loading product details...</p>
                    )}
                </div>
            </div>


            <Footer />

            <MyModal id='modalCart' title='ตะกร้าสินค้าของฉัน'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>ชื่อสินค้า</th>
                            <th className='text-end'>ราคา</th>
                            <th className='text-end'>จำนวน</th>
                            <th width='60px'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.length > 0 ? carts.map(item =>
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td className='text-end'>{item.price.toLocaleString('th-TH')}</td>
                                <td className='text-end'>1</td>
                                <td className='text-center'>
                                    <button className='btn btn-danger' onClick={e => handleRemove(item)}>
                                        <i className='fa fa-times'></i>
                                    </button>
                                </td>
                            </tr>
                        ) : <></>}
                    </tbody>
                </table>

                <div className='text-center'>
                    จำนวน {sumQty} รายการ เป็นเงิน {sumPrice.toLocaleString('th-TH')} บาท
                </div>

                <div className='mt-3'>
                    <div>
                        <div>ชื่อผู้ซื้อ</div>
                        <input className='form-control' value={customerName} onChange={e => setCustomerName(e.target.value)} />
                    </div>
                    <div className='mt-3'>
                        <div>เบอร์โทรติดต่อ</div>
                        <input className='form-control' value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} maxLength="10" />
                    </div>
                    <div className='mt-3'>
                        <div>ที่อยู่จัดส่ง</div>
                        <input className='form-control' value={customerAddress} onChange={e => setCustomerAddress(e.target.value)} />
                    </div>
                    <div className='mt-3'>
                        <div>วันที่โอนเงิน</div>
                        <input className='form-control' type='date' value={payDate} onChange={e => setPayDate(e.target.value)} />
                    </div>
                    <div className='mt-3'>
                        <div>เวลาที่โอนเงิน</div>
                        <input className='form-control' type='time' value={payTime} onChange={e => setPayTime(e.target.value)} />
                    </div>
                    <button className='btn btn-primary mt-3' onClick={handleSave}>
                        <i className='fa fa-check mr-2'></i> ยืนยันการซื้อ
                    </button>
                </div>
            </MyModal>

            <MyModal id="qrModal" title="ชำระเงินผ่าน PromptPay">
                {qrCodeUrl ? (
                    <div className="text-center">
                        <img src={qrCodeUrl} alt="PromptPay QR Code" />
                        <p>Scan this QR code to pay {sumPrice.toLocaleString()} THB</p>
                        <button className='btn btn-primary mt-3' onClick={handleDeposit}>
                            <i className='fa fa-check mr-2'></i> ยืนยันการโอนเงิน
                        </button>
                    </div>

                ) : (
                    <p>Generating QR Code...</p>
                )}
            </MyModal>
        </>
    );
}

export default ProductDetail;
