fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => {
    console.log(data);

    let divDetails = document.getElementById("divDetails");
    let body = "";

    for (let i = 0; i < data.length; i++) {
        body += `
                    <div class="col">
                        <div class="card shadow-sm"> 
                            <img src="${data[i].image}" alt="" class="bd-placeholder-img card-img-top" height="225"
                                preserveAspectRatio="xMidYMid slice" role="img" width="100%">
                                <title>${data.title}</title>
                            <div class="card-body">
                                <p class="card-text">${data.description}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group"> <button type="button"
                                            class="btn btn-sm btn-outline-secondary">View</button> <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Edit</button> </div> <small
                                        class="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `

        divDetails.innerHTML=body;
    }



});