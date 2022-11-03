import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  albumDetails(){this.router.navigate(['./album'])}
  createAlbum(){this.router.navigate(['./create'])}
  myAlbums(){this.router.navigate(['./albums'])}
  photoDetails(){this.router.navigate(['./photo'])}
  uploadPicture(){this.router.navigate(['./upload'])}
  profile(){
    this.router.navigate(['./profile'])
  }
  logOut(){this.router.navigate([''])}

}
