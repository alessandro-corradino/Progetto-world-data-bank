import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  query: string;
  apiServiceObs: Observable<Object>;
  results: any;

  selectedOption: string = 'ALLAREA';
  chartType: string = 'PieChart';
  chartData =  [];

  selectedOption2: string = '2015';
  chartType2: string = 'BarChart';
  chartData2 =  [];

  height: string = '750';
  width: string = '1000';
  options = {
    is3D: true
   };

  options1 = [
      { name: "ALLAREA", value: "ALLAREA" },
      { name: "URBAN", value: "URBAN" }
    ]

  options2 = [
      { name: "2015", value: "2015" },
      { name: "2016", value: "2016" },
      { name: "2017", value: "2017" },
      { name: "2018", value: "2018" },
      { name: "2019", value: "2019" },
    ]

  constructor(
    public api: ApiService,
    private service: ApiService) {
  }

  submit(): void {
    this.chartData = [];
    this.apiServiceObs = this.api.getCities();
    this.apiServiceObs.subscribe((data) => {
      this.results = data;
      console.log(this.results);
      for (let i = 0; i < this.results.length; i++) {
        if (this.results[i].Location == this.selectedOption) { this.chartData.push([this.results[i].GeoAreaName, parseFloat(this.results[i]['2016'])]); }
      }
      console.log(this.chartData)
    });
  }

  submit2(): void {
    this.chartData2 = [];
    this.apiServiceObs = this.api.getSust1();
    this.apiServiceObs.subscribe((data) => {
      this.results = data;
      console.log(this.results);
      for (let i = 0; i < this.results.length; i++) {
        this.chartData2.push([this.results[i].GeoAreaName, parseFloat(this.results[i][this.selectedOption2])]);
      }
      console.log(this.chartData2)
    });
  }
}
