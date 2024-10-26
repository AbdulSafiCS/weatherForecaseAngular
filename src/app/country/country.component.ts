import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Country } from './country';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit {
  public countries: Country [] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getCountries()
  }
  getCountries() {
    this.http.get<Country[]>(`${environment.baseUrl}api/Countries
`).subscribe(
  {
    next: result => this.countries = result,
    error: e => console.error(e)
  }
    );
  }
}
