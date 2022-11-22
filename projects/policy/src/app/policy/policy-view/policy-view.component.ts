import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PolicyHttpService} from '../../service/policy.http.service';


@Component({
  selector: 'app-flights-search',
  templateUrl: './policy-view.component.html',
  styleUrls: ['./policy-view.component.css']
})
export class PolicyViewComponent implements OnInit {

  policy: any;
  customerLink: string = '';

  constructor(private policyService: PolicyHttpService,
              private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const policyId = params.id;
      if (policyId) {
        this.policyService.get(policyId).subscribe(policy => {
          this.policy = policy;
          this.customerLink = `/customer/customer-view/${this.policy.customerId}`
        });
      }
    });
  }

  search(): void {
    alert('Not implemented for this demo!');
  }


}
