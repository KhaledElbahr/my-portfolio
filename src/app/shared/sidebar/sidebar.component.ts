import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeFragment = this.route.fragment.pipe(share());
  constructor(public route: ActivatedRoute) { }
  goToHome() { document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); }

  goToProjects() { document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }

  goToContacts() { document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' }); }
}
