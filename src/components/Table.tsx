import React, { useState, useContext, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useQuery } from '@tanstack/react-query';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { TableContext } from './../provide/TableContext';
import { getTables } from '../api/table';

const columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
]

export default function Table() {
    const { data } = useQuery(["tables"], getTables);
    const {tableData, setTableData} = useContext(TableContext);
    useEffect(() => {
        if (data) {
            setTableData(data);
        }
    }, [data]);

    return (
        <div className="ag-theme-alpine table-wrap">
            <AgGridReact
                rowData={tableData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
};