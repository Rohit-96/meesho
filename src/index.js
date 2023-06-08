import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BestPerformer from './BestPerformer';
import BackToOffice from './BackToOffice';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  // <React.StrictMode>
  //   {/* <BestPerformer /> */}
  //   {/* <BackToOffice /> */}

    
  //     <Routes>
  //       <Route path="/" element={<BestPerformer />}>
  //         <Route path="/backtooffice" element={<BackToOffice />} />
  //         {/* <Route path="blogs" element={<Blogs />} />
  //         <Route path="contact" element={<Contact />} />
  //         <Route path="*" element={<NoPage />} /> */}
  //       </Route>
  //     </Routes>
    
  // </React.StrictMode>
  // </BrowserRouter>
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BestPerformer />} />
        <Route path="/backtooffice" element={<BackToOffice /> } />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
