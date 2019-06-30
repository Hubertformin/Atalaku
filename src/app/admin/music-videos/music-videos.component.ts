import {Component, OnInit, ViewChild, OnDestroy, AfterViewInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {MusicModel} from '../../models/Music.model';
import {HttpService} from '../../providers/http.service';
import {faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music-videos',
  templateUrl: './music-videos.component.html',
  styleUrls: ['./music-videos.component.scss']
})
export class MusicVideosComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ts-ignore
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  // @ts-ignore
  dtTrigger: Subject = new Subject();
  // music data
  musicVideoData: MusicModel[];
  // icons
  createIcon = faPencilAlt;
  deleteIcon = faTrashAlt;

  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Music Videos Dashboard - ATALAKU(Admin)');
    // get all music video data
    this.httpService.getAllMusicVideos()
      .subscribe((data: MusicModel[]) => {
        console.log(data);
        this.musicVideoData = data;
        this.renderer();
      }, error => {
        console.error(error);
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
