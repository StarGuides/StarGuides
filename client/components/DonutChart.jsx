import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {labels: ['Flights', 'Gear', 'Park Entrance Fee', 'Food', 'Other']},
      series: [44, 55, 41, 17, 15],

    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} labels={this.state.options.labels}type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;