import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";

import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/containers/home.component";

@NgModule({
  imports: [
    PublicRoutingModule,
    SharedModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent
  ],
  exports: [],
  providers: []
})

export class PublicModule {
  constructor(){}
}
