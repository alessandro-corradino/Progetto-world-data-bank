import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  baseUrl = `https://3000-fuchsia-gayal-07ln42gw.ws-eu03.gitpod.io`;

  getCities() {
    const url = `${this.baseUrl}/cities`;
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getSust1() {
    const url = `${this.baseUrl}/cities/sust1`;
    let obs = this.http.get(url);
    console.log(url);
    console.log(obs);
    return obs;
  }

  getSust2() {
    const url = `${this.baseUrl}/cities/sust2`;
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

}
