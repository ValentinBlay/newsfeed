/* 
Import
*/
    // Angular
    import { Component, OnInit, Input } from '@angular/core';
//

/* 
Componant configuration
*/
    @Component({
        selector: 'app-item-source',
        templateUrl: './item-source.component.html'
    })
//


/* 
Componant class definition
*/
    export class ItemSourceComponent implements OnInit {

        // Input  data from parent component
        @Input() source: any;

        constructor(){}
        ngOnInit(){};
    };
//