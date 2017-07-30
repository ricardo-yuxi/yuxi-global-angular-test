import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartsModule } from 'ng2-charts';
import {
	MdMenuModule,
	MdButtonModule,
	MdCardModule,
	MdTabsModule
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		ChartsModule,
		MdButtonModule,
		MdMenuModule,
		MdCardModule,
		MdTabsModule
	],
	declarations: [NavbarComponent, FooterComponent],
	exports: [
		NavbarComponent,
		FooterComponent,
		FlexLayoutModule,
		ChartsModule,
		MdButtonModule,
		MdMenuModule,
		MdCardModule,
		MdTabsModule
	]
})
export class SharedModule { }
