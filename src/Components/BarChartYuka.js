import React, { useEffect } from 'react'
import * as d3 from 'd3'

const padding = 4
const paddingHaut = 16

const BarChartYuka = ({ id, width, height, data }) => {
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

    // On recalcul l'enesemble des données pour utiliser toute la taill du SVG
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.score)])
      .range([padding, height - paddingHaut])

    //On crée une barre pour chaque données
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (width / data.length))
      .attr('y', d => height - yScale(d.score))
      .attr('width', width / data.length - padding)
      .attr('height', d => yScale(d.score))
      .attr('fill', d => d.color)

    // On mets la valeur de chaque barre au dessus
    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(d => d.score)
      .attr(
        'x',
        (d, i) =>
          i * (width / data.length) + (width / data.length - padding) / 2
      )
      .attr('y', d => height - yScale(d.score) - 3)

    // // On mets la legende de chaque barre en dessous
    // svg
    //   .selectAll('text')
    //   .data(data)
    //   .enter()
    //   .append('text')
    //   .text(d => d.name)
    //   .attr(
    //     'x',
    //     (d, i) =>
    //       i * (width / data.length) + (width / data.length - padding) / 2
    //   )
    //   .attr('y', d => d)
  }

  // on retourne une DIV avec le graph
  return (
    <>
      <div id={id} style={{ margin: 32 }} />
    </>
  )
}

export default BarChartYuka
