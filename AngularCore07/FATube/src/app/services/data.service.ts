import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class DataService {

  private urlVideos = "https://www.googleapis.com/youtube/v3/search";
  private urlVideoDetail = "https://www.googleapis.com/youtube/v3/videos";
  public videos: any[] = [];
  private keyAPI = "AIzaSyDNLiGBnPHOPGBCfSlewBQMdiUXPZKffhM";

  constructor(private httpClient: HttpClient) {}

  getListVideo(name: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.urlVideos, {params: {
      q: name,
      key: this.keyAPI,
      part: 'snippet',
      maxResults: '20'
    }});
  }

  getVideoDetail(id: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.urlVideoDetail, {params: {
      id: id,
      q: name,
      key: this.keyAPI,
      part: 'snippet,statistics'
    }});
  }
}
