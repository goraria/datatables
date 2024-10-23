
/// <reference path="jquery-3.7.1.intellisense.js" />

$("#demo-table").ready(() => {
    loadData();

    $('#addBtn').click(() => {
        clearModal();
        console.log("Open modal");
        $('#employeeModal').modal('show');
    });

    $('#saveBtn').click(() => {
        let id = $('#employeeId').val();
        let employee = {
            EmployeeID: id,
            Name: $('#employeeName').val(),
            Age: $('#employeeAge').val(),
            State: $('#employeeState').val(),
            Country: $('#employeeCountry').val()
        };

        if (id) {
            updateEmployee(employee);
        } else {
            addEmployee(employee);
        }
    });

    $('#exportExcelBtn').click(() => {
        window.location.href = '/Demo/ExportToExcel';
    });

    $('#exportWordBtn').click(() => {
        window.location.href = '/Demo/ExportToWord';
    });
});

let loadData = () => {
    console.log("Initializing DataTable");
    // $('#employeeTable').empty();
    $(document).ready(() => {
        $("#employeeTable").DataTable({
            "processing": true,
            //"serverSide": true, // fail to sort
            "filter": true,
            // searchDelay: 
            "searching": true,
            // "orderMulti": false,
            // "pageLength": 10,

            info: true,
            ordering: true,
            paging: true,

            order: [[3, 'desc']],
            //columnDefs: [
            //    {
            //        targets: [0],
            //        visible: false,
            //        orderData: [0, 1]
            //    },    
            //    {
            //        targets: [1],
            //        orderData: [1, 0]
            //    },
            //    {
            //        targets: [4],
            //        orderData: [4, 0]
            //    }
            //],

            "bDestroy": true ,
            "ajax": {
                url: '/Demo/List',
                dataType: "json",
                //headers: {
                //    "CSRFToken": TOKEN
                //},
                // contentType: "application/json;charset=utf-8",
                type: 'GET',
                dataSrc: '',
                //data: (d) => {
                //    d.CSRFToken = TOKEN;
                //},
            },
            "columns": [
                { "data": "EmployeeID" },
                { "data": "Name" },
                { "data": "Age" },
                { "data": "State" },
                { "data": "Country" },
                {
                    data: "EmployeeID",
                    render: (data) => {
                        return `
                            <button class="btn btn-warning" data-id=(${data}) onclick="editEmployee(${data})">Edit</button>
                            <button class="btn btn-danger" data-id=(${data}) onclick="deleteEmployee(${data})">Delete</button>
                        `;
                    }
                }
            ],
            // "columns": [
            //     { "data": "employeeId" },
            //     { "data": "employeeName" },
            //     { "data": "employeeAge" },
            //     { "data": "employeeState" },
            //     { "data": "employeeCountry" },
            //     {
            //         data: "employeeId",
            //         render: (data) => {
            //             return `
            //                 <button class="btn btn-warning" onclick="editEmployee(${data})">Edit</button>
            //                 <button class="btn btn-danger" onclick="deleteEmployee(${data})">Delete</button>
            //             `;
            //         }
            //     }
            // ],
            error: (xhr) => {
                alert(xhr.responseText);
            }
        });
    })

    // $(document).ready(() => {
    //     $('#employeeTable').DataTable({
    //         "processing": true,
    //         "serverSide": true,
    //         "paging": true,
    //         "searching": false,
    //         "orderMulti": false,
    //         "pageLength": 10,
    //         "bDestroy": true ,
    //         "ajax": {
    //             url: "/Home/List",
    //             type: "GET",
    //             dataType: "json",
    //             // dataSrc: ''
    //         },
    //         "columns" : [
    //             { "data": "EmployeeID" },
    //             { "data": "Name" },
    //             { "data": "Age" },
    //             { "data": "State" },
    //             { "data": "Country" },
    //             {
    //                 data: "EmployeeID",
    //                     render: (data) => {
    //                         return `
    //                             <button class="btn btn-warning" data-id=(${data}) onclick="editEmployee(${data})">Edit</button>
    //                             <button class="btn btn-danger" data-id=(${data}) onclick="deleteEmployee(${data})">Delete</button>
    //                         `;
    //                     }
    //             },
    //         ],
    //         error: function (xhr) {
    //             alert(xhr.responseText);
    //         }
    //     });
    // });

    console.log("Done");
}

let addEmployee = (employee) => {
    $.post('/Demo/Add', employee, () => {
        $('#employeeModal').modal('hide');
        $('#employeeTable').DataTable().ajax.reload();
    });

    // var res = validate();
    // if (res == false) {
    //     return false;
    // }
    // var empObj = {
    //     EmployeeID: $('#employeeId').val(),
    //     Name: $('#employeeName').val(),
    //     Age: $('#employeeAge').val(),
    //     State: $('#employeeState').val(),
    //     Country: $('#employeeCountry').val(),
    // };
    // $.ajax({
    //     url: "/Home/Update",
    //     data: JSON.stringify(empObj),
    //     type: "POST",
    //     contentType: "application/json;charset=utf-8",
    //     dataType: "json",
    //     success: function (result) {
    //         loadData();
    //         $('#employeeModal').modal('hide');
    //         $('#employeeId').val('');
    //         $('#employeeName').val('');
    //         $('#employeeAge').val('');
    //         $('#employeeState').val('');
    //         $('#employeeCountry').val('');
    //     },
    //     error: function (errormessage) {
    //         alert(errormessage.responseText);
    //     }
    // });
}

let updateEmployee = (employee) => {
    $.post('/Demo/Update', employee, () => {
        $('#employeeModal').modal('hide');
        $('#employeeTable').DataTable().ajax.reload();
    });
    // var res = validate();
    // if (res == false) {
    //     return false;
    // }
    // var empObj = {
    //     EmployeeID: $('#EmployeeID').val(),
    //     Name: $('#Name').val(),
    //     Age: $('#Age').val(),
    //     State: $('#State').val(),
    //     Country: $('#Country').val(),
    // };
    // $.ajax({
    //     url: "/Home/Update",
    //     data: JSON.stringify(empObj),
    //     type: "POST",
    //     contentType: "application/json;charset=utf-8",
    //     dataType: "json",
    //     success: function (result) {
    //         loadData();
    //         $('#myModal').modal('hide');
    //         $('#employeeId').val('');
    //         $('#employeeName').val('');
    //         $('#employeeAge').val('');
    //         $('#employeeState').val('');
    //         $('#employeeCountry').val('');
    //     },
    //     error: function (errormessage) {
    //         alert(errormessage.responseText);
    //     }
    // });
}

let deleteEmployee = (id) => {
    $.post('/Demo/Delete', { ID: id }, () => {
        $('#employeeTable').DataTable().ajax.reload();
    });
    // var ans = confirm("Are you sure you want to delete this Record?");
    // if (ans) {
    //     $.ajax({
    //         url: "/Home/Delete/" + ID,
    //         type: "POST",
    //         contentType: "application/json;charset=UTF-8",
    //         dataType: "json",
    //         success: function (result) {
    //             loadData();
    //         },
    //         error: function (errormessage) {
    //             alert(errormessage.responseText);
    //         }
    //     });
    // }
}

let editEmployee = (id) => {
    $.get('/Demo/GetbyID', { ID: id }, (data) => {
        $('#employeeId').val(data.EmployeeID);
        $('#employeeName').val(data.Name);
        $('#employeeAge').val(data.Age);
        $('#employeeState').val(data.State);
        $('#employeeCountry').val(data.Country);
        $('#employeeModal').modal('show');
    });
    // var res = validate();
    // if (res == false) {
    //     return false;
    // }
    // var empObj = {
    //     EmployeeID: $('#EmployeeID').val(),
    //     Name: $('#Name').val(),
    //     Age: $('#Age').val(),
    //     State: $('#State').val(),
    //     Country: $('#Country').val(),
    // };
    // $.ajax({
    //     url: "/Home/Update",
    //     data: JSON.stringify(empObj),
    //     type: "POST",
    //     contentType: "application/json;charset=utf-8",
    //     dataType: "json",
    //     success: function (result) {
    //         loadData();
    //         $('#myModal').modal('hide');
    //         $('#employeeId').val('');
    //         $('#employeeName').val('');
    //         $('#employeeAge').val('');
    //         $('#employeeState').val('');
    //         $('#employeeCountry').val('');
    //     },
    //     error: function (errormessage) {
    //         alert(errormessage.responseText);
    //     }
    // });
}

let getbyID = (EmpID) => {
    $('#employeeName').css('border-color', 'lightgrey');
    $('#employeeAge').css('border-color', 'lightgrey');
    $('#employeeState').css('border-color', 'lightgrey');
    $('#employeeCountry').css('border-color', 'lightgrey');
    $.ajax({
        url: "/Demo/GetbyID/" + EmpID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: (result) => {
            $('#employeeId').val(result.EmployeeID);
            $('#employeeName').val(result.Name);
            $('#employeeAge').val(result.Age);
            $('#employeeState').val(result.State);
            $('#employeeCountry').val(result.Country);

            $('#myModal').modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();
        },
        error: (errormessage) => {
            alert(errormessage.responseText);
        }
    });
    return false;
}

let clearModal = () => {
    $('#employeeId').val('');
    $('#employeeName').val('');
    $('#employeeAge').val('');
    $('#employeeState').val('');
    $('#employeeCountry').val('');
    $('#employeeName').css('border-color', 'lightgrey');
    $('#employeeAge').css('border-color', 'lightgrey');
    $('#employeeState').css('border-color', 'lightgrey');
    $('#employeeCountry').css('border-color', 'lightgrey');
}

let validate = () => {
    var isValid = true;
    if ($('#employeeName').val().trim() == "") {
        $('#employeeName').css('border-color', 'Red');
        isValid = false;
    } else {
        $('#employeeName').css('border-color', 'lightgrey');
    }
    if ($('#employeeAge').val().trim() == "") {
        $('#employeeAge').css('border-color', 'Red');
        isValid = false;
    } else {
        $('#employeeAge').css('border-color', 'lightgrey');
    }
    if ($('#employeeState').val().trim() == "") {
        $('#employeeState').css('border-color', 'Red');
        isValid = false;
    } else {
        $('#employeeState').css('border-color', 'lightgrey');
    }
    if ($('#employeeCountry').val().trim() == "") {
        $('#employeeCountry').css('border-color', 'Red');
        isValid = false;
    } else {
        $('#employeeCountry').css('border-color', 'lightgrey');
    }
    return isValid;
}