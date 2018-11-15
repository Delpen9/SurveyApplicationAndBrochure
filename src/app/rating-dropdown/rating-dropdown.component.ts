import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-rating-dropdown',
  templateUrl: './rating-dropdown.component.html',
  styleUrls: ['./rating-dropdown.component.css']
})
export class RatingDropdownComponent implements OnInit {
  public properViewWidth: boolean = true;
  public smallWidth:  boolean = false;
  public smallestWidth:  boolean = false;
  public iphone5Width: boolean = false;
  public ratingBoxOpened:  boolean = false;
  public slideClosing: string = 'in';
  public clickDisabled: boolean = false;
  public showContent: boolean = false;

  constructor() { }

  ngOnInit() {
    this.innerItemAdjustment();
  }

  // Changes the margins of the rating dropdown
  @HostListener('window:resize')
  innerItemAdjustment():  void {
    if (window.innerWidth < 768){
      this.properViewWidth = false;
    }
    if (window.innerWidth >= 768){
      this.properViewWidth = true;
    }
    if (window.innerWidth < 460){
      this.smallWidth = true;
    }
    if (window.innerWidth >= 460){
      this.smallWidth = false;
    }
    if (window.innerWidth < 390){
      this.smallestWidth = true;
    }
    if (window.innerWidth >= 390){
      this.smallestWidth = false;
    }
    if (window.innerWidth < 330){
      this.iphone5Width = true;
    }
    if (window.innerWidth >= 330){
      this.iphone5Width = false;
    }
  }

  openRatingBox(): void {
    this.clickDisabled = true;
    this.ratingBoxOpened = true;
    setTimeout(() => {this.showContent = true; this.clickDisabled = false;}, 1050);
  }

  closeRatingBox(): void {
    this.showContent = false;
    setTimeout(() => {this.clickDisabled = true; this.ratingBoxOpened = false;}, 1)
    setTimeout(() => {this.clickDisabled = false;}, 2000);
  }
}
