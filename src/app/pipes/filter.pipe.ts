import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadoPosts = [];
    for(const post of value){
      if(post.title.indexOf(arg) > -1 ) {
        resultadoPosts.push(post);

      }
      if(post.id == arg ) {
        resultadoPosts.push(post);

      }
    }
    return resultadoPosts;
  }

}
