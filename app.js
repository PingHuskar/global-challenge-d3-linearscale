const h1 = document.querySelector("h1");

const start = `12 Jul 2024 16:00:00 UTC`
const end = `5 Aug 2024 16:00:00 UTC`

const target = 10000

const x = d3
.scaleLinear()
.domain([new Date(start), new Date(end)])
.range([0, target]);

setInterval(() => { 
    const now = new Date();
    let estimate = x(now);
    if (estimate < 0) {
        estimate = 0;
    } else if (estimate > target) {
        estimate = target;
    }
    h1.innerText = `${estimate.toFixed(0)} (${((estimate / target) * 100).toFixed(4)}%)`;
}, 2000);
