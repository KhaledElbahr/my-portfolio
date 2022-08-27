import { Project } from './../../../../api/models/project';
import { ProjectsService } from './../../core/projects.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  panelOpenState = false;
  columnNum: number;
  cols: number;
  constructor(
    private projectService: ProjectsService,
    private breakpointObserver: BreakpointObserver ) {
    this.breakpointObserver.observe(Breakpoints.Large).subscribe((largeMedia: BreakpointState) => {
      if (largeMedia.matches) {
        this.columnNum = 3;
        this.cols = 1;
      }
    });
    this.breakpointObserver.observe(Breakpoints.Medium).subscribe((mdMedia: BreakpointState) => {
      if (mdMedia.matches) {
        this.columnNum = 3;
        this.cols = 1;
      }
    });
    this.breakpointObserver.observe(Breakpoints.Small).subscribe((smMedia: BreakpointState) => {
      if (smMedia.matches) {
        this.columnNum = 2;
        this.cols = 1;
      }
    });
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe((xsMedia: BreakpointState) => {
      if (xsMedia.matches) {
        this.columnNum = 1;
        this.cols = 1;
      }
    });
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      (projects: Project[]) => {
        console.warn(`Getting projects Done!!!`);
        this.projects = projects;
      },
      err => console.log(err)
    );
  }

}
