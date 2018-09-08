import { Component } from '@angular/core';

export interface VoucherTypes {
    value: string;
    viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    mainVoucherTypes: VoucherTypes[] = [
        {value: '0.2', viewValue: 'Airline'},
        {value: '0.3', viewValue: 'Casino'},
        {value: 'garbage', viewValue: 'Garbage'},
        {value: '0.8', viewValue: 'Gym'},
        {value: '0.1', viewValue: 'Heli Pilot'},
        {value: '0.6', viewValue: 'Mail'},
        {value: '2.5', viewValue: 'Medic'},
        {value: 'police', viewValue: 'Police'},
        {value: 'train', viewValue: 'Train'},

    ];

    defaultVoucherSelected = '0.2';
}