import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {APIResponseModel} from '../model/interface/role';
import {environment} from '../../environments/environment.development';
import {Client} from '../model/class/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientProjectService {

  constructor(protected http: HttpClient) {
  }

  getAllClientProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + 'GetAllClientProjects');
  }
}
