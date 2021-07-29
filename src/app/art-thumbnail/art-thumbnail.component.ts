import { Component, Inject, Input, OnInit } from '@angular/core';
import { UserSummaryDialog } from "../user-summary/user-summary-dialog.component";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-art-thumbnail',
  templateUrl: './art-thumbnail.component.html',
  styleUrls: ['./art-thumbnail.component.css']
})
export class ArtThumbnailComponent implements OnInit {

  @Input() image: string = '';
  @Input() title: string = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openUserSummary() {
    this.dialog.open(UserSummaryDialog, {
      data: {
        user: 'eileen'
      }
    });

  }
}
