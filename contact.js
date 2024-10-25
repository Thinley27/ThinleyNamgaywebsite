function myclick() {
    let myname = document.getElementById("name");
        let myid = document.getElementById("id");
        let mycontact = document.getElementById("contactno");
    
        
        let ming = myname.value;
         let ngeid = myid.value;
         let ngecontact = mycontact.value;
        
        
        if (ming && ngeid && ngecontact) { 
        alert("Thank you for contacting us! We’ve received your message and will respond shortly" );   
        }
        
        else { 
       alert("Please fill above form to let us knw how we can help you!");
        } 
    }