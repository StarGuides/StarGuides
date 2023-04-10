import React from 'react'
import {useLocation} from 'react-router-dom'
import AnalyticsPage from './AnalyticsPage';
import CustomersPage from './CustomersPage';



const ViewsArea = () => {
  const location = useLocation()


  return (
    <>

    <div className='viewsAreaInnerContentWrap'>
      {
        location.pathname === '/analytics' ?
        <div>
          < AnalyticsPage/>
        </div>
        :
        <div>
         < CustomersPage />
        </div>
      }
    </div>
    </>
  )
}

export default ViewsArea;