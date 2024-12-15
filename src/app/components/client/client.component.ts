import {Component, inject, OnInit} from '@angular/core';
import {Client} from '../../model/class/Client';
import {FormsModule} from '@angular/forms';
import {ClientService} from '../../services/client.service';
import {APIResponseModel} from '../../model/interface/role';
import {AsyncPipe, CommonModule, DatePipe, JsonPipe, UpperCasePipe} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule, UpperCasePipe , DatePipe , JsonPipe, AsyncPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  currentDate: Date = new Date();

  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService: ClientService = inject(ClientService);
  userList$: Observable<any> = new Observable<any>;

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }

  loadClient(): void {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient() {
    this.clientService.addUpdateClient(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert('Client created Success');
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert(res.message);
      }
    })
  }

  onDelete(id: number): void {
    const isDelete = confirm("Are you sure you want to delete this client?");
    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Client Delete Success');
          this.loadClient();
        } else {
          alert(res.message);
        }
      })
    }
  }

  onEdit(data: Client) {
    this.clientObj = data;
  }

  onReset() {

  }
}
