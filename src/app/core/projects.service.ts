import { Project } from './../../../api/models/project';
import { PROJECTS } from './../../../api/data/projects-mock';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(id: number | string) {
    return this.getProjects().pipe(
      map((projects: Project[]) => projects.find(project => project.id === +id))
    );
  }
}
