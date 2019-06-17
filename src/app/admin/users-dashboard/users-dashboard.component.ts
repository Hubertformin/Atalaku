import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ts-ignore
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  // @ts-ignore
  dtTrigger: Subject = new Subject();

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Registered users - ATALAKU(Admin)');
    // table options
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  renderer(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // call the dtTrigger to rerender
      this.dtTrigger.next();
    });
  }

}
