import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';

import { ToolbarModule } from 'primeng/toolbar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { SearchComponent } from './search.component';
import { ResultScrollerComponent } from './resultScroller/resultScroller.component';
import { ResultPanelComponent } from './resultPanel/resultPanel.component';
import { ResultViewComponent } from './resultView/resultView.component';
import { TransformPipe } from 'src/common/pipes/transform.pipe';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    DropdownModule,
    ToolbarModule,
    AutoCompleteModule,
    FormsModule,
    CardModule,
    TableModule,
    TreeTableModule,
    ButtonModule
  ],
  declarations: [
    SearchComponent,
    ResultViewComponent,
    ResultScrollerComponent,
    ResultPanelComponent,
    TransformPipe
  ],
  exports: [
    SearchComponent,
    ResultViewComponent,
    ResultScrollerComponent,
    ResultPanelComponent,
  ]
})
export class SearchModule { }
