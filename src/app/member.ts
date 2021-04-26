import { NumberValueAccessor } from "@angular/forms";

export default class Member {
  MemberId:number
  MemberName:string;
  MemberBio:string;
  MemberAge:number;

  constructor(MemberId:number, MemberName:string, MemberBio:string, MemberAge:number) {
      this.MemberId = MemberId;
      this.MemberName = MemberName;
      this.MemberBio = MemberBio;
      this.MemberAge = MemberAge;
  }
}
