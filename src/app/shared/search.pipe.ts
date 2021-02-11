import {Pipe, PipeTransform} from '@angular/core'
import { Music } from './interfaces';

@Pipe({
    name: 'searchMusic'
})

export class SearchPipe implements PipeTransform {
    transform(musics: Music[], search = ''): Music[] {
        if(!search.trim()) {
            return musics
        }
        return musics.filter(music => {
            return music.artist.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        })
    }
 }