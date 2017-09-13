import { BaseEntity } from './../../shared';

export class Designation implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public contactPersons?: BaseEntity[],
    ) {
    }
}
