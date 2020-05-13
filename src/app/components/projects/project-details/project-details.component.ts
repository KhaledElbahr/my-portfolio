import { ProjectsService } from './../../../core/projects.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Project } from 'api/models/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: Params) => {
        const id = +params.get('id');
        this.projectsService.getProject(id).subscribe(
          (project: Project) => this.project = project
        );
      }
    );

  }

}
