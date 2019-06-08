import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  monthlyPlan: boolean;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
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
