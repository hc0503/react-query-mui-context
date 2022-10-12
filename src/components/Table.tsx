import React, { useState, useContext, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { TableContext } from './../provide/TableContext';

export default function Table() {
    const [columnDefs] = useState([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ])
    const {tableData, setTableData} = useContext(TableContext);
    useEffect(() => {
        setTableData([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
        ]);
    }, []);

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact
                rowData={tableData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
};