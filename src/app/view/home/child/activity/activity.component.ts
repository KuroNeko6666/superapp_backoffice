import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EDITOR_CONFIG } from 'src/app/config/editor-config';
import { ActivityForm } from 'src/app/shared/form/activity.form';
import { CreateUserForm } from 'src/app/shared/form/create-user.form';
import { NewsForm } from 'src/app/shared/form/news.form';
import { NotificationForm } from 'src/app/shared/form/notification.form';
import { UpdateUserForm } from 'src/app/shared/form/update-user.form';
import { ActivityModel } from 'src/app/shared/model/activity.model';
import { NewsModel } from 'src/app/shared/model/news.model';
import { PaginateModel } from 'src/app/shared/model/paginate.model';
import { NavigateService } from 'src/app/shared/service/navigate.service';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { ActivityService } from './service/activity.service';
import { ActivityImageModel } from 'src/app/shared/model/activity-image.model';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  public account?: ActivityModel
  public accounts?: PaginateModel<ActivityModel[]>


  public loading: boolean = false
  public loadingPage: boolean = true
  public obsecure: boolean = true
  public mode: number = 0
  public modalDelete: boolean = false
  public images?: any[] = []
  public imageUrl? : ActivityImageModel[] = []
  public config = EDITOR_CONFIG

  private accountSubs?: Subscription
  private accountsSubs?: Subscription
  private searchSubs?: Subscription
  private resetSubs?: Subscription
  private loadingSubs?: Subscription
  private loadingPageSubs?: Subscription

  constructor(
    private fb: FormBuilder,
    private service: ActivityService,
    private notif: NotificationService,
    public nav: NavigateService
  ) { }

  ngOnInit(): void {

    this.accountSubs = this.service.news.subscribe((res) => {
      this.account = res
      // this.activity_name?.setValue(res.activity_name!)
      // this.place?.setValue(res.place!)
      // this.time?.setValue(res.time!)
      // this.imageUrl = res.thumbnail
    })

    this.accountsSubs = this.service.allNews.subscribe((res) => {
      this.accounts = res
    })

    this.loadingSubs = this.service.loading.subscribe((res) => this.loading = res)
    this.resetSubs = this.service.reset.subscribe((_) => this.reset())
    this.loadingPageSubs = this.service.loadingPage.subscribe((res) => this.loadingPage = res)

    this.searchSubs = this.form.get("search")?.valueChanges.subscribe((res) => {
      res != null ? (this.service.search = res) : (this.service.search = "")
      this.service.offset = 0
      this.service.get()
    })

    this.service.get()
  }

  public form = this.fb.group({
    "activity_name": ['', [Validators.required]],
    "time": ['', [Validators.required]],
    "place": ['', [Validators.required]],
    "search": [""],
  })

  get time() {
    return this.form.get("time")
  }

  get activity_name() {
    return this.form.get("activity_name")
  }

  get place() {
    return this.form.get("place")
  }

  get displayImage(){
    console.log("bg-[url('" + this.imageUrl + "')]");

    return "bg-[url('" + this.imageUrl + "')]"
  }

  print(){
    this.nav.NavigateTo('print/activity')
  }


  create() {
    if (this.activity_name?.valid, this.place?.valid, this.time?.valid) {
      var form = new ActivityForm(this.activity_name?.value!, this.place?.value!, this.time?.value!, this.images)
      this.service.create(form)
    } else {
      this.notif.Push(new NotificationForm("action failed to execute", "error"))
      this.markAsTouched()
    }
  }

  update(id: number) {
    if (this.activity_name?.valid, this.place?.valid, this.time?.valid) {
      var form = new ActivityForm(this.activity_name?.value!, this.place?.value!, this.time?.value!, this.images)
      this.service.update(form, id)
    } else {
      this.notif.Push(new NotificationForm("action failed to execute", "error"))
      this.markAsTouched()
    }
  }

  show(user: ActivityModel) {
    this.account = user
    this.activity_name?.setValue(user.activity_name!)
    this.place?.setValue(user.place!)
    this.time?.setValue(user.time!)
    user.image?.forEach(val => {
      this.imageUrl?.push(val)
    });
    this.mode = 2
    console.log(user);

    // if (true) {
    //   this.service.find(id)
    // } else {
    //   this.notif.Push(new NotificationForm("action failed to execute", "error"))
    //   this.name?.markAllAsTouched()
    // }
  }

  delete(id: number) {
    if (true) {
      this.service.delete(id)
    } else {
      this.notif.Push(new NotificationForm("action failed to execute", "error"))
    }
  }

  deleteImageDB(id: number, image_id: number, i: number) {
    this.deleteImage(i)
    this.service.deleteImage(id, image_id)
  }

  openModalDelete(user: NewsModel) {
    this.modalDelete = true
    this.account = user
  }

  paginator(increase: boolean) {
    if (increase) {
      this.service.offset += this.service.limit
    } else {
      this.service.offset -= this.service.limit
    }
    this.service.get()
  }

  reset() {
    this.form.reset()
    this.account = undefined
    this.mode = 0
    this.modalDelete = false
    this.images = []
    this.imageUrl = []
  }

  obsecureToggle() {
    this.obsecure = !this.obsecure
  }

  changeMode(num: number) {
    this.mode = num
  }

  markAsTouched() {
    this.activity_name?.markAllAsTouched()
    this.place?.markAllAsTouched()
    this.time?.markAllAsTouched()
  }

  onChange(event: any){
    for (const iterator of event.target.files) {
      let reader = new FileReader()
      reader.onload = () => {
        console.log(reader.result);
        let data = new ActivityImageModel({
          image_url : reader.result as string
        })
        this.imageUrl?.push(data)
      }
      reader.readAsDataURL(iterator)
      this.images?.push(iterator)
    }

  }

  deleteImage(i: number){
    this.imageUrl?.splice(i, 1)
    this.images?.splice(i, 1)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.accountSubs?.unsubscribe()
    this.accountsSubs?.unsubscribe()
    this.searchSubs?.unsubscribe()
    this.loadingSubs?.unsubscribe()
    this.loadingPageSubs?.unsubscribe()

  }
}
