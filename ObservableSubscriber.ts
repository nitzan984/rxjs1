import './style.css';

import { ajax } from 'rxjs/ajax';
import { Observable, Subscriber } from 'rxjs';

//Cold Observable

ajax('https://random-data-api.com/api/v2/users?size=2&is_xml=true').subscribe(
  (data) => {
    console.log(data.response[0].first_name);
  }
);

ajax('https://random-data-api.com/api/v2/users?size=2&is_xml=true').subscribe(
  (data) => {
    console.log(data.response[0].first_name);
  }
);

//Hot Observable

const button = document.querySelector('button');
const obsClick$ = new Observable<MouseEvent>((subscriber) => {
  button.addEventListener('click', (event) => {
    subscriber.next(event);
  });
});

obsClick$.subscribe((event) => console.log(event.type, event.x, event.y));
obsClick$.subscribe((event) => console.log(event.type, event.x, event.y));