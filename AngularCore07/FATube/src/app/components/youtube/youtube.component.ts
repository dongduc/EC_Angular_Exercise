import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';

@Component({
  selector: "app-youtube",
  templateUrl: "./youtube.component.html",
  styleUrls: ["./youtube.component.css"]
})
export class YoutubeComponent implements OnInit {
  public videos: any[] = [];
  video: any;
  previewStatus: boolean = false;
  url = "https://www.youtube.com/embed/";
  urlPreviewVideo: SafeResourceUrl;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer, private titleService: Title) {}

  ngOnInit() {}

  getYoutube(search: string) {
    this.previewStatus = false;
    this.urlPreviewVideo = null;
    return this.dataService.getListVideo(search).subscribe((data: any) => {
      this.videos = data;
    });
  }

  previewVideo(id: string, titleVideo: string) {
    this.titleService.setTitle(titleVideo);
    this.urlPreviewVideo = "";
    this.previewStatus = true;
    this.urlPreviewVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + id);
    return this.urlPreviewVideo;
    
  }
}
