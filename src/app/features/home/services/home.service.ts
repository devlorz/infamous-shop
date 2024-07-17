import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HomeBanners, HomeProducts } from '../interfaces/home.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly _http = inject(HttpClient);

  private readonly mockHomeBanners: string = environment.mock.homeBanner;
  private readonly mockHomeProducts: string = environment.mock.homeProducts;

  getBanners(): Observable<HomeBanners[]> {
    return this._http.get<HomeBanners[]>(this.mockHomeBanners);
  }

  getProducts(): Observable<HomeProducts[]> {
    return this._http.get<HomeProducts[]>(this.mockHomeProducts);
  }
}
