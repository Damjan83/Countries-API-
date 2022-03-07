const getApi = (parametar1, renderData) => {
    const endpoint = "https://restcountries.com/v3.1/" + parametar1;
    const request = new XMLHttpRequest();

    if(!request) {
        console.log('ne radi');
    }

    request.open("GET", endpoint, true);
    request.onload = function() {
        if(this.status >= 200 && this.status < 400) {
            renderData(JSON.parse(this.response));
        }else {
            console.log("nije ok")
        }
    }
    request.send();
}

export default getApi;