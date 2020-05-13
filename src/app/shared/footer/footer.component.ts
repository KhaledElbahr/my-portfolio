import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  darkMode = false;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe(
      dark => this.darkMode = dark
    );
  }
 }
