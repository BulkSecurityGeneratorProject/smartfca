import { BaseEntity } from './../../shared';

export class Employers implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public occupation?: BaseEntity,
        public basicInfos?: BaseEntity[],
    ) {
    }
}
