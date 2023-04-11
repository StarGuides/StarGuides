import React from 'react'

import CustomersPage from './CustomersPage';
import AnalyticsPage from './AnalyticsPage';
import { Link } from 'react-router-dom';
import ViewsArea from './ViewsArea';


const MainPage = () => {
  return (
    <div className='appBackground' >
<div className='mainAppWrap' >
  <div className="sideBarContainer"  >
    <div className="sidebarLinkWrap">
      < Link className='navLink' to='/customers'>Customers</Link>
    </div>
    <div className="sidebarLinkWrap" >
      < Link className='navLink' to='/analytics'>Analytics</Link>
    </div>
</div>
<div className='viewsArea' >
< ViewsArea/>
</div>
</div>
</div>
  )
}

export default MainPage;