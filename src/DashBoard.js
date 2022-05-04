import React, { useEffect } from 'react';
import useState from 'react-usestateref';
import ActionButtons from './Components/Actionbuttons';
import MyAppBar from './Components/Appbar';
import "./CSS/App.css"

import DataTable from './Components/Table';
import Footer from './Components/footer';
import { FetchData, getData, loadData } from './Components/servlet/data';

function DashBoard() {

    const [data, setData,userefData] = useState([]);
    const [checkedRow, setCheckedRow, useref] = useState([]);
    const [selectRows, setSlectRows] = useState([]);
    const [searchItem,setSearchItem] = React.useState(null);
    const [pageSize, setPageSize,pageSizeref] = useState(10);
    const [page, setPage,pageref] = useState(1);
    
    let tableData = {data};
    console.log(tableData);
 
    // useEffect(async () => {
    //     if(userefData.current.length==0)
    //     setData(await getData())

    // }, []);

    useEffect(async() =>{
        if(userefData.current.length==0)
        setData(await FetchData(pageref.current,pageSizeref.current))
    }); 
     
    const NextPage = async () =>{
        // console.log("page",page,pageSize);
        console.log("page1",pageref.current,pageSizeref.current);
        setData(await FetchData(pageref.current,pageSizeref.current));
         
    }
    

    var selectedList = 0;
    // var s =data.filter( d => d.id === selectRows[0])
    // //console.log(s); 
    // setName(s[0].name) 
    // setEmail(s[0].email)


    return (
        <>
            <MyAppBar />
            <ActionButtons 
            searchData ={(e)=>{
                console.log("in dash",e)
                setData(e)
                
            }}  
            searchItem={(e) => { setSearchItem(e)}}

                checkedlist={useref.current} modalSuccessFn={async (e) => {
                    if (e) {
                        setData(await FetchData(pageref.current,pageSizeref.current));
                        // //console.log("sitem" +searchItem);
                    }

                }} />
            <DataTable data={userefData.current} page={pageref.current} pageSize={pageSizeref.current} searchItem={searchItem}   
            onChecked={(e) => {
                if (e) {
                    // console.log("before set", e);
                    selectedList = [e];
                    // //console.log("selected list" + selectedList)
                    setCheckedRow(e);

                }}}
                loadPage={(page,pagesize)=>{
                   console.log("in props",page,pagesize);
                   setPage(page);
                   setPageSize(pagesize);
                   NextPage(page,pagesize);
                }}
            />
            <Footer />
        </>
    );


}

export default DashBoard

