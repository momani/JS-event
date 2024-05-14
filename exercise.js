// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const firstBtn = document.querySelector('button');
//    - Select the second button by using an "id"
const secondBtn = document.getElementById('2nd');
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
function dir1st(){
    console.dir(firstBtn)
}
firstBtn.addEventListener('click',dir1st);

//    - Output the second button WITHOUT using the variable in which it's stored
function dir2nd(event){
    console.dir(event.target)
}
secondBtn.addEventListener('click',dir2nd);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
const firstP = document.body.children[2].children[1]
const thirdP = document.body.children[2].children[3];
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
function dir1st(){
    thirdP.remove();
}
//    - The second button changes the background color of the first paragraph to blue
function dir2nd(event){
    firstP.style.backgroundColor='blue';
}
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function dir2nd(event){
    firstP.classList.add('bluesh');
}