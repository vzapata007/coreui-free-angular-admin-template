import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

// Import sample data
import { BENEFICIARIES_DATA } from './beneficiaries-data'; // Create this file next

@Component({
  selector: 'app-beneficiaries',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss'],
})
export class BeneficiariesComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'enrollmentDate', 'program', 'status'];
  dataSource = new MatTableDataSource(BENEFICIARIES_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  ngAfterViewInit() {
    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) this.dataSource.sort = this.sort;
  }

  getBadgeClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'badge badge-success';
      case 'Inactive':
        return 'badge badge-secondary';
      default:
        return 'badge badge-primary';
    }
  }
}
