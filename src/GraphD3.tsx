import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface CategorizedTotal {
    label: string,
    value: number
}

interface GraphD3Props {
    data: CategorizedTotal[]
}

const GraphD3: React.FC<GraphD3Props> = ({ data }) => {
    const d3Container = useRef<SVGSVGElement | null>(null);
  
    useEffect(() => {
      if (d3Container.current) {
        // Set up dimensions and margins
        const margin = { top: 50, right: 30, bottom: 40, left: 60 };
        const width = 600;
        const height = 400;
  
        // Set up scales
        const xScale = d3.scaleBand()
          .domain(data.map((d) => d.label))
          .range([0, width])
          .padding(0.1);
  
        const yScale = d3.scaleLinear()
          .domain([0, d3.max(data, (d) => d.value) || 0])
          .nice()
          .range([height, 0]);
  
        // Create or select SVG container
        const svg = d3.select(d3Container.current)
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .select('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);
  
        // Update rectangles
        const bars = svg.selectAll<SVGRectElement, CategorizedTotal>('rect')
          .data(data);
  
        bars.enter()
          .append('rect')
          .merge(bars) // Merge the enter and update selections
          .attr('x', (d) => xScale(d.label) || 0)
          .attr('y', (d) => yScale(d.value) || 0)
          .attr('width', xScale.bandwidth())
          .attr('height', (d) => height - yScale(d.value))
          .attr('fill', 'blue');
  
        bars.exit().remove(); // Remove old bars if data length decreases
  
        // Update text labels
        const labels = svg.selectAll<SVGTextElement, CategorizedTotal>('text')
          .data(data);
  
        labels.enter()
          .append('text')
          .merge(labels) // Merge the enter and update selections
          .attr('x', (d) => xScale(d.label) || 0 + xScale.bandwidth() / 2)
          .attr('y', (d) => yScale(d.value) || 0 - 5)
          .attr('text-anchor', 'middle')
          .style('font-size', '14px')
          .style('font-weight', '500')
          .text((d) => d.value)
          .attr('fill', 'black');
  
        labels.exit().remove(); // Remove old labels if data length decreases
  
        // Create x and y axes if they don't exist
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);
  
        // Append x axis to the bottom of the chart
      svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);

    // Append y axis to the left of the chart
    svg.append('g')
      .attr('class', 'y-axis')
      .call(yAxis);
      }
    }, [data]);
  
    return (
      <div>
        <svg ref={d3Container}>
          <g className="chart" />
        </svg>
      </div>
    );
  };

export default GraphD3;