"use strict";

// table values
// Expense categories
const expcategories = [
  "Eat",
  "Health and Fitness",
  "Insurances",
  "Shopping",
  "Transportation",
  "Entertainment",
  "Bills",
  "Rent",
  "Education",
  "Leisure and Travel",
  "Social",
  "Suscriptions",
  "One-off Cost",
];
// Income categories
const inccategories = ["Regular", "One-off", "Casual", "Other"];
// Expsense Subcategories
const expsubcats = [
  "Dine out",
  "Groceries",
  "Delivery",
  "Internet and Phone",
  "Electricity",
  "Gas",
  "Water",
  "Movies",
  "Games",
  "Books",
  "Drinks",
  "Pets",
  "Doctor and Pharmacy",
  "Personal Care",
  "Gym and Sports",
  "Accessories",
  "Clothing and footwear",
  "Electronics",
  "Public Transportation",
  "Vehicle Maintenance",
  "Parking Fees and fines",
  "Petrol",
  "Taxi and Uber",
  "Social Meals and drinks",
  "Social Activities",
  "Social Gifts",
  "Other",
];
// Income Subcategories
const incsubcats = [
  "Salary",
  "Bonus",
  "Casual Work",
  "Selling",
  "Interest Money",
  "Gifts",
  "Benefit",
  "Tax Refund",
  "Social Gifts",
  "Other",
];
// Paid by methods
const paidby = [
  "CBA Debit",
  "Amex",
  "Direct Debit",
  "Cash",
  "PayPal",
  "Alipay",
  "WechatPay",
];

// get current date
const today_date = new Date();
const dd = String(today_date.getDate()).padStart(2, "0");
const mm = String(today_date.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today_date.getFullYear();

const today = yyyy + "-" + mm + "-" + dd;

function listOptions(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += '<option value="' + arr[i] + '">' + arr[i] + "</option> ";
  }
  return result;
}

// ---- default table html ----

// date
const tabledate = `<input class="incexp" id="row_date" type="date" value="${today}">`;

// income or expense
const tableincexp =
  '<select class="incexp" name="incexp" id="row_type"> <option value="Expense">Expense</option> <option value="Income">Income</option> </select>';

// amount
const tableamount =
  '<input class="incexp" id="row_amount" type="number" value="0.00">';

// categories
const exptablecat = listOptions(expcategories);
const inctablecat = listOptions(inccategories);

const tablecategories =
  '<select class="incexp" name="cat" id = "row_cat">' +
  exptablecat +
  "</select>";

// subcategories
const expsubcategories = listOptions(expsubcats);
const incsubcategories = listOptions(incsubcats);

const tablesubcat =
  '<select class="incexp" name="subcat" id = "row_subcat">' +
  expsubcategories +
  "</select>";

// description
const tabledesc =
  '<input class="incexp" id="row_desc" type="text" placeholder="Description">';

// Paid by
const tablepaidby =
  '<select class="incexp" id="row_paid" name="subcat">' +
  listOptions(paidby) +
  "</select>";

const table = document.getElementById("transactions");

function Row() {
  let element = document.createElement("tr");
  let row_date = document.createElement("td");
  row_date.innerHTML = tabledate;
  element.appendChild(row_date);
  let row_incexp = document.createElement("td");
  row_incexp.innerHTML = tableincexp;
  element.appendChild(row_incexp);
  let row_amount = document.createElement("td");
  row_amount.innerHTML = tableamount;
  element.appendChild(row_amount);
  let row_cat = document.createElement("td");
  row_cat.innerHTML = tablecategories;
  element.appendChild(row_cat);
  let row_subcat = document.createElement("td");
  row_subcat.innerHTML = tablesubcat;
  element.appendChild(row_subcat);
  let row_desc = document.createElement("td");
  row_desc.innerHTML = tabledesc;
  element.appendChild(row_desc);
  let row_paidby = document.createElement("td");
  row_paidby.innerHTML = tablepaidby;
  element.appendChild(row_paidby);
  row_incexp.addEventListener("change", function (ev) {
    toggle_category(element, ev.target.value);
  });
  let save_btn = document.createElement("td");
  save_btn.innerHTML = "<button>Save</button>";
  element.appendChild(save_btn);
  let saved = false;
  save_btn.addEventListener("click", function (ev) {
    saved = !saved;
    let btn = save_btn.querySelector("button");
    if (saved) {
      btn.innerHTML = "Edit";
    } else {
      btn.innerHTML = "Save";
    }
  });
  this.element = element;
}

function addNewRow() {
  let row = new Row();
  table.appendChild(row.element);
}

function toggle_category(context, value) {
  let cat = context.querySelector("#row_cat");
  let subcat = context.querySelector("#row_subcat");

  if (value == "Expense") {
    cat.innerHTML = exptablecat;
    subcat.innerHTML = expsubcategories;
  } else {
    cat.innerHTML = inctablecat;
    subcat.innerHTML = incsubcategories;
  }
}
