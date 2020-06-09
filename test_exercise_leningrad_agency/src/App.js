import React from 'react';
import style from './App.module.sass'
import Popup from "./Components/Popup/Popup";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className={style.appContainer}>
            <Header/>
            <Main/>
            <Footer/>
            <Popup/>
        </div>
    );
}

export default App;
