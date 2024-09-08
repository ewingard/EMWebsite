// document.addEventListener("DOMContentLoaded", function() {
//     const words = [];
//     console.log("Starting script...");
  
//     // CSV file URL
//     const csvUrl = '/interests/media/wordcloud.csv';
//     // Fetch CSV from URL
//     fetch(csvUrl)
//         .then(response => response.text())
//         .then(data => {
//             console.log("CSV data fetched:", data.substring(0, 100)); // Log the first 100 chars of the CSV
//             Papa.parse(data, {
//                 header: true,
//                 delimiter: ';', // Set the delimiter to semicolon cuz of the stupid csv
//                 complete: function(results) {
//                     console.log("Parsed results:", results.data);
//                     results.data.forEach(row => {
//                         if (row.word && row.weight) {
//                             words.push({text: row.word, size: parseInt(row.weight, 10), color: row.color, url: row.url});
//                         }
//                     });
//                     console.log("Words array:", words);
//                     renderWordCloud();
//                 }
//             });
//         })
//         .catch(error => console.error("Error fetching CSV:", error));
  
//     function loadMoreWords() {
//         // logic to load more words if needed
//     }
  
//     document.getElementById('word-cloudtainer').addEventListener('scroll', function() {
//         if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
//             loadMoreWords();
//         }
//     });
  
//     function renderWordCloud() {
//         console.log("Rendering word cloud...");
//         const layout = d3.layout.cloud() // d3 layout SPECIFICALLY defined since it broke before
//             .size([800, 600])
//             .words(words.map(word => ({text: word.text, size: word.size, color: word.color, url: word.url})))
//             .padding(5)
//             .rotate(() => 0) // Force all words to be horizontal
//             .font("Impact")
//             .fontSize(d => d.size)
//             .on("end", draw);
//         layout.start();
//     }
  
//     function draw(words) {
//         console.log("Drawing words:", words);
//         d3.select("#word-cloudtainer").selectAll("*").remove();
  
//         const svg = d3.select("#word-cloudtainer").append("svg")
//             .attr("width", 800) // Matching to layout size.
//             .attr("height", 600);
  
//         const defs = svg.append("defs");
//         const mask = defs.append("mask")
//             .attr("id", "mask");
  
//         mask.append("use")
//             .attr("xlink:href", "#cloud-shape")
//             .attr("fill", "white");
  
//         const g = svg.append("g")
//             .attr("transform", "translate(" + 800 / 2 + "," + 600 / 2 + ")")
//             .attr("mask", "url(#mask)");
  
//         const text = g.selectAll("text")
//             .data(words)
//             .enter().append("text")
//             .style("font-size", d => d.size + "px")
//             .style("font-family", "Impact")
//             .style("fill", d => d.color || d3.schemeCategory10[Math.floor(Math.random() * 10)])
//             .attr("text-anchor", "middle")
//             .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
//             .text(d => d.text);
  
//         text.on("click", function(d) {
//             if (d.url) {
//                 window.open(d.url, "_blank");
//             }
//         });
//     }
//   });
  
//Old draw Function
//   function draw(words) {
//       console.log("Drawing words:", words);
//       d3.select("#word-cloudtainer").selectAll("*").remove();
//       const svg = d3.select("#word-cloudtainer").append("svg")
//           .attr("width", 800) // Matching to layout size.
//           .attr("height", 600)
//           .append("g")
//           .attr("transform", "translate(" + 800 / 2 + "," + 600 / 2 + ")");

//       const text = svg.selectAll("text")
//           .data(words)
//           .enter().append("text")
//           .style("font-size", d => d.size + "px")
//           .style("font-family", "Impact")
//           .style("fill", d => d.color || d3.schemeCategory10[Math.floor(Math.random() * 10)])
//           .attr("text-anchor", "middle")
//           .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
//           .text(d => d.text);

//       text.on("click", function(d) {
//           if (d.url) {
//               window.open(d.url, "_blank");
//           }
//       });
//   }
// });

//Nav Toggle
function myFunction(x) {
    x.classList.toggle("change");
}

document.getElementById('menuToggle').addEventListener('click', function myFunction(x) {
    const textMenu = document.getElementById('textMenu');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    
    if (textMenu.classList.contains('menu-hidden')) {
        textMenu.classList.replace('menu-hidden', 'menu-visible');
      } else {
        textMenu.classList.replace('menu-visible', 'menu-hidden');
      }

    x.setAttribute('aria-expanded', !isExpanded);

});

//Mobile Nav Toggle
function mobileNavToggle() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//End Mobile Nav