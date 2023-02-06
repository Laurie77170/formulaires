import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
// instencier la class user : Etape 2, prochaine étape html avec ngModel
  user: User = new User("","","","");

  onSubmit(): void{
    console.log("Formulaire envoyé !");
  }


}
