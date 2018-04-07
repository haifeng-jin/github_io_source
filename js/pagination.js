    var current_page = 1;
    var per_page = 20;
    var table = document.getElementById("articles");
    var pagination = document.getElementById("pagination");
    var left_page = pagination.firstElementChild;
    var right_page = pagination.lastElementChild;
    var tr = table.getElementsByTagName("tr");
    var row_num = tr.length;
    var page_num = Math.ceil(row_num / per_page);
    var rows = [];
    init();

    function init() {
        if (page_num < 2) {
            pagination.innerHTML = "";
            return;
        }
        for (var i = 0; i < row_num; i++) {
            rows.push(tr[i]);
        }
        table.innerHTML = "";
        createPaginator();
        update(current_page);
    }

    function createPaginator() {
        left_page.setAttribute("onclick", "update(current_page - 1)");
        right_page.setAttribute("onclick", "update(current_page + 1)");
        for (var i = 0; i < page_num; i++) {
            var li = document.createElement("li");
            li.setAttribute("class", "page-item")
            var a = document.createElement("span");
            a.setAttribute("class", "page-link")
            a.innerHTML = i + 1;
            a.setAttribute("onclick", "update(" + (i + 1) + ")");
            li.appendChild(a);
            pagination.insertBefore(li, right_page);
        }
    }

    function update(a) {
        if (a < 1 || a > page_num)
            return;
        current_page = a;
        var li = pagination.getElementsByTagName("li");
        for (var i = 1; i < li.length - 1; i++) {
          li[i].setAttribute("class", "page-item");
        }
        if (current_page === 1)
            left_page.setAttribute("class", "page-item disabled");
        if (current_page === page_num)
            right_page.setAttribute("class", "page-item disabled");
        var span = document.createElement("span");
        span.setAttribute("class", "sr-only");
        pagination.getElementsByTagName("li")[current_page].setAttribute("class", "page-item active");

        table.innerHTML = "";
        var start = (current_page - 1) * per_page;
        for (var i = start; i < Math.min(start + per_page, row_num); i++) {
            table.appendChild(rows[i]);
        }
    }
