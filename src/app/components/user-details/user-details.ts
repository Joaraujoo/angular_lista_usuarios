import { Component, Input } from "@angular/core";
import { IUser } from "../../interfaces/user/user.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.html',
  standalone: false,
  styleUrls: ['./user-details.scss'],
})

export class UserDetailsComponent {
  @Input({required: true}) user: IUser = {} as IUser
}
