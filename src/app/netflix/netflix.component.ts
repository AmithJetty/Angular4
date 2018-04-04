import {Component} from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'netflix',
  styleUrls: ['netflix.component.css'],
  templateUrl: 'netflix.component.html',
})
export class NetflixComponent {
  displayedColumns = ['position', 'name', 'rating'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  position: number;
  rating: number;
  
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Prison Break', rating: 4.62 },
  {position: 2, name: '3%', rating: 4.0},
  {position: 3, name: '13 Reasons  Why', rating: 4.41},
  {position: 4, name: 'Game Of Thrones', rating: 5.00},
  {position: 5, name: 'Pretty Little Liars', rating: 4.11},
  {position: 6, name: 'The Breaking Bad', rating: 4.91 },
  {position: 7, name: 'Stranger Things', rating: 4.57},
  
];