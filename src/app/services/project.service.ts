import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@app/Model/Project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'https://localhost:7141/Projects';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  addProject(projectDetails: Project): Observable<any> {
    debugger
    const url = `${this.apiUrl}`;
     return this.http.post(url, projectDetails);
   }
   deleteProject(id: Number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
  getTaskByProject(projectId:string):Observable<any>{
    return this.http.get(`https://localhost:7141/projects/getAllTasks${projectId}`);
}
update(project:Project){
  return this.http.put("https://localhost:7141/Tasks/UpdateTask",project);
}
}

