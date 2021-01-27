// Get data from html <script> object 'indata' param
var data = JSON.parse(document.currentScript.getAttribute("indata"));

// Make table for each job returned
d3.select('#owen')
    .selectAll('div')
    .data(data).enter()
    .append('div')
    .html(d => 
        `<table>
            <tr>
                <th>Id</th>
                <th>${d['id']}</th>
            </tr>
            <tr>
                <td>Title</td>
                <td>${d['title']}</td>
            </tr>
            <tr>
                <td>Company</td>
                <td>${d['company']}</td>
            </tr>  
        </table>`)
