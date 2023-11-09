var xml = new XMLHttpRequest(); 
xml.open('GET', 'https://MaksimMuzychenko.github.io/MaksimMuzychenko/Week4/cities1.json'); 
xml.onload = function() { 
console.log(ourRequest.responseText); 
}; 
ourRequest.send(); 