import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sideBarOpen = false;
  darkMode = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe(
      dark => this.darkMode = dark
    );
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
