import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-learnd3',
  templateUrl: './learnd3.component.html',
  styleUrls: ['./learnd3.component.scss']
})
export class Learnd3Component implements OnInit {

  constructor() { }
  data = [1,2,3,4];
  w= 200;
  h= 150;
  rectHeight=50;
  ngOnInit() {

    const svg= d3.selectAll('body')
    .append('svg')
    .attr('width', this.w)
    .attr('height', this.h)
    
    
    svg.selectAll('rect')
    .data(this.data)
    .enter()
    .append('rect')
    .attr('x',(d,i)=>i*30)
    .attr('y',(d,i)=>(this.h-(i*this.rectHeight)))
    .attr('width',this.w/this.data.length)
    .attr('height',(d,i)=>i*this.rectHeight)
    .style('fill','red')

  }

}
