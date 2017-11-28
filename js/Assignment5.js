function AreaSelection(selection)
{
    document.getElementById("listsection").style.visibility = "hidden";
    document.getElementById("addcustomersection").style.visibility = "hidden";
    document.getElementById("historysection").style.visibility = "hidden";
    document.getElementById("aboutsection").style.visibility = "hidden";
    document.getElementById("currentorderssection").style.visibility = "hidden";
    document.getElementById("updateorderssection").style.visibility = "hidden";
    document.getElementById("geolocation").style.visibility = "hidden";
    document.getElementById("footer").style.visibility = "visible";

switch (selection)
{
    case "Customer List":
    document.getElementById("listsection").style.visibility = "visible";
    document.getElementById("addcustomersection").style.visibility = "hidden";
    document.getElementById("historysection").style.visibility = "hidden";
    document.getElementById("placeholder").style.visibility = "hidden";
    document.getElementById("aboutsection").style.visibility = "hidden";
    document.getElementById("currentorderssection").style.visibility = "hidden";
    document.getElementById("updateorderssection").style.visibility = "hidden";
    document.getElementById("geolocation").style.visibility = "hidden";
    document.getElementById("footer").style.visibility = "visible";
    ListCustomers();
    break;
    case "Add Customer":
    document.getElementById("listsection").style.visibility = "hidden";
    document.getElementById("addcustomersection").style.visibility = "visible";
    document.getElementById("historysection").style.visibility = "hidden";
    document.getElementById("placeholder").style.visibility = "hidden";
    document.getElementById("aboutsection").style.visibility = "hidden";
    document.getElementById("currentorderssection").style.visibility = "hidden";
    document.getElementById("updateorderssection").style.visibility = "hidden";
    document.getElementById("geolocation").style.visibility = "hidden";
    document.getElementById("footer").style.visibility = "visible";
    break;
    case "Customer Order History":
    document.getElementById("listsection").style.visibility = "hidden";
    document.getElementById("addcustomersection").style.visibility = "hidden";
    document.getElementById("historysection").style.visibility = "visible";
    document.getElementById("placeholder").style.visibility = "hidden";
    document.getElementById("aboutsection").style.visibility = "hidden";
    document.getElementById("currentorderssection").style.visibility = "hidden";
    document.getElementById("updateorderssection").style.visibility = "hidden";
    document.getElementById("geolocation").style.visibility = "hidden";
    document.getElementById("footer").style.visibility = "visible";
    break;
    case "Current Orders":
    document.getElementById("listsection").style.visibility = "hidden";
    document.getElementById("addcustomersection").style.visibility = "hidden";
    document.getElementById("historysection").style.visibility = "hidden";
    document.getElementById("placeholder").style.visibility = "hidden";
    document.getElementById("aboutsection").style.visibility = "hidden";
    document.getElementById("currentorderssection").style.visibility = "visible";
    document.getElementById("updateorderssection").style.visibility = "hidden";
    document.getElementById("geolocation").style.visibility = "hidden";
    document.getElementById("footer").style.visibility = "visible";
    break;
    case "Update Orders":
    document.getElementById("listsection").style.visibility = "hidden";
    document.getElementById("addcustomersection").style.visibility = "hidden";
    document.getElementById("historysection").style.visibility = "hidden";
    document.getElementById("placeholder").style.visibility = "hidden";
    document.getElementById("aboutsection").style.visibility = "hidden";
    document.getElementById("currentorderssection").style.visibility = "hidden";
    document.getElementById("updateorderssection").style.visibility = "visible";
    document.getElementById("geolocation").style.visibility = "hidden";
    document.getElementById("footer").style.visibility = "visible";
    break;
    case "Geolocation":
    document.getElementById("listsection").style.visibility = "hidden";
    document.getElementById("addcustomersection").style.visibility = "hidden";
    document.getElementById("historysection").style.visibility = "hidden";
    document.getElementById("placeholder").style.visibility = "hidden";
    document.getElementById("aboutsection").style.visibility = "hidden";
    document.getElementById("currentorderssection").style.visibility = "hidden";
    document.getElementById("updateorderssection").style.visibility = "hidden";
    document.getElementById("geolocation").style.visibility = "visible";
    document.getElementById("footer").style.visibility = "visible";
    break;
    case "About":
    document.getElementById("listsection").style.visibility = "hidden";
    document.getElementById("addcustomersection").style.visibility = "hidden";
    document.getElementById("historysection").style.visibility = "hidden";
    document.getElementById("placeholder").style.visibility = "hidden";
    document.getElementById("aboutsection").style.visibility = "visible";
    document.getElementById("currentorderssection").style.visibility = "hidden";
    document.getElementById("updateorderssection").style.visibility = "hidden";
    document.getElementById("geolocation").style.visibility = "hidden";
    document.getElementById("footer").style.visibility = "visible";
    break;
    case "None":
    document.getElementById("placeholder").style.visibility = "visible";
    document.getElementById("footer").style.visibility = "visible";
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
    var display = "<div class='resptable'><table><tr><th></th><th></th><th>Customer ID</th><th>Company Name</th><th>City</th></tr>"; //Table Headings
    var count = 0; 
    var customerid = ""; 
    var companyname = ""; 
    var city = ""; 
    for(count = 0; count < result.GetAllCustomersResult.length; count ++) //Loop for creating table rows
    {
        customerid = result.GetAllCustomersResult[count].CustomerID; //Assigns the Store ID to a variable
        companyname = '<a href="javascript:Orders(' + "'" + customerid + "');" + '">';
        companyname += result.GetAllCustomersResult[count].CompanyName;
        companyname += '</a>';
        city = result.GetAllCustomersResult[count].City; //Assigns the Store City to a variable
        display += '<tr><td><button onclick="CurrentOrderInfo(' + "'" + customerid + "')" + '">See Current Orders</button></td> <td><button onclick="DeleteCustomer(' + "'" + customerid + "')" + '">Delete Customer</button></td>  <td>' + customerid + "</td><td>"  + companyname + "</td><td>" + city + "</td></tr>"; //Creates a table row
        }
        
        display += "</table></div>"; //Closes the table HTML after table rows are added
        document.getElementById("customerlist").innerHTML = display; //Displays the table in the HTML page
        }
        }
        
 
        
function CurrentOrderInfo(customerid)
        {
            var xmlhttp = new XMLHttpRequest();
            var url= "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
            url += customerid;
            
            xmlhttp.onreadystatechange = function()
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                {
                    var output = JSON.parse(xmlhttp.responseText);
                    CurrentOrderButton(output);
                    }
                    }
                    
                    xmlhttp.open("GET", url, true);
                    xmlhttp.send();
                   
function CurrentOrderButton(result) 
{
    var display = "<p id='historylabel'>Current Order for: " + customerid + "</p><div class='resptable'><table><tr><th></th><th>Order ID</th><th>Shipping Address</th><th>City</th><th>Name</th><th>Post Code</th></tr>";//Table Headings
    var count = 0; 
    var orderid = ""; 
    var shipaddress = "";
    var shipcity= ""; 
    var shipname= "";
    var shippost= "";
    
    for(count = 0; count < result.GetOrdersForCustomerResult.length; count ++) //Loop for creating table rows
    { //Anchor link: <a href="javascript:function("parameter");">
        orderid = result.GetOrdersForCustomerResult[count].OrderID; 
        shipaddress = result.GetOrdersForCustomerResult[count].ShipAddress;
        shipcity = result.GetOrdersForCustomerResult[count].ShipCity;
        shipname = result.GetOrdersForCustomerResult[count].ShipName;
        shippost = result.GetOrdersForCustomerResult[count].ShipPostcode; 
        display += '<tr><td><button onclick="UpdateSingleOrder(' + "'" + orderid + "')" + '">Update Order</button></td><td>' + orderid + "</td><td>" + shipaddress + "</td><td>" + shipcity + "</td><td>" + shipname + "</td><td>" + shippost + "</td></tr>"; //Creates a table row
        }
        
        display += "</table></div>"; //Closes the table HTML after table rows are added
        document.getElementById("currentorders").innerHTML = display; //Displays the table in the HTML page
        document.getElementById('ordercustomeridinput').value = customerid;
        AreaSelection("Current Orders");
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
                var display = "<p id='historylabel'>Customer Order History for: " + customerid + "</p><div class='resptable'><table><tr><th>Product Name</th><th>Total Ordered</th></tr>";
                var count = 0;for(count = 0; count < result.length; count ++)
                {
                    display += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
                    }
                    display += "</table></div>";
                    document.getElementById("orderhistory").innerHTML = display;
                    AreaSelection("Customer Order History");
                    }
                    document.getElementById('entercustomerid').value = customerid;
                    }
        
        
        
function CurrentOrder() 
    {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/"; //Service URL
        url += document.getElementById("ordercustomeridinput").value;
        xmlhttp.onreadystatechange = function() {if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var output = JSON.parse(xmlhttp.responseText);
            CurrentOrderOutput(output);
            }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();

                    
                    
function CurrentOrderOutput(result) //This function receives the data form the service and creates a table to display it
{
    var display = "<p id='historylabel'>Current Order for: " + document.getElementById("ordercustomeridinput").value + "</p><div class='resptable'><table><tr><th></th><th>Order ID</th><th>Shipping Address</th><th>City</th><th>Name</th><th>Post Code</th></tr>";//Table Headings
    var count = 0; 
    var orderid = ""; 
    var shipaddress = "";
    var shipcity= ""; 
    var shipname= "";
    var shippost= "";
    
    for(count = 0; count < result.GetOrdersForCustomerResult.length; count ++) //Loop for creating table rows
    { 
        
        
        orderid = result.GetOrdersForCustomerResult[count].OrderID; 
        shipaddress = result.GetOrdersForCustomerResult[count].ShipAddress;
        shipcity = result.GetOrdersForCustomerResult[count].ShipCity;
        shipname = result.GetOrdersForCustomerResult[count].ShipName;
        shippost = result.GetOrdersForCustomerResult[count].ShipPostcode; 
        display += '<tr><td><button onclick="UpdateSingleOrder(' + "'" + orderid + "')" + '">Update Order</button></td><td>' + orderid + "</td><td>"  + shipaddress + "</td><td>" + shipcity + "</td><td>" + shipname + "</td><td>" + shippost + "</td></tr>"; //Creates a table row
        }
        
        display += "</table></div>"; 
        document.getElementById("currentorders").innerHTML = display;
       


}
    }
    
    
    
function UpdateSingleOrder(orderid)
{
            var xmlhttp = new XMLHttpRequest();
            var url= "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderInfo/";
            url += orderid;
            
            xmlhttp.onreadystatechange = function()
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                {
                    var output = JSON.parse(xmlhttp.responseText);
                    document.getElementById("orderid").value = output[0].OrderID;
                    document.getElementById("shipaddress").value = output[0].ShipAddress;
                    document.getElementById("shipcity").value = output[0].ShipCity;
                    document.getElementById("shipname").value = output[0].ShipName;
                    document.getElementById("shippost").value = output[0].ShipPostcode;
                    AreaSelection("Update Orders");
                    }
                    }
                    
                    xmlhttp.open("GET", url, true);
                    xmlhttp.send();
     }

function OrderUpdate()
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
        var result = JSON.parse(xmlhttp.responseText);
        GetResult (result);  
        AreaSelection("Customer List"); 
        }
        }
        
        var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
        var orderid = Number(document.getElementById("orderid").value);
        var shipaddress= document.getElementById("shipaddress").value;
        var shipcity = document.getElementById("shipcity").value;
        var shipname = document.getElementById("shipname").value;
        var shippost = document.getElementById("shippost").value;
        var parameters = '{"OrderID":' + orderid + ', "ShipAddress":"' + shipaddress + '", "ShipCity":"' + shipcity + '", "ShipName":"' + shipname + '", "ShipPostcode":"' + shippost + '"}'; 
        
         
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
        }
        
        //Function that displays the result of an operation that adds, deletes, or updates data
        //The function is invoked from other functions
        
function GetResult(success)
{
    switch (success)
    {
        case 1:
        alert("Your order update was successful.");
        break;
        case 0:
        alert("We were not able to change that order. Please try again.");
        break;
        case -2:
        alert("That operation was not successful because the data string supplied could not be deserialized into the service object.");
        break;
        case -3:
        alert("The operation was not successful because a record with the supplied Order ID could not be found");
        break;
        default:
        alert("The operation code returned is not identifiable.");
    }
    }
 
 
function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    //Collect Customer data from web page
    var customerid = document.getElementById("addcustomerid").value;
    var customername = document.getElementById("addcustomername").value;
    var customercity = document.getElementById("addcustomercity").value;
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'","City":"' + customercity +'"}';//Checking for AJAx operation return
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            CreateOperationResult(result);
            }
            }
            //Start AJAX request
    
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
    }
    
function CreateOperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        alert("That new customer has been added!");
        AreaSelection("Customer List");
        document.getElementById("addcustomerid").value = "";
        document.getElementById("addcustomername").value = "";
        document.getElementById("addcustomercity").value = "";
        }
        else
        {
            alert("We were unable to add that customer. Error: " + output.Exception);
            }
            }



    

function DeleteCustomer(customerid)
{
    
     var deleteit = confirm("Are you sure you want to delete this customer?");
  
     if (deleteit)
     {
     
    var deleteObjRequest = new XMLHttpRequest();
    var deleteurl = "https://student.business.uab.edu/jsonwebservice/service1.svc/DeleteCustomer/";
    deleteurl += customerid;


//Checking for AJAx operation return

deleteObjRequest.onreadystatechange = function()
{if (deleteObjRequest.readyState == 4 && deleteObjRequest.status == 200)
{
   var deleteresult = JSON.parse(deleteObjRequest.responseText);
   DeleteOperationResult(deleteresult);
    }
    }
    
    //Start AJAX request

deleteObjRequest.open("GET", deleteurl, true);
deleteObjRequest.send();

}
}


function DeleteOperationResult(output)
{
if (output.DeleteCustomerResult.WasSuccessful == 1) {
   alert("That customer has been deleted.");
   AreaSelection("Customer List");
}

else {
    alert("We were not able to delete that customer. Error: " + output.Exception);
    }

}



document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and Ready
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // Display `Position` properties from the geolocation
    //
    function onSuccess(position) {
        var div = document.getElementById('latlong');

        div.innerHTML = '<h3>Your Location:</h3><table><tr><th>Latitude</th><th> Longitude</th></tr><tr><td>' + position.coords.latitude  + '</td><td>' + position.coords.longitude + '</td></tr></table>';
        getMapLocation();                
    }

    
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

function getMapLocation() {
 
    navigator.geolocation.getCurrentPosition
    (onMapSuccess, onMapError, { enableHighAccuracy: true });
}
 
// Success callback for get geo coordinates
 
var onMapSuccess = function (position) {
 
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
 
    getMap(Latitude, Longitude);
 
}
 
// Get map by using coordinates
 
function getMap(latitude, longitude) {
 
    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);
 
 
    var latLong = new google.maps.LatLng(latitude, longitude);
 
    var marker = new google.maps.Marker({
        position: latLong
    });
 
    marker.setMap(map);
    map.setZoom(10);
    map.setCenter(marker.getPosition());
}
 
// Success callback for watching your changing position
 
var onMapWatchSuccess = function (position) {
 
    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;
 
    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {
 
        Latitude = updatedLatitude;
        Longitude = updatedLongitude;
 
        getMap(updatedLatitude, updatedLongitude);
    }
}
 
// Error callback
 
function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}
 
// Watch your changing position
 
function watchMapPosition() {
 
    return navigator.geolocation.watchPosition
    (onMapWatchSuccess, onMapError, { enableHighAccuracy: true });
}
    
function HideFooter()
    {
        document.getElementById("footer").style.visibility = "hidden";
    }

function ShowFooter()
    {
        document.getElementById("footer").style.visibility = "visible";
    }
    
