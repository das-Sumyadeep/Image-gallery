import { Component, HostListener, OnInit, inject } from '@angular/core';
import { ImageService } from '../services/image.service';
import { HighlightNumberDirective } from '../highlight-number.directive';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [HighlightNumberDirective, NgFor],
  templateUrl: './image-item.component.html',
  styleUrl: './image-item.component.css'
})
export class ImageItemComponent implements OnInit {

  private imageService = inject(ImageService);
 
  images: any = [];
  isLoading: any;

  ngOnInit(): void {
    this.loadImage();
  }
  
  
  loadImage() {
    this.imageService.getImage().subscribe({
      next: (images: any) => {
        images.forEach((img: any) => {
          this.images.push(img);
        });
        // console.log("Successfully fetched images!");
      },
      error: (error) => {
        console.log("Error in fetching data"); 
      }
    })
  }
  
  onScroll(){
    setTimeout(()=>{
      this.loadImage();
    }, 1000);
  }

}
