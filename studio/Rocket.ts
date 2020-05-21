import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let accumulator = 0
        for (let item of items) {
            accumulator += item.massKg;
        }
        return accumulator;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        let test: boolean = this.canAdd(cargo);
        switch (test) {
            case (true):
                this.cargoItems.push(cargo);
                return test;
            case (false):
                return test;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let test: boolean = this.canAdd(astronaut);
        switch (test) {
            case (true):
                this.astronauts.push(astronaut);
                return test;
            case (false):
                return test;
        }
    }
}

