import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IUser } from "../../interfaces/user/user.interface";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.html',
  standalone: false,
  styleUrls: ['./users-list.scss'],
})
export class UsersListComponents {

  displayedColumns: string[] = ['name', 'date', 'status'];

  @Input({ required: true }) usersList: IUser[] = []

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>()

  onUserSelected(user: IUser){
    this.userSelectedEmitt.emit(user)
  }
}
