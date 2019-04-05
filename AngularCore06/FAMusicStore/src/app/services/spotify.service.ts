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
        "Bearer BQAMGOa34hjRDIriDkF9edorwwFPpaZqJ78qvTm6JDRJnBprtUShSOKlP6ggUiw_V5IPIZvYwDy3YPiyxfg6czsrVHX9nXBalxbkcB8ncSIlpTTzrDhc04SsnH3Bl-250FARs8Em3Q5Rsa9sTt6X9KYZJ95tta1ZWA"
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
