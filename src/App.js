import React from 'react';
import ActionButtons from './Components/Actionbuttons';
import MyAppBar from './Components/Appbar';
import "./CSS/App.css"

import DataTable from './Components/Table';
import Footer from './Components/footer';

function App() {
    return (
        <>
        <MyAppBar/>
        <ActionButtons/>
        <DataTable />
        <Footer/>
        </>
    );


}

export default App