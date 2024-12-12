import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIResponseModel} from '../model/interface/role';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) {
  }

  getAllDesignations(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation');
  }
}
