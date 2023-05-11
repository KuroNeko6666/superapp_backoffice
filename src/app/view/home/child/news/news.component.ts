import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EDITOR_CONFIG } from 'src/app/config/editor-config';
import { CreateUserForm } from 'src/app/shared/form/create-user.form';
import { NewsForm } from 'src/app/shared/form/news.form';
import { NotificationForm } from 'src/app/shared/form/notification.form';
import { UpdateUserForm } from 'src/app/shared/form/update-user.form';
import { NewsModel } from 'src/app/shared/model/news.model';
import { PaginateModel } from 'src/app/shared/model/paginate.model';
import { NavigateService } from 'src/app/shared/service/navigate.service';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { NewsService } from './service/news.service';

import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  public account?: NewsModel
  public accounts?: PaginateModel<NewsModel[]>


  public loading: boolean = true
  public loadingPage: boolean = true
  public obsecure: boolean = true
  public mode: number = 0
  public modalDelete: boolean = false
  public image: any
  public imageUrl? : string
  public config = EDITOR_CONFIG

  private accountSubs?: Subscription
  private accountsSubs?: Subscription
  private searchSubs?: Subscription
  private resetSubs?: Subscription
  private loadingSubs?: Subscription
  private loadingPageSubs?: Subscription

  constructor(
    private fb: FormBuilder,
    private service: NewsService,
    private notif: NotificationService,
    public nav: NavigateService
  ) { }

  print(){
    this.nav.NavigateTo('print/news')
  }

  ngOnInit(): void {

    this.accountSubs = this.service.news.subscribe((res) => {
      this.account = res
      this.title?.setValue(res.title!)
      this.content?.setValue(res.content!)
      this.source?.setValue(res.source!)
      this.imageUrl = res.thumbnail
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
    "title": ['', [Validators.required]],
    "content": ['', [Validators.required]],
    "source": ['', [Validators.required]],
    "search": [""],
  })

  get content() {
    return this.form.get("content")
  }

  get title() {
    return this.form.get("title")
  }

  get source() {
    return this.form.get("source")
  }

  get displayImage(){
    console.log("bg-[url('" + this.imageUrl + "')]");

    return "bg-[url('" + this.imageUrl + "')]"
  }


  create() {
    if (this.title?.valid, this.content?.valid, this.source?.valid) {
      var form = new NewsForm(this.title?.value!, this.content?.value!, this.source?.value!, this.image)
      this.service.create(form)
    } else {
      this.notif.Push(new NotificationForm("action failed to execute", "error"))
      this.markAsTouched()
    }
  }

  update(id: number) {
    if (this.title?.valid, this.content?.valid, this.source?.valid) {
      var form = new NewsForm(this.title?.value!, this.content?.value!, this.source?.value!, this.image)
      this.service.update(form, id)
    } else {
      this.notif.Push(new NotificationForm("action failed to execute", "error"))
      this.markAsTouched()
    }
  }

  show(user: NewsModel) {
    this.account = user
    this.title?.setValue(user.title!)
    this.content?.setValue(user.content!)
    this.source?.setValue(user.source!)
    this.imageUrl = user.thumbnail
    this.mode = 2
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
    this.imageUrl = undefined
  }

  obsecureToggle() {
    this.obsecure = !this.obsecure
  }

  changeMode(num: number) {
    this.mode = num
  }

  markAsTouched() {
    this.title?.markAllAsTouched()
    this.content?.markAllAsTouched()
    this.source?.markAllAsTouched()
  }

  onChange(event: any){
    this.image = event.target.files[0]
    let reader = new FileReader()
    reader.onload = () => {
      this.imageUrl = reader.result as string
    }
    reader.readAsDataURL(event.target.files[0])
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

  removeTags(str: string) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
  }
}
