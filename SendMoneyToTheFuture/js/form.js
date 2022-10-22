

$("#getQuoteForm").submit(function(e){
    //prevent Default functionality
    e.preventDefault();
    console.log('submitted form!!')

    let email = $("#gemail").val();
    let date = $("#gname").val();

    $.get("http://localhost:3000/wallet?email="+email+"&date="+date, function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });