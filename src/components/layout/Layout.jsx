import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector} from 'react-redux';
import Header from "../header/header";
import Footer from "../footer";
import Basket from '../basket';
import FormConsultation from "../wrapper_components/formConsultation";
import CallBackButton from "../wrapper_components/callBackButton";
import BackToTop from "../wrapper_components/backToTop";
import MobNav from "../header/headerLine1/mobNav";
import MobNavigation from "../navigation/mobNavigation";
import MobCatalogButton from "../wrapper_components/mobCatalogButton";
import LogInPage from "../logInPage";
import s from './layout.module.css';

const Layout = () => {
    const loginOpen = useSelector(state => state.store.loginOpen);
    const basketOpen = useSelector(state => state.store.basketOpen);
    const formOpen = useSelector(state => state.store.formOpen);
    const mobHeaderOpen = useSelector(state => state.store.mobHeader);
    const mobNavigationOpen = useSelector(state => state.store.mobNavigation);
   
    return(
        <>
            <Header/>
            <main>
                <div className={s.container}>
                    <div className={s.mobNavigation}>
                        <MobCatalogButton/>
                    </div>
                    <Outlet/>
                </div>   
            </main>
            <Footer/>
            {loginOpen &&(
                <LogInPage/>
            )} 
            {basketOpen &&(
                <Basket/>
            )} 
            {formOpen &&(
                <FormConsultation/>
            )}
            {mobHeaderOpen &&(
                <MobNav/>
            )}
            {mobNavigationOpen &&(
                <MobNavigation/>
            )}
            <CallBackButton/>
            <BackToTop/>
        </>
    )
}

export default Layout;