$(document).ready(function() {
    loadData();

    $('#addBtn').click(function() {
        clearModal();
        $('#positionModal').modal('show');
    });

    $('#saveBtn').click(function() {
        let id = $('#positionId').val();
        let position = {
            IDPosition: id,
            NamePosition: $('#positionName').val()
        };

        if (id) {
            updatePosition(position);
        } else {
            addPosition(position);
        }
    });

    $('#exportExcelBtn').click(function() {
        window.location.href = '/Position/ExportToExcel';
    });

    $('#exportWordBtn').click(function() {
        window.location.href = '/Position/ExportToWord';
    });
});

function loadData() {
    $('#positionTable').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            url: '/Position/List',
            type: 'GET',
            dataType: 'json',
            dataSrc: ''
        },
        "columns": [
            { "data": "IDPosition" },
            { "data": "NamePosition" },
            {
                data: "IDPosition",
                render: function(data) {
                    return `
                        <button class="btn btn-warning" onclick="editPosition(${data})">Edit</button>
                        <button class="btn btn-danger" onclick="deletePosition(${data})">Delete</button>
                    `;
                }
            }
        ]
    });
}

function addPosition(position) {
    $.post('/Position/Add', position, function() {
        $('#positionModal').modal('hide');
        $('#positionTable').DataTable().ajax.reload();
    });
}

function updatePosition(position) {
    $.post('/Position/Update', position, function() {
        $('#positionModal').modal('hide');
        $('#positionTable').DataTable().ajax.reload();
    });
}

function deletePosition(id) {
    $.post('/Position/Delete', { ID: id }, function() {
        $('#positionTable').DataTable().ajax.reload();
    });
}

function editPosition(id) {
    $.get('/Position/GetByID', { ID: id }, function(data) {
        $('#positionId').val(data.IDPosition);
        $('#positionName').val(data.NamePosition);
        $('#positionModal').modal('show');
    });
}

function clearModal() {
    $('#positionId').val('');
    $('#positionName').val('');
}
