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

    $("#employeeTable").DataTable({
        "processing": true,
        "filter": true,
        "searching": true,
        info: true,
        ordering: true,
        paging: true,
        order: [[0, 'asc']],
        "bDestroy": true,
        "ajax": {
            url: '/Demo/List',
            dataType: "json",
            type: 'GET',
            dataSrc: '',
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
                        <button class="btn btn-warning" data-id="${data}" onclick="editEmployee(${data})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn btn-danger" data-id="${data}" onclick="deleteEmployee(${data})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    `;
                }
            }
        ],
        "language": {
            "paginate": {
                "first": "<i class='bx bx-chevrons-left'></i>",
                "last": "<i class='bx bx-chevrons-right'></i>",
                "next": "<i class='bx bx-chevron-right'></i>",
                "previous": "<i class='bx bx-chevron-left'></i>"
            }
        },
        "initComplete": () => {
            stylePagination();
        }
    }).on('draw', () => {
        stylePagination();  // Gọi lại hàm stylePagination mỗi khi bảng được vẽ lại
    });

    console.log("Done");
}

// Hàm tùy chỉnh lại CSS cho pagination
let stylePagination = () => {
    $('.dataTables_wrapper .dataTables_paginate .paginate_button')
        .addClass('btn btn-sm btn-light mx-1')  // Thêm lớp Bootstrap
        // .css('background-color', '#696cff');  // Tùy chỉnh màu sắc

    // $('.dataTables_wrapper .dataTables_paginate .paginate_button.current')
    //     .removeClass('btn-light')
    //     .addClass('btn-primary text-white')
    
    $('.dataTables_paginate').css({
        "display": "flex",
        "justify-content": "right",
        "align-items": "center"
    });
}

let addEmployee = (employee) => {
    $.post('/Demo/Add', employee, () => {
        $('#employeeModal').modal('hide');
        $('#employeeTable').DataTable().ajax.reload();
    });
}

let updateEmployee = (employee) => {
    $.post('/Demo/Update', employee, () => {
        $('#employeeModal').modal('hide');
        $('#employeeTable').DataTable().ajax.reload();
    });
}

let deleteEmployee = (id) => {
    $.post('/Demo/Delete', { ID: id }, () => {
        $('#employeeTable').DataTable().ajax.reload();
    });
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
}

let clearModal = () => {
    $('#employeeId').val('');
    $('#employeeName').val('');
    $('#employeeAge').val('');
    $('#employeeState').val('');
    $('#employeeCountry').val('');
    $('#employeeName, #employeeAge, #employeeState, #employeeCountry').css('border-color', 'lightgrey');
}

let validate = () => {
    let isValid = true;
    ['employeeName', 'employeeAge', 'employeeState', 'employeeCountry'].forEach(field => {
        if ($('#' + field).val().trim() === "") {
            $('#' + field).css('border-color', 'Red');
            isValid = false;
        } else {
            $('#' + field).css('border-color', 'lightgrey');
        }
    });
    return isValid;
}

// /// <reference path="jquery-3.7.1.intellisense.js" />
//
// $("#demo-table").ready(() => {
//     loadData();
//
//     $('#addBtn').click(() => {
//         clearModal();
//         console.log("Open modal");
//         $('#employeeModal').modal('show');
//     });
//
//     $('#saveBtn').click(() => {
//         let id = $('#employeeId').val();
//         let employee = {
//             EmployeeID: id,
//             Name: $('#employeeName').val(),
//             Age: $('#employeeAge').val(),
//             State: $('#employeeState').val(),
//             Country: $('#employeeCountry').val()
//         };
//
//         if (id) {
//             updateEmployee(employee);
//         } else {
//             addEmployee(employee);
//         }
//     });
//
//     $('#exportExcelBtn').click(() => {
//         window.location.href = '/Demo/ExportToExcel';
//     });
//
//     $('#exportWordBtn').click(() => {
//         window.location.href = '/Demo/ExportToWord';
//     });
//    
//     // document.getElementById('exportWordBtn').click(() => {
//     //     window.location.href = '/Demo/ExportToWord';
//     // })
// });
//
// let loadData = () => {
//     console.log("Initializing DataTable");
//     // $('#employeeTable').empty();
//     $(document).ready(() => {
//         $("#employeeTable").DataTable({
//             "processing": true,
//             //"serverSide": true, // fail to sort
//             "filter": true,
//             "searching": true,
//             info: true,
//             ordering: true,
//             paging: true,
//
//             order: [[3, 'desc']],
//
//             "bDestroy": true ,
//             "ajax": {
//                 url: '/Demo/List',
//                 dataType: "json",
//                 //headers: {
//                 //    "CSRFToken": TOKEN
//                 //},
//                 // contentType: "application/json;charset=utf-8",
//                 type: 'GET',
//                 dataSrc: '',
//                 //data: (d) => {
//                 //    d.CSRFToken = TOKEN;
//                 //},
//             },
//             "columns": [
//                 { "data": "EmployeeID" },
//                 { "data": "Name" },
//                 { "data": "Age" },
//                 { "data": "State" },
//                 { "data": "Country" },
//                 {
//                     data: "EmployeeID",
//                     render: (data) => {
//                         return `
//                             <button class="btn btn-warning" data-id=(${data}) onclick="editEmployee(${data})">
//                                 <i class="fa-solid fa-pen-to-square"></i>
//                             </button>
//                             <button class="btn btn-danger" data-id=(${data}) onclick="deleteEmployee(${data})">
//                                 <i class="fa-solid fa-trash-can"></i>
//                             </button>
//                         `;
//                     }
//                 }
//             ],
//             error: (xhr) => {
//                 alert(xhr.responseText);
//             },
//             "initComplete": () => {
//                 // Apply custom CSS styles
//                 // $('#employeeTable').addClass('table table-striped table-bordered');
//                 // $('#employeeTable thead').addClass('thead-dark');
//                 // $('#employeeTable_length').addClass('dataTables_length');
//                 // $('#employeeTable_filter').addClass('dataTables_filter');
//                 // $('#employeeTable_paginate').addClass('dataTables_paginate paging_simple_numbers');
//                 // $('#employeeTable_info').addClass('dataTables_info');
//                 // $('#employeeTable_previous').addClass('paginate_button previous');
//                 // $('#employeeTable_next').addClass('paginate_button next');
//                 // $('#employeeTable_paginate .paginate_button').addClass('page-item');
//                 // $('#employeeTable_paginate .paginate_button a').addClass('page-link');
//                 // // $('.pagination').addClass('page-link');
//                 // $('.paginate_button').addClass('page-item');
//                 // $('.paginate_button a').addClass('page-link');
//
//                 $('#employeeTable').DataTable({
//                     "pagingType": "full_numbers", // Enable full pagination controls
//                     "language": {
//                         "paginate": {
//                             "first": "<i class='bx bx-chevrons-left'></i>",
//                             "last": "<i class='bx bx-chevrons-right'></i>",
//                             "next": "<i class='bx bx-chevron-right'></i>",
//                             "previous": "<i class='bx bx-chevron-left'></i>"
//                         }
//                     }
//                 });
//
//                 // Style the pagination to match the desired design
//                 $('.dataTables_wrapper .dataTables_paginate .paginate_button').addClass('btn btn-sm btn-outline-secondary mx-1');
//
//                 // Apply custom styles and positioning if necessary
//                 $('.dataTables_paginate').css({
//                     "display": "flex",
//                     "justify-content": "center",
//                     "align-items": "center"
//                 });
//
//                 // Optional: Modify the active page styling
//                 $('.dataTables_wrapper .dataTables_paginate .paginate_button.current').addClass('btn-primary text-white');
//             }
//         });
//     })
//
//     console.log("Done");
// }
//
// let addEmployee = (employee) => {
//     $.post('/Demo/Add', employee, () => {
//         $('#employeeModal').modal('hide');
//         $('#employeeTable').DataTable().ajax.reload();
//     });
//
//     // var res = validate();
//     // if (res == false) {
//     //     return false;
//     // }
//     // var empObj = {
//     //     EmployeeID: $('#employeeId').val(),
//     //     Name: $('#employeeName').val(),
//     //     Age: $('#employeeAge').val(),
//     //     State: $('#employeeState').val(),
//     //     Country: $('#employeeCountry').val(),
//     // };
//     // $.ajax({
//     //     url: "/Home/Update",
//     //     data: JSON.stringify(empObj),
//     //     type: "POST",
//     //     contentType: "application/json;charset=utf-8",
//     //     dataType: "json",
//     //     success: function (result) {
//     //         loadData();
//     //         $('#employeeModal').modal('hide');
//     //         $('#employeeId').val('');
//     //         $('#employeeName').val('');
//     //         $('#employeeAge').val('');
//     //         $('#employeeState').val('');
//     //         $('#employeeCountry').val('');
//     //     },
//     //     error: function (errormessage) {
//     //         alert(errormessage.responseText);
//     //     }
//     // });
// }
//
// let updateEmployee = (employee) => {
//     $.post('/Demo/Update', employee, () => {
//         $('#employeeModal').modal('hide');
//         $('#employeeTable').DataTable().ajax.reload();
//     });
//     // var res = validate();
//     // if (res == false) {
//     //     return false;
//     // }
//     // var empObj = {
//     //     EmployeeID: $('#EmployeeID').val(),
//     //     Name: $('#Name').val(),
//     //     Age: $('#Age').val(),
//     //     State: $('#State').val(),
//     //     Country: $('#Country').val(),
//     // };
//     // $.ajax({
//     //     url: "/Home/Update",
//     //     data: JSON.stringify(empObj),
//     //     type: "POST",
//     //     contentType: "application/json;charset=utf-8",
//     //     dataType: "json",
//     //     success: function (result) {
//     //         loadData();
//     //         $('#myModal').modal('hide');
//     //         $('#employeeId').val('');
//     //         $('#employeeName').val('');
//     //         $('#employeeAge').val('');
//     //         $('#employeeState').val('');
//     //         $('#employeeCountry').val('');
//     //     },
//     //     error: function (errormessage) {
//     //         alert(errormessage.responseText);
//     //     }
//     // });
// }
//
// let deleteEmployee = (id) => {
//     $.post('/Demo/Delete', { ID: id }, () => {
//         $('#employeeTable').DataTable().ajax.reload();
//     });
//     // var ans = confirm("Are you sure you want to delete this Record?");
//     // if (ans) {
//     //     $.ajax({
//     //         url: "/Home/Delete/" + ID,
//     //         type: "POST",
//     //         contentType: "application/json;charset=UTF-8",
//     //         dataType: "json",
//     //         success: function (result) {
//     //             loadData();
//     //         },
//     //         error: function (errormessage) {
//     //             alert(errormessage.responseText);
//     //         }
//     //     });
//     // }
// }
//
// let editEmployee = (id) => {
//     $.get('/Demo/GetbyID', { ID: id }, (data) => {
//         $('#employeeId').val(data.EmployeeID);
//         $('#employeeName').val(data.Name);
//         $('#employeeAge').val(data.Age);
//         $('#employeeState').val(data.State);
//         $('#employeeCountry').val(data.Country);
//         $('#employeeModal').modal('show');
//     });
//     // var res = validate();
//     // if (res == false) {
//     //     return false;
//     // }
//     // var empObj = {
//     //     EmployeeID: $('#EmployeeID').val(),
//     //     Name: $('#Name').val(),
//     //     Age: $('#Age').val(),
//     //     State: $('#State').val(),
//     //     Country: $('#Country').val(),
//     // };
//     // $.ajax({
//     //     url: "/Home/Update",
//     //     data: JSON.stringify(empObj),
//     //     type: "POST",
//     //     contentType: "application/json;charset=utf-8",
//     //     dataType: "json",
//     //     success: function (result) {
//     //         loadData();
//     //         $('#myModal').modal('hide');
//     //         $('#employeeId').val('');
//     //         $('#employeeName').val('');
//     //         $('#employeeAge').val('');
//     //         $('#employeeState').val('');
//     //         $('#employeeCountry').val('');
//     //     },
//     //     error: function (errormessage) {
//     //         alert(errormessage.responseText);
//     //     }
//     // });
// }
//
// let getbyID = (EmpID) => {
//     $('#employeeName').css('border-color', 'lightgrey');
//     $('#employeeAge').css('border-color', 'lightgrey');
//     $('#employeeState').css('border-color', 'lightgrey');
//     $('#employeeCountry').css('border-color', 'lightgrey');
//     $.ajax({
//         url: "/Demo/GetbyID/" + EmpID,
//         typr: "GET",
//         contentType: "application/json;charset=UTF-8",
//         dataType: "json",
//         success: (result) => {
//             $('#employeeId').val(result.EmployeeID);
//             $('#employeeName').val(result.Name);
//             $('#employeeAge').val(result.Age);
//             $('#employeeState').val(result.State);
//             $('#employeeCountry').val(result.Country);
//
//             $('#myModal').modal('show');
//             $('#btnUpdate').show();
//             $('#btnAdd').hide();
//         },
//         error: (errormessage) => {
//             alert(errormessage.responseText);
//         }
//     });
//     return false;
// }
//
// let clearModal = () => {
//     $('#employeeId').val('');
//     $('#employeeName').val('');
//     $('#employeeAge').val('');
//     $('#employeeState').val('');
//     $('#employeeCountry').val('');
//     $('#employeeName').css('border-color', 'lightgrey');
//     $('#employeeAge').css('border-color', 'lightgrey');
//     $('#employeeState').css('border-color', 'lightgrey');
//     $('#employeeCountry').css('border-color', 'lightgrey');
// }
//
// let validate = () => {
//     var isValid = true;
//     if ($('#employeeName').val().trim() == "") {
//         $('#employeeName').css('border-color', 'Red');
//         isValid = false;
//     } else {
//         $('#employeeName').css('border-color', 'lightgrey');
//     }
//     if ($('#employeeAge').val().trim() == "") {
//         $('#employeeAge').css('border-color', 'Red');
//         isValid = false;
//     } else {
//         $('#employeeAge').css('border-color', 'lightgrey');
//     }
//     if ($('#employeeState').val().trim() == "") {
//         $('#employeeState').css('border-color', 'Red');
//         isValid = false;
//     } else {
//         $('#employeeState').css('border-color', 'lightgrey');
//     }
//     if ($('#employeeCountry').val().trim() == "") {
//         $('#employeeCountry').css('border-color', 'Red');
//         isValid = false;
//     } else {
//         $('#employeeCountry').css('border-color', 'lightgrey');
//     }
//     return isValid;
// }