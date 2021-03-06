import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from "@swimlane/ngx-datatable/release";
import {
	MdMenuModule,
	MdButtonModule,
	MdCardModule,
	MdTabsModule,
	MdIconModule,
	MdCheckboxModule
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		ChartsModule,
		NgxDatatableModule,
		MdButtonModule,
		MdMenuModule,
		MdCardModule,
		MdTabsModule,
		MdIconModule,
		MdCheckboxModule
	],
	declarations: [
		NavbarComponent,
		FooterComponent
	],
	exports: [
		NavbarComponent,
		FooterComponent,
		FlexLayoutModule,
		ChartsModule,
		NgxDatatableModule,
		MdButtonModule,
		MdMenuModule,
		MdCardModule,
		MdTabsModule,
		MdIconModule,
		MdCheckboxModule
	]
})
export class SharedModule { }
