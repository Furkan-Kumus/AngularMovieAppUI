import { Pipe, PipeTransform } from '@angular/core';
import { Urun } from 'src/app/models/urun.model';

@Pipe({
  name: 'urunFilter'
})
export class UrunFilterPipe implements PipeTransform {

  transform(value: Urun[], filterText?: string): Urun[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:Urun) => p.name.toLocaleLowerCase().indexOf(filterText) !== -1):value;
  }

}
