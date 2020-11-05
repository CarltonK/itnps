import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  userFullName  : string;
  currentLevel  : string;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userFullName   = this.userService.getUserFullName();
    this.currentLevel   = this.userService.getUserAuthLevel();
  }

}
