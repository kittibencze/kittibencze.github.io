        // API hívás
        fetch('https://www.bme.hu/')
            .then(response => response.json())
            .then(data => {
                // A kapott adatokat megjelenítjük
                const apiDataDiv = document.getElementById('api-data');
                apiDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                console.error('Hiba történt az API hívás során:', error);
            });
