import { BaseEntity } from './../../shared';

export class TicketStatus implements BaseEntity {
    constructor(
        public id?: number,
        public status?: string,
        public tickets?: BaseEntity[],
    ) {
    }
}
