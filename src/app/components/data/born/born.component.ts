import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-born',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './born.component.html',
  styleUrls: ['./born.component.scss']
})
export class BornComponent implements OnInit {

  idxTolink: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // ใน ngOnInit, ดึงค่า parameter 'id' จาก URL
    this.route.params.subscribe(params => {
      this.idxTolink = params['idx'];
    });
  }
}
