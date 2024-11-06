$(document).ready(function() {
    loadData();

    $('#addBtn').click(function() {
        clearModal();
        $('#locationModal').modal('show');
    });

    $('#saveBtn').click(function() {
        let id = $('#locationId').val();
        let location = {
            IDLocation: id,
            Tower: $('#locationTower').val(),
            Street: $('#locationStreet').val(),
            District: $('#locationDistrict').val(),
            City: $('#locationCity').val(),
            State: $('#locationState').val(),
            Country: $('#locationCountry').val()
        };

        if (id) {
            updateLocation(location);
        } else {
            addLocation(location);
        }
    });

    $('#locationTable').on('click', '.editBtn', function() {
        let id = $(this).data('id');
        editLocation(id);
    });

    $('#locationTable').on('click', '.deleteBtn', function() {
        let id = $(this).data('id');
        deleteLocation(id);
    });

    $('#exportExcelBtn').click(function() {
        window.location.href = '/Location/ExportToExcel';
    });

    $('#exportWordBtn').click(function() {
        window.location.href = '/Location/ExportToWord';
    });
});

function loadData() {
    $('#locationTable').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            url: '/Location/List',
            type: 'GET',
            dataType: 'json',
            dataSrc: function(json) {
                if (json.data.length === 0) {
                    return [];
                }
                return json.data;
            },
            error: function(xhr, error, thrown) {
                alert('Failed to load data. Please try again.');
            }
        },
        "columns": [
            { "data": "IDLocation" },
            { "data": "Tower" },
            { "data": "Street" },
            { "data": "District" },
            { "data": "City" },
            { "data": "State" },
            { "data": "Country" },
            {
                data: "IDLocation",
                render: function(data) {
                    return `
                        <button class="btn btn-warning editBtn" data-id="${data}">Edit</button>
                        <button class="btn btn-danger deleteBtn" data-id="${data}">Delete</button>
                    `;
                }
            }
        ],
        "language": {
            "emptyTable": "No data available in table"
        }
    });
}

function addLocation(location) {
    $.post('/Location/Add', location, function(response) {
        if (response.success) {
            $('#locationModal').modal('hide');
            $('#locationTable').DataTable().ajax.reload();
        } else {
            alert(response.message);
        }
    });
}

function updateLocation(location) {
    $.post('/Location/Update', location, function(response) {
        if (response.success) {
            $('#locationModal').modal('hide');
            $('#locationTable').DataTable().ajax.reload();
        } else {
            alert(response.message);
        }
    });
}

function deleteLocation(id) {
    $.post('/Location/Delete', { ID: id }, function(response) {
        if (response.success) {
            $('#locationTable').DataTable().ajax.reload();
        } else {
            alert(response.message);
        }
    });
}

function editLocation(id) {
    $.get('/Location/GetByID', { ID: id }, function(data) {
        $('#locationId').val(data.IDLocation);
        $('#locationTower').val(data.Tower);
        $('#locationStreet').val(data.Street);
        $('#locationDistrict').val(data.District);
        $('#locationCity').val(data.City);
        $('#locationState').val(data.State);
        $('#locationCountry').val(data.Country);
        $('#locationModal').modal('show');
    });
}

function clearModal() {
    $('#locationId').val('');
    $('#locationTower').val('');
    $('#locationStreet').val('');
    $('#locationDistrict').val('');
    $('#locationCity').val('');
    $('#locationState').val('');
    $('#locationCountry').val('');
}

