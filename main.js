// table values
    // Expense categories
var expcategories = ['Eat','Entertainment','Utility','Rent','Other'];
    // Income categories
var inccategories = ['Salary','Casual Work','Benefit','Tax Refund','Other'];
    // Subcategories
var subcategories = ['Dine out','Groceries','Delivery','Internet','Movie','Other'];
    // Paid by methods
var paidby = ['CBA Debit','Amex','Direct Debit','Bank Transfer'];


// get current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

function listOptions(arr){
    var result = '';
    for (let i=0;i<arr.length;i++){
        result += '<option value="'+arr[i]+'">'+arr[i]+'</option> ';
    }
    return result;
}

// ---- default table html ----

    // date
var tabledate = `<input class="incexp" type="date" value="${today}">`;

    // income or expense
var tableincexp = '<select class="incexp" name="incexp"> <option value="Income">Income</option> <option value="Expense">Expense</option> </select>';

    // amount
var tableamount = '<input class="incexp" type="text" value="$0.00">';

    // categories
var exptablecat = listOptions(expcategories);
var inctablecat = listOptions(inccategories);

var tableinccategories = '<select class="incexp" name="inccat">'+inctablecat+'</select>';
var tableexpcategories = '<select class="incexp" name="expcat">'+exptablecat+'</select>';

    // subcategories
var tablesubcat = '<select class="incexp" name="subcat">'+listOptions(subcategories)+'</select>';

    // description
var tabledesc = '<input class="incexp" type="text" placeholder="Description">';

    // Paid by
var tablepaidby = '<select class="incexp" name="subcat">'+listOptions(paidby)+'</select>';

var table = document.getElementById("transactions");

function addNewRow(){
    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = tabledate;
    row.insertCell(1).innerHTML = tableincexp;
    row.insertCell(2).innerHTML = tableamount;
    row.insertCell(3).innerHTML = tableinccategories;
    row.insertCell(4).innerHTML = tablesubcat;
    row.insertCell(5).innerHTML = tabledesc;
    row.insertCell(6).innerHTML = tablepaidby;
}

