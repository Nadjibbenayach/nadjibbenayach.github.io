const form = document.getElementById('addStopForm');
const list = document.getElementById('stopList');
let stops = JSON.parse(localStorage.getItem('stops')) || [];

form.onsubmit = function (e) {
  e.preventDefault();
  const stop = {
    name: document.getElementById('stopName').value,
    lat: parseFloat(document.getElementById('lat').value),
    lon: parseFloat(document.getElementById('lon').value)
  };
  stops.push(stop);
  localStorage.setItem('stops', JSON.stringify(stops));
  render();
  form.reset();
};

function render() {
  list.innerHTML = '';
  stops.forEach((stop, index) => {
    const li = document.createElement('li');
    li.textContent = `${stop.name}: (${stop.lat}, ${stop.lon})`;
    list.appendChild(li);
  });
}

render();