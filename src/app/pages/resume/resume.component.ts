import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  contents = [];
  constructor() { }

  ngOnInit() {
    this.contents = [
        new ResumeTopic ('Overview', {type: 0, data: 'Specific Overview Information...'}),
        new ResumeTopic ('Sales Pitch', {type: 0, data: 'Versatile and flexible with expertise in various server languages as well as JavaScript development, application deconstruction, and both designing and improving databases. Easy-going and approachable, builds rapport with colleagues and customers. Analytical thinker and prototype-driven, creates well thought-out strategies and utilizes easy-to-follow coding practices, while breaking problems into smaller components for analysis and implementation.'}),
        new ResumeTopic ('Prior Employment', {type: 1, data: []}),
        new ResumeTopic ('Languages, Frameworks, etc...', {type: 0, data: 'JAVA, Javascript, Typescript, Dart, Python, Angular5, ....'}),
        new ResumeTopic ('Education', {type: 0, data: 'Bar'})
    ];
  }

}

class ResumeTopic {
  header: string;
  //type: 0 => string, 1 => list,
  body: object;
  getId = () : string => '#' + this.header.split(' ').join('-');
  constructor(header: string, content: object) {
    this.header = header;
    this.body = content;
  }
}
