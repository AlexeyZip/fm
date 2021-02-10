import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Music } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  // music: Music

  constructor(private http: HttpClient) { }

  getRock(): Observable<Music[]> {
    return this.http.get<Music[]>('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json')
    .pipe(
      map((data: any) => {
        return data.albums.album;
      })
    );
  }
  getElectro(): Observable<Music[]> {
    return this.http.get<Music[]>('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=electro&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json')
    .pipe(
      map((data: any) => {
        return data.albums.album;
      })
    );
  }
  getRb(): Observable<Music[]> {
    return this.http.get<Music[]>('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rb&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json')
    .pipe(
      map((data: any) => {
        return data.albums.album;
      })
    );
  }
  getHipHop(): Observable<Music[]> {
    return this.http.get<Music[]>('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=hip-hop&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json')
    .pipe(
      map((data: any) => {
        return data.albums.album;
      })
    );
  }
  getPop(): Observable<Music[]> {
    return this.http.get<Music[]>('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json')
    .pipe(
      map((data: any) => {
        return data.albums.album;
      })
    );
  }
  getIndie(): Observable<Music[]> {
    return this.http.get<Music[]>('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=indie&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json')
    .pipe(
      map((data: any) => {
        return data.albums.album;
      })
    );
  }
}


