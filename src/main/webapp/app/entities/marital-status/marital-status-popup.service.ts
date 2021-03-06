import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MaritalStatus } from './marital-status.model';
import { MaritalStatusService } from './marital-status.service';

@Injectable()
export class MaritalStatusPopupService {
    private isOpen = false;
    constructor(
        private modalService: NgbModal,
        private router: Router,
        private maritalStatusService: MaritalStatusService

    ) {}

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.maritalStatusService.find(id).subscribe((maritalStatus) => {
                this.maritalStatusModalRef(component, maritalStatus);
            });
        } else {
            return this.maritalStatusModalRef(component, new MaritalStatus());
        }
    }

    maritalStatusModalRef(component: Component, maritalStatus: MaritalStatus): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.maritalStatus = maritalStatus;
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
