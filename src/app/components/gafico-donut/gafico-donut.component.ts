import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gafico-donut',
  templateUrl: './gafico-donut.component.html',
  styles: []
})
export class GaficoDonutComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('chartData') doughnutChartData: number[] = [350, 450, 100];
  @Input('chartType') doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
