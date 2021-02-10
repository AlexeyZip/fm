export interface Music {
    name: string,
    img?: string,
    artist: {
        name: string
    }
    image: [
        
            text?: string,
            size?: string
        
    ]
}

// export class IMusic implements Music {
//     name: string;
//     img: string;
//     artist: {
//         name: string
//     }
//     constructor(postData: any) {
//         this.name = postData.name;
//         this.img = postData.img;
//         this.artist.name = postData.name;
//     }
// }