import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  itemList: any;

  constructor(private httpClient: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQCSVsZYgfocu-yC7Unt_vfK0g048Rp_5fucRrhkAvMwtxjsSsezQmp5IErOxWYj84HqCIEhxuxrKzGWGqrpE5Wk9Jm6LbaVMeGcbjf1MlWjd8wzi5LpJ_AYfSLG-Ityv2q3WirIn5qx-rNfcnS1nGax4xkRMywoIw"
    });

    return this.httpClient.get(url, { headers });
  }

  getArtists(name: string) {

    this.itemList = this.getQuery(`search?q=${name}&type=artist&limit=5`).pipe(
      map(data => data["artists"].items)
    );

    return this.itemList;
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => data["tracks"])
    );
  }
}
