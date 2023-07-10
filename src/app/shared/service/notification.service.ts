import { Injectable } from '@angular/core';
import { NotificationForm } from '../form/notification.form';
import { v4 as uuid } from 'uuid';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private subject = new BehaviorSubject<NotificationForm[]>([])
  public observer = this.subject.asObservable()
  // public notifications?: NotificationForm[] = []
  constructor() { }

  public Push(data: NotificationForm){
    data.id = uuid();
    var current = this.subject.getValue();
    current.push(data)
    this.subject.next(current);
    setTimeout(() => this.Delete(data.id ?? ""), 3000)
  }

  public Delete(id: String){
    var current = this.subject.getValue();
    var latest = current.filter(data => data.id != id);
    this.subject.next(latest)
  }
}
