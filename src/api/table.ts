import axios from 'axios';

export const getTables = async () => {
    const res = await axios.get("https://www.ag-grid.com/example-assets/row-data.json");
    return res.data;
}