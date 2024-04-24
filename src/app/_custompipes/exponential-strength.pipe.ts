import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {
    transform(value:number, exponent:number = 1):number {
        return Math.pow(value,exponent);
    }

}