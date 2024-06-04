console.log(document)//if you hover the document that select all document page of website. and this show html form

console.dir(document)//all//its show object form.
console.log(typeof document)

//parent element: and children:

//every element is object : rigth click and store in global variable => temp1 >> <ul>...</ul> and typeof temp1

//inline attribute and value in object.

//how to modify:
console.log(document.children)//HTMLCollection[html]//that is not array. not use map, reduce, forEach mathod.

console.log(document.children[0].children[1])
//same like this :
console.log(document.body)

console.log(document.body.children[0])
console.log(typeof document.body.children[0])

//object and key value pair:How to find out
console.dir(document.body.children[0])
//innerHTML and innerText:DOM
//innerHTML and innerText is different 
//innerHTML = 'hello world'; //change the h1 value into hello world.
//we use javascript change the html value.
document.body.children[0].innerHTML = 'hello world'
//right click view page source does not change 'hellow world' because of dom represent the current page situation.

//difference between innerText and innerHTML 
//innerHTML have power the create the new element but innerText have not create the new element. '<u>hello</u>.

//if we console.log the innerHTML and innerText than innerHTML has give us element and value but innerText does not git us html element, that give us only inner value.

//textContent => not include html element but add spacing

// The innerHTML property returns:
// The text content of the element, including all spacing and inner HTML tags.
// The innerText property returns:
// Just the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements.
// The textContent property returns:
// The text content of the element and all descendaces, with spacing and CSS hidden text, but without tags.

//image.src = change the image source

//document => viewport
//window => browser

//select the every element - practices
//store the element into variable.



//##################################################
// DOM
//Selecting Elements in javascript
// document.body.children[3].children[2].children[1]
//const cssImage = document.body.children[3].children[2].chilren[1]
//cssImage.src = url of image.
//above method is so bad method.

//how to use easy method 
//  *getElementsByTagName
//  *getElementsByClassName//in class use elements => plural
//  *getElementById//in Id use element => singular
//  *querySelector('./#/tagName)//like css selector//select first finding element.//HTMLCollection
//  *querySelectorAll //NodeList//we use array method like .map, .forEach, .filter etc.//'[alt = 'JavaScript Image']'//('ul li:nth-child[3]')

//  *attribute selector //like alt, src, etc//


// document.getElementsByTagName('img')[1]//than all images is selected //shown all img tag in an array[img, img, img]
// document.images

//document.getElementsByTagName('p').[5] //[p, p, p, p,..., p]

//practice change the imagae.

// const allImage = document.querySelectorAll('img');
// const imageCollection = [url1, url2, url3]
// console.log(imageCollection[2])

// for(let i = 0; i < allImage.length; i++) {
//     allImage[i].src = imageCollection[i];
// }

// allImage.forEach((image, i) => {
//     image.src = imageCollection[i]
// });

// but we can not apply forEach method in HTMLCollection // if we use HTMLCollection in forEach method, it convets into array using [...HTMLCollecito] than we can use it

//ul.querySelector(./#)
//ul.getElementById('IdName')//not useable .
//ul.querySelectorAll
//ul.getElementByClassName('ClassName')//use and give the answer..


//copy element path
//document.querySelector('body > ul > li:nth-child(3) > ol > li:nth-child(2) > p > i')

//what happen if we have various same tagName elements, than copy path will give us fablous path.










