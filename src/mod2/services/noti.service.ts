import { ChangeDetectorRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'platform',
})
export class NotiService {
  private notiMsg: any = ['Noti One', 'Noti Two'];
  private notiMsgSB$ = new BehaviorSubject(this.notiMsg);
  notiMsg$ = this.notiMsgSB$.asObservable();
  notiSignal = toSignal<any[], any[]>(this.notiMsg$, { initialValue: [] });

  constructor() {}

  sendNoti() {
    this.notiMsg = ['New Msg', ...this.notiMsg];
    this.notiMsgSB$.next(this.notiMsg);
  }

  updateNewNoti() {
    this.notiMsgSB$.next(this.notiMsg);
  }
}
