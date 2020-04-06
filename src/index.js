import { piechart } from './js/chartjs'
import { pie } from './js/highcharts'
import './css/index.scss'

function drawChartJs () {
  return piechart
}

function drawHighchart () {
  return pie
}

drawChartJs()
drawHighchart()
