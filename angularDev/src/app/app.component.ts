import { Component } from '@angular/core';
import {MatDialog} from "@angular/material";
import {UpdatesDialogComponent} from "./updates-dialog/updates-dialog.component";
import {FormControl, Validators} from "@angular/forms";


export interface Vouchers {
    value: number;
    viewValue: string;
}

export interface VoucherTypesGroup {
    disabled?: boolean;
    name: string;
    vouchers: Vouchers[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    voucherGroups: VoucherTypesGroup[] = [

        {
            name: 'Unique',
            vouchers: [
                {value: 0.2, viewValue: 'Airline'},
                {value: 0.3, viewValue: 'Casino'},
                {value: 0.8, viewValue: 'Gym'},
                {value: 0.2, viewValue: 'Heli Pilot'},
                {value: 0.6, viewValue: 'Mail'},
                {value: 2.5, viewValue: 'Medic'}
            ]
        },
        {
            name: 'Garbage',
            vouchers: [
                {value: 0.15, viewValue: 'Garbage: Garbage'},
                {value: 0.15, viewValue: 'Garbage: Player'},
                {value: 0.15, viewValue: 'Garbage: Trucking'}
            ]
        },
        {
            name: 'Police',
            vouchers: [
                {value: 0.15, viewValue: 'Police: Police'},
                {value: 0.15, viewValue: 'Police: Player'}
            ]
        },
        {
            name: 'Train',
            vouchers: [
                {value: 1.2, viewValue: 'Train: Train Conductor'},
                {value: 0.2, viewValue: 'Train: Strength'},
                {value: 0.2, viewValue: 'Train: Player'}
            ]
        }
    ];

    constructor(public dialog: MatDialog) {}

    openUpdateDialog(): void {
        const dialogRef = this.dialog.open(UpdatesDialogComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }


    defaultVoucherSelected = 0.2;
    premiumValue = 1;
    discordValue = 1;

    currentLevel = null;
    currentLevelExp = null;
    targetLevel = null;
    vouchersPerRun = null;
    expPerRun = null;

    expNeeded = null;
    vouchersNeeded = null;
    numberOfRuns = null;

    currentLevelValueOnInput(event){
        if(isNaN(event.target.valueAsNumber)){
            this.currentLevel = null;
        }else{
            this.currentLevel = event.target.valueAsNumber;
            if(this.currentLevel >= this.targetLevel){
                this.targetLevel = this.currentLevel + 1;
            }

        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel);
    }

    currentLevelExpOnInput(event){
        if(isNaN(event.target.valueAsNumber)){
            this.currentLevelExp = null;
        }else{
            this.currentLevelExp = event.target.valueAsNumber;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel);
    }

    targetLevelOnInput(event){
        if(isNaN(event.target.valueAsNumber)){
            this.targetLevel = null;
        }else{
            this.targetLevel = event.target.valueAsNumber;
            if(this.targetLevel <= 2){
                this.currentLevel = 1;
            }else if(this.targetLevel <= this.currentLevel){
                this.currentLevel = this.targetLevel -1;
            }
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel);


    }

    vouchersPerRunOnInput(event){

    }

    expPerRunOnInput(event){

        if(isNaN(event.target.valueAsNumber)){
            this.expPerRun = null;
        }else {
            this.expPerRun = event.target.valueAsNumber;
        }


    }

    onPremiumChange(event){
        if(event.checked){
            this.premiumValue = 1.5;
        }else{
            this.premiumValue = 1;
        }
    }

    onDiscordChange(event){
        if(event.checked){
            this.discordValue = 1.05;
        }else{
            this.discordValue = 1;
        }
    }

    calculateFinal(from, fromExp, to){
        let expTotal = 0;

        for(let i = from+1; i<=to; i++){
            expTotal += i*5
        }

        expTotal = expTotal - fromExp;
        this.expNeeded = expTotal;

        if(from <1 || to <2){
            this.expNeeded = null;
        }

    }

}