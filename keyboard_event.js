// function onKeyPress(event) {
//     console.log('onKeyPress', event.target.value);
//   }
  
//   function handleKeyUp(event) {
//     console.log('handleKeyUp', event.target.value);
//   }
  
  function handleKeyDown(event) {
    let key = event.which
    switch (event.which) {
        case 37:
            console.log('Left arrow pressed!');
            break;
        case 38:
            console.log('Up arrow pressed!');
            break;
        case 39:
            console.log('Right arrow pressed!');
            break;
        case 40:
            console.log('Down arrow pressed!');
            break;
    }
  }
  
//   function onChange(event) {
//     console.log('onChange', event.target.value);
//   }
  
  