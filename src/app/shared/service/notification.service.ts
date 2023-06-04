import { Injectable } from '@angular/core';
import { NotificationForm } from '../form/notification.form';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notifications?: NotificationForm[] = []
  constructor() { }

  public Push(data: NotificationForm){
    this.notifications = [data]
  }

  public Delete(index: number){
    this.notifications?.splice(index, 1)
  }
}
