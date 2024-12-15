import {Component, inject, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ClientProject} from '../../model/class/ClientProject';
import {ClientProjectService} from '../../services/client-project.service';
import {APIResponseModel, IClientProject, IEmployee} from '../../model/interface/role';
import {DatePipe} from '@angular/common';
import {ClientService} from '../../services/client.service';
import {Client} from '../../model/class/Client';
@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
  ],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  projectFrom: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(0),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(0),
  })


  clientProjectObj: ClientProject = new ClientProject();
  clientProjectList: ClientProject[] = [];
  employeeList: IEmployee[] = [];
  clientList: Client[] = [];
  clientService: ClientService = inject(ClientService);
  clientProjectService: ClientProjectService = inject(ClientProjectService);

  firstName= signal('Angular 18');
  projectList =  signal<IClientProject[]>([]);

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllClient();
    this.getAllClientProject();
  }
  changeFirstName(){
    this.firstName.set('React Js');
  }

  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    })
  }

  getAllClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

   getAllClientProject(): void {
    this.clientService.getAllClientProject().subscribe((res: APIResponseModel) => {
      this.projectList.set(res.data);
    })
  }


  onEdit(item: ClientProject) {

  }

  onDelete(clientId: number) {

  }

  onSaveProject() {
    const formValue = this.projectFrom.value;
    debugger;
    this.clientService.addClientProjectUpdate(formValue).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert('Project Created Success');
      }else {
        alert(res.message);
      }
    })
  }

  reset() {

  }
}
