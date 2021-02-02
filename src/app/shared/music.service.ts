import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Music, IMusic } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  // music: Music

  constructor(private http: HttpClient) { }

  getAll(): Observable<IMusic[]> {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=GENRE&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json`)
    .pipe(map((response: {[key: string]: any}) => {
        return Object
        .keys(response)
        .map(key => ({
          ...response[key]
        }))
       }))
       // return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=GENRE&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json`)
    // .pipe(map((response: {[key: string]: any}) => {
    //     return Object
    //     .keys(response)
    //     .map(key => ({
    //         ...response[key],
    //         id: key,
    //         date: new Date(response[key].date),
    //     }))
    // }))
    // .subscribe((data: Music) => (this.music = data))
  }
}


