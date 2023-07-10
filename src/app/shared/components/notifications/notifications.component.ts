import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../service/notification.service';
import { NotificationForm } from '../../form/notification.form';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  list: NotificationForm[] = []

  constructor(
    private service: NotificationService
  ){}

  ngOnInit(): void {
    this.service.observer.subscribe(res => this.list = res)
  }

  deleteNotif(id: string){
    this.service.Delete(id)
  }
}
