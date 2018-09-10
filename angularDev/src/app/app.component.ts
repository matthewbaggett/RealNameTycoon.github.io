import { Component } from '@angular/core';
import {MatDialog, MatSnackBar} from "@angular/material";
import {UpdatesDialogComponent} from "./updates-dialog/updates-dialog.component";


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

    constructor(public dialog: MatDialog,public snackBar: MatSnackBar) {}

    openUpdateDialog(): void {
        const dialogRef = this.dialog.open(UpdatesDialogComponent, {
            width: '80%'
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
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    }

    currentLevelExpOnInput(event){
        if(isNaN(event.target.valueAsNumber)){
            this.currentLevelExp = null;
        }else{
            this.currentLevelExp = event.target.valueAsNumber;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
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
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);


    }

    vouchersPerRunOnInput(event){
        if(isNaN(event.target.valueAsNumber)){
            this.vouchersPerRun = null;
        }else{
            this.vouchersPerRun = event.target.valueAsNumber;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    }

    expPerRunOnInput(event){

        if(isNaN(event.target.valueAsNumber)){
            this.expPerRun = null;
        }else {
            this.expPerRun = event.target.valueAsNumber;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);

    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    onPremiumChange(event){
        if(event.checked){
            this.premiumValue = 1.5;
        }else{
            this.premiumValue = 1;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);

    }

    onDiscordChange(event){
        if(event.checked){
            this.discordValue = 1.05;
        }else{
            this.discordValue = 1;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    }

    calculateFinal(from, fromExp, to, voucherRun, expRun){

        this.expNeeded = null;
        this.vouchersNeeded = null;
        this.numberOfRuns = null;

        if(expRun >0 && (from == null || from <1 || fromExp == null || fromExp < 10 || to == null
        || to < 2 || voucherRun == null || voucherRun < 0)){
            this.expNeeded = "All field required when using Exp per Run";
            this.vouchersNeeded = "All field required when using Exp per Run";
            this.numberOfRuns = "All field required when using Exp per Run";
        }else if(from < 1 || from == null || from > to || to < 2 || to == null){
            this.expNeeded = "Something's wrong. Read how to use guide.";
            this.vouchersNeeded = "Something's wrong. Read how to use guide.";
            this.numberOfRuns = "Something's wrong. Read how to use guide.";
        }else{
            let expTotal = 0;

            if(fromExp > 0){
                for(let i = 1; i<=to; i++){
                    expTotal += i*5
                }
            }else{
                for(let i = from; i<=to; i++){
                    expTotal += i*5;
                }
                expTotal-=10;
            }

            expTotal = expTotal - fromExp;
            this.expNeeded = expTotal;
            let voucherWorth = this.defaultVoucherSelected * this.premiumValue * this.discordValue;

            if(expRun > 0 && expRun != null){
                let expRunVouchersNeeded = 0;
                let expRunNumberOfRuns = 0;
                while(expTotal >0){

                    expRunVouchersNeeded += voucherRun;
                    expRunNumberOfRuns++;
                    expTotal = expTotal - (voucherRun*voucherWorth + expRun);
                }
                this.vouchersNeeded = Math.ceil(expRunVouchersNeeded);
                this.numberOfRuns = Math.ceil(expRunNumberOfRuns);
            }else if(voucherRun > 0 && voucherRun != null){

                this.vouchersNeeded = Math.ceil(expTotal/voucherWorth);
                this.numberOfRuns = Math.ceil((expTotal/voucherWorth)/voucherRun);

            }else{
                this.vouchersNeeded = Math.ceil(expTotal/voucherWorth);
                this.numberOfRuns = "Vouchers Per Run not specified";
            }



            if(from <1 || to <2){
                this.expNeeded = null;
            }
        }



    }

    copyToClipboardVouchersNeeded(){
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.vouchersNeeded;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.openSnackBar("Copied to clipboard","");
    }

    runCalculator(event){
        this.defaultVoucherSelected = event;
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    }



    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 1000,
        });
    }

}