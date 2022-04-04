import React, { lazy } from 'react'
import { Link } from 'react-router-dom'
import { Column,
  unflatten,
  TableHeader as BaseTableHeader,
  TableRow as BaseTableRow, } from 'react-base-table'
import 'react-base-table/styles.css'
import 'chart.piecelabel.js';
import './MainDashboard.css';

import  { useState } from 'react'

import { useTheme } from '@mui/material/styles';


import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import { MainCard } from 'src/components'
import IFMS from './ifms/IFMS.js'
import GujMarg from './gujmarg/GujMarg';
import GujRams from './gujrams/GujRams';
import IWDMS from './iwdms/IWDMS';
import ContentModal from './ContentModal.js'
import Dashboard from './Dashboard.js'

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import {
    CCardLink,
    CCardText,
    CCardTitle,
    CListGroup,
    CListGroupItem,

  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,

} from '@coreui/react'
import { CChartBar, CChartLine,
  CChartPie, } from '@coreui/react-chartjs'
import Pill from './Pill';


const MainDashboard = (props) => {
   const gridSpacing = 3;
   let ddValue = "Yearly"
   const drawerWidth = 260;
   const appDrawerWidth = 320;
  const [visible, setVisible] = useState(false)
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const newRandom = () => {
    return Math.round(Math.random() * 100)
  }
  const theme = useTheme();


  let [wmsData, setwmsData] = useState(['40','58','68','60','56'])
  let [wmsEData, setwmsEData] = useState(['60','78','52','78','90'])
 let  [wmsDataLabel, setwmsLabelData] = useState(['2017',"2018","2019",'2020','2021'])
const wmsChartData = {
      labels: wmsDataLabel,
      datasets: [{
        yAxisID:'y',
        type: 'bar',
        label: 'Total Works',
        data: wmsData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
      }, {
        yAxisID:'z',
        type: 'line',
        label: 'Efficiency of Completion',
        data: wmsEData,
        fill: false,
        borderColor: 'rgb(54, 162, 235,0.6)'
      }]
    };

  let [gujRamsData, setgujRamsData] = useState(['40','32','34','28','20'])
   let  [gujRamsDataLabel, setgujRamsLabelData] = useState(['2017',"2018","2019",'2020','2021'])

   let [gujMargData, setgujMargData] = useState(['50','65','24','34','35'])
   let [gujMargEData, setgujMargEData] = useState(['20','15','11','23','12'])
   let  [gujMargDataLabel, setgujMargLabelData] = useState(['2017',"2018","2019",'2020','2021'])

  const [anchorEl, setAnchorEl] = useState(null);
  const gujRamsmonthly = () => {
    setgujRamsLabelData(['Sept',"Oct","Nov",'Dec','Jan']);
    setgujRamsData(['24','23','22','21','20'])

  }
  const gujMargMonthly = () => {
    setgujMargLabelData(['Sept',"Oct","Nov",'Dec','Jan']);
    setgujMargData(['35','34','33','32','35'])
    setgujMargEData(['20','15','13','12','12'])

  }
  const monthly = () => {
    gujRamsmonthly()
    gujMargMonthly()
  }
  //gujRamsDataLabel = ['2017',"2018","2019",'2020','2021']
  //poorRoads = ['40','32','34','28','20']
  const handleClick = (event) => {
      event.preventDefault();
      setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.preventDefault();
      setAnchorEl(null);
  };
  const handleClickGujRams = (e) => {
    e.preventDefault();
    setAnchorEl(null);
    gujRamsmonthly();};

    const myProps = [
        props.type1,
        props.type2,
        props.type3,
        props.type4,
        props.state,
        props.national,
        props.panchayat,
        props.startDate,
        props.endDate
    ]

    const myPropsNames = [
        'Type1',
        'Type2',
        'Type3',
        'Type4',
        'State Highway',
        'National Highway',
        'Panchayat',
        'From',
        'To'
    ]

    const [open, setOpen] = useState(false)
    const [content, setContent] = useState('')

  return (
    <>
    {open && <ContentModal cardComponent={content} onClose={() => setOpen(false)} />}
    <CRow>
    <CCard className="mb-4">

<CCardHeader className="me-md-3">
    <div className='filter-pills'>
    {
        myProps.map((ftr,index) => {
            if(index<7 && ftr) return <Pill key={index} filter={myPropsNames[index]} />
            else if (index>=7) return <Pill key={index} filter={`${myPropsNames[index]} : ${ftr.getDate()}/${ftr.getMonth()+1}/${ftr.getFullYear()}`} />
        })
    }
    </div>
  <CDropdown
            style={{float:'right',marginLeft:'3%',height:'3rem'}}>
          <CDropdownToggle  value={ddValue} id='timeLineDD'  color="light">Yearly</CDropdownToggle>
          <CDropdownMenu >
          <CDropdownItem onClick={(event) => {monthly();document.getElementById('timeLineDD').innerText="Monthly";return true;}}>Monthly</CDropdownItem>
            <CDropdownItem >Weekly</CDropdownItem>
            <CDropdownItem >Custom Date</CDropdownItem>

          </CDropdownMenu>
        </CDropdown>
            <CDropdown
            style={{float:'right',marginLeft:'1%',height:'3rem'}}>
          <CDropdownToggle  color="light">All Wings</CDropdownToggle>
          <CDropdownMenu  >
            <CDropdownItem >All Wings</CDropdownItem>
            <CDropdownItem  href=''>State</CDropdownItem>
            <CDropdownItem href="#">NH</CDropdownItem>
            <CDropdownItem href="#">Panchayat</CDropdownItem>
            <CDropdownItem href="#">CP{'&'}A</CDropdownItem>
            <CDropdownItem href="#">PPU</CDropdownItem>
            <CDropdownItem href="#">WB</CDropdownItem>
            <CDropdownItem href="#">QC</CDropdownItem>
            <CDropdownItem href="#">STC</CDropdownItem>

          </CDropdownMenu>
        </CDropdown>

  </CCardHeader>
  </CCard>
    </CRow>
    <div style={{width: '93%', margin: '0 auto'}}>
    <CRow className='dcard'>
      <CCol className='ccol-container' style={{flex:'0 0',paddingRight:'1%', marginBottom: '4%',}}>
      <MainCard content={false} style={{ width: '25rem', border:'0px', borderRadius:'15px' }}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h7">Work Management System</Typography>
                                    </Grid>
                                    <Grid item>
                                        <MoreHorizOutlinedIcon
                                            fontSize="small"
                                            sx={{
                                                color: theme.palette.primary[200],
                                                cursor: 'pointer'
                                            }}
                                            aria-controls="menu-popular-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        />
                                        <Menu
                                            id="menu-popular-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}> Today</MenuItem>
                                            <MenuItem onClick={handleClose}> This Month</MenuItem>
                                            <MenuItem onClick={handleClose}> This Year </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}  sx={{ pt: '16px !important' }}>
                                <CChartBar
                                style={{height:'400px'}}
                                options={{maintainAspectRatio:false,
                                    scales: {
                                        x: {
                                          stacked: true,
                                        },
                                        y: {
                                          stacked:true,
                                          position: 'left',

                                        },
                                        z:{
                                          stacked:true,
                                          position: 'right',
                                          min:0,
                                          max:100,
                                          backgroundColor:'rgb(54, 162, 235,0.2)'
                                        }
                                      } }


                                }
                                 data={wmsChartData}

                                />
                            {/* <CChartPie

                                //onClick={() => setVisible(!visible)}
                                data={{
                                    labels: ['Completed', 'Dropped', 'Pending'],
                                    datasets: [
                                    {
                                        data: [newRandom(), newRandom(), newRandom()],
                                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                    },
                                    ],
                                }}
                                /> */}
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Number of Works
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            6300
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: '#FFFFFF'	,
                                                                color: theme.palette.success.dark,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Estimated Amount
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            23 Crore
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.primary,
                                                                color: theme.palette.success,
                                                                marginLeft: 1.875
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Total Paid Amount
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            15 Crore
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.success,
                                                                color: theme.palette.success,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                        {/* <Link id='card-link' to='/dashboard/wms' > */}
                        {/* <Button variant="contained" disableElevation style={{bottom: '0.5rem'}}> */}
                        <button onClick={() => {
                                    setOpen(true)
                                    setContent(<Dashboard />)
                                }}
                            id='view-all-btn'>
                            View All
                            <ChevronRightOutlinedIcon />
                        </button>
                        {/* </Button> */}
                        {/* </Link> */}
                    </CardActions>
                </MainCard>
      </CCol>
      <CCol className='ccol-container' style={{flex:'0 0',paddingRight:'1%', marginBottom: '4%'}}>
      <MainCard content={false} style={{ width: '25rem', border:'0px', borderRadius:'15px' }}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h7">Integrated Financial Management System</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                            <CChartPie

                                //onClick={() => setVisible(!visible)}
                                data={{
                                    labels: ['Allocated Budget', 'Expense', 'Remaining Budget'],
                                    datasets: [
                                    {
                                        data: [newRandom(), newRandom(), newRandom()],
                                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                    },
                                    ],
                                }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                   Budget Estimate
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            47,737 Cr
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: '#FFFFFF'	,
                                                                color: theme.palette.success.dark,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>

                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Grant Released
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                           38,132 Cr
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.primary,
                                                                color: theme.palette.success,
                                                                marginLeft: 1.875
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>

                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                   Total Expenditure
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                           11,473 Cr
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.success,
                                                                color: theme.palette.success,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>

                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                    {/* <Link id='card-link' to='/dashboard/ifms' > */}
                        {/* <Button variant="contained" disableElevation style={{top: '3rem'}}>
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button> */}
                        <button onClick={() => {
                                    setOpen(true)
                                    setContent(<IFMS />)
                                }}
                            id='view-all-btn'>
                            View All
                            <ChevronRightOutlinedIcon />
                        </button>
                        {/* </Link> */}
                    </CardActions>
                </MainCard>
      </CCol>
      <CCol className='ccol-container' style={{flex:'0 0',paddingRight:'1%',marginBottom: '4%',}}>
      <MainCard content={false} style={{ width: '25rem', border:'0px', borderRadius:'15px' }}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h7">GujMarg</Typography>
                                    </Grid>
                                    <Grid item>
                                        <MoreHorizOutlinedIcon
                                            fontSize="small"
                                            sx={{
                                                color: theme.palette.primary[200],
                                                cursor: 'pointer'
                                            }}
                                            aria-controls="menu-popular-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        />
                                        <Menu
                                            id="menu-popular-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}> Today</MenuItem>
                                            <MenuItem onClick={handleClose}> This Month</MenuItem>
                                            <MenuItem onClick={handleClose}> This Year </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                <CChartBar style={{height:'400px'}}
                                    options={{
                                        maintainAspectRatio: false,
                                        pieceLabel: {
                                            render: 'value'
                                         },
                                    scales: {
                                        x: {
                                        stacked: true,
                                        },
                                        y: {
                                        stacked:true,
                                        min:0,
                                        max:100,
                                        },
                                    }
                                    }}
                                    data={{
                                        labels: gujMargDataLabel,
                                        datasets: [
                                        {
                                            label: 'Percentage of Complaints Pendings',
                                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                            borderColor: 'rgb(255, 99, 132)',
                                            borderWidth: 1,
                                            stack: 'Stack 0',
                                            data: gujMargData,
                                        },
                                        {
                                            label: 'Percentage of Emergency Complaints Pending',
                                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                            borderColor: 'rgba(54, 162, 235)',
                                            borderWidth: 1,
                                            stack: 'Stack 1',
                                            data: gujMargEData,
                                        },
                                        ],
                                    }}
                                    labels="months"
                                    />
                            {/* <CChartPie

                                options={{
                                    pieceLabel: {
                                    render: 'value'
                                 },}
                                }
                                //onClick={() => setVisible(!visible)}
                                data={{
                                    labels: ['Total Complaints', 'Emergency Complaints', 'Total Completed Complaints ', 'Total Pending Complaints'],
                                    datasets: [
                                    {
                                        data: [newRandom(), newRandom(), newRandom(), newRandom()],
                                        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(255, 205, 86, 0.2)'],
                                        hoverBackgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(255, 205, 86, 0.2)'],
                                        borderColor:['rgba(255, 159, 64)', 'rgba(54, 162, 235)', 'rgba(75, 192, 192)', 'rgba(255, 205, 86)'],
                                        borderWidth: 1,
                                    },
                                    ],
                                }}
                                /> */}
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                   Total Complaints
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            587
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: '#FFFFFF'	,
                                                                color: theme.palette.success.dark,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: 'red' }}>
                                            10% Increase from last month
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Emergency Complaints
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            6
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.primary,
                                                                color: theme.palette.success,
                                                                marginLeft: 1.875
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: 'green' }}>
                                            2% decrease in from last month
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Pending Complaints
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                           34
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.success,
                                                                color: theme.palette.success,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>

                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                    {/* <Link id='card-link' to='/dashboard/gujmarg' > */}
                        {/* <Button variant="contained" disableElevation style={{bottom: '0.5rem'}}>
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button> */}
                         <button onClick={() => {
                                    setOpen(true)
                                    setContent(<GujMarg />)
                                }}
                            id='view-all-btn'>
                            View All
                            <ChevronRightOutlinedIcon />
                        </button>
                        {/* </Link> */}
                    </CardActions>
                </MainCard>
      </CCol>
      <CCol className='ccol-container' style={{flex:'0 0', paddingRight:'1%',marginBottom: '4%'}}>
      <MainCard content={false} style={{ width: '25rem', border:'0px', borderRadius:'15px' }}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h7">GujRAMS</Typography>
                                    </Grid>
                                    <Grid item>
                                        <MoreHorizOutlinedIcon
                                            fontSize="small"
                                            sx={{
                                                color: theme.palette.primary[200],
                                                cursor: 'pointer'
                                            }}
                                            aria-controls="menu-popular-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        />
                                        <Menu
                                            id="menu-popular-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}> Today</MenuItem>
                                            <MenuItem onClick={handleClickGujRams}> This Month</MenuItem>
                                            <MenuItem onClick={handleClose}> This Year </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                            <CChartBar style={{height:'400px'}}
                                    options={{
                                        maintainAspectRatio: false,
                                        pieceLabel: {
                                            render: 'value'
                                         },
                                    scales: {
                                        x: {
                                        stacked: true,
                                        },
                                        y: {
                                        stacked:true,
                                        min:0,
                                        max:100,
                                        },
                                    }
                                    }}
                                    data={{
                                        labels: gujRamsDataLabel,
                                        datasets: [
                                        {
                                            label: 'Percentage of poor roads',
                                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                            borderColor: 'rgb(255, 99, 132)',
                                            borderWidth: 1,
                                            stack: 'Stack 0',
                                            data: gujRamsData,
                                        },
                                        ],
                                    }}
                                    labels="months"
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Total Network
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            63,492 Km
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: '#FFFFFF'	,
                                                                color: theme.palette.success.dark,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Total Surveyed
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            2,613 Km
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.primary,
                                                                color: theme.palette.success,
                                                                marginLeft: 1.875
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Total Number of Bridges
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            5634
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.success,
                                                                color: theme.palette.success,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>

                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                    {/* <Link id='card-link' to='/dashboard/gujrams' > */}
                        {/* <Button variant="contained" disableElevation style={{top: '2rem'}}>
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button> */}
                       <button onClick={() => {
                                    setOpen(true)
                                    setContent(<GujRams />)
                                }}
                            id='view-all-btn'>
                            View All
                            <ChevronRightOutlinedIcon />
                        </button>
                        {/* </Link> */}
                    </CardActions>
                </MainCard>
      </CCol>

      <CCol className='ccol-container' style={{flex:'0 0',paddingRight:'1%', marginBottom: '4%'}}>
      <MainCard content={false} style={{ width: '25rem',  border:'0px', borderRadius:'15px' }}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h7"> Integrated Work and Document Management System</Typography>
                                    </Grid>
                                    <Grid item>
                                        <MoreHorizOutlinedIcon
                                            fontSize="small"
                                            sx={{
                                                color: theme.palette.primary[200],
                                                cursor: 'pointer'
                                            }}
                                            aria-controls="menu-popular-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        />
                                        <Menu
                                            id="menu-popular-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}> Today</MenuItem>
                                            <MenuItem onClick={handleClose}> This Month</MenuItem>
                                            <MenuItem onClick={handleClose}> This Year </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                            <CChartBar style={{height:'400px'}}
                                    options={{
                                        maintainAspectRatio: false,
                                        pieceLabel: {
                                            render: 'value'
                                         },
                                    scales: {
                                        x: {
                                        stacked: true,
                                        },
                                        y: {
                                        stacked:true,
                                        min:0,
                                        max:100,
                                        },
                                    }
                                    }}
                                    data={{
                                        labels: ['<7 days', '7-14 days', '1 month', '2 months'],
                                        datasets: [
                                        {
                                            label: 'Pending e-Tapal',
                                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                            borderColor: 'rgb(255, 99, 132)',
                                            borderWidth: 1,
                                            stack: 'Stack 0',
                                            data: gujMargData,
                                        },
                                        {
                                            label: 'Pending Files',
                                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                            borderColor: 'rgba(54, 162, 235)',
                                            borderWidth: 1,
                                            stack: 'Stack 1',
                                            data: gujMargEData,
                                        },
                                        ],
                                    }}
                                    labels="months"
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Total Files
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            3,356
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: '#FFFFFF'	,
                                                                color: theme.palette.success.dark,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>

                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Pending Files on your desk
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            10
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.primary,
                                                                color: theme.palette.success,
                                                                marginLeft: 1.875
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>

                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Pending Files Overall
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            2,345
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.success,
                                                                color: theme.palette.success,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>

                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                    {/* <Link id='card-link' to='/dashboard/iwdms' > */}
                        {/* <Button variant="contained" disableElevation style={{bottom: '0.5rem'}}>
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button> */}
                        <button onClick={() => {
                                    setOpen(true)
                                    setContent(<IWDMS />)
                                }}
                            id='view-all-btn'>
                            View All
                            <ChevronRightOutlinedIcon />
                        </button>
                        {/* </Link> */}
                    </CardActions>
                </MainCard>
      </CCol>
      {/* <CCol style={{flex:'0 0',paddingRight:'25px'}}>
      <MainCard content={false} style={{ width: '25rem' }}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h6">Work Management System</Typography>
                                    </Grid>
                                    <Grid item>
                                        <MoreHorizOutlinedIcon
                                            fontSize="small"
                                            sx={{
                                                color: theme.palette.primary[200],
                                                cursor: 'pointer'
                                            }}
                                            aria-controls="menu-popular-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        />
                                        <Menu
                                            id="menu-popular-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}> Today</MenuItem>
                                            <MenuItem onClick={handleClose}> This Month</MenuItem>
                                            <MenuItem onClick={handleClose}> This Year </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                            <CChartPie

                                //onClick={() => setVisible(!visible)}
                                data={{
                                    labels: ['Completed', 'Dropped', 'Pending'],
                                    datasets: [
                                    {
                                        data: [newRandom(), newRandom(), newRandom()],
                                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                    },
                                    ],
                                }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Bajaj Finery
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $1839.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: '#FFFFFF'	,
                                                                color: theme.palette.success.dark,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                            10% Profit
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    TTML
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $100.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.primary,
                                                                color: theme.palette.success,
                                                                marginLeft: 1.875
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>
                                            10% loss
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Reliance
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $200.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.success,
                                                                color: theme.palette.success,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>
                                            10% Profit
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                        <Button size="small" disableElevation>
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button>
                    </CardActions>
                </MainCard>
      </CCol> */}
    </CRow>
    </div>
{/*
    <CRow>
        <CCol>
        <CCard style={{ width: '20rem' }}>
        <CChartPie

              //onClick={() => setVisible(!visible)}
              data={{
                labels: ['Completed', 'Dropped', 'Pending'],
                datasets: [
                  {
                    data: [newRandom(), newRandom(), newRandom()],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
  <CCardBody>
    <CCardTitle>Work Monitoring System</CCardTitle>
    <CCardText>
    </CCardText>
  </CCardBody>
  {[ '-xl', '-xl'].map((breakpoint, index) => (
    <CListGroup className="mb-3" layout={`horizontal${breakpoint}`} key={index}>
      <CListGroupItem>Number of Works</CListGroupItem>
      <CListGroupItem>1000</CListGroupItem>
    </CListGroup>
  ))} */}
  {/* <CListGroup flush>
    <CListGroupItem>Number of Works                 100</CListGroupItem>
    <CListGroupItem>Estimated Amount    20</CListGroupItem>
    <CListGroupItem>Total Paid Amount</CListGroupItem>
  </CListGroup> */}
  {/* <CCardBody>
    <CCardLink href="#">Visit Dashbaord</CCardLink>
    <CCardLink href="#">Another link</CCardLink>
  </CCardBody>
</CCard>
        </CCol>
    </CRow> */}


    </>
  )
}

export default MainDashboard
