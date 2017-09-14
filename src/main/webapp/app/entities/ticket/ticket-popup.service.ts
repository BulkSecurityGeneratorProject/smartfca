import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Ticket } from './ticket.model';
import { TicketService } from './ticket.service';

@Injectable()
export class TicketPopupService {
    private isOpen = false;
    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private ticketService: TicketService

    ) {}

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.ticketService.find(id).subscribe((ticket) => {
                ticket.createdDate = this.datePipe
                    .transform(ticket.createdDate, 'yyyy-MM-ddThh:mm');
                ticket.resolvDate = this.datePipe
                    .transform(ticket.resolvDate, 'yyyy-MM-ddThh:mm');
                this.ticketModalRef(component, ticket);
            });
        } else {
            return this.ticketModalRef(component, new Ticket());
        }
    }

    ticketModalRef(component: Component, ticket: Ticket): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.ticket = ticket;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
