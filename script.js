const karta = document.querySelector('.karta');
let countGroup = 0;
const str = 'также многие известные личности представляют собой не что иное';

const randome = () => {
    const min = 1, max = 99;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const removeStarsGroup = (group) => {
    setTimeout(() => {
        const arr = Array.from(document.querySelectorAll(`.${group}`));
        arr.forEach(item => item.remove());
    }, 7000)
}

const addStars = () => {
    for(let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.className = `star starGroupe-${countGroup}`;
        star.style.top = randome() + '%';
        star.style.left = randome() + '%';
        karta.append(star);
    }
    removeStarsGroup('starGroupe-' + countGroup);
    countGroup = countGroup > 3 ? 0 : countGroup + 1;
} 
addStars();
setInterval(addStars, 2000);

const desc = document.querySelector('.text-desc').querySelector('span');
const timing = 70;

const printDesc = () => {
    desc.textContent = '';
    desc.textContent += str[0];
    const intervalId = setInterval(() => {
        let idx = desc.textContent.length;
        if(idx === str.length) {
            clearInterval(intervalId);
        } else {
            desc.textContent += str[idx];
        }
        
    }, timing)   
}
printDesc();
setInterval(printDesc, str.length * timing + 10000);

const winHieght = window.innerHeight;
const offset = 200;


const paralaxS = () => {
    // section 2
    const section2 = document.querySelector('.section-2');
    const round2 = section2.querySelector('.round');
    const parentTop = section2.offsetTop;
    const startLeft = round2.offsetLeft;
    const startTop = round2.offsetTop;

    // section 3
    const section3 = document.querySelector('.section-3');
    const round3 = section3.querySelector('.round');
    const startLeft3 = round3.offsetLeft;
    const startTop3 = round3.offsetTop;
    const offsetClient3Top = startTop3 + winHieght - offset;
    const offsetClient3Left = startLeft3 + winHieght - offset;

    // появление текста
    const textBox = document.querySelectorAll('.text-box');


    document.addEventListener('scroll', () => {
        // section 2
        const {top, bottom} = section2.getBoundingClientRect();
        if (bottom > offset && top < winHieght - offset) {
            round2.style.top = (startTop + (parentTop - top) / 2) + 'px';
            round2.style.left = (startLeft + (parentTop - top) / 2) + 'px';
        }

        // section 3
        const {top: top3, bottom: bottom3} = section3.getBoundingClientRect();
        if (bottom3 > offset && top3 < winHieght - offset) {
            round3.style.top = (startTop3 - (startTop3 - offsetClient3Top + top3) / 2) + 'px';
            round3.style.left = (startLeft3 + (startLeft3 - offsetClient3Left + top3) / 2) + 'px';
        }   
        
        // появление текста
        textBox.forEach((el, idx )=> {
            const {top, bottom} = el.getBoundingClientRect();
            if (bottom < winHieght - 100){
                switch (idx) {
                    case 0:
                        if(!el.classList.contains('.el-fadein')){
                            el.classList.add('el-fadein')
                        }                        
                        break;
                    case 1:
                        if(!el.classList.contains('.an')){
                            el.classList.add('an');
                            el.querySelector('.text-left').classList.add('an-LeftToRight')
                            el.querySelector('.text-right').classList.add('an-RightToLeft')
                        } 
                        break;
                    case 2:
                        if(!el.classList.contains('.an')){
                            el.classList.add('an');
                            el.querySelector('.text-left').classList.add('an-ZoomIn')
                            el.querySelector('.text-right').classList.add('an-ZoomIn')
                        } 
                        break;
                    case 3:
                        if(!el.classList.contains('.an')){
                            el.classList.add('an');
                            el.querySelector('.box-1').classList.add('an-box-1')
                            el.querySelector('.box-2').classList.add('an-box-2')
                            el.querySelector('.box-3').classList.add('an-box-3')
                            el.querySelector('.text-btn').classList.add('an-box-4')
                            el.querySelector('.block-text').classList.add('an-box-5')
                        } 
                        break;
                    default:
                        break;
                }
            }
        })
    })    
}
paralaxS();
VANTA.NET({
    el: "#section-4",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xEEEEEE,
    backgroundColor: 0x414D5D,
    points: 8.00,
    maxDistance: 16.00
  })

  VANTA.DOTS({
    el: "#section-5",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    color: 0xc0c0c0,
    backgroundColor: 0x161B22,
    scaleMobile: 1.00,
    showLines: false
  })

// const points = [],
//     velocity2 = 2, // velocity squared
//     canvas = document.getElementById('container'),
//     context = canvas.getContext('2d'),
//     radius = 4,
//     boundaryX = 200,
//     boundaryY = 200,
//     numberOfPoints = 30;

// init();

// function init() {
//   // create points
//   for (let i = 0; i < numberOfPoints; i++) {
//     createPoint();
//   }
//   // create connections
//   for (let i = 0, l = points.length; i < l ; i++) {
//     // let point = points[i];
//     if(i === 0) {
//       points[i].buddy = points[points.length - 1];
//     } else {
//       points[i].buddy = points[i - 1];
//     }
//   }
  
//   // animate
//   animate();
// }

// function createPoint() {
//   var point = {}, vx2, vy2;
//   point.x = Math.random() * boundaryX;
//   point.y = Math.random() * boundaryY;
//   // random vx 
//   point.vx = (Math.floor(Math.random()) * 2 - 1) * Math.random();
//   vx2 = Math.pow(point.vx, 2);
//   // vy^2 = velocity^2 - vx^2
//   vy2 = velocity2 - vx2;
//   point.vy = Math.sqrt(vy2) * (Math.random() * 2 - 1);
//   points.push(point);
// }

// function resetVelocity(point, axis, dir) {
//   var vx, vy;
//   if(axis == 'x') {
//     point.vx = dir * Math.random();  
//     vx2 = Math.pow(point.vx, 2);
//   // vy^2 = velocity^2 - vx^2
//   vy2 = velocity2 - vx2;
//   point.vy = Math.sqrt(vy2) * (Math.random() * 2 - 1);
//   } else {
//     point.vy = dir * Math.random();  
//     vy2 = Math.pow(point.vy, 2);
//   // vy^2 = velocity^2 - vx^2
//   vx2 = velocity2 - vy2;
//   point.vx = Math.sqrt(vx2) * (Math.random() * 2 - 1);
//   }
// }

// function drawCircle(x, y) {
//   context.beginPath();
//   context.arc(x, y, radius, 0, 2 * Math.PI, false);
//   context.fillStyle = '#97badc';
//   context.fill();  
// }

// function drawLine(x1, y1, x2, y2) {
//   context.beginPath();
//   context.moveTo(x1, y1);
//   context.lineTo(x2, y2);
//   context.strokeStyle = '#8ab2d8'
//   context.stroke();
// }  

// function draw() {
//   for(let i = 0, l = points.length; i < l; i++) {
//     // circles
//     let point = points[i];
//     point.x += point.vx;
//     point.y += point.vy;
//     drawCircle(point.x, point.y);
//     // lines
//     drawLine(point.x, point.y, point.buddy.x, point.buddy.y);
//     // check for edge
//     if(point.x < 0 + radius) {
//       resetVelocity(point, 'x', 1);
//     } else if(point.x > boundaryX - radius) {
//       resetVelocity(point, 'x', -1);
//     } else if(point.y < 0 + radius) {
//       resetVelocity(point, 'y', 1);
//     } else if(point.y > boundaryY - radius) {
//       resetVelocity(point, 'y', -1);
//     } 
//   }
// }

// function animate() {
//   context.clearRect ( 0 , 0 , 200 , 200 );
//   draw();
//   requestAnimationFrame(animate);
// }