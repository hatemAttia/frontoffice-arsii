import { Component, OnInit } from '@angular/core';
import { Member } from '../../types/member';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {
  members: Member[] = [];
  responsiveOptions;
  constructor(private memberService: MemberService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(): void {
    // this.memberService.getAllMembers().subscribe((data: Member[]) => {
    //   console.log(data);
    //   this.members = data;
    // });
    this.memberService.getMembers().then(members => {
			this.members = members;
		});
  }

}
