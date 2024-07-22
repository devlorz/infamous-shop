import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImgPathService {
  private cdnImg: string = environment.img_cdn;

  public urlImg(product: string | null): string {
    if (product) {
      return `${this.cdnImg}${product}.jpg`;
    } else {
      return '/assets/images/not-found-image.jpg';
    }
  }
}
