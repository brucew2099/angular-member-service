import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MemberService} from '../member.service';

@Component({
  selector: 'app-member-delete',
  templateUrl: './member-delete.component.html',
  styleUrls: ['./member-delete.component.css']
})
export class MemberDeleteComponent implements OnInit {

  member:any = {};

  constructor(private ms:MemberService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ms.editMember(params['id']).subscribe(res => {
        this.member = res;
      })
    })
  }

  closeDelete() {
    this.router.navigate(['members']);
  }

  cancelDelete() {
    this.router.navigate(['members']);
  }

  continueDelete() {
    this.route.params.subscribe(params => {
      this.ms.deleteMember(params.id);
      this.router.navigate(['members']);
    })
  }

}
