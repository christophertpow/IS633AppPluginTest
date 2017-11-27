function AreaSelection(selection)
{
    document.getElementById("area1").style.visibility = "hidden";
    document.getElementById("area2").style.visibility = "hidden";

switch (selection)
{
    case "Area 1":
    document.getElementById("area1").style.visibility = "visible";
    document.getElementById("placeholder").style.visibility = "hidden";
    break;
    case "Area 2":
    document.getElementById("area2").style.visibility = "visible";
    document.getElementById("placeholder").style.visibility = "hidden";
    break;
    case "None":
    document.getElementById("placeholder").style.visibility = "visible";
    break;
    default:
        alert("Please select a different menu option");
        }
        }