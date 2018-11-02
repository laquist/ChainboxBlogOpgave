class AdminView {
    getInfo () {
        let info = {};
        let error = false;

        //Validates info
        if (document.querySelector(DOMstrings.admin.title).value
        && document.querySelector(DOMstrings.admin.author).value !== 'Select post author'
        && document.querySelector(DOMstrings.admin.content).value
        && document.querySelector(DOMstrings.admin.image).textContent !== 'No image chosen'
        ) {
            info.title = document.querySelector(DOMstrings.admin.title).value;
            info.author = document.querySelector(DOMstrings.admin.author).value; //Skal få dens options elements ID
            info.content = document.querySelector(DOMstrings.admin.content).value;
            info.image = document.querySelector(DOMstrings.admin.image).textContent; //Validate url?
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

        // const test = authors;
        console.log('authors:');
        console.log(authors)

        console.log(Object.keys(authors));
        //Creates an option element with relavant id and text
        Object.keys(authors).forEach(key => {
            let newOption = document.createElement('option');
            newOption.text = authors[key].name;
            newOption.id = 'userID-' + authors[key].userInfoID;
            authorsElement.add(newOption);
        });
    }
}