import React from 'react'
import HelloCompo from './Components/HelloComponent/HelloCompo'
import HelloClassComponent from './Components/HelloClassComponent/HelloClassComponent'
import StateDemo from './Components/StateDemo/StateDemo'

const App = () => {
  return (
    <React.Fragment>
      <HelloCompo />
      <HelloClassComponent />
      <StateDemo/>
    </React.Fragment>
  )
}

export default App