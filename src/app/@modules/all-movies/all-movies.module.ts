import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AllMoviesRoutingModule } from './all-movies-routing.module';
import { AllMoviesComponent } from './all-movies.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
@NgModule({
  declarations: [AllMoviesComponent],
  imports: [
    CommonModule,
    AllMoviesRoutingModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzSkeletonModule,
    NzGridModule,
    NzPaginationModule,
    NzSpinModule,
    NzImageModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AllMoviesModule {}
