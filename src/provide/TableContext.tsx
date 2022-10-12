import React, {createContext, PropsWithChildren} from 'react';
import { useState } from 'react';

type TableItem = {
    make: string;
    model: string;
    price: number;
};
type ContextProps ={
    tableData: Array<TableItem>;
    setTableData: React.Dispatch<React.SetStateAction<Array<TableItem>>>;
};

export const TableContext = createContext<ContextProps>({
    tableData: [],
    setTableData: () => {},
});

export const TableProvider = ({ children}: PropsWithChildren ) => {
    const [tableData, setTableData] = useState<Array<TableItem>>([]);
    return (
        <TableContext.Provider
            value={{
                tableData,
                setTableData,
            }}
            >
            {children}
        </TableContext.Provider>
    );
}