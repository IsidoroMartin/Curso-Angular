import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, mostrar: boolean): string {
    if (!mostrar) {
      const chars: string[] = value.split('');
      for (const i in chars) {
        chars[i] = '*';
      }
      value =  chars.join('');
    }
    return value;
  }

}
