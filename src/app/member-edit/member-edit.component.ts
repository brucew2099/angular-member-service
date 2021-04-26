import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../member.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  angForm: FormGroup;
  member:any = {};
  constructor(private fb:FormBuilder, private ms:MemberService, private router:Router, private route:ActivatedRoute) {
    this.angForm = this.fb.group({
      MemberName: ['',Validators.required],
      MemberBio: ['',Validators.required],
      MemberAge: ['', [Validators.required, Validators.pattern("[0-9]{1,3}")]],
      MemberId: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ms.editMember(params['id']).subscribe(res => {
        this.member = res;
      })
    })
  }

  updateMember(MemberName:string, MemberBio:string, MemberAge:string, MemberId:string) {
    this.route.params.subscribe(params => {
      this.ms.updateMember(MemberName, MemberBio, MemberAge, MemberId);
      this.router.navigate(['members']);
    })
  }
}
