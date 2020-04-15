"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        //Returns the sum of all items using each item's massKg property
        var sum = 0;
        //console.log(items);
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return (sum);
    };
    Rocket.prototype.currentMassKg = function () {
        //Returns the combined mass of this.astronauts and this.cargoItems using this.sumMass
        //console.log(this.astronauts);
        return (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
    };
    Rocket.prototype.canAdd = function (item) {
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg);
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
