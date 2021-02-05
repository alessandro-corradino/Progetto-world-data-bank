import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  chartDataArray = new Array<ChartData>();
  constructor(public http:HttpClient) {
     http.get('https://3000-tomato-eagle-u2bfo342.ws-eu03.gitpod.io/cities').subscribe(this.getData);
  }

  ngOnInit(): void {
  }

getData = (data) => {
    console.log(data);
    //data = fakeData.data;
    for (var i in data) {
      let cd = new ChartData(data[i]['GeoAreaName '], "LineChart", data[i], data[i]['GeoAreaName'])
      this.chartDataArray.push(cd);
    }
  }
}
export class ChartData {
  public data = [];
  constructor(public title, public type, json_data, public columnNames) {
    for (var i in json_data) {
      const parsedX = parseInt(i);
      const parsedY = parseFloat(json_data[i])
      if (!isNaN(parsedX) && !isNaN(parsedY)) {
        this.data.push([parsedX, parsedY]);
      }
    }
    console.log(this.data);

  }
}
