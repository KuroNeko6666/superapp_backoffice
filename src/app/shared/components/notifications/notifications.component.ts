import { Component } from '@angular/core';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  constructor(
    public service: NotificationService
  ){}

  deleteNotif(i: number){
    this.service.Delete(i)
  }
}
