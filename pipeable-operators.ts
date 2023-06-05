import './style.css';
import { Observable, filter, fromEvent, tap, of, map } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

interface NewsItem {
  catgory: 'Sports' | 'Bussiness';
  content: string;
}

const newsFeed$ = new Observable<NewsItem>((subscriber) => {
  setTimeout(() => {
    subscriber.next({ catgory: 'Sports', content: 'A' });
  }, 1000);
  setTimeout(() => {
    subscriber.next({ catgory: 'Bussiness', content: 'B' });
  }, 2000);
  setTimeout(() => {
    subscriber.next({ catgory: 'Sports', content: 'C' });
  }, 3000);
  setTimeout(() => {
    subscriber.next({ catgory: 'Bussiness', content: 'D' });
  }, 4000);
  setTimeout(() => {
    subscriber.next({ catgory: 'Sports', content: 'E' });
  }, 5000);
});

console.clear();

const sportsFeed$ = newsFeed$
  .pipe(filter((item) => item.catgory == 'Sports'))
  .subscribe((newItem: NewsItem) => {
    console.log(newItem);
  });

newsFeed$.subscribe((newItem: NewsItem) => {
  console.log(newItem);
});

const text = document.querySelector('input#text');
const obs = fromEvent(text, 'input')
  .pipe(debounceTime(2000))
  .subscribe((event) => console.log(text));

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);
