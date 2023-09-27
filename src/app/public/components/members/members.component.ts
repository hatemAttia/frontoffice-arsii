import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {
  members: User[] = [];
  president!: User;
  vicePresidents: User[] = [];
  generalSecretary: User[] = [];
  treasurers: User[] = [];
  projectManager: User[] = [];
  assistantTreasurers: User[] = [];
  deputySecretaryGeneral: User[] = [];
  rdManager: User[] = [];
  logisticsManager: User[] = [];
  trainingManager: User[] = [];
  opportInterManager: User[] = [];
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
    this.memberService.getPresident().subscribe(president => {
      this.president = president;
    });

    this.memberService.getVicePresident().subscribe(vicePresidents => {
      this.vicePresidents = vicePresidents;
    });
    this.memberService.getVicePresident().subscribe(treasurers => {
      this.treasurers = treasurers;
    });
    this.memberService.getVicePresident().subscribe(generalSecretary => {
      this.generalSecretary = generalSecretary;
    });
    this.memberService.getVicePresident().subscribe(projectManager => {
      this.projectManager = projectManager;
    });
    this.memberService.getVicePresident().subscribe(rdManager => {
      this.rdManager = rdManager;
    });
    this.memberService.getVicePresident().subscribe(deputySecretaryGeneral => {
      this.deputySecretaryGeneral = deputySecretaryGeneral;
    });
    this.memberService.getVicePresident().subscribe(trainingManager => {
      this.trainingManager = trainingManager;
    });
    this.memberService.getVicePresident().subscribe(logisticsManager => {
      this.logisticsManager = logisticsManager;
    });
    this.memberService.getVicePresident().subscribe(assistantTreasurers => {
      this.assistantTreasurers = assistantTreasurers;
    });
    this.memberService.getVicePresident().subscribe(opportInterManager => {
      this.opportInterManager = opportInterManager;
    });
  }

}
