import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function SchemeWiseData() {

    const columns = [
        {field: 'id', headerName: 'ID'},
        { field: 'name', headerName: 'Scheme Name',width: 300 },
        { field: 'type', headerName: 'Work Type', width: 300 },
        { field: 'expense', headerName: 'Total Expense(in Cr)', width: 600 }
      ]
      const tableData = [{'id':'1','name':'Social Security and Welfare','type':'Road','expense':'300'},
      {'id':'2','name':'Social Services','type':'Building','expense':'2,344'},
      {'id':'3','name':'General Road','type':'Road','expense':'200'},
      {'id':'4','name':'General building','type':'Building','expense':'1,444'},
      {'id':'5','name':'General Bridges','type':'Bridge','expense':'554'},
      {'id':'6','name':'Extra Work','type':'Others','expense':'222'}]
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 10,
  });

  return (
    <div style={{ height: 400, width: '100%', backgroundColor:"white", marginTop:'2%' }}>
      <DataGrid rows={tableData}
        columns={columns}
        pageSize={12} 
        components={{ Toolbar: GridToolbar }} />
    </div>
  );
}