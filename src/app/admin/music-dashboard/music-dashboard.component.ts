import { HttpService } from './../../providers/http.service';
import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {MusicModel} from '../../models/Music.model';
import {faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music-dashboard',
  templateUrl: './music-dashboard.component.html',
  styleUrls: ['./music-dashboard.component.scss']
})
export class MusicDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
   // @ts-ignore
   @ViewChild(DataTableDirective, {static: false})
   dtElement: DataTableDirective;
   dtOptions: DataTables.Settings = {};
   // We use this trigger because fetching the list of persons can be quite long,
   // thus we ensure the data is fetched before rendering
   // @ts-ignore
   dtTrigger: Subject = new Subject();
   // auto detect music meta data
  autoDetectMusicMetaData: boolean;
  // music data
  musicData: MusicModel[];
  // icons
  editIcon = faPencilAlt;
  deleteIcon = faTrashAlt;

  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Music Dashboard - ATALAKU(Admin)');
    this.autoDetectMusicMetaData = false;
    // get data
    this.httpService.getAllMusic()
    .subscribe((data: MusicModel[]) => {
      console.log(data);
      this.musicData = data;
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
