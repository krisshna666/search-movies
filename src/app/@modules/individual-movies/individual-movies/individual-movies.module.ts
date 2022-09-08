import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualMoviesRoutingModule } from './individual-movies-routing.module';
import { IndividualMoviesComponent } from './individual-movies.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
@NgModule({
  declarations: [IndividualMoviesComponent],
  imports: [
    CommonModule,
    IndividualMoviesRoutingModule,
    NzImageModule,
    NzGridModule,
    NzSkeletonModule,
    NzSpinModule,
  ],
})
export class IndividualMoviesModule {}
