

$("#getQuoteForm").submit(function(e){
    //prevent Default functionality
    e.preventDefault();
    console.log('submitted form!!')

    let email = $("#gemail").val();
    let date = $("#gname").val();


    //production https://35.175.182.161.nip.io/wallet?email=
    //dev http://localhost:3000/wallet?email=

    $.get("https://35.175.182.161.nip.io/wallet?email="+email+"&date="+date, function(data, status){
      
      //we receive response here
      //alert("Data: " + data + "\nStatus: " + status);
      if(data != 'false'){
        //<a href="https://www.bitcoinqrcodemaker.com" target="_blank"></a>

        let h2 = "<h2>Send your coins here 👇</h2>"
        let QR = '<img src="https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&amp;address='+
                data+'" height="300" width="300" border="0" alt="Bitcoin QR code" title="bitcoin:'+data+'">'
      
    
        $("#rightContainer").html(h2 + QR);
        $("#rightContainer").css("text-align", "center");
      
      }else{
        let h2 = "<h2 style='margin-top:60px;'>Sorry there has been an error with your request 😥</h2>"
        let p = "<br><p style='color:white;'>Reload the page and make sure that you enter a date that is at least 2 days in the future</p>"
        $("#rightContainer").html(h2 + p);
        $("#rightContainer").css("text-align", "center");
      }
    
    });
  });