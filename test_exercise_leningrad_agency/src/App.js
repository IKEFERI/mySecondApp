import React from 'react';
import style from './App.module.sass'
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import {Provider} from "react-redux";
import store from "./redux/reduxStore";
import PopupContainer from "./Components/Popup/PopupContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (

        <Provider store={store}>
            <BrowserRouter>
            <div className={style.appContainer}>
                <HeaderContainer/>
                {/*//Здесь могли бы быть так же теги Router, если бы я мог успеть сделать много страниц..*/}
                <Main/>
                <Footer/>
                <PopupContainer/>
            </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
