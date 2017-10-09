import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { TeamComponent } from './team/team.component';
// import { KittenComponent } from './kitten/kitten.component';
import { D3Component } from '../charts/d3/d3.component';
import { D3BarComponent } from '../charts/d3/d3-bar.component';
import { D3LineComponent } from '../charts/d3/d3-line.component';
import { D3PieComponent } from '../charts/d3/d3-pie.component';
import { D3AreaStackComponent } from '../charts/d3/d3-area-stack.component';
import { D3PolarComponent } from '../charts/d3/d3-polar.component';
import { D3AdvancedPieComponent } from '../charts/d3/d3-advanced-pie.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SolarComponent } from './solar/solar.component';
import { PlayerComponent } from './rooms/player/player.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    NgxChartsModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    TeamComponent,
    // KittenComponent,
    D3Component,
    D3BarComponent,
    D3LineComponent,
    D3PieComponent,
    D3AreaStackComponent,
    D3PolarComponent,
    D3AdvancedPieComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
  ],
})
export class DashboardModule { }
