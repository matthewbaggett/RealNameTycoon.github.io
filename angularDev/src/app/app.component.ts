import { Component, OnInit } from '@angular/core';
import {MatDialog, MatSnackBar} from "@angular/material";
import {UpdatesDialogComponent} from "./updates-dialog/updates-dialog.component";
import * as firebase from 'firebase';
import {FormControl} from "@angular/forms";

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

    testFunction(){

    }



    ngOnInit() {

        firebase.initializeApp({
            apiKey: "AIzaSyC0vo86-R931I6nGjTHsQMECpFe2861ELg",
            authDomain: "realnametycoon.firebaseapp.com",
            databaseURL: "https://realnametycoon.firebaseio.com",
            projectId: "realnametycoon",
            storageBucket: "realnametycoon.appspot.com",
            messagingSenderId: "148163845384"

        });
        const db = firebase.firestore();
        db.settings({timestampsInSnapshots : true});


        const map = L.map('map').setView([69,-126], 5);

        var atlasTileLayer = L.tileLayer('assets/tiles/atlas/{z}-{x}_{y}.png',{
            minZoom : 2,
            maxZoom : 7,
            noWrap : true,
            crs : L.CRS.Simple
        }).addTo(map);
        var roadTileLayer = L.tileLayer('assets/tiles/road/{z}-{x}_{y}.png',{
            minZoom : 2,
            maxZoom : 7,
            noWrap : true,
            crs : L.CRS.Simple
        });
        var satelliteTileLayer = L.tileLayer('assets/tiles/satellite/{z}-{x}_{y}.png',{
            minZoom : 2,
            maxZoom : 7,
            noWrap : true,
            crs : L.CRS.Simple
        });

        var baseMaps = {
            '<div id="tileLayerAtlas" class="map_atlas mapTypeSelected"></div>' : atlasTileLayer,
            '<div id="tileLayerRoad" class="map_road"></div>'   : roadTileLayer,
            '<div id="tileLayerSatellite" class="map_satellite"></div>'  : satelliteTileLayer
        };
        /*map.setMaxBounds(new L.latLngBounds(
            map.unproject(this.mapSW, map.getMaxZoom()),
            map.unproject(this.mapNE, map.getMaxZoom())
        ));*/



        //POINTER MARKER (maybe for community help?)



        //=================CODE FOR MARKER SHARE===============
        var suggDiv = document.createElement('div');
            suggDiv.setAttribute('id','suggDiv');
        var suggMainTitle = document.createElement('h2');
            suggMainTitle.innerText = "Suggest a marker";
        var suggTypeLabel = document.createElement('h3');
            suggTypeLabel.innerText = "Type of marker";
            suggTypeLabel.setAttribute('id','suggTypeLabel');
        var suggNameLabel = document.createElement('h3');
            suggNameLabel.innerText = "Name";
            suggNameLabel.setAttribute('id','suggNameLabel');
        var suggDescLabel = document.createElement('h3');
            suggDescLabel.innerText = "Description";
             suggDescLabel.setAttribute('id','suggDescLabel');
        var suggXLabel = document.createElement('h3');
            suggXLabel.innerText = "Coords X";
            suggXLabel.setAttribute('id','suggXLabel');
        var suggYLabel = document.createElement('h3');
            suggYLabel.innerText = "Coords Y";
            suggYLabel.setAttribute('id','suggYLabel');
        var suggTypeInput = document.createElement('input');
            suggTypeInput.setAttribute('type','text');
            suggTypeInput.setAttribute('id','suggType');
            suggTypeInput.setAttribute('placeholder','Business, Garage,...');
        var suggNameInput = document.createElement('input');
            suggNameInput.setAttribute('type','text');
            suggNameInput.setAttribute('id','suggName');
            suggNameInput.setAttribute('placeholder','Grand Exchange, L.S.I.A,...');
        var suggDescInput = document.createElement('textarea');
            suggDescInput.setAttribute('id','suggDesc');
            suggDescInput.setAttribute('placeholder','All the important info');
        var suggXInput = document.createElement('input');
            suggXInput.setAttribute('disabled','');
            suggXInput.setAttribute('type','text');
            suggXInput.setAttribute('id','suggX');
        var suggYInput = document.createElement('input');
            suggYInput.setAttribute('disabled','');
            suggYInput.setAttribute('type','text');
            suggYInput.setAttribute('id','suggY');

        var suggSubmitButton = document.createElement('button');
            suggSubmitButton.innerText = 'Submit Suggestion';
            suggSubmitButton.setAttribute('id','suggSubmitButton')
            suggSubmitButton.onclick = function () {
                proccessMarkerSuggestion();
            };





        suggDiv.appendChild(suggMainTitle);
        suggDiv.appendChild(suggTypeLabel);
        suggDiv.appendChild(suggTypeInput);
        suggDiv.appendChild(suggNameLabel);
        suggDiv.appendChild(suggNameInput);
        suggDiv.appendChild(suggDescLabel);
        suggDiv.appendChild(suggDescInput);
        suggDiv.appendChild(suggXLabel);
        suggDiv.appendChild(suggXInput);
        suggDiv.appendChild(suggYLabel);
        suggDiv.appendChild(suggYInput);
        suggDiv.appendChild(suggSubmitButton);


        function proccessMarkerSuggestion() {

            var finalSuggType = (<HTMLInputElement>document.getElementById('suggType')).value;
            var finalSuggName = (<HTMLInputElement>document.getElementById('suggName')).value;
            var finalSuggDesc = (<HTMLInputElement>document.getElementById('suggDesc')).value;
            var finalSuggX = (<HTMLInputElement>document.getElementById('suggX')).value;
            var finalSuggY = (<HTMLInputElement>document.getElementById('suggY')).value;

            //UPLOAD SUGGESTION TO DATABASE
            db.collection('markers').add({
                type: finalSuggType,
                name: finalSuggName,
                desc: finalSuggDesc,
                coordsX: finalSuggX,
                coordsY: finalSuggY
            });



            //CLEAN ALL FIELDS
            (<HTMLInputElement>document.getElementById('suggType')).value = "";
            (<HTMLInputElement>document.getElementById('suggName')).value = "";
            (<HTMLInputElement>document.getElementById('suggDesc')).value = "";

            var thanksSuggestionDiv = `
                <h1>Thank you for your suggestion!</h1>
            `;
            pointerMarker.getPopup().setContent(thanksSuggestionDiv).openOn(map)
            setTimeout(function(){
                pointerMarker.closePopup();
            }, 2000);

        }
        //=================END CODE FOR MARKER SHARE===============



        var ic_pointer = L.icon({
            iconUrl: 'assets/icons/ic_pointer.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -55]
        });

        var pointerMarker = L.marker(map.unproject([4960, 7408], map.getMaxZoom()),{
            draggable : true,
            icon : ic_pointer
        }).bindPopup('<h2>Move and click me to make a suggestion!</h2>').addTo(map).openPopup();
        pointerMarker.on('click', function(e) {
            //alert(pointerMarker.getLatLng().toString());

            pointerMarker.getPopup().setContent(suggDiv).openOn(map);
            //TODO MUDAR O X E O Y
            var coordsXandY = map.project(pointerMarker.getLatLng(), map.getMaxZoom().toString());
            var tempCoordsX = coordsXandY.x;
            var tempCoordsY = coordsXandY.y;
            if(tempCoordsX.toString().indexOf('.') != -1){
                var coordsX = tempCoordsX.toString().substring(0, tempCoordsX.toString().indexOf('.'));
            }else{
                var coordsX = tempCoordsX.toString();
            }
            if(tempCoordsY.toString().indexOf('.') != -1){
                var coordsY = tempCoordsY.toString().substring(0, tempCoordsY.toString().indexOf('.'));
            }else{
                var coordsY = tempCoordsY.toString();
            }


            (<HTMLInputElement>document.getElementById('suggX')).value = coordsX;
            (<HTMLInputElement>document.getElementById('suggY')).value = coordsY;
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
        var allMarkersLayer = new L.layerGroup();

        var markerinos = this.markersJson;
        //CONSTANTS SIZES
        const ICONSIZE = [32,32];
        const ICONANCHOR = [16,16];
        const ICONPOPUPANCHOR = [0,-20];

        for (var key in markerinos) {
            var controlLayerIcon = "";
            // skip loop if the property is from prototype
            if (!markerinos.hasOwnProperty(key)) continue;

            var otherObj = markerinos[key];

            if(key == "business" ||
               key == "mechanic"){
            var iconClass = otherObj.icon;
            controlLayerIcon = iconClass;
            //console.log("otherObj",otherObj.icon);
            //console.log(iconClass);
            }
            var layerGroup = otherObj.layerGroup;
            var overlayMapName = otherObj.overlayMapName;

            var tempLayerGroup = new L.layerGroup(); //New temporary layer to be added after to overLayMaps


            var obj = markerinos[key].markers;
            //console.log(obj);
            for (var prop in obj) {
                // skip loop if the property is from prototype
                if(!obj.hasOwnProperty(prop)) continue;

                var keyProp = markerinos[key].markers[prop];
                //console.log("keyProp",keyProp); //Each individual marker

                var category = key; //EXAMPLE: business, mechanic, other
                var varname = prop;
                var name = keyProp.name;
                var cordX = keyProp.coordinates.x;
                var cordY = keyProp.coordinates.y;
                var description = keyProp.description;
                //console.log(category,"+",varname,"+",name,"+",cordX,"+",cordY,"+",description);

                if(key == "business" ||
                   key == "mechanic"){
                    /*var singleMarkerIcon = new L.icon({
                        iconUrl: iconUrl,
                        iconSize: iconSize,
                        iconAnchor: iconAnchor,
                        popupAnchor: iconPopupAnchor
                    });*/
                    var singleMarkerIcon = new L.divIcon({className: iconClass, iconSize: null, iconAnchor: ICONANCHOR, popupAnchor:ICONPOPUPANCHOR});

                    var tempMarker = new L.marker(map.unproject([cordX, cordY], map.getMaxZoom()),{
                        icon : singleMarkerIcon
                    }).bindPopup('<h2>'+name+'</h2><br>'+description);
                }else if(key == "other" ||
                         key == "vehicles") {

                    var singleMarkerIconClass = keyProp.icon;
                    if (key == "vehicles") {
                        controlLayerIcon = "ic_dealership_vehicle";
                    } else {
                    controlLayerIcon = singleMarkerIconClass;
                    };
                    //console.log("singleMarkerIconClass:",singleMarkerIconClass);

                    /*var singleMarkerIcon = new L.icon({
                        iconUrl: singleMarkerIconUrl,
                        iconSize: singleMarkerIconSize,
                        iconAnchor: singleMarkerIconAnchor,
                        popupAnchor: singleMarkerIconPopupAnchor
                    });*/
                    var singleMarkerIcon = new L.divIcon({className: singleMarkerIconClass, iconSize: null, iconAnchor: ICONANCHOR, popupAnchor:ICONPOPUPANCHOR});

                    var tempMarker = new L.marker(map.unproject([cordX, cordY], map.getMaxZoom()),{
                        icon : singleMarkerIcon
                    }).bindPopup('<h2>'+name+'</h2>'+description);
                }


                tempLayerGroup.addLayer(tempMarker);
                allMarkersLayer.addLayer(tempMarker);
                if(key == "other"){tempLayerGroup.addTo(map)}
            }
            tempLayerGroup.addTo(map);
            overLayMaps['<div style="height: 36px; width:36px; display: inline-block !important;" class="'+controlLayerIcon+' controlLayerIcons"></div>'] = tempLayerGroup;
        }
        //TODO MAKE IT WORK => allMarkersLayer.addTo(map);
        //TODO overLayMaps['<b>Hide all markers</b>'] = allMarkersLayer;
        overLayMaps['<b>Suggestion Marker</b>'] = pointerMarker;



        L.control.layers(baseMaps,overLayMaps,{position: 'topleft'}).addTo(map);

        map.on('baselayerchange',function (e) {

            var mapBackgroundColor = "";

            var classTileLayerRoad = document.getElementById('tileLayerRoad');
            var classTileLayerSatellite =document.getElementById('tileLayerSatellite');
            var classTileLayerAtlas = document.getElementById('tileLayerAtlas');

            removeClass(classTileLayerRoad,'mapTypeSelected');
            removeClass(classTileLayerSatellite,'mapTypeSelected');
            removeClass(classTileLayerAtlas,'mapTypeSelected');

            if(e.layer._leaflet_id == "298"){
                mapBackgroundColor = "#1862ad";
                addClass(classTileLayerRoad,'mapTypeSelected');
            }
            if(e.layer._leaflet_id == "299"){
                mapBackgroundColor = "#143d6b" ;
                addClass(classTileLayerSatellite,'mapTypeSelected');
            }
            if(e.layer._leaflet_id == "26"){
                mapBackgroundColor = "#0fa8d2"
                addClass(classTileLayerAtlas,'mapTypeSelected');
            }

            document.getElementById('map').style.backgroundColor = mapBackgroundColor;

        });

        function hasClass(el, className)
        {
            if (el.classList)
                return el.classList.contains(className);
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }

        function addClass(el, className)
        {
            if (el.classList)
                el.classList.add(className)
            else if (!hasClass(el, className))
                el.className += " " + className;
        }

        function removeClass(el, className)
        {
            if (el.classList)
                el.classList.remove(className)
            else if (hasClass(el, className))
            {
                var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                el.className = el.className.replace(reg, ' ');
            }
        }

        map.on('overlayremove',function (e) {
            //TODO MAKE IT WORK
        });
        map.on('overlayadd',function (e) {
            //TODO MAKE IT WORK
        });




    }



//CALCULATOR START

    voucherGroups: VoucherTypesGroup[] = [

        {
            name: 'Unique',
            vouchers: [
                {value: 0.3, viewValue: 'Casino'},
                {value: 0.005, viewValue: 'Fish Meat'},
                {value: 0.8, viewValue: 'Gym'},
                {value: 0.2, viewValue: 'Helipilot'},
                {value: 0.2, viewValue: 'Hunting'},
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


    //MARKERS Object

    markersJson = {
        business: {
            layerGroup: 'lg_business',
            overlayMapName: 'Business',
            icon: 'ic_business',
            markers: {
                business_1: {
                    name: 'Jonny Tung',
                    description: '<b>Price:</b> $25.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 4246,
                        y: 7617
                    }
                },
                business_2: {
                    name: 'KO RTZ',
                    description: '<b>Price:</b> $35.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>ATM</em> x1<br/><em>Spawn Point</em> x1<br/><em>Helicopter Garage</em> x1<br/>',
                    coordinates: {
                        x: 3018,
                        y: 7104
                    }
                },
                business_3: {
                    name: 'Fort Zancudo',
                    description: '<b>Price:</b> $35.00M<br/><b>Perks:</b> <br/><em>Job Center</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>Market</em> x1<br/><em>Spawn Point</em> x1<br/><em>Vehicle Spawner</em> x1<br/>',
                    coordinates: {
                        x: 2883,
                        y: 4511
                    }
                },
                business_4: {
                    name: 'Jetsam Paleto Bay',
                    description: '<b>Price:</b> $3.50M<br/><b>Perks:</b> <br/><em>Spawn Point</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 4820,
                        y: 1970
                    }
                },
                business_5: {
                    name: 'Union Grain Inc Grapeseed',
                    description: '<b>Price:</b> $4.50M<br/><b>Perks:</b> <br/><em>Spawn Point</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 6830,
                        y: 3003
                    }
                },
                business_6: {
                    name: 'Harmony Gas Station',
                    description: '<b>Price:</b> $2.50M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 5966,
                        y: 5058
                    }
                },
                business_7: {
                    name: 'Sisyphus Theater',
                    description: '<b>Price:</b> $5.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 5246,
                        y: 6390
                    }
                },
                business_8: {
                    name: 'Merryweather Port',
                    description: '<b>Price:</b> $17.50M<br/><b>Perks:</b> <br/><em>Helicopter Garage</em> x1<br/><em>Boat Garage</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 5554,
                        y: 10153
                    }
                },
                business_9: {
                    name: 'Alphamail Couriers LSIA',
                    description: '<b>Price:</b> $6.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 4382,
                        y: 9630
                    }
                },
                business_10: {
                    name: 'Venetian',
                    description: '<b>Price:</b> $7.50M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 3836,
                        y: 8375
                    }
                },
                business_11: {
                    name: 'Davis Quartz Quarry',
                    description: '<b>Price:</b> $18.00M<br/><b>Perks:</b> <br/><em>Job Center</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 7323,
                        y: 5019
                    }
                },
                business_12: {
                    name: 'Catfish View',
                    description: '<b>Price:</b> $4.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 8417,
                        y: 3469
                    }
                },
                business_13: {
                    name: 'Medical Center Parking Garage',
                    description: '<b>Price:</b> $6.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 5404,
                        y: 8614
                    }
                },
                business_14: {
                    name: 'LT Weld Supply Co',
                    description: '<b>Price:</b> $37.00M<br/><b>Perks:</b> <br/><em>Job Center</em> x1<br/><em>Repair Point</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>Self Storage</em> x1<br/>',
                    coordinates: {
                        x: 6076,
                        y: 8613
                    }
                },
                business_15: {
                    name: 'Lârss & Elboö',
                    description: '<b>Price:</b> $1.50M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 5145,
                        y: 7557
                    }
                },
                business_16: {
                    name: 'Bishops Chicken',
                    description: '<b>Price:</b> $1.50M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 7330,
                        y: 7013
                    }
                },
                business_17: {
                    name: 'Millars Boat Shop',
                    description: '<b>Price:</b> $12.50M<br/><b>Perks:</b> <br/><em>Unavailable Feature (Type 0x1000)</em> x1<br/><em>Boat Garage</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 6211,
                        y: 3572
                    }
                },
                business_18: {
                    name: 'Rebel Radio',
                    description: '<b>Price:</b> $9.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 5694,
                        y: 5186
                    }
                },
                business_19: {
                    name: 'Jetsam Terminal',
                    description: '<b>Price:</b> $3.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 5768,
                        y: 10061
                    }
                },
                business_20: {
                    name: 'Los Santos International Airport',
                    description: '<b>Price:</b> $125.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>ATM</em> x1<br/><em>Self Storage</em> x2<br/><em>Spawn Point</em> x1<br/><em>Marketplace</em> x1<br/>',
                    coordinates: {
                        x: 4116,
                        y: 9859
                    }
                },
                business_21: {
                    name: 'Clucking Bell Co.',
                    description: '<b>Price:</b> $11.00M<br/><b>Perks:</b> <br/><em>Marketplace</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 4922,
                        y: 1933
                    }
                },
                business_22: {
                    name: 'Sandy Shores Liquor',
                    description: '<b>Price:</b> $250.00k<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 6773,
                        y: 4018
                    }
                },
                business_23: {
                    name: 'You Tool Sandy Shores',
                    description: '<b>Price:</b> $500.00k<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 7478,
                        y: 4352
                    }
                },
                business_24: {
                    name: 'Opium Nights Hotel',
                    description: '<b>Price:</b> $17.00M<br/><b>Perks:</b> <br/><em>Spawn Point</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 4424,
                        y: 9437
                    }
                },
                business_25: {
                    name: 'Korean Plaza',
                    description: '<b>Price:</b> $750.00k<br/><b>Perks:</b> <br/><em>Market</em> x2<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 4512,
                        y: 8423
                    }
                },
                business_26: {
                    name: 'Los Santos Docks',
                    description: '<b>Price:</b> $1.50M<br/><b>Perks:</b> <br/><em>Repair Point</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>ATM</em> x1<br/><em>Unavailable Feature (Type 0x0040)</em> x1<br/>',
                    coordinates: {
                        x: 4997,
                        y: 9655
                    }
                },
                business_27: {
                    name: 'Pala Springs Aerial Tramway',
                    description: '<b>Price:</b> $250.00k<br/><b>Perks:</b> <br/><em>Market</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 4376,
                        y: 2488
                    }
                },
                business_28: {
                    name: 'Vinewood Racetrack',
                    description: '<b>Price:</b> $60.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>ATM</em> x1<br/><em>Unavailable Feature (Type 0x0001)</em> x1<br/><em>Market</em> x1<br/>',
                    coordinates: {
                        x: 5967,
                        y: 7249
                    }
                },
                business_29: {
                    name: 'Sandy Shores Airfield',
                    description: '<b>Price:</b> $47.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>Plane Garage</em> x1<br/><em>Spawn Point</em> x1<br/><em>Market</em> x1<br/>',
                    coordinates: {
                        x: 6551,
                        y: 4506
                    }
                },
                business_30: {
                    name: 'Aircraft Carrier',
                    description: '<b>Price:</b> $65.00M<br/><b>Perks:</b> <br/><em>Plane Garage</em> x1<br/><em>Spawn Point</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 8552,
                        y: 10832
                    }
                },
                business_31: {
                    name: 'La Vaca Loco',
                    description: '<b>Price:</b> $150.00k<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 5170,
                        y: 8766
                    }
                },
                business_32: {
                    name: 'CollinsCo',
                    description: '<b>Price:</b> $125.00M<br/><b>Perks:</b> <br/><em>Spawn Point</em> x1<br/><em>Self Storage</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 6556,
                        y: 8846
                    }
                },
                business_33: {
                    name: 'Fridgit Co.',
                    description: '<b>Price:</b> $8.00M<br/><b>Perks:</b> <br/><em>Helicopter Garage</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 5814,
                        y: 8861
                    }
                },
                business_34: {
                    name: 'Yellowjack',
                    description: '<b>Price:</b> $950.00k<br/><b>Perks:</b> <br/><em>Business Bonus</em> x1<br/><em>Self Storage</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Market</em> x1<br/>',
                    coordinates: {
                        x: 6801,
                        y: 4742
                    }
                },
                business_35: {
                    name: 'Bahama Mamas',
                    description: '<b>Price:</b> $32.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>ATM</em> x1<br/><em>Spawn Point</em> x1<br/><em>Market</em> x1<br/>',
                    coordinates: {
                        x: 3819,
                        y: 7964
                    }
                },
                business_36: {
                    name: 'San Andreas Telecom Network',
                    description: '<b>Price:</b> $750.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>Chat Prefix</em> x1<br/><em>Spawn Point</em> x1<br/><em>Permission Set</em> x1<br/>',
                    coordinates: {
                        x: 5740,
                        y: 6282
                    }
                },
                business_37: {
                    name: 'Ron Alternates Wind Farm',
                    description: '<b>Price:</b> $350.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 7227,
                        y: 6027
                    }
                },
                business_38: {
                    name: 'Wenger Institute',
                    description: '<b>Price:</b> $15.00k<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 4719,
                        y: 7637
                    }
                },
                business_39: {
                    name: 'Vanilla Unicorn',
                    description: '<b>Price:</b> $30.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>ATM</em> x1<br/><em>Spawn Point</em> x1<br/><em>Unavailable Feature (Type 0x4000)</em> x1<br/>',
                    coordinates: {
                        x: 5157,
                        y: 8557
                    }
                },
                business_40: {
                    name: 'Parsons Rehabilitation Center',
                    description: '<b>Price:</b> $4.50M<br/><b>Perks:</b> <br/><em>Market</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 3701,
                        y: 6668
                    }
                },
                business_41: {
                    name: 'Grandma\'s House',
                    description: '<b>Price:</b> $500.00k<br/><b>Perks:</b> <br/><em>Helicopter Garage</em> x1<br/><em>Self Storage</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 7016,
                        y: 2459
                    }
                },
                business_42: {
                    name: 'Mt. Chiliad Base',
                    description: '<b>Price:</b> $200.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Helicopter Garage</em> x3<br/><em>Spawn Point</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 5507,
                        y: 2475
                    }
                },
                business_43: {
                    name: 'Oil Platform',
                    description: '<b>Price:</b> $125.00M<br/><b>Perks:</b> <br/><em>Helicopter Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>ATM</em> x1<br/><em>Boat Garage</em> x1<br/><em>Spawn Point</em> x1<br/><em>Market</em> x1<br/>',
                    coordinates: {
                        x: 1368,
                        y: 816
                    }
                },
                business_44: {
                    name: 'Hookies',
                    description: '<b>Price:</b> $300.00k<br/><b>Perks:</b> <br/><em>Market</em> x1<br/><em>Self Storage</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 3091,
                        y: 3627
                    }
                },
                business_45: {
                    name: 'Baracuda Cafe',
                    description: '<b>Price:</b> $750.00k<br/><b>Perks:</b> <br/><em>Business Bonus</em> x1<br/><em>Boat Garage</em> x1<br/>',
                    coordinates: {
                        x: 2142,
                        y: 6572
                    }
                },
                business_46: {
                    name: 'Pacific Bluffs Country Club',
                    description: '<b>Price:</b> $18.00M<br/><b>Perks:</b> <br/><em>Market</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 2358,
                        y: 7354
                    }
                },
                business_47: {
                    name: 'Del Perro Pier',
                    description: '<b>Price:</b> $350.00M<br/><b>Perks:</b> <br/><em>Boat Garage</em> x1<br/><em>Repair Point</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 3437,
                        y: 8489
                    }
                },
                business_48: {
                    name: 'Vespucci Movie Masks',
                    description: '<b>Price:</b> $150.00k<br/><b>Perks:</b> <br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 3861,
                        y: 8549
                    }
                },
                business_49: {
                    name: 'Mr. Spoke\'s Bike Rental',
                    description: '<b>Price:</b> $250.00k<br/><b>Perks:</b> <br/><em>ATM</em> x1<br/><em>Vehicle Spawner</em> x2<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 4064,
                        y: 8920
                    }
                },
                business_50: {
                    name: 'Horny\'s Burgers',
                    description: '<b>Price:</b> $300.00k<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 6144,
                        y: 7745
                    }
                },
                business_51: {
                    name: 'LT Weld Supply Co',
                    description: '<b>Price:</b> $37.00M<br/><b>Perks:</b> <br/><em>Job Center</em> x1<br/><em>Repair Point</em> x1<br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>Self Storage</em> x1<br/>',
                    coordinates: {
                        x: 5746,
                        y: 8076
                    }
                },
                business_52: {
                    name: 'Playboy Mansion',
                    description: '<b>Price:</b> $550.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>Self Storage</em> x1<br/><em>Spawn Point</em> x1<br/><em>Helicopter Garage</em> x1<br/>',
                    coordinates: {
                        x: 3684,
                        y: 7306
                    }
                },
                business_53: {
                    name: 'Pacific Standard Bank',
                    description: '<b>Price:</b> $500.00M<br/><b>Perks:</b> <br/><em>Bonus Collector</em> x1<br/>',
                    coordinates: {
                        x: 5274,
                        y: 7237
                    }
                },
                business_54: {
                    name: 'Tongva Hills Vineyard',
                    description: '<b>Price:</b> $600.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/><em>Self Storage</em> x1<br/><em>Spawn Point</em> x1<br/><em>Helicopter Garage</em> x1<br/>',
                    coordinates: {
                        x: 3372,
                        y: 5616
                    }
                },
                business_55: {
                    name: 'Banner Hotel & Spa',
                    description: '<b>Price:</b> $4.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Spawn Point</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 4792,
                        y: 8367
                    }
                },
                business_56: {
                    name: 'Maze Bank Arena',
                    description: '<b>Price:</b> $8.00M<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 4817,
                        y: 9183
                    }
                },
                business_57: {
                    name: '4 Integrity Way',
                    description: '<b>Price:</b> $300.00k<br/><b>Perks:</b> <br/><em>Vehicle Garage</em> x1<br/><em>Business Bonus</em> x1<br/>',
                    coordinates: {
                        x: 5043,
                        y: 7961
                    }
                }
            }
        },
        vehicles: {
            layerGroup: 'vehicles',
            overlayMapName: 'Vehicles',
            markers: {
                car_garage_1: {
                    name: 'Mission Row PD Garage',
                    description: '<b>Type:</b> Car Garage<br/><b>Allows spawning of:</b> Bikes, Cars',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 5437,
                        y: 8323
                    }
                },
                car_garage_2: {
                    name: 'SSIA Garage',
                    description: '<b>Type:</b> Car Garage<br/><b>Allows spawning of:</b> Bikes, Cars',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 5606,
                        y: 4205
                    }
                },
                car_garage_3: {
                    name: 'PIA Garage',
                    description: '<b>Type:</b> Car Garage<br/><b>Allows spawning of:</b> Bikes, Cars',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 5987,
                        y: 1609
                    }
                },
                car_garage_4: {
                    name: 'Race Track Garage',
                    description: '<b>Type:</b> Car Garage<br/><b>Allows spawning of:</b> Bikes, Cars',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 8333,
                        y: 2315
                    }
                },
                car_garage_5: {
                    name: 'Hospital Parkway',
                    description: '<b>Type:</b> Car Garage<br/><b>Allows spawning of:</b> Bikes, Cars',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 4578,
                        y: 7710
                    }
                },
                vehicle_garage_1: {
                    name: 'Parking Garage',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Cars, Trailers',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 4743,
                        y: 8118
                    }
                },
                vehicle_garage_2: {
                    name: 'Parking Garage',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Cars, Trailers',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 3968,
                        y: 7744
                    }
                },
                vehicle_garage_3: {
                    name: 'Truck Garage',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Cars, Trailers',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 4912,
                        y: 9556
                    }
                },
                vehicle_garage_4: {
                    name: 'Legion Square Garage',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Cars, Trailers',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 5253,
                        y: 8119
                    }
                },
                vehicle_garage_5: {
                    name: 'Sandy Shores Garage',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Cars, Trailers',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 6557,
                        y: 4237
                    }
                },
                vehicle_garage_6: {
                    name: 'Paleto Garage',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Cars, Trailers',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 4840,
                        y: 1881
                    }
                },
                vehicle_garage_7: {
                    name: 'Palmer-Taylor Garage',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Cars, Trailers',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 7462,
                        y: 6161
                    }
                },
                vehicle_garage_8: {
                    name: 'Mansion 08 Home Garage',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Cars, Trailers',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 4276,
                        y: 7483
                    }
                },
                vehicle_garage_9: {
                    name: 'Business Garage - 4 Integrity Way',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Cars, Trailers',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 5046,
                        y: 7922
                    }
                },
                vehicle_garage_10: {
                    name: 'Business Garage - Maze Bank Arena',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Cars, Trailers',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 4855,
                        y: 9246
                    }
                },
                vehicle_garage_11: {
                    name: 'Business Garage - Banner Hotel & Spa',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Cars, Trailers',
                    icon: 'ic_garage_vehicle',
                    coordinates: {
                        x: 4742,
                        y: 8382
                    }
                },
                aircraft_garage_1: {
                    name: 'LSIA Main Gate',
                    description: '<b>Type:</b> Aircraft Garage<br/><b>Allows spawning of:</b> Bikes, Aircraft, Helicopters, Cars',
                    icon: 'ic_garage_aircraft',
                    coordinates: {
                        x: 4010,
                        y: 9661
                    }
                },
                aircraft_garage_2: {
                    name: 'LSIA Hangar',
                    description: '<b>Type:</b> Aircraft Garage<br/><b>Allows spawning of:</b> Helicopters, Aircraft',
                    icon: 'ic_garage_aircraft',
                    coordinates: {
                        x: 4115,
                        y: 10526
                    }
                },
                aircraft_garage_3: {
                    name: 'Paleto Airport Hangar',
                    description: '<b>Type:</b> Aircraft Garage<br/><b>Allows spawning of:</b> Bikes, Aircraft, Helicopters, Cars',
                    icon: 'ic_garage_aircraft',
                    coordinates: {
                        x: 4825,
                        y: 1600
                    }
                },
                aircraft_garage_4: {
                    name: 'Pacific Ocean Hangar',
                    description: '<b>Type:</b> Aircraft Garage<br/><b>Allows spawning of:</b> Bikes, Aircraft, Helicopters, Cars',
                    icon: 'ic_garage_aircraft',
                    coordinates: {
                        x: 7671,
                        y: 8099
                    }
                },
                aircraft_garage_5: {
                    name: 'McKenzie Hangar',
                    description: '<b>Type:</b> Aircraft Garage<br/><b>Allows spawning of:</b> Bikes, Aircraft, Helicopters, Cars',
                    icon: 'ic_garage_aircraft',
                    coordinates: {
                        x: 6934,
                        y: 3173
                    }
                },
                aircraft_garage_6: {
                    name: 'Zancudo Hangar',
                    description: '<b>Type:</b> Aircraft Garage<br/><b>Allows spawning of:</b> Bikes, Aircraft, Helicopters, Cars',
                    icon: 'ic_garage_aircraft',
                    coordinates: {
                        x: 3189,
                        y: 4782
                    }
                },
                aircraft_garage_7: {
                    name: 'SSIA Hangar',
                    description: '<b>Type:</b> Aircraft Garage<br/><b>Allows spawning of:</b> Bikes, Aircraft, Helicopters, Cars',
                    icon: 'ic_garage_aircraft',
                    coordinates: {
                        x: 5997,
                        y: 4052
                    }
                },
                aircraft_garage_8: {
                    name: 'PIA Hangar',
                    description: '<b>Type:</b> Vehicle Garage<br/><b>Allows spawning of:</b> Bikes, Aircraft, Helicopters, Cars',
                    icon: 'ic_garage_aircraft',
                    coordinates: {
                        x: 6080,
                        y: 1477
                    }
                },
                watercraft_garage_1: {
                    name: 'Paleto Bay Marina',
                    description: '<b>Type:</b> Watercraft Garage<br/><b>Allows spawning of:</b> Boats',
                    icon: 'ic_garage_watercraft',
                    coordinates: {
                        x: 4801,
                        y: 1554
                    }
                },
                watercraft_garage_2: {
                    name: 'El Gordo Lighthouse',
                    description: '<b>Type:</b> Watercraft Garage<br/><b>Allows spawning of:</b> Boats',
                    icon: 'ic_garage_watercraft',
                    coordinates: {
                        x: 8029,
                        y: 2836
                    }
                },
                watercraft_garage_3: {
                    name: 'LS Marina',
                    description: '<b>Type:</b> Watercraft Garage<br/><b>Allows spawning of:</b> Boatsp',
                    icon: 'ic_garage_watercraft',
                    coordinates: {
                        x: 4343,
                        y: 8709
                    }
                },
                watercraft_garage_4: {
                    name: 'Sandy Shores Marina',
                    description: '<b>Type:</b> Watercraft Garage<br/><b>Allows spawning of:</b> Boats',
                    icon: 'ic_garage_watercraft',
                    coordinates: {
                        x: 6451,
                        y: 3971
                    }
                },
                aircraft_dealership_1: {
                    name: 'Aircraft Shop',
                    description: '<b>Buy:</b><br/> Passenger Planes<br/>Cargo Planes<br/>Helicopters<br/>Company Aircrafts<br/>Leisure Planes<br/>Leisure Helicopters',
                    icon: 'ic_dealership_aircraft',
                    coordinates: {
                        x: 3931,
                        y: 9468
                    }
                },
                vehicle_dealership_1: {
                    name: 'Premium Deluxe Motorsport - Car Dealership',
                    description: '<b>Buy:</b><br/> Job Vehicles<br/>Vehicles<br/>Motorcycles<br/>Trailers',
                    icon: 'ic_dealership_vehicle',
                    coordinates: {
                        x: 5010,
                        y: 8393
                    }
                },
                vehicle_dealership_2: {
                    name: 'Sandy Shores Car Dealership',
                    description: '<b>Buy:</b><br/>Job Vehicles<br/> Vehicles<br/>Motorcycles<br/>Trailers',
                    icon: 'ic_dealership_vehicle',
                    coordinates: {
                        x: 6241,
                        y: 4233
                    }
                },
                vehicle_dealership_3: {
                    name: 'Willie\'s Pharmacy Supermarket - Car Dealership',
                    description: '<b>Buy:</b><br/> Job Vehicles<br/>Vehicles<br/>Motorcycles<br/>Trailers',
                    icon: 'ic_dealership_vehicle',
                    coordinates: {
                        x: 4990,
                        y: 1648
                    }
                },
                watercraft_dealership_1: {
                    name: 'LSMYC - Watercraft Dealership',
                    description: '<b>Buy:</b><br/> Boats<br/>Jetskis',
                    icon: 'ic_dealership_watercraft',
                    coordinates: {
                        x: 4414,
                        y: 8570
                    }
                }
            }
        },
        mechanic: {
            layerGroup: 'lg_mechanic',
            overlayMapName: 'Mechanic',
            icon: 'ic_mechanic',
            markers: {
                mechanic_1: {
                    name: 'Zancudo Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 3323,
                        y: 4806
                    }
                },
                mechanic_2: {
                    name: 'PIA Airport Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 6133,
                        y: 1431
                    }
                },
                mechanic_3: {
                    name: 'Paleto Forest Sawmill Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 4514,
                        y: 2736
                    }
                },
                mechanic_4: {
                    name: 'Pacific Ocean Airport Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 7649,
                        y: 7978
                    }
                },
                mechanic_5: {
                    name: 'Scrap Yard Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 4664,
                        y: 8917
                    }
                },
                mechanic_6: {
                    name: 'PIGS HQ Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 5913,
                        y: 7536
                    }
                },
                mechanic_7: {
                    name: '24/7 Gas Station Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 7417,
                        y: 4532
                    }
                },
                mechanic_8: {
                    name: 'Ltd Gas Station Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 6545,
                        y: 3050
                    }
                },
                mechanic_9: {
                    name: 'Race Track Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 8259,
                        y: 2345
                    }
                },
                mechanic_10: {
                    name: 'Glass Heroes Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 4867,
                        y: 8646
                    }
                },
                mechanic_11: {
                    name: 'Xero Gas Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 3186,
                        y: 7684
                    }
                },
                mechanic_12: {
                    name: '24/7 Gas Station Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 2790,
                        y: 5366
                    }
                },
                mechanic_13: {
                    name: 'Race Track Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 8186,
                        y: 2474
                    }
                },
                mechanic_14: {
                    name: 'Paleto Bay Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 5194,
                        y: 1606
                    }
                },
                mechanic_15: {
                    name: '24/7 Gas Station Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 7313,
                        y: 7085
                    }
                },
                mechanic_16: {
                    name: 'Pillbox Hill Medical Center Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 5371,
                        y: 7913
                    }
                },
                mechanic_17: {
                    name: 'L.S.I.A Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 3849,
                        y: 9806
                    }
                },
                mechanic_18: {
                    name: 'SSIA Airport Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 5467,
                        y: 4205
                    }
                },
                mechanic_19: {
                    name: 'Sandy Shores Airfield Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 6620,
                        y: 4470
                    }
                },
                mechanic_20: {
                    name: 'Palmer Taylor Mechanic',
                    description: 'Fix your vehicle here',
                    coordinates: {
                        x: 7416,
                        y: 6199
                    }
                }
            }
        },
        other: {
            layerGroup: 'lg_other',
            overlayMapName: 'Other',
            markers: {
                grandExchange: {
                    name: 'Grand Exchange',
                    description: 'Trade your vouchers for experience/money.',
                    coordinates: {
                        x: 4525,
                        y: 7497
                    },
                    icon: 'ic_grand_exchange'
                }
            }
        }
    };
}