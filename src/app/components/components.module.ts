import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { UserDetailsComponent } from "./user-details/user-details";
import { FilterComponent } from "./filter/filter";
import { CommonModule } from "@angular/common";
import { UsersListComponents } from "./users-list/users-list";
import { PipesModule } from "../pipes/pipes.module";



@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponents,
  ],
  imports: [
    FormsModule,
    AngularMaterialModule,
    CommonModule,
    PipesModule,
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    CommonModule,
    UsersListComponents,
  ],
})

export class ComponentsModule { }
