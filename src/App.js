import React, { useEffect } from 'react'
import './App.css';
import TopNav from './components/Navbar/Navbar';
import DashView from './components/Pagex/Page';
import { useDispatch} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';

const App = () => {
  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return (
    <div style={{paddingTop : "8px"}} >
      <TopNav/>
      <hr style={{marginTop : "10px"}} />
      <DashView/>
    </div>
  )
}

export default App