import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'child',
    template: require('./child.component.html'),
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}