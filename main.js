const product = [
    {
        'H_img': './img/NEWS_HEADER.png',
        'id1': 'Ana səhifə'.toUpperCase(),
        'id2': 'Əlaqə'.toUpperCase(),
        'id3': 'Haqqında'.toUpperCase(),
    }
];

let header = '';

for (x in product) {
    header += `
    <div id="Topbar">
        <div class="Header_logo">
            <img src="${product[x].H_img}">
        </div>


        <nav>
            <ul>
                <li>${product[x].id1}</li>
                <li>${product[x].id2}</li>
                <li>${product[x].id3}</li>
            </ul>
        </nav>
    </div>
    `
}


document.getElementById('Header').innerHTML = header;