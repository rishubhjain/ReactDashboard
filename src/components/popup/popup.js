import React from 'react';
import './popup.css';
import logo from '../../assets/images/sliders-solid.svg';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox, FormControlLabel } from '@material-ui/core';
import FormGroup from '@mui/material/FormGroup';
import { element } from 'prop-types';


const Popup = ({
  type1,type2,type3,type4,state,national,panchayat,startDate,endDate,setType1,setType2,setType3,setType4,setState,setNational,setPanchayat,setStartDate,setEndDate
}) => {
  

  const w3_close = () => {
  document.getElementById("mySidebar").style.display = "none";
}
  const w3_open = () => {
    document.getElementById("mySidebar").style.display = "block";
  }

  const clearAll= () => {
    setType1(false)
    setType2(false)
    setType3(false)
    setType4(false)
   setState(false)
   setNational(false)
   setPanchayat(false)
   setStartDate(new Date())
   setEndDate(new Date())
  }

  return (
    <>
      <div className="popup">
      <div className="w3-sidebar w3-bar-block w3-card w3-animate-right popup-open" style={{right:'0',width: '16rem'}} id="mySidebar">
        <button className="w3-bar-item w3-large filter-button" onClick={w3_close}><span>&times;</span> <span>Filter</span></button>
        
    

      <div className='filters'>
      <details id='date-details'>
        <summary>Date</summary>
        <div className="date-picker">
        <span>From:</span> <DatePicker selected={startDate} onChange={(date)=>(setStartDate((date)))}/>
        </div> 
        <div className="date-picker">
        <span>To:</span>
          <DatePicker selected={endDate} onChange={(date)=>(setEndDate((date)))}/>
        </div> 
      </details>
      <details>
       <summary>Type</summary>
       <FormGroup>
          <FormControlLabel control={<Checkbox checked={type1} onChange={() => setType1(!type1)} />} label={<span>type1</span>} />
          <FormControlLabel control={<Checkbox checked={type2} onChange={() => setType2(!type2)} />} label={<span>type2</span>} />
          <FormControlLabel control={<Checkbox checked={type3} onChange={() => setType3(!type3)} />} label={<span>type3</span>} />
          <FormControlLabel control={<Checkbox checked={type4} onChange={() => setType4(!type4)} />} label={<span>type4</span>} />
        </FormGroup>
      </details>
      <details>
        <summary>Select Wing</summary>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={state} onChange={() => setState(!state)}/>} label={<span>State Highway</span>} />
          <FormControlLabel control={<Checkbox checked={national} onChange={() => setNational(!national)}/>} label={<span>National Highway</span>} />
          <FormControlLabel control={<Checkbox checked={panchayat} onChange={() => setPanchayat(!panchayat)}/>} label={<span>Panchayat</span>} />
        </FormGroup>
        
      </details>

      </div>
      <div className='actions'>
        <button id='action1' onClick={clearAll}>Clear All</button>
        <button id='action2'>Done</button>
      </div>
      
      </div>
        <div>
          <img src={logo} alt="logo" onClick={w3_open} style={{right: '0', width:'2rem'}} />
        </div>
      </div>


      
</>
  );
};

export default Popup;
