import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  getYoutube(search: string) {
    this.previewStatus = false;
    this.urlPreviewVideo = null;
    return this.dataService.getListVideo(search).subscribe((data: any) => {
      this.videos = data;
      console.log(this.videos);
    });
  }

  previewVideo(id: string) {
    this.urlPreviewVideo = "";
    this.previewStatus = true;
    this.urlPreviewVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + id);
    console.log(this.urlPreviewVideo);
    return this.urlPreviewVideo;
    
  }
}
