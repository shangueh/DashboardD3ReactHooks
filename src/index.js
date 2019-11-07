import React from 'react'
import ReactDOM from 'react-dom'
import BarChart from './Components/BarChart'
import BarChartYuka from './Components/BarChartYuka'
import BarChartAnim from './Components/BarChartAnim'
import Donut from './Components/Donut'

import './styles.css'

function App() {
  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]
  const yuka = [
    {
      name: 'Excellent',
      color: '#35a664',
      score: 36
    },
    {
      name: 'Bon',
      color: '#6ab98b',
      score: 41
    },
    {
      name: 'Médiocre',
      color: '#ffa900',
      score: 15
    },
    {
      name: 'Mauvais',
      color: 'red',
      score: 8
    }
  ]

  const multi = [
    [100, 250, 175, 200],
    [230, 120, 300, 145],
    [240, 250, 100, 34]
  ]

  return (
    <div className="App">
      <h1>Dashboard D3 React</h1>
      <BarChart id="BarChart" width={400} height={250} data={dataset} />
      <BarChartYuka id="BarChartYuka" width={400} height={250} data={yuka} />
      <Donut
        id="Donut"
        width={360}
        height={360}
        radius={Math.min(360, 360) / 2}
        donutWidth={75}
        data={yuka}
      />

      <BarChartAnim
        id="BarChartAnim"
        width={400}
        height={250}
        dataset={multi[0]}
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
