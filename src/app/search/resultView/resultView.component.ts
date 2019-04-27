import { Component, OnInit, Input } from '@angular/core';
import { Model } from 'src/common/models/core/model';

@Component({
  selector: 'ghost-resultView',
  templateUrl: './resultView.component.html',
  styleUrls: ['./resultView.component.scss']
})
export class ResultViewComponent implements OnInit {
  @Input() public controller?: string;
  @Input() public models?: Model<any>[];
  @Input() public display?: 'Tiles' | 'Details' | 'Table' = 'Tiles';

  public headers: string[];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.headers = Object.getOwnPropertyNames(this.models[0]);
    });
  }
}
