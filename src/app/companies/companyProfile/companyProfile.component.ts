import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SessionService } from 'src/common/services/session.service';
import { Company } from 'src/common/models/company';

@Component({
  selector: 'ghost-companyProfile',
  templateUrl: './companyProfile.component.html',
  styleUrls: ['./companyProfile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  public profile?: Company;

  constructor(private session: SessionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((data: Params) => {
        this.session.getItem<Company>('Companies', x => x.name == data['name'])
          .then((result: Company) => this.profile = result);
      });
  }

}
