import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

const appRoute: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    }
];
