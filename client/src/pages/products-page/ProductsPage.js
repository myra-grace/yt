import React, { useEffect, useState, useRef } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect, 
    useHistory,
  } from 'react-router-dom';
import './ProductsPage.css';
import Building from '../../components/building/Building';

const ProductsPage = (props) => {
  return (
    <div className="products-page-container">
        <Building />
    </div>
  );
}

export default ProductsPage;
