// autoblog.js

document.addEventListener("DOMContentLoaded", function() {
    fetch('artigos.json')
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                // Pegando o primeiro novo artigo
                var novoArtigo = data[0];

                // Selecionando o primeiro blog_box
                var primeiroBlogBox = document.querySelector(".blog_section_2 .blog_box");

                if (primeiroBlogBox) {
                    // Atualizando o conteúdo do primeiro blog_box com os dados do novo artigo
                    var blogImg = primeiroBlogBox.querySelector(".blog_img img");
                    if (blogImg) {
                        blogImg.src = novoArtigo.imagem;
                    }

                    var dateText = primeiroBlogBox.querySelector(".date_text");
                    if (dateText) {
                        dateText.textContent = novoArtigo.data;
                    }

                    var prepText = primeiroBlogBox.querySelector(".prep_text");
                    if (prepText) {
                        prepText.textContent = novoArtigo.titulo;
                    }

                    var loremText = primeiroBlogBox.querySelector(".lorem_text");
                    if (loremText) {
                        loremText.textContent = novoArtigo.descricao;
                    }

                    var readLink = primeiroBlogBox.querySelector(".read_bt a");
                    if (readLink) {
                        readLink.href = novoArtigo.link;
                    }
                }
            }
        })
        .catch(error => console.error('Erro ao buscar os dados dos artigos:', error));
});


