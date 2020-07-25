import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
     let temp:string[]= value.split("@");
        
    return temp[0]+"\n"+temp[1];
  }

}
