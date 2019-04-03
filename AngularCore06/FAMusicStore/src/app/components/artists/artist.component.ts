import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-artista",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"]
})
export class ArtistComponent implements OnInit {
  artists: any[] = [];
  topTracks: any[] = [];

  checkPreview_url: boolean;

  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit() {}

  getArtist(name: string) {
    this.topTracks = [];
    this.artists = [];

    this.spotifyService.getArtists(name).subscribe((data: any) => {
      this.artists = data;
    });
  }

  getTopTracks( id: string ) {
    this.topTracks = [];
    this.spotifyService.getTopTracks( id )
            .subscribe( topTracks => {
              console.log(topTracks);
              this.topTracks = topTracks;
              if (topTracks.preview_url === null) {
                this.checkPreview_url = false;
              } else {
                this.checkPreview_url = true;
              }
            });
  }
}
