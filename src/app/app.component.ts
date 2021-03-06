import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(apollo: Apollo) {
    apollo.query({query: gql`{ hi }`}).subscribe( (next) => {
      console.log(next);
    });
  }
}
