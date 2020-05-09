import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, FormsModule, HomeRoutingModule, TranslateModule.forChild()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
