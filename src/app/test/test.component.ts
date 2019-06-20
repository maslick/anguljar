import { Component, OnInit } from '@angular/core';
import { runtimeEnvironment } from 'src/environments/runtimeEnvironment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  url = '';

  constructor() { }

  ngOnInit() {
    this.url = runtimeEnvironment.backendUrl;
  }
}
