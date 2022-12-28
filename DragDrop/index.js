function sourcedrag(event) {
  event.dataTransfer.setData('sourceDataId', event.target.id);
}
function sourcedrop(event) {
  const id = event.dataTransfer.getData('sourceDataId');
  const el = document.getElementById(id);
  event.target.appendChild(el);
    
}
  
function allowDrop(event) {
  event.preventDefault();
}
  
function destinationdrag(event) {
  event.dataTransfer.setData('destinationDataId', event.target.id);
}

function destinationdrop(event) {
  const id = event.dataTransfer.getData('destinationDataId');
  const el = document.getElementById(id);
  event.target.appendChild(el);
    
}
  
  
  