import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private _uri = "https://6085e995d14a870017578766.mockapi.io/api/vi/members"

  constructor(private http:HttpClient) {
  }

  addMember(MemberName:string, MemberBio:string, MemberAge:string) {
    const obj = {
      MemberName,
      MemberBio,
      MemberAge
    }

    console.log(obj);

    this.http.post(`${this._uri}`, obj).subscribe(res => {
      console.log('Member added successfully');
    })
  }

  getMembers() {
    return this.http.get(`${this._uri}`);
  }

  editMember(id:number) {
    return this.http.get(`${this._uri}/${id}`);
  }

  updateMember(MemberName:string, MemberBio:string, MemberAge:string, id:number) {
    const obj = {
      MemberName,
      MemberBio,
      MemberAge
    }
    console.log(obj);
    this.http.put(`${this._uri}/${id}`, obj).subscribe(res => {
      console.log('Update is successful');
    })
  }
}
