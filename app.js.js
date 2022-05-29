

// build the nav
    var ul = document.getElementById("navbar__list");
    var li = document.createElement("li");
    var anc = document.createElement("a");
    anc.setAttribute("href","#section1");
    anc.appendChild(document.createTextNode("Section 1"));
    li.appendChild(anc);
    ul.appendChild(li);
   
    var li = document.createElement("li");
    var anc = document.createElement("a");
    anc.setAttribute("href","#section2");
    li.appendChild(anc);
    anc.appendChild(document.createTextNode("Section 2"));
    ul.appendChild(li);

    var li = document.createElement("li");
    var anc = document.createElement("a");
    anc.setAttribute("href","#section3");
    li.appendChild(anc);
    anc.appendChild(document.createTextNode("Section 3"));
    ul.appendChild(li);

    var li = document.createElement("li");
    var anc = document.createElement("a");
    anc.setAttribute("href","#section4");
    li.appendChild(anc);
    anc.appendChild(document.createTextNode("Section 4"));
    ul.appendChild(li);

    var li = document.createElement("li");
    var anc = document.createElement("a");
    anc.setAttribute("href","#section5");
    li.appendChild(anc);
    anc.appendChild(document.createTextNode("Section 5"));
    ul.appendChild(li);





