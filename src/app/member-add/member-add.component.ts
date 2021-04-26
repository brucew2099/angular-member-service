import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MemberService } from '../member.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

  angForm:FormGroup;
  member:any = {};

  constructor(private fb:FormBuilder, private ms:MemberService, private router:Router, private route:ActivatedRoute) {
    this.angForm = this.fb.group({
      MemberName: ['', Validators.required],
      MemberBio: ['', Validators.required],
      MemberAge: ['', [Validators.required, Validators.pattern("[0-9]{1,3}")]],
    })
  }

  ngOnInit(): void {
  }

  addMember(MemberName:string, MemberBio:string, MemberAge:string) {
    this.ms.addMember(MemberName, MemberBio, MemberAge);
    this.router.navigate(['members']);
  }
}
