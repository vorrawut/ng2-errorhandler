import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { GlobalErrorHandler } from './global-errorhandler';
import { SimpleNotificationsModule } from 'angular2-notifications';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './global-errorhandler';

@NgModule({
  imports: [
    CommonModule,
    SimpleNotificationsModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [GlobalErrorHandler]
    };
  }
}




