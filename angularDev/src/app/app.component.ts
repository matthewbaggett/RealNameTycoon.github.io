import { Component, OnInit } from '@angular/core';
import {MatDialog, MatSnackBar} from "@angular/material";
import {UpdatesDialogComponent} from "./updates-dialog/updates-dialog.component";
import {FormControl} from "@angular/forms";
import {marker} from "leaflet";

export interface Vouchers {
    value: number;
    viewValue: string;
}

export interface VoucherTypesGroup {
    disabled?: boolean;
    name: string;
    vouchers: Vouchers[];
}


declare let L;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{

    mapSW = [0,11008];
    mapNE = [11008,0];



    ngOnInit() {
        const map = L.map('map').setView([69,-126], 5);

        L.tileLayer('assets/tiles/atlas/{z}-{x}_{y}.png',{
            minZoom : 2,
            maxZoom : 7,
            noWrap : true,
            crs : L.CRS.Simple
        }).addTo(map);
        map.setMaxBounds(new L.latLngBounds(
            map.unproject(this.mapSW, map.getMaxZoom()),
            map.unproject(this.mapNE, map.getMaxZoom())
        ));



        //POINTER MARKER (maybe get help from community?)

        var ic_pointer = L.icon({
            iconUrl: 'assets/icons/ic_pointer.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -55]
        });

        var pointerMarker = L.marker(map.unproject([4960, 7408], map.getMaxZoom()),{
            draggable : true,
            icon : ic_pointer
        }).bindPopup('<h2>Move me to get coordinates!</h2>').addTo(map).openPopup();
        pointerMarker.on('dragend', function(e) {
            //alert(pointerMarker.getLatLng().toString());
            pointerMarker.getPopup().setContent('<h3>'+ map.project(pointerMarker.getLatLng(), map.getMaxZoom().toString())+'</h3>').openOn(map);

        } );


        //CHEAT SHEET START

       /* //ICONS
        var ic_grand_exchange = L.icon({
            iconUrl: 'assets/icons/grand_exchange.png',
            iconSize: [30, 31],
            iconAnchor: [15, 15],
            popupAnchor: [0, -20]
        });


        //MARKERS

        var business_bank = L.marker(map.unproject([5264, 7230], map.getMaxZoom())).bindPopup('This is The Bank');
        var business_lsia = L.marker(map.unproject([4144, 9856], map.getMaxZoom())).bindPopup('L.S.I.A Airport');
        var business_telecom = L.marker(map.unproject([5912, 6016], map.getMaxZoom())).bindPopup('Telecom business, most expensive yet');

        var mechanic_one = L.marker(map.unproject([4572, 8300], map.getMaxZoom())).bindPopup('Los Santos Mechanic');
        var mechanic_two = L.marker(map.unproject([3788, 9848], map.getMaxZoom())).bindPopup('L.S.I.A Mechanic');
        var mechanic_three = L.marker(map.unproject([3168, 7708], map.getMaxZoom())).bindPopup('Gas something mechanic');

        var others_grand_exchange = L.marker(map.unproject([4525, 7497], map.getMaxZoom()),{
            icon : ic_grand_exchange
        }).bindPopup('Grand Exchange');


        //LAYER GROUPS

        var lg_business = L.layerGroup([business_bank,business_lsia,business_telecom]);
        var lg_mechanic = L.layerGroup([mechanic_one,mechanic_two,mechanic_three]);
        var lg_others = L.layerGroup([others_grand_exchange]).addTo(map);

        //OVERLAY MAPS

        var overlayMaps = {
            'Business' : lg_business,
            "Mechanics" : lg_mechanic,
            "Others" : lg_others
        }


        //ADD LAYER CONTROL
        L.control.layers(null,overlayMaps).addTo(map);
        */

        //CHEAT SHEET END


        //GET MARKERS FROM OBJECT

        var overLayMaps = {};

        var markerinos = this.markersJson;

        for (var key in markerinos) {
            // skip loop if the property is from prototype
            if (!markerinos.hasOwnProperty(key)) continue;

            var otherObj = markerinos[key];

            if(key != "other"){
            var iconUrl = otherObj.icon.url;
            var iconSize = otherObj.icon.size;
            var iconAnchor = otherObj.icon.iconAnchor;
            var iconPopupAnchor = otherObj.icon.popupAnchor;
            }
            var layerGroup = otherObj.layerGroup;
            var overlayMapName = otherObj.overlayMapName;

            var tempLayerGroup = new L.layerGroup(); //New temporary layer to be added after to overLayMaps


            var obj = markerinos[key].markers;
            for (var prop in obj) {
                // skip loop if the property is from prototype
                if(!obj.hasOwnProperty(prop)) continue;

                var keyProp = markerinos[key].markers[prop];

                var category = key; //EXAMPLE: business, mechanic, other
                var varname = prop;
                var name = keyProp.name;
                var cordX = keyProp.coordinates.x;
                var cordY = keyProp.coordinates.y;
                var description = keyProp.description;
                //console.log(category,"+",varname,"+",name,"+",cordX,"+",cordY,"+",description);

                if(key != "other"){
                    var tempMarker = new L.marker(map.unproject([cordX, cordY], map.getMaxZoom())).bindPopup('<h2>'+name+'</h2><br>'+description);
                }else if(key == "other"){

                    var singleMarkerIconUrl = keyProp.icon.url;
                    var singleMarkerIconSize = keyProp.icon.size;
                    var singleMarkerIconAnchor = keyProp.icon.iconAnchor;
                    var singleMarkerIconPopupAnchor = keyProp.icon.popupAnchor;
                    console.log(singleMarkerIconUrl,singleMarkerIconSize, singleMarkerIconAnchor, singleMarkerIconPopupAnchor);

                    var singleMarkerIcon = new L.icon({
                        iconUrl: singleMarkerIconUrl,
                        iconSize: singleMarkerIconSize,
                        iconAnchor: singleMarkerIconAnchor,
                        popupAnchor: singleMarkerIconPopupAnchor
                    });

                    var tempMarker = new L.marker(map.unproject([cordX, cordY], map.getMaxZoom()),{
                        icon : singleMarkerIcon
                    }).bindPopup('<h2>'+name+'</h2>'+description);
                }


                tempLayerGroup.addLayer(tempMarker);
                if(key == "other"){tempLayerGroup.addTo(map)}
            }
            overLayMaps[overlayMapName] = tempLayerGroup;
        }

        L.control.layers(null,overLayMaps).addTo(map);


    }


//CALCULATOR START

    voucherGroups: VoucherTypesGroup[] = [

        {
            name: 'Unique',
            vouchers: [
                {value: 0.3, viewValue: 'Casino'},
                {value: 0.8, viewValue: 'Gym'},
                {value: 0.2, viewValue: 'Helipilot'},
                {value: 2.5, viewValue: 'Medic'}
            ]
        },
        {
            name: 'Piloting',
            vouchers: [
                {value: 0.2, viewValue: 'Piloting: Airline Pilot'},
                {value: 0.2, viewValue: 'Piloting: Cargo Pilot'},
                {value: 0.1, viewValue: 'Piloting: Player'}
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
            name: 'Mail',
            vouchers: [
                {value: 0.4, viewValue: 'Mail: PostOP'},
                {value: 0.6, viewValue: 'Mail: Player'}
            ]
        },
        {
            name: 'Police',
            vouchers: [
                {value: 0.4, viewValue: 'Police: Police'},
                {value: 0.4, viewValue: 'Police: Player'}
            ]
        },
        {
            name: 'Train',
            vouchers: [
                {value: 1.2, viewValue: 'Train: Conductor'},
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


    //GLITCH
    exp_step = 5;


    //SHOW OR HIDE STUFF
    showHideMain = true;
    showHideTrunk = false;

    mainAndTrunkButtonHandler(event){
        if(event == "trunk"){

            this.showHideTrunk = true;
            this.showHideMain = false;
        }else if(event == "main"){
            this.showHideTrunk = false;
            this.showHideMain = true;
        }
    }

//----------------------------------------




    defaultVoucherSelected = null;
    premiumValue = 1;
    discordValue = 1;
    doubleExpValue = 1;

    currentLevel = null;
    currentLevelExp = null;
    targetLevel = null;
    vouchersPerRun = null;
    expPerRun = null;

    expNeeded = null;
    vouchersNeeded = null;
    numberOfRuns = null;



    currentLevelValueOnInput(event){
        if(isNaN(event.target.valueAsNumber) || event.target.valueAsNumber > 1000000){
            this.currentLevel = null;
        }else{
            this.currentLevel = event.target.valueAsNumber;
            /*if(this.currentLevel >= this.targetLevel){
                this.targetLevel = this.currentLevel + 1;
            }*/

        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    }

    currentLevelValueOnFocusOut(event){
        if(isNaN(event.target.valueAsNumber) || event.target.valueAsNumber > 1000000){
        }else{
            var tempCurrentLevelValue = event.target.valueAsNumber;
            if(tempCurrentLevelValue >= this.targetLevel){
                this.targetLevel = tempCurrentLevelValue + 1;
            }

        }
    }

    currentLevelExpOnInput(event){
        if(isNaN(event.target.valueAsNumber) || event.target.valueAsNumber > 1000000){
            this.currentLevelExp = null;
        }else{
            this.currentLevelExp = event.target.valueAsNumber;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    }

    currentLevelExpOnFocusOut(event){
        if (event.target.valueAsNumber >= 10){
            this.currentLevel = Math.floor((Math.sqrt(1 + 8 * event.target.valueAsNumber / this.exp_step) - 1) / 2);
        }else{
            this.currentLevelExp = 10;
            this.currentLevel = 1;
        }
    }

    targetLevelOnInput(event){
        if(isNaN(event.target.valueAsNumber) || event.target.valueAsNumber > 1000000){
            this.targetLevel = null;
        }else{
            this.targetLevel = event.target.valueAsNumber;
            if(this.targetLevel <= 2){
                this.currentLevel = 1;
            }/*else if(this.targetLevel <= this.currentLevel){
                this.currentLevel = this.targetLevel -1;
            }*/
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);


    }

    targetLevelOnFocusOut(event){
        if(isNaN(event.target.valueAsNumber) || event.target.valueAsNumber > 1000000){
        }else{
            var tempTargetLevelValue = event.target.valueAsNumber;
            if(tempTargetLevelValue <= 2){
                this.currentLevel = 1;
            }else if(tempTargetLevelValue <= this.currentLevel){
                this.currentLevel = tempTargetLevelValue -1;
            }
        }
    }

    vouchersPerRunOnInput(event){
        if(isNaN(event.target.valueAsNumber) || event.target.valueAsNumber > 1000000){
            this.vouchersPerRun = null;
        }else{
            this.vouchersPerRun = event.target.valueAsNumber;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    }

    expPerRunOnInput(event){
        console.log(event.target.valueAsNumber, "expPerRun_>  " + this.expPerRun);
        if(isNaN(event.target.valueAsNumber) || event.target.valueAsNumber > 1000000){
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

    onDoubleExpChange(event){
        if(event.checked){
            this.doubleExpValue = 2;
        }else{
            this.doubleExpValue = 1;
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
            let voucherWorth = this.defaultVoucherSelected * this.premiumValue * this.discordValue * this.doubleExpValue;
            //voucherWorth = parseFloat(voucherWorth.toFixed(2));

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
//CALCULATOR END


    //MARKERS JSON LIKE

    markersJson = {
        other: {
            layerGroup: 'lg_other',
            overlayMapName: 'Other',
            markers: {
                grandExchange: {
                    name: 'Grand Exchange',
                    description: 'Trade your vouchers for experience/money.',
                    coordinates: {
                        x: '4525',
                        y: '7497'
                    },
                    icon: {
                        url: 'assets/icons/grand_exchange.png',
                        size: [30, 31],
                        iconAnchor: [15, 15],
                        popupAnchor: [0, -20]
                    }
                }
            }
        }
    };
}