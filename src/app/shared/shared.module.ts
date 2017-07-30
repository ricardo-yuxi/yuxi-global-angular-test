import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from "@angular/flex-layout";
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
		MdButtonModule,
		MdMenuModule,
		MdCardModule,
		MdTabsModule
	]
})
export class SharedModule { }
