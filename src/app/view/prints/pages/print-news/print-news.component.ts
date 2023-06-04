import { Component } from '@angular/core';
import { ActivityModel } from 'src/app/shared/model/activity.model';
import { Location } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DashboardApiService } from 'src/app/core/service/dashboard.service';
import { NewsModel } from 'src/app/shared/model/news.model';

@Component({
  selector: 'app-print-news',
  templateUrl: './print-news.component.html',
  styleUrls: ['./print-news.component.css']
})
export class PrintNewsComponent {
  public data: NewsModel[] = []
  public loadingPage: boolean = true;

  constructor(
    private service: DashboardApiService,
    private location: Location,
  ){}

  ngOnInit(): void{
    this.service.get_news().subscribe({
      next: (value) => {
        console.log(value);

        this.data = value.data!;
        this.loadingPage = false
      },
      error: (value) => {
        this.loadingPage = false
      },
    })
  }

  exportCSV(data: any) {
    const replacer = (key : any, value : any) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    const csv = data.map((row: any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');

    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = 'data-berita.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  exportPDF() {
    const data = document.getElementById('data-table')!;
    const htmlWidth = data?.clientWidth;
    const htmlHeight = data?.clientHeight;

    const topLeftMargin = 15;

    let pdfWidth = htmlWidth + (topLeftMargin * 2);
    let pdfHeight = (pdfWidth * 1.5) + (topLeftMargin * 2);

    const canvasImageWidth = htmlWidth;
    const canvasImageHeight = htmlHeight;

    const totalPDFPages = Math.ceil(htmlHeight / pdfHeight) - 1;


    html2canvas(data, { allowTaint: true }).then(canvas => {

      canvas.getContext('2d');
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);
      pdf.addImage(imgData, 'png', topLeftMargin, topLeftMargin, canvasImageWidth, canvasImageHeight);

      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage([pdfWidth, pdfHeight], 'p');
        pdf.addImage(imgData, 'png', topLeftMargin, - (pdfHeight * i) + (topLeftMargin * 4), canvasImageWidth, canvasImageHeight);
      }

      pdf.save(`data-berita.pdf`);
    });

  }

  back() {
    this.location.back()
  }
}
