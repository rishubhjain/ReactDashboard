import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';


export default function WorkOrderStatus() {

    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'circle', headerName: 'Circle'},
        {field: 'division', headerName: 'Division'},
        { field: 'name', headerName: 'Work Name',width: 300 },
        { field: 'type', headerName: 'Work Type', width: 300 },
        { field: 'no', headerName: 'Work Number', width: 300 },
        { field: 'contractor', headerName: 'Contractor', width: 300 },
        { field: 'sdate', headerName: 'Work Start Date', width: 300 },
        { field: 'edate', headerName: 'Work End Date', width: 300 },
        { field: 'eedate', headerName: 'Work Estimated End Date', width: 300 },
        { field: 'delay', headerName: 'Delay', width: 300 },
        { field: 'delayP', headerName: 'Delay Percent', width: 300 },
      ]
      const tableData = [{'id':'1','circle':'SE APC','division':'Ahmedabad', 
      'name':'S.R. to Akhegadh app. road km.0/0 to 4/23  by strengthing selected 0.800','type':'Road','no':'TENDER/310','contractor':'R M DASA INFRASTRUCTURE PVT LTD JUNAGADH','sdate':'31/12/2012','edate':'10/10/2016','eedate':'10/9/2016','delay':'1 month','delayP':'5%'},
      {'id':'2','circle':'SE APC','division':'Ahmedabad','name':'Ahmedabad-Kuha-Kathlal-Lunavada-Santrampur-Zalod-Kushalgadh Road Km 177/6 to 178/8','type':'Building','no':'TENDER/30','contractor':'NURUDDIN J DHILAWALA','sdate':'31/10/2011','edate':'','eedate':'10/9/2016','delay':'6 month','delayP':'15%'},
      {'id':'3','circle':'SE APC','division':'Ahmedabad','name':'SR to Santrampur -Jhalod-Kushalgadh Road km 174/200 to 211/00, Strengthening','type':'Road','no':'AB/TC/1069 OF 2011','contractor':'R M DASA INFRASTRUCTURE PVT LTD JUNAGADH','sdate':'31/12/2012','edate':'10/1/2016','eedate':'10/9/2016','delay':'8 months','delayP':'35%'},
      {'id':'4','circle':'SE APC','division':'Ahmedabad','name':'Parking cum weather shed at Rajkot Criminal Court','type':'Building','no':'AB/TENDER/1607','contractor':'RAMESH S DABHI RAJKOT','sdate':'1/12/2015','edate':'10/10/2016','eedate':'10/3/2017','delay':'5 month','delayP':'50%'},
      {'id':'5','circle':'SE APC','division':'Ahmedabad','name':'Mehsana Bridge','type':'Bridge','no':'TENDER/310','contractor':'ASHISH CONSTRUCTION','sdate':'02/11/2012','edate':'10/9/2016','eedate':'10/9/2016','delay':'0 month','delayP':'0%'},
      {'id':'6','circle':'SE APC','division':'Ahmedabad','name':'Extra Work','type':'Others','no':'TENDER/310','contractor':'R M DASA INFRASTRUCTURE PVT LTD JUNAGADH','sdate':'31/12/2012','edate':'10/10/2016','eedate':'10/9/2016','delay':'1 month','delayP':'5%'},
    ]


  return (
    <div style={{ height: 400, width: '100%', backgroundColor:"white", marginTop:'2%' }}>
      <DataGrid rows={tableData}
        columns={columns}
        pageSize={12} 
        components={{ Toolbar: GridToolbar }} />
    </div>
  );
}