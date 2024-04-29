import { Directive, ElementRef, HostListener } from "@angular/core";


@Directive({
    selector: '[clickToHighlight]'
})
export class ClickBackgroundHighlight{

    private switch:boolean = false;

    constructor(private element:ElementRef){}

    ngOnInit(){}

    @HostListener('click') onClick(){
        this.switch = !this.switch;
        if(this.switch){
            this.element.nativeElement.style.backgroundColor = 'yellow';
            this.element.nativeElement.style.display = 'inline-block';
            this.element.nativeElement.style.padding = '5px';
            this.element.nativeElement.style.borderRadius = '10px';
            this.element.nativeElement.style.cursor = 'pointer';
        }else{
            this.element.nativeElement.style.backgroundColor = '';
            this.element.nativeElement.style.display = '';
            this.element.nativeElement.style.padding = '';
            this.element.nativeElement.style.borderRadius = '';
            this.element.nativeElement.style.cursor = 'pointer';
        }
    }
}