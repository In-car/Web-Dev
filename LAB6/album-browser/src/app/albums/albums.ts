import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
