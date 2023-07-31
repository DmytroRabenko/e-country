import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../page_home'
import AboutUs from '../page_aboutUs';
import Credit from '../page_credit';
import Changes from '../page_changes';
import Repair from '../page-repair';
import Contacts from '../page_contacts';
import Catalog from '../page_catalog';
import Compared from '../page_compared';
import Selected from '../page_selected';
import Order from '../page_order';
import ProductPage from '../page_catalog/productPage';
import ScrollToTop from '../wrapper_components/scrollToTop';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() { 

    return (   
        <BrowserRouter>
            <ScrollToTop/>
            <Routes> 
                <Route path='/' element={<Layout/>}>     
                    <Route index element={<Home/>}/>
                    <Route path="about_us" element={<AboutUs/>}/>
                    <Route path="changes" element={<Changes/>}/>
                    <Route path="rapair" element={<Repair/>}/>
                    <Route path="credit" element={<Credit/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="compared" element={<Compared/>}/>
                    <Route path="selected" element={<Selected/>}/>
                    <Route path="order" element={<Order/>}/>
                    <Route path="/:category" element={<Catalog/>}/>
                    <Route exact path="/:category/:brand" element={<Catalog/>}/>
                    <Route path="/:category/:brand/:id" element={<ProductPage />}/>
                </Route>      
            </Routes> 
        </BrowserRouter>
    )
}

export default App;
