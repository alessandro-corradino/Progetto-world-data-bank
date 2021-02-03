import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'civica';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient, private sanitizer: DomSanitizer){}

  load10Movies()
  {
    this.obs = this.http.get("https://3000-b3fcc099-c3ee-4824-80de-018960e1e76d.ws-eu03.gitpod.io/cities/sust1");
    this.obs.subscribe(this.getData);
  }
  loadHorror()
  {
    this.obs = this.http.get("https://3000-b3fcc099-c3ee-4824-80de-018960e1e76d.ws-eu03.gitpod.io/cities/sust2");
    this.obs.subscribe(this.getData);
  }
   getData = (data) => {
    this.results = data;
  }
}
