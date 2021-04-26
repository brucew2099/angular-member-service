import { Component, OnInit } from '@angular/core';
import Member from '../member';
import {MemberService} from '../member.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-member-get',
  templateUrl: './member-get.component.html',
  styleUrls: ['./member-get.component.css']
})
export class MemberGetComponent implements OnInit {

  members:any;

  constructor(private ms:MemberService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.ms.getMembers().subscribe(data => {
      this.members = data;
    });
  }
}
