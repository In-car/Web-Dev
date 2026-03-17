import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.loading = false;
    });
  }

  save() {
    this.albumService.updateAlbum(this.album).subscribe(updated => {
      this.album = updated;
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }

  viewPhotos() {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}
