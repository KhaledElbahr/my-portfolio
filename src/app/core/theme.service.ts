import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private DARKTHEME: Subject<boolean> = new Subject<boolean>();
  isDarkTheme = this.DARKTHEME.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    console.log(isDarkTheme);
    this.DARKTHEME.next(isDarkTheme);
  }
}
