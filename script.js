function currencyConverter() {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var url = `https://api.exchangeratesapi.io/latest?access_key=6091ebfc968675dd091d77deb0c9c0ef&base=${from}&symbols=${from},${to}`;
    var data = fetch(url)
        .then(res => res.json())
        .then(data => {


            var oneunit = (data.rates[to]) / (data.rates[from]);
            var amount = document.getElementById('fromAmount').value;
            document.getElementById('toAmount').value = oneunit * amount;
        })

}