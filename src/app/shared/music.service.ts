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

  getAll(): Observable<Music[]> {
    return this.http.get<Music[]>('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json')
    .pipe(
      map((data: any) => {
        // console.log(data);
        let musics = (data.albums.album).map(function(key) {
          console.log(key);
          return `${key.artist.name}, ${key.name}, ${key.Object}`;
          // return data.albums.album.map((item) => `${item.name}  : ${item.artist.name} : ${item.image.text}`)
        }
      );
        // console.log(musics);
        data = musics;
        // console.log(data);
        return data;
        
        
      })
    );
    // return this.http.get('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&api_key=b0414dc9024f62cd2a4524179e9b1b15&format=json')
    // .pipe(map(data => {
    //   console.log(data);
    //   let musicsList = data["album"];
    //   return musicsList.map(function(music:any){
    //     return {name: music.name, img: music.image, artist: music.artist.name};
    //   })
    // }))
 
    // } }
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


