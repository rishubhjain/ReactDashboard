import React, { useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import Popup from './components/popup/popup.js'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/newLogin'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {

  const [type1,setType1]=useState(false)
  const [type2,setType2]=useState(false)
  const [type3,setType3]=useState(false)
  const [type4,setType4]=useState(false)
  const [state,setState]=useState(false)
  const [national,setNational]=useState(false)
  const [panchayat,setPanchayat]=useState(false)

  const [startDate,setStartDate]=useState(new Date())

  const [endDate,setEndDate]=useState(new Date())

const myProps = {
  type1:type1,
  type2:type2,
  type3:type3,
  type4:type4,
  state:state,
  national:national,
  panchayat:panchayat,
  startDate:startDate,
  endDate:endDate
}

    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
        <Popup 
          type1={type1}
          type2={type2}
          type3={type3}
          type4={type4}
          state={state}
          national={national}
          panchayat={panchayat}
          startDate={startDate}
          endDate={endDate}
          setType1={setType1}
          setType2={setType2}
          setType3={setType3}
          setType4={setType4}
          setState={setState}
          setNational={setNational}
          setPanchayat={setPanchayat}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />

          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/" name="Home" render={props => <DefaultLayout {...props} {...myProps} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }

export default App
