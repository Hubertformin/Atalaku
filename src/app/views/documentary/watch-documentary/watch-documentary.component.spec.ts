import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDocumentaryComponent } from './watch-documentary.component';

describe('WatchDocumentaryComponent', () => {
  let component: WatchDocumentaryComponent;
  let fixture: ComponentFixture<WatchDocumentaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchDocumentaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchDocumentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
