import React, { lazy } from 'react'

import  { useState } from 'react'


const Data = () => {

    let [wmsData, setwmsData] = useState(['40','58','68','60','56'])
    let [wmsEData, setwmsEData] = useState(['60','78','52','78','90'])
   let  [wmsDataLabel, setwmsLabelData] = useState(['2017',"2018","2019",'2020','2021'])
 const wmsChartData = {
        labels: wmsDataLabel,
        datasets: [{
          type: 'bar',
          label: 'Bar Dataset',
          data: wmsData,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)'
        }, {
          type: 'line',
          label: 'Line Dataset',
          data: wmsEData,
          fill: false,
          borderColor: 'rgb(54, 162, 235)'
        }]
      };
}