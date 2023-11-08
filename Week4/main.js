var ourRequest = new XMLHttpRequest(); 
ourRequest.open('GET', 'https://maksimmuzychenko.github.io/Week4/cities1.json'); 
ourRequest.onload = function() { 
console.log(ourRequest.responseText); 
}; 
ourRequest.send(); 