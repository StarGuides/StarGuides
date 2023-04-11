import React from 'react'
import { useState } from 'react'
import DonutChart from './DonutChart';
import BarChart from './BarChart';




const AnalyticsPage = () => {

  return (
    <div className="chartsWrap" >
      <div>
    <p className="analyticsHeader" >Analytics</p>
    </div>
      <div className="donut">
      < DonutChart/>
      </div>
      <div className="barChart">
      < BarChart />
      </div>
      </div>
  )
}

export default AnalyticsPage;