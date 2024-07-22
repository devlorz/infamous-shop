import { Pipe, inject, type PipeTransform } from '@angular/core';
import { ImgPathService } from '../../core/services/img-path.service';

@Pipe({
  name: 'imagePath',
  standalone: true,
})
export class ImagePathPipe implements PipeTransform {
  public readonly _imgPathService = inject(ImgPathService);

  transform(productUrl: string | null): string {
    return this._imgPathService.urlImg(productUrl);
  }
}
