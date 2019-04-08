import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import {
  DomSanitizer,
  SafeResourceUrl,
  Title
} from "@angular/platform-browser";

@Component({
  selector: "app-youtube",
  templateUrl: "./youtube.component.html",
  styleUrls: ["./youtube.component.css"]
})
export class YoutubeComponent implements OnInit {
  public videos: any[] = [];

  url = "https://www.youtube.com/embed/";
  urlVideoDetail: SafeResourceUrl;

  public titleDetail: string;
  public descriptionDetail: any[] = [];
  public viewCountDetail: string;
  public likeCountDetail: string;
  public dislikeCountDetail: string;
  public favoriteCountDetail: string;
  public commentCountDetail: string;
  public chanelTitileDetail: string;
  public thumbnails: string;

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
    private titleService: Title
  ) {}

  ngOnInit() {}

  getVideos(search: string) {
    this.urlVideoDetail = null;
    return this.dataService.getListVideo(search).subscribe((data: any) => {
      this.videos = data;      
    });
  }

  getVideo(id: string) {
    this.urlVideoDetail = null;

    this.dataService.getVideoDetail(id).subscribe((video: any) => {
      if (video != []) {
        this.titleDetail = video.items[0].snippet.title;
        this.titleService.setTitle(this.titleDetail);
        this.viewCountDetail = video.items[0].statistics.viewCount;
        this.likeCountDetail = video.items[0].statistics.likeCount;
        this.dislikeCountDetail = video.items[0].statistics.dislikeCount;
        this.favoriteCountDetail = video.items[0].statistics.favoriteCount;
        this.commentCountDetail = video.items[0].statistics.commentCount;
        this.chanelTitileDetail = video.items[0].snippet.channelTitle;
        this.thumbnails = video.items[0].snippet.thumbnails.default.url;
        this.formatDescription(video.items[0].snippet.description);
      }
    });

    this.urlVideoDetail = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.url + id + "?autoplay=1"
    );
  }
  
  formatDescription(des: string){
    this.descriptionDetail = des.split('\n', 1000);
    return this.descriptionDetail;
  }
}
