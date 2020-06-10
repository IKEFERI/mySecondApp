import React from 'react';
import style from './App.module.sass'
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import {Provider} from "react-redux";
import store from "./redux/reduxStore";
import PopupContainer from "./Components/Popup/PopupContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App() {
    return (
        <Provider store={store}>
            <div className={style.appContainer}>
                <HeaderContainer/>
                <Main/>
                <Footer/>
                <PopupContainer/>
            </div>
        </Provider>
    );
}

export default App;
