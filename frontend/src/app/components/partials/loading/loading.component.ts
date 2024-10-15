import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {
 
  isLoading!: boolean;
  constructor(loadingService: LoadingService) { 
    loadingService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
   
   
  }

  ngOnInit(): void {
  }

}
