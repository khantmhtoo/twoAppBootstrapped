import { Component, OnInit } from '@angular/core';
import { NotiService } from '../services/noti.service';
@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css'],
})
export class ModComponent implements OnInit {
  notiList: any = [];

  constructor(private readonly notiService: NotiService) {}

  ngOnInit() {
    this.notiList = this.notiService.notiMsg$;
  }
}
