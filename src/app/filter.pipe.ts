import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(gotData : any, term: any): any {
    
    if (term === undefined || term === "all") {
      return gotData;
    }

    return gotData.filter(function (data) {
      console.log(data.name);
      console.log(term);

      console.log(data.name.toLowerCase().includes(term.toLowerCase()));
      return data.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
