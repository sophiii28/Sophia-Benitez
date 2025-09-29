

function postre(e) {
        e.preventDefault();
        var d = new Date();
        let posts = document.getElementById("posts");
        let nom =document.getElementById("nombre").value;
        let post1 =document.getElementById("post").value;
          posts.innerHTML+= `<p>${d.toLocaleDateString()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} por ${nom}</p>`;
          posts.innerHTML+= `<p>${post1}</p>`;
          posts.innerHTML += "<p><b>" + nom +":</b>"+ post1 + "</p>";

}
