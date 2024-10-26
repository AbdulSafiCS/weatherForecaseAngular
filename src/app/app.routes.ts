import { Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { WeatherComponent } from './weather/weather.component';
import { CountryPopulationComponent } from './country/country-population.component';

export const routes: Routes = [
    {path: "countries", component: CountryComponent},
    {path: "cities", component: CityComponent},
    {path: "country-population/:id", component: CountryPopulationComponent},
    {path: "", component: WeatherComponent, pathMatch: "full"}
];
