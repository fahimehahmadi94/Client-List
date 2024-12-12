import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DesignationComponent} from '../designation/designation.component';
import {RolesComponent} from '../roles/roles.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CommonModule, RolesComponent, DesignationComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponent: string = 'Roles';

  changeTab(tabName: string): void {
    this.currentComponent = tabName;
  }
}
