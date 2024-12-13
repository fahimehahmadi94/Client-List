import {Component, inject, OnInit} from '@angular/core';
import {Client} from '../../model/class/Client';
import {FormsModule} from '@angular/forms';
import {ClientService} from '../../services/client.service';
import {APIResponseModel} from '../../model/interface/role';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService: ClientService = inject(ClientService)

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(): void {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient() {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert('Client created Success');
        this.loadClient();
      } else {
        alert(res.message);
      }
    })
  }
}
