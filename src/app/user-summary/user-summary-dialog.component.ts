import { Component, Inject, OnInit } from '@angular/core';
import { user } from '../common/objects';
import { defaultUser, eileen } from "../common/users";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary-dialog.component.html',
  styleUrls: ['./user-summary-dialog.component.css']
})
export class UserSummaryDialog implements OnInit {

  currentUser: user = new defaultUser();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data.user === 'eileen') {
      this.currentUser = new eileen();
    }
  }

}
