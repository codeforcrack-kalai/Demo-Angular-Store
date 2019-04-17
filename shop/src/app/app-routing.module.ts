import { NgModule } from '@angular/core';
import { ActivatedRoute,Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { SliderComponent } from './template/slider/slider.component';
import { HomeComponent } from './template/home/home.component';
import { ItemComponent } from './template/item/item.component';
import { LoginComponent } from './template/login/login.component';


const routes: Routes = [

{path: 'accessories/:id',component: AccessoriesComponent},
{path: 'item/:id',component: ItemComponent},
{path: '',component: HomeComponent},
{path: 'login',component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
