import { Directive, Input, ElementRef, OnChanges, OnInit } from '@angular/core';
import { ServiceStatus } from '../service/statusCalculator.service';

@Directive({
    selector: '[appServiceStatusColor]',
})
export class ServiceStatusColorDirective implements OnChanges {

    @Input()
    public serviceStatus: ServiceStatus;

    constructor(private elementRef: ElementRef) {}

    ngOnChanges(): void {
        console.log('ngOnChanges');
        this.changeCollor();
    }

    private changeCollor(): void {
        switch (this.serviceStatus) {
            case ServiceStatus.OK: {
                this.elementRef.nativeElement.style.color = 'green';
                break;
            }
            case ServiceStatus.WARNING: {
                this.elementRef.nativeElement.style.color = 'yellow';
                break;
            }
            case ServiceStatus.ERROR: {
                this.elementRef.nativeElement.style.color = 'red';
                break;
            }
            default: {
                this.elementRef.nativeElement.style.color = 'red';
                break;
            }

        }
    }


}

