import { NumberValueAccessor } from "@angular/forms";

export default class Member {
  MemberName:string;
  MemberBio:string;
  MemberAge:number;

  constructor(MemberName:string, MemberBio:string, MemberAge:number) {
      this.MemberName = MemberName;
      this.MemberBio = MemberBio;
      this.MemberAge = MemberAge;
  }
}
