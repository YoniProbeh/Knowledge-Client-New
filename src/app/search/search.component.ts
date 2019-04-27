import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/common/services/session.service';
import { Model } from 'src/common/models/core/model';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'ghost-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private models?: Model<any>[];

  public controller?: string;
  public inputValue?: string;
  public sortOption?: string;
  public displayOption?: string;
  public menuOptions: { [item: string]: MenuItem[] };
  public suggestions?: string[];
  public displayList?: Model<any>[];

  constructor(private session: SessionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.controller = this.route.parent.routeConfig.path;
    this.session.getItems(this.controller)
      .then(result => this.models = result)
      .then(() => this.displayList = this.models.slice());

    this.menuOptions = {
      'Display': [
        { label: 'Display As:', command: () => this.displayOption = 'Tiles' },
        { label: 'Display As Tiles', command: () => this.displayOption = 'Tiles' },
        { label: 'Display As Details', command: () => this.displayOption = 'Details' },
        { label: 'Display As Table', command: () => this.displayOption = 'Table' },
      ],
      'Sort': [
        { label: 'Sort By:' },
        { label: 'Sort By Name' },
        { label: 'Sort By Date' },
      ]
    };
  }

  public filterResults(event: Event) {
    console.log(event);
    this.displayList = this.inputValue ? this.models.filter(x => x.name.toLocaleLowerCase().includes(this.inputValue.toLocaleLowerCase())).slice() : this.models.slice();
  }
  public filterSuggestions(event: Event) {
    this.suggestions = this.models.map(x => x.name).filter(x => x.toLowerCase().includes((<string>event['query']).toLowerCase()));
  }
  public resetSearch(event: Event) {
    if(!this.inputValue) {
      this.displayList = this.models.slice();
    }
  }

}
