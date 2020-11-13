import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SwitchComponent } from './switch/switch.component';
import { TpJuvComponent } from './tp-juv/tp-juv.component';
import { FlockageComponent } from './tp-juv/flockage/flockage.component';
import { TotaleComponent } from './tp-juv/totale/totale.component';
import { GaleriesComponent } from './tp-juv/galeries/galeries.component';
import { PlayerListComponent } from './player-manager/player-list/player-list.component';
import { PlayerFormComponent } from './player-manager/player-form/player-form.component';
import { FilterComponent } from './player-manager/filter/filter.component';
import { PlayerModule } from './player-manager/player.module';
import { PlayerService } from './player-manager/player.service';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    SwitchComponent,
    TpJuvComponent,
    FlockageComponent,
    TotaleComponent,
    GaleriesComponent,
    PlayerListComponent,
    PlayerFormComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
	  PlayerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
