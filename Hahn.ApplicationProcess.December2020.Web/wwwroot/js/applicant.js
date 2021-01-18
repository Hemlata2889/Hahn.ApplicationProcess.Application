function submitData() {
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var hired = $("#hired option:selected").val();
    var applicantModel = JSON.stringify({
        "Name": name,
        "FamilyName": fname,
        "Address": address,
        "CountryOfOrigin": country,
        "EmailAddress": email,
        "Age": age,
        "Hired": hired == "true",
    });
    $.ajax({
        url: "https://localhost:44321/api/Applicants/AddData",
        data: applicantModel,
        type: 'POST',
        contentType: "application/json",
        dataType: "json",
        success: function (data, textStatus, xhr) {
            if (textStatus == "success") {
                alert("Data posted successfully");
                location.reload();
            }
            else {
                alert("Oops someting went wrong!");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    })
}

function getData() {
    var id = document.getElementById("id").value;
    $.ajax({
        url: "https://localhost:44321/api/Applicants/GetDataById/" + id,
        //data: applicantModel,
        type: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function (data, textStatus) {
            if (data != null) {
                bindDataInForm(data);
                $("#btnupdate").show();
                $("#btndelete").show();
                $("#btnsubmit").hide();
                alert("Data found successfully");
            }
            else {
                alert("No data found!");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    })
}

function updateData() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var hired = $("#hired option:selected").val();
    var applicantModel = JSON.stringify({
        "Name": name,
        "FamilyName": fname,
        "Address": address,
        "CountryOfOrigin": country,
        "EmailAddress": email,
        "Age": age,
        "Hired": hired == "true",
    });
    $.ajax({
        url: "https://localhost:44321/api/Applicants/" + id,
        data: applicantModel,
        type: 'PUT',
        contentType: "application/json",
        dataType: "json",
        success: function (data, textStatus, xhr) {
            if (textStatus == "success") {
                alert("Data updated successfully");
                location.reload();
            }
            else {
                alert("Oops someting went wrong!");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    })
}

function deleteData() {
    var id = document.getElementById("id").value;
    $.ajax({
        url: "https://localhost:44321/api/Applicants/" + id,
        // data: applicantModel,
        type: 'DELETE',
        contentType: "application/json",
        dataType: "json",
        success: function (data, textStatus) {
            if (textStatus == "success") {
                alert("Data deleted successfully!");
                location.reload();
            } else {
                alert("Oops someting went wrong!");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    })
}

function bindDataInForm(formData) {
    if (formData != null && formData != "") {
        $("#name").val(formData.name);
        $("#fname").val(formData.familyName);
        $("#address").val(formData.address);
        $("#country").val(formData.countryOfOrigin);
        $("#email").val(formData.emailAddress);
        $("#age").val(formData.age);
        $("#hired").val(formData.hired.toString());
    }
}
function reset() {
    location.reload();
    $("#btnupdate").hide();
    $("#btndelete").hide();
    $("#btnsubmit").show();
}

$(document).ready(function () {
    $("#btnupdate").hide();
    $("#btndelete").hide();
    $("#btnsubmit").show();
});


