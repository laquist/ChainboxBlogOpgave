class AdminView {
    getInfo () {
        let info = {};
        let error = false;

        if (document.querySelector(DOMstrings.admin.title).value
        && document.querySelector(DOMstrings.admin.author).value !== 'Select post author'
        && document.querySelector(DOMstrings.admin.content).value
        && document.querySelector(DOMstrings.admin.image).textContent !== 'No image chosen'
        ) {
            info.title = document.querySelector(DOMstrings.admin.title).value;
            info.author = document.querySelector(DOMstrings.admin.author).value;
            info.content = document.querySelector(DOMstrings.admin.content).value;
            info.image = document.querySelector(DOMstrings.admin.image).textContent;
        }
        else {
            //ERROR
            error = true;
        }

        if (!error) {
            return info;
        }
    }

    clearFields () {
        document.querySelector(DOMstrings.admin.title).value = '';
        document.querySelector(DOMstrings.admin.defaultAuthor).selected = true;
        document.querySelector(DOMstrings.admin.content).value = '';
        document.querySelector(DOMstrings.admin.image).textContent = 'No image chosen';
    }

    updateAuthors (authors) {
        const authorsElement = document.querySelector(DOMstrings.admin.author);

        //Creates an option element with relavant id and text
        authors.forEach(author => {
            let newOption = document.createElement('option');
            newOption.text = author.name;
            newOption.id = 'userID-' + author.userInfoID;
            authorsElement.add(newOption);
        });
    }
}