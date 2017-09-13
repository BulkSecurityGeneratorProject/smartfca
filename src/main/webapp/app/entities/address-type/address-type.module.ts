import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Smartfca001SharedModule } from '../../shared';
import {
    AddressTypeService,
    AddressTypePopupService,
    AddressTypeComponent,
    AddressTypeDetailComponent,
    AddressTypeDialogComponent,
    AddressTypePopupComponent,
    AddressTypeDeletePopupComponent,
    AddressTypeDeleteDialogComponent,
    addressTypeRoute,
    addressTypePopupRoute,
} from './';

const ENTITY_STATES = [
    ...addressTypeRoute,
    ...addressTypePopupRoute,
];

@NgModule({
    imports: [
        Smartfca001SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        AddressTypeComponent,
        AddressTypeDetailComponent,
        AddressTypeDialogComponent,
        AddressTypeDeleteDialogComponent,
        AddressTypePopupComponent,
        AddressTypeDeletePopupComponent,
    ],
    entryComponents: [
        AddressTypeComponent,
        AddressTypeDialogComponent,
        AddressTypePopupComponent,
        AddressTypeDeleteDialogComponent,
        AddressTypeDeletePopupComponent,
    ],
    providers: [
        AddressTypeService,
        AddressTypePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Smartfca001AddressTypeModule {}
