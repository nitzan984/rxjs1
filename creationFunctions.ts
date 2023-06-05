import { of, from, fromEvent, timer, interval } from 'rxjs';
const log = console.log;
log('from');
const someResolvedPromise = new Promise((resolve, reject) => {
  resolve('resolved');
});

const someRejectedPromise = new Promise((resolve, reject) => {
  reject('rejected');
});

const observerableFromResPromise$ = from(someResolvedPromise).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('from completed'),
});

const observerableFromRejPromise$ = from(someRejectedPromise).subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('from completed'),
});

log('fromEvent');
const triggerButton = document.querySelector('button#trigger');
const triggerClick$ = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
  (event) => {
    console.log(event.type, event.x, event.y);
  }
);

setTimeout(() => {
  log('unsubscribe fromEvent');
  triggerClick$.unsubscribe();
}, 5000);

log('timer');
timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('timer completed'),
});

log('interval');
const intervalSubscription = interval(1000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('interval completed'),
});

setTimeout(() => {
  intervalSubscription.unsubscribe();
}, 3000);
