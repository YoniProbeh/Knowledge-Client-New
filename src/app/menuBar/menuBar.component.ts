import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'ghost-menuBar',
  templateUrl: './menuBar.component.html',
  styleUrls: ['./menuBar.component.scss']
})
export class MenuBarComponent implements OnInit {
  public items: MenuItem[];

  ngOnInit() {
      this.items = [{
          label: 'File',
          items: [
              {label: 'New', icon: 'fa fa-plus'},
              {label: 'Open', icon: 'fa fa-download'}
          ]
      },
      {
          label: 'Edit',
          items: [
              {label: 'Undo', icon: 'fa fa-refresh'},
              {label: 'Redo', icon: 'fa fa-repeat'}
          ]
      }];
  }

}