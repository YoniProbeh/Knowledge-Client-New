import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'ghost-sideMenu',
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '*', icon: 'pi pi-fw pi-home' },
      { label: 'Companies', routerLink: 'Companies', icon: 'pi pi-fw pi-plus' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' }
    ];
  }

}
