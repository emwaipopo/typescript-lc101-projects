import { Payload } from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[] ): number{
        //Returns the sum of all items using each item's massKg property
        let sum = 0;
        //console.log(items);
        for(let i = 0; i < items.length; i++){
            sum += items[i].massKg;
        }
        return(sum);
    }
    currentMassKg(): number{
        //Returns the combined mass of this.astronauts and this.cargoItems using this.sumMass
        //console.log(this.astronauts);
        return(this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
    }
    canAdd(item: Payload): boolean{
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return((this.currentMassKg() + item.massKg) <= this.totalCapacityKg)
    }
    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }else{
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }else{
            return false;
        }
    }
 }