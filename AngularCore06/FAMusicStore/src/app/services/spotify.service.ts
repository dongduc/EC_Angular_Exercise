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
        "Bearer BQDSi0GScTvaKlrkoK3Q2YHBqm49bF0ZegfPCxDaZIG3ysFvLtpoj25BKyos2YuIlk1DZXZg_VAZGvZpnLdhCiGemmSwuOek0ovngJQtp3lcBzYXEVlwKv-a08Mrgg5zCR-JyZqCMt-CIDb5pR_WVEl8Qc-0zucenQ"
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
