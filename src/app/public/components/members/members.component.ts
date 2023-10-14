import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {
  members_static: User[] = [];
  members: User[] = [];
  president?: User;
  vicePresident: User[] = [];
  generalSecretary: User[] = [];
  treasurers: User[] = [];
  projectManagers: User[] = [];
  assistantTreasurers: User[] = [];
  deputySecretaryGeneral: User[] = [];
  rdManagers: User[] = [];
  logisticsManagers: User[] = [];
  trainingManagers: User[] = [];
  opportInterManagers: User[] = [];
  allMembers: User[] = [];
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
    this.memberService.getAllMembers().subscribe((data: User[]) => {
      console.log(data);
      this.members = data;
      this.president = this.members.find(member => member.post === 'NATIONAL_PRESIDENT');
      // console.log(this.president);
      this.vicePresident = this.members.filter(member => member.post === 'VICE_PRESIDENT');
      this.treasurers = this.members.filter(member => member.post === 'TREASURER');
      this.generalSecretary = this.members.filter(member => member.post === 'GENERAL_SECRETARY');
      // console.log(this.generalSecretary);
      this.projectManagers = this.members.filter(member => member.post === 'PROJECT_MANAGER');
      this.assistantTreasurers = this.members.filter(member => member.post === 'ASSISTANT_TREASURER');
      this.deputySecretaryGeneral = this.members.filter(member => member.post === 'DEPUTY_SECRETARY_GENERAL');
      this.rdManagers = this.members.filter(member => member.post === 'R_D_MANAGER');
      this.logisticsManagers = this.members.filter(member => member.post === 'LOGISTICS_MANAGER');
      this.trainingManagers = this.members.filter(member => member.post === 'TRAINING_MANAGER');
      this.opportInterManagers = this.members.filter(member => member.post === 'OPPORTUNITIES_INTERNSHIPS_MANAGER');
      this.allMembers = [
        ...this.allMembers,
        ...this.vicePresident,
        ...this.treasurers,
        ...this.generalSecretary,
        ...this.projectManagers,
        ...this.assistantTreasurers,
        ...this.deputySecretaryGeneral,
        ...this.rdManagers,
        ...this.logisticsManagers,
        ...this.trainingManagers,
        ...this.opportInterManagers
      ];
      console.log(this.allMembers);
    });
  }

  translatePost(post: string): string {
    switch (post) {
      case 'NATIONAL_PRESIDENT':
        return 'Président National';
      case 'VICE_PRESIDENT':
        return 'Vice-Président';
      case 'TREASURER':
        return 'Trésorier';
      case 'GENERAL_SECRETARY':
        return 'Secrétaire Général';
      case 'PROJECT_MANAGER':
        return 'Responsable des Projets';
      case 'ASSISTANT_TREASURER':
        return 'Trésorier Adjoint';
      case 'DEPUTY_SECRETARY_GENERAL':
        return 'Secrétaire Général Adjoint';
      case 'R_D_MANAGER':
        return 'Responsable R&D';
      case 'LOGISTICS_MANAGER':
        return 'Responsable Logistique';
      case 'TRAINING_MANAGER':
        return 'Responsable de Formation';
      case 'OPPORTUNITIES_INTERNSHIPS_MANAGER':
        return 'Responsable des Opportunités & Stages';
      default:
        return 'Poste Inconnu';
    }
  }

}
