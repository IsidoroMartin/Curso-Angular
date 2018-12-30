import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customcapitalize'
})
export class CustomCapitalizePipe implements PipeTransform {
    transform(value: string, todas: boolean): string {
        console.log(value);
        const words: string[] = value.toLowerCase().split(' ');
        for (const i in words) {
            console.log(i);
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            if (!todas) {
                 break;
            }
        }
        return words.join(' ');
    }

}
