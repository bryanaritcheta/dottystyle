// $(document).ready(function() {
//     var includes = $('[data-include]')
//     $.each(includes, function() {
//         var file = 'components/' + $(this).data('include') + '.html'
//         $(this).load(file)
//     })
// })

// $(document).ready(function() {
//     $("button").click(function() {
//         $("#div1").load("demo_test.txt");
//     });
// });

// function includeHTML() {
//     var z, i, elmnt, file, xhttp;
//     /* Loop through a collection of all HTML elements: */
//     z = document.getElementsByTagName("*");
//     for (i = 0; i < z.length; i++) {
//         elmnt = z[i];
//         /*search for elements with a certain atrribute:*/
//         file = elmnt.getAttribute("w3-include-html");
//         if (file) {
//             /* Make an HTTP request using the attribute value as the file name: */
//             xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function() {
//                 if (this.readyState == 4) {
//                     if (this.status == 200) { elmnt.innerHTML = this.responseText; }
//                     if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
//                     /* Remove the attribute, and call this function once more: */
//                     elmnt.removeAttribute("w3-include-html");
//                     includeHTML();
//                 }
//             }
//             xhttp.open("GET", file, true);
//             xhttp.send();
//             /* Exit the function: */
//             return;
//         }
//     }
// }

// fetch("./header.html")
//     .then(response => {
//         return response.text()
//     })
//     .then(data => {
//         document.querySelector("header").innerHTML = data;
//     });

// document.write(`
// <header>
//     <h1>
//         Test
//     </h1>
// </header>
// `);

$(document).ready(function() {
    $('#header').load("components/header.html");
    $('#footer').load("footer.html");
});