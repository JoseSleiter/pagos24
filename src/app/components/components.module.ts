import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './logo/logo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignupFormComponent } from './signup-form/signup-form.component'



@NgModule({
  declarations: [
    LogoComponent,ToolbarComponent,SignupFormComponent
  ],
  // entryComponents: [
    
  // ],
  exports: [
    LogoComponent,ToolbarComponent,SignupFormComponent
  ],
  imports: [
    CommonModule, FormsModule, IonicModule
  ]
})

export class ComponentsModule { }
