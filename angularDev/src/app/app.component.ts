import { Component } from '@angular/core';
import {MatDialog} from "@angular/material";
import {UpdatesDialogComponent} from "./updates-dialog/updates-dialog.component";

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

    constructor(public dialog: MatDialog) {}

    openUpdateDialog(): void {
        const dialogRef = this.dialog.open(UpdatesDialogComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }

    defaultVoucherSelected = '0.2';
}