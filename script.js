const scriptURL = 'https://script.google.com/macros/s/AKfycbwA4RD9KAb2J1kdryWJJexy5pFG92j4UKaBzcE57b-O8ersOULr/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for the Details...We will contact you Soon"))
                .catch(error => console.error('Error!', error.message))
            })