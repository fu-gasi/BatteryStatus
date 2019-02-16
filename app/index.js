import { battery } from "power";
import { charger } from "power";
import document from "document";

//Battery Level
let batterylevel_label = document.getElementById("batterylevel_label");
batterylevel_label.text = "Battery Level";
let batterylevel_data = document.getElementById("batterylevel_data");
batterylevel_data.text = (Math.floor(battery.chargeLevel) + "%");

//Battery Status
let chargestatus_label = document.getElementById("chargestatus_label");
chargestatus_label.text = "Charge Status";
let chargestatus_data = document.getElementById("chargestatus_data");
chargestatus_data.text = (charger.connected ? "Charging!" : "Using Battery!");

//Charge Quality
let chargequality_label = document.getElementById("chargequality_label");
chargequality_label.text = "Charge Quality";
if(charger.connected) {
let chargequality_data = document.getElementById("chargequality_data");
chargequality_data.text = ("Charge Quality " + (charger.powerIsGood ? "is" : "not")+ " Good!");
}

function RefreshData() {
//TODO自動で更新するようしたい
} 

//Console Log Data
 console.log(Math.floor(battery.chargeLevel) + "%");
 console.log("The charger " + (charger.connected ? "is" : "is not") + " connected");
  if (charger.connected) {
   console.log("The charger " + (charger.powerIsGood ? "is" : "not")+ " Good!!!!");
  }
