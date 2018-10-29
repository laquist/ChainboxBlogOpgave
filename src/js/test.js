console.log('test');

(function () {
    let element = document.getElementById('imageInputBtn');
    console.log(element);
    console.log('hej');

    element.addEventListener('click', function () {
        let imgURL = prompt("Please enter the image URL");
        let input;

        if (imgURL) {
            input = imgURL;
            console.log(input);
        } else {
            input = "No image chosen";
            console.log('User cancelled the prompt.')
            console.log(input);
        }

        if (input) {
            let outputElement = document.getElementById('imageInput');
            outputElement.textContent = input;

        }
    })
})();