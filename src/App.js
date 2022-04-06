import React,{useState,useEffect} from 'react';
import ActionButtons from './Components/Actionbuttons';
import MyAppBar from './Components/Appbar';
import "./CSS/App.css"

import DataTable from './Components/Table';
import Footer from './Components/footer';
import { getData } from './Components/servlet/data';

function App() {

    const [data, setData] = useState([]);

    useEffect(async () => {
        setData(await getData())

    }, []);
    return (
        <>
            <MyAppBar />
            <ActionButtons modalSuccessFn={async (e) => {
                if (e) 
                {
                    setData(await getData())
                }

            }} />
            <DataTable data={data} />
            <Footer />
        </>
    );


}

export default App