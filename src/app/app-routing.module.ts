import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{path: 'about', component:AboutComponent},
                        {path: 'skill', component:SkillComponent},
                        {path: 'portfolio', component:PortfolioComponent},
                        {path: 'contact', component:ContactComponent},
                      ];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],

 
})
export class AppRoutingModule { }