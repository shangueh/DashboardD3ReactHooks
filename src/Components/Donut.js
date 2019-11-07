import React, { useEffect } from 'react'
import * as d3 from 'd3'

const OFFSETS = {
  left: 4,
  right: 4,
  top: 16,
  bottom: 4
}

const maColor = ['#35a664', '#6ab98b', '#ffa900', 'red']

const Donut = ({ id, width, height, radius, donutWidth, data }) => {
  // = componentDidMount
  useEffect(() => {
    drawDonut()
  })

  const drawDonut = () => {
    const svg = d3
      .select('#' + id)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

    const arc = d3
      .arc()
      .innerRadius(radius - donutWidth)
      .outerRadius(radius)

    const pie = d3
      .pie()
      .value(d => d.score)
      .sort(null)

    const path = svg
      .selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => maColor[i])
      .attr('transform', 'translate(0, 0)')
  }

  // on retourne une DIV avec le graph
  return (
    <>
      <div id={id} style={{ margin: 32 }} />
      <div>
        <button id="data1">Data 1</button>
        <button id="data2">Data 2</button>
        <button id="data3">Data 3</button>
      </div>
    </>
  )
}

export default Donut
