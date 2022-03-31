import React from 'react';
import ActionButtons from './Components/Actionbuttons';
import MyAppBar from './Components/Appbar';
import "./CSS/App.css"

import DataTable from './Components/Table';

function App() {
    return (
        <>
        <MyAppBar/>
        <ActionButtons/>
        <DataTable />
        </>
    );


}

export default App