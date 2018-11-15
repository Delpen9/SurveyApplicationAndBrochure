import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {
  public properViewWidth: boolean = true;
  public smallestViewWidth: boolean = false;

  constructor() { }

  ngOnInit() {
    this.innerItemAdjustment();
  }

  @HostListener('window:resize')
  innerItemAdjustment():  void {
    if (window.innerWidth < 768){
      this.properViewWidth = false;
    }
    if (window.innerWidth >= 768){
      this.properViewWidth = true;
    }
    if (window.innerWidth < 400){
      this.smallestViewWidth = true;
    }
    if (window.innerWidth > 400){
      this.smallestViewWidth = false;
    }
  }
}
