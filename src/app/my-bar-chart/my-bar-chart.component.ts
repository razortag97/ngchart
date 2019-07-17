import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 155, 40], label: 'Bofa'},
    {data: [28, 48, 40, 191, 186, 27, 90], label: 'Citibank'},
    {data: [28, 48, 40, 19, 81, 71, 190], label: 'Discover'},
    {data: [96, 25, 11, 179, 16, 27, 190], label: 'AMEX'}
  ];
  ngOnInit() {
  }
}