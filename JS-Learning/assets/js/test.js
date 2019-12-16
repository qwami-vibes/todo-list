// const correctAnswers = ['A','B','A','A','B'];
// const form = document.querySelector('.form');
// const scorePlace = document.querySelector('.score-text');
// const scroller = document.querySelector('.scroll-top');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     let score = 0;

//     const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

//     userAnswers.forEach((answer, index) => {
//         if(answer === correctAnswers[index]) {
//             score += 20;
//         }
//     });

//     scrollTo(0,0);
//     let output = 0;
//     const timer = setInterval(() => {
//         scorePlace.innerText = `You scored ${output}%`;
//         if(output === score) {
//             clearInterval();
//         } else {
//             output++;
//         }
//     }, 30);
// });

// scroller.addEventListener('click', () => {
//     let y = scrollY;
//     const scrolling = setInterval(() => {
//         scrollTo(0,y);
//         if(y === 0) {
//             clearInterval();
//         } else {
//             y--;
//         }
//     }, 2);
//

// let scores = [20, 29, 10, 12, 50, 33];

// let filteredScrores = scores.filter( score =>score > 20);
// });

// console.log(filteredScrores);

// let users = [
//     {name: 'Kwaame', premium: true},
//     {name: 'Lord', premium: false},
//     {name: 'Clinton', premium: false},
//     {name: 'Commey', premium: true},
//     {name: 'Machele', premium: false}
// ];

// let premUsers = users.filter( user => user.premium === true);

// console.log(premUsers);
// let lists = document.querySelector('ul');

// let services = [
//     {name: 'Cleaning', price: 25},
//     {name: 'Laundry', price: 50},
//     {name: 'Electricals', price: 45},
//     {name: 'Plumbing', price: 40},
//     {name: 'Security', price: 12}
// ];

// let saleServices = services.map( service => {

//     if(service.price > 30){
//         return {name: service.name, price: (service.price * .2)};
//     } else {
//         return service;
//     };
// });

// console.log(services, saleServices);


// let scores = [40, 10, 30, 20,14, 90, 33, 80];

// let results = scores.reduce( (acc, curr) => {
//     if(curr > 30) {
//         acc++
//     }
//     return acc;
// },0);

// console.log(results);
// let scores = [10, 30, 15, 6, 3, 23];
// scores.sort((a,b) => a - b);
// console.log(scores);

// let services = [
//         {name: 'Cleaning', price: 25},
//         {name: 'Laundry', price: 50},
//         {name: 'Electricals', price: 45},
//         {name: 'Plumbing', price: 40},
//         {name: 'Security', price: 12}
// ];
// services.sort((a,b) => {
//    if(a.price > b.price) {
//        return -1;
//    }else if(a.price < b.price) {
//        return 0;
//    } else if(a.price = b.price) {
//        return 1;
//    }
// });
// services.sort((a,b) => a.price - b.price);
// console.log(services);

// let products = [
//     {name: 'Milk', price: 3.5},
//     {name: 'Sugar', price: 3},
//     {name: 'Bread', price: 2.5},
//     {name: 'Cowbell Strawberry', price: 1.2},
//     {name: 'This Way', price: 1.5},
//     {name: 'Gari', price: .5}
// ];

// let filtered = products.filter(product => product.price > 2)
//     .map(product => product.price - 1);
//         // .sort((a,b) => b.price - a.price);
// console.log(filtered);

//Date and Time

// const now = new Date();
// // console.log(now.toLocaleString());

// const prev = new Date('June 7 2019 12:00:59');

// const next = new Date();

// // console.log(prev.getTime(), next.getTime());

// const diff = next.getTime() - prev.getTime(); //micro seconds

// const mins = Math.round((diff / 1000) / 60);
// const hrs = Math.round((mins / 60));
// const upTime = Math.round((hrs  / 24));

// console.log(upTime)


//Async Javascript

//create a request 

// const getTodos = (callback) => {
//     const req = new XMLHttpRequest();

//     req.addEventListener('readystatechange', () => {
//         // console.log(req, req.readyState);
//         if(req.readyState === 4 && req.status === 200) {
//             // console.log(req, req.responseText);
//             callback(undefined, req.responseText);
//         } else if(req.readyState === 4) {
//             // console.log(`Error 404, Page not found, couldn't fetch requested data`);
//             callback(`Error 404, Page not found, couldn't fetch requested data`, undefined);
//         };
//     });
//     req.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     req.send();
// };

// getTodos((err, data) => {
//     console.log('callback fired');
//     if(err) {
//         console.log(err);
//     }else if(data) {
//         const metaData = JSON.parse(data);
//         const filtered = metaData.filter( completed => completed.completed === true);
//         console.log(filtered);
//     }
// });



// const getLocalTodos = (resource) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//             request.addEventListener('readystatechange', () => {
//                 if(request.readyState === 4 && request.status === 200) {
//                     const data = JSON.parse(request.responseText);
//                     resolve(data);
//                 } else if(request.readyState === 4) {
//                     reject(`Couldn't fetch the data requested`);
//                 }
//             });
//         request.open("GET", resource);
//         request.send();
//     });
// };

// getLocalTodos('assets/json/legon.json').then(data => {
//     console.log(`Promise 1 resolved:`, data);
//     return getLocalTodos(('assets/json/tech.json')).then(data =>{
//         console.log(`Promise 2 resolved:`, data);
//         return getLocalTodos('assets/json/gt.json').then(data => {
//             console.log(`Promise 3 resolved:`, data);
//         }).catch(err => {
//             console.log(`Promise 3 rejected:`, err);
//         });
//     }).catch(err => {
//         console.log(`Promise 2 rejected:`, err);
//     });
// }).catch(err => {
//     console.log(`Promise 1 rejected:`, err);
// })


//API fetch 

// fetch('assets/json/legon.json').then(response => {
//     console.log(response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })
// .catch(err => {
//     console.log(err);
// });

// const getTodo = async () => {
//     const response = await fetch('assets/json/legon.json');
//     const data = await response.json();
//     return data;
// };

// getTodo()
//     .then(data=> {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
