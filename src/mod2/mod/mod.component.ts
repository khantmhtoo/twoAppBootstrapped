import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
  computed,
  signal,
} from '@angular/core';
import { NotiService } from '../services/noti.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css'],
})
export class ModComponent implements OnInit {
  notiList: any;

  constructor(
    private readonly notiService: NotiService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.notiService.notiMsg$.subscribe((data) => {
      this.zone.run(() => {
        this.notiList = data;
      });
    });
  }
}
