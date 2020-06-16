import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { SignupPage } from './signup.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
