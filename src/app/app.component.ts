import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  NgZone,
  PlatformRef,
} from '@angular/core';
import { Mod2Module } from 'src/mod2/mod2.module';
import { NotiService } from 'src/mod2/services/noti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private readonly notiService: NotiService,
    private cd: ChangeDetectorRef,
    private appRef: ApplicationRef,

    // These two is just use for creating bootstrap application in event based
    private platformRef: PlatformRef,
    private ngZone: NgZone
  ) {}

  onClick() {
    this.ngZone.runOutsideAngular(() => {
      this.platformRef.bootstrapModule(Mod2Module);
    });
  }

  sendNoti() {
    this.notiService.sendNoti();
  }
}
