function AreaSelection(selection)
{
    document.getElementById("listsection").style.visibility = "hidden";
    document.getElementById("historysection").style.visibility = "hidden";
     document.getElementById("aboutsection").style.visibility = "hidden";

switch (selection)
{
    case "Customer List":
    document.getElementById("listsection").style.visibility = "visible";
    document.getElementById("historysection").style.visibility = "hidden";
    document.getElementById("placeholder").style.visibility = "hidden";
    document.getElementById("aboutsection").style.visibility = "hidden";
      ListCustomers();
    break;
    case "Customer Order History":
    document.getElementById("listsection").style.visibility = "hidden";
    document.getElementById("historysection").style.visibility = "visible";
    document.getElementById("placeholder").style.visibility = "hidden";
    document.getElementById("aboutsection").style.visibility = "hidden";
    break;
    case "About":
    document.getElementById("listsection").style.visibility = "hidden";
    document.getElementById("historysection").style.visibility = "hidden";
    document.getElementById("placeholder").style.visibility = "hidden";
    document.getElementById("aboutsection").style.visibility = "visible";
    break;
    case "None":
    document.getElementById("placeholder").style.visibility = "visible";
    break;
    default:
        alert("Please select a different menu option");
        }
        }
        
        
        
        

function ListCustomers() 
{
    var xmlhttp = new XMLHttpRequest(); 
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers"; 
    xmlhttp.onreadystatechange = function()
    {   
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var output = JSON.parse(xmlhttp.responseText); 
        GenerateOutput(output); 
        }
        }
    xmlhttp.open("GET", url, true); //Sets the options for requesting the service
    xmlhttp.send(); //Calls the service
    
function GenerateOutput(result) //This function receives the data form the service and creates a table to display it
{
    var display = "<table><tr><th>Customer ID</th><th>Company Name</th><th>City</th></tr>"; //Table Headings
    var count = 0; 
    var customerid = ""; 
    var companyname = ""; 
    var city = ""; 
    for(count = 0; count < result.GetAllCustomersResult.length; count ++) //Loop for creating table rows
    { //Anchor link: <a href="javascript:function("parameter");">
        customerid = result.GetAllCustomersResult[count].CustomerID; //Assigns the Store ID to a variable
        companyname = '<a href="javascript:Orders(' + "'" + customerid + "');" + '">';
        companyname += result.GetAllCustomersResult[count].CompanyName;
        companyname += '</a>';
        city = result.GetAllCustomersResult[count].City; //Assigns the Store City to a variable
        display += "<tr><td>" + customerid + "</td><td>" + companyname + "</td><td>" + city + "</td></tr>"; //Creates a table row
        }
        
        display += "</table>"; //Closes the table HTML after table rows are added
        document.getElementById("customerlist").innerHTML = display; //Displays the table in the HTML page
        }
        }
        
        
          function OrderHistory() 
    {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/"; //Service URL
        url += document.getElementById("entercustomerid").value;
        xmlhttp.onreadystatechange = function() {if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var output = JSON.parse(xmlhttp.responseText);
            GenerateOutput(output);
            }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            function GenerateOutput(result) //Function that displays results
            {
                var display = "<p id='historylabel'>Customer Order History for: " + document.getElementById("entercustomerid").value + "</p><table><tr><th>Product Name</th><th>Total Ordered</th></tr>";
                var count = 0;for(count = 0; count < result.length; count ++)
                {
                    display += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
                    }
                    display += "</table>";
                    document.getElementById("orderhistory").innerHTML = display;
                    }
            
                    }
     
       function Orders(customerid) 
    {
        var xmlhttp = new XMLHttpRequest();var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/"; //Service URL
        url += customerid;
         
        xmlhttp.onreadystatechange = function() {if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var output = JSON.parse(xmlhttp.responseText);
            GenerateOutput(output);
            }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            function GenerateOutput(result) //Function that displays results
            {
                var display = "<p id='historylabel'>Customer Order History for: " + customerid + "</p><table><tr><th>Product Name</th><th>Total Ordered</th></tr>";
                var count = 0;for(count = 0; count < result.length; count ++)
                {
                    display += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
                    }
                    display += "</table>";
                    document.getElementById("orderhistory").innerHTML = display;
                    AreaSelection("Customer Order History");
                    }
                    document.getElementById('entercustomerid').value = customerid;
                    }
        
        
        function BackToList()
{
    document.getElementById("listsection").style.visibility = "visible";
    document.getElementById("historysection").style.visibility = "hidden";
     document.getElementById("aboutsection").style.visibility = "hidden";
     document.getElementById("placeholder").style.visibility = "hidden";


        }
        