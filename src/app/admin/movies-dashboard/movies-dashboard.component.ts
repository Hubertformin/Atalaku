import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {HttpService} from '../../providers/http.service';
import {MovieModel} from '../../models/Movie.model';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss']
})
export class MoviesDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ts-ignore
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  // @ts-ignore
  dtTrigger: Subject = new Subject();
  // movie data
  movieData: MovieModel[];

  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Movies Dashboard - ATALAKU(Admin)');
    // get all data
    this.httpService.getAllMovies()
      .subscribe((data: MovieModel[]) => {
        console.log(data);
        this.movieData = data;
        this.renderer();
      });
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
