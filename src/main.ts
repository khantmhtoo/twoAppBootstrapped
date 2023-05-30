import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Mod2Module } from './mod2/mod2.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule).catch((err) => console.error(err));

// platform.bootstrapModule(Mod2Module).catch((err) => console.error(err));
