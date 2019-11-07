import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'

const padding = 4
const paddingHaut = 16

const BarChartYuka = ({ id, width, height, dataset }) => {
  // = componentDidMount
  useEffect(() => {
    drawBars()
  })

  const drawBars = () => {
    // On crée un SVG dans la DIV.bars
    const svg = d3
      .select('#' + id)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    const extent = d3.extent(dataset, d => d)
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, d => d)])
      .range([padding, height - paddingHaut])

    //On crée une barre pour chaque données
    svg
      .selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (width / dataset.length))
      .attr('y', d => height - yScale(d))
      .attr('width', width / dataset.length - padding)
      .attr('height', d => yScale(d))
      .attr('fill', function(d, i) {
        return i % 2 ? 'green' : 'blue'
      })

    // On mets la valeur de chaque barre au dessus
    svg
      .selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(d => d)
      .attr(
        'x',
        (d, i) =>
          i * (width / dataset.length) + (width / dataset.length - padding) / 2
      )
      .attr('y', d => height - yScale(d) - 3)
  }

  // on retourne une DIV avec le graph
  return <div id={id} style={{ margin: 32 }} />
}

export default BarChartYuka
