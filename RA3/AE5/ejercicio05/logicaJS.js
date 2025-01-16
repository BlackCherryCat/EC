function recover() {
    const paragraph2ById = document.getElementById('paragraph2');
    console.log(paragraph2ById.innerHTML, "obtenido mediante getElementById");

    const paragraph2ByQuery = document.querySelector('#paragraph2');
    console.log(paragraph2ByQuery.innerHTML, "obtenido mediante querySelector");

    const paragraph2ByTag = document.getElementsByTagName('p')[1];
    console.log(paragraph2ByTag.innerHTML, "obtenido mediante getElementsByTagName");

    const paragraph2ByAllQuery = document.querySelectorAll('p')[1];
    console.log(paragraph2ByAllQuery.innerHTML, "obtenido mediante querySelectorAll");
}

function modifySecondAndThirdParagraphs() {
    document.getElementById('paragraph2').textContent = "Éste es el nuevo contenido del segundo párrafo";
    document.getElementById('paragraph3').innerHTML = "Éste es el nuevo contenido del <strong>tercer párrafo</strong>";
}

function deleteFourthParagraph() {
    const paragraph4 = document.getElementById('paragraph4');
    if (paragraph4) paragraph4.remove();
}

function createParagraphs() {
    let len = document.getElementsByTagName('p').length;

    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Nuevo párrafo creado mediante botón";
    document.getElementsByTagName('p')[len - 1].appendChild(newParagraph);

    const expParagraph = document.createElement('p');
    expParagraph.textContent = "La diferencia entre innerHTML y textContent es innerHTML interpreta HTML mientras textContent trata todo como texto.";
    const lastParagraph = document.getElementsByTagName('p')[len - 1];
    lastParagraph.appendChild(expParagraph);
}

function modifyImage() {
    const image = document.getElementById('mainImage');
    image.src = "https://cdn-icons-png.flaticon.com/512/847/847905.png";
}

function modifyForm() {
    const label = document.querySelector('label[for="fName"]');
    label.textContent = "Año de nacimiento:";
}

function useDocumentWrite() {
    document.write("Esto es lo que pasa por usar el método document.write una vez la página se ha cargado");
}