import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnInit {
  constructor() {}

  @Input()
  collectionSize = 0;
  @Input()
  pageSize = 8;
  @Input()
  currentPage = 1;

  totalPages = 0;

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.collectionSize / this.pageSize);
  }

  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  loadMore() {
    const nextPage = this.currentPage + 1;
    nextPage <= this.totalPages && this.selectPageNumber(nextPage);
  }
}
