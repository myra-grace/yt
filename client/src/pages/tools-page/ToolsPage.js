import React, { useEffect, useState, useRef } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect, 
    useHistory,
  } from 'react-router-dom';
import './ToolsPage.css';
import Building from '../../components/building/Building';

const ToolsPage = (props) => {
  return (
    <div className="tools-page-container">
        <Building />
    </div>
  );
}

export default ToolsPage;
