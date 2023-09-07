import React, { useEffect, useState } from 'react'
import axios from 'axios'
import REACT_APP_BASE_URL from '../../api';
import { NavLink } from 'react-router-dom';




const ShopPage = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
},[currentPage]);

  const getProduct = async () => {
    try {
        const perPage = 10; // Set the number of items per page

        const { data } = await axios.get(
            `${REACT_APP_BASE_URL}/product/get-product?page=${currentPage}&perPage=${perPage}`
        );

        setProduct(data?.product);
        setTotalPages(data?.totalPages);
        setCurrentPage(data?.currentPage);
    } catch (error) {
        console.log('error', error);
    }
};


    return (
<>
<div className="product-big-title-area">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="product-bit-title text-center">
          <h2>ShopPage</h2>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container">
  <div className="row">
  {
    product?.map((data,index)=>{
      return(
        <div className="col-md-3 col-sm-6" key={index}>
        <div className="single-shop-product">
          <div className="product-upper">
            <img   src={`${REACT_APP_BASE_URL}/public/productImages/${data?.image}`} alt="" />
          </div>
          <h2>
            <NavLink to="/">{data?.productName}</NavLink>
          </h2>
          <div className="product-carousel-price">
            <ins>${data?.price}</ins> 
          </div>
          <div className="product-option-shop">
            <NavLink
              className="add_to_cart_button"
              data-quantity={1}
              data-product_sku=""
              data-product_id={70}
              rel="nofollow"
              to={'/'}
              // href={"/canvas/shop/?add-to-cart=70"}
            >
              Add to cart
            </NavLink>
          </div>
        </div>
      </div>
      )
    })
  }
  </div>
  {/* <div className="row">
    <div className="col-md-12">
      <div className="product-pagination text-center">
        <nav>
          <ul className="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div> */}

<div className="row">
    <div className="col-md-12">
        <div className="product-pagination text-center">
            <nav>
                <ul className="pagination">
                    <li>
                        <button aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                            <span aria-hidden="true">«</span>
                        </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={currentPage === index + 1 ? "active" : ""}>
                            <button  onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                            <span aria-hidden="true">»</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</div>
 
</>
  )
}

export default ShopPage