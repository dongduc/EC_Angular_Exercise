import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class DataService {

  private url = "https://www.googleapis.com/youtube/v3/search";
  public videos: any[] = [];
  private keyAPI = "AIzaSyDNLiGBnPHOPGBCfSlewBQMdiUXPZKffhM";

  constructor(private httpClient: HttpClient) {}

  getListVideo(name: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url, {params: {
      q: name,
      key: this.keyAPI,
      part: 'snippet',
      maxResults: '20'
    }});
  }
}
