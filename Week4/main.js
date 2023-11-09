var xml = new XMLHttpRequest(); 
console.log(xml.readyState);
xml.open('GET', 'https://maksimmuzychenko.github.io/Week4/cities1.json'); 
xml.onload = function() { 
console.log(ourRequest.responseText); 
}; 
xml.send(); 