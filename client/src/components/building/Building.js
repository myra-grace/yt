import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect, 
  useHistory,
} from 'react-router-dom';
import './Building.css';

const Building = () => {
    return (
        <div className="building-container">
            <p>Under Construction</p>
            <img src="https://thumbs.gfycat.com/OptimalIllustriousCirriped-size_restricted.gif" atl="Under Construction"/>
        </div>
    )
}

export default Building;