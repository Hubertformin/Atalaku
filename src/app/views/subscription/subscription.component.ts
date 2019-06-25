import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  monthlyPlan: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    // set title
    this.titleService.setTitle('Subscribe -ATALAKU');
    // setting default plan to monthly
    this.monthlyPlan = true;
    // get route plan passed
    this.activatedRoute.paramMap.subscribe((map: any) => {
      this.monthlyPlan = map.params.plan === 'month';
    });
  }

  togglePlan(b: boolean) {
    this.monthlyPlan = b;
  }
}
