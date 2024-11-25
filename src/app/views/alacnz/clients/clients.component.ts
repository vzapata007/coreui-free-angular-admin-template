import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator'; // Import MatPaginator

// Import the data from the data.ts file
import { CLIENTS_DATA } from './data';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    CommonModule,
  ],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'registered',
    'role',
    'status',
    'actions',
  ];
  dataSource = new MatTableDataSource(CLIENTS_DATA); // Use the imported data

  // Reference to the paginator
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null; // Set initial value to null

  ngAfterViewInit(): void {
    // Ensure paginator is not null before assigning
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  getBadgeClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'badge badge-success';
      case 'Inactive':
        return 'badge badge-secondary';
      case 'Pending':
        return 'badge badge-primary';
      default:
        return 'badge badge-secondary';
    }
  }

  editItem(element: any): void {
    console.log('Edit item:', element);
  }

  deleteItem(element: any): void {
    console.log('Delete item:', element);
  }
}
