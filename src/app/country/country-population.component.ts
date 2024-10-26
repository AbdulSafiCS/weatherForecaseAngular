import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryPopulation } from './CountryPopulation';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-country-population',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss'
})
export class CountryPopulationComponent implements OnInit {
  id:number = -1;
  public countryPopulation!: CountryPopulation; 
  constructor(private http: HttpClient, private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
    let id_param = this.activatedRoute.snapshot.paramMap.get("id");
    this.id = id_param ? + id_param : -1;
     this.http.get<CountryPopulation>(`${environment.baseUrl}api/countries/country-population/${this.id}`).subscribe( {
      next: result => this.countryPopulation = result,
      error: e => console.log(e),
     })
  }
}
