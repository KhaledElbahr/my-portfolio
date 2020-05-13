import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, share } from 'rxjs/operators';
import { ThemeService } from 'src/app/core/theme.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isResize: boolean;
  isClicked = false;
  isDarkTheme: Observable<boolean>;
  activeFragment = this.route.fragment.pipe(share());
  @Input() sidebar: boolean;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  @HostListener('document:scroll')
  scrollFunction() {
    (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) ?
      this.isResize = true : this.isResize = false;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(
    [Breakpoints.Handset, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    public route: ActivatedRoute,
    private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  toggleDarkTheme() {
    this.isClicked = !this.isClicked;
    this.themeService.setDarkTheme(this.isClicked);
  }

  goToHome() { document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); }

  goToProjects() { document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }

  goToContacts() { document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' }); }
}
