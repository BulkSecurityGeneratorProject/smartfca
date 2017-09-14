import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { TicketStatusComponent } from './ticket-status.component';
import { TicketStatusDetailComponent } from './ticket-status-detail.component';
import { TicketStatusPopupComponent } from './ticket-status-dialog.component';
import { TicketStatusDeletePopupComponent } from './ticket-status-delete-dialog.component';

import { Principal } from '../../shared';

export const ticketStatusRoute: Routes = [
    {
        path: 'ticket-status',
        component: TicketStatusComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TicketStatuses'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'ticket-status/:id',
        component: TicketStatusDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TicketStatuses'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const ticketStatusPopupRoute: Routes = [
    {
        path: 'ticket-status-new',
        component: TicketStatusPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TicketStatuses'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'ticket-status/:id/edit',
        component: TicketStatusPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TicketStatuses'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'ticket-status/:id/delete',
        component: TicketStatusDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TicketStatuses'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
