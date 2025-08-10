import { Component, EventEmitter, Output } from "@angular/core";
import { IFilterOptions } from "../../interfaces/filter-options.interface";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.html',
  standalone: false,
  styleUrls: ['./filter.scss'],
})
export class FilterComponent {

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>()

  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  }

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },
  ]

  onFilter(){
    this.onFilterEmitt.emit(this.filterOptions)
  }
}
