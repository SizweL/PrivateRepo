/*

1) This file has functions that calcultes the total prices 
of all the items in the list

2) The overall number of items (quantities) in the list is calculated and 
returned

3) Comparison between the actual budget and total price estimated is
	done and a reasonable advice or suggestion is given to user

*/

let total_price = function(list_of_items)
{
	let total_price = 0;
	for(let i = 0; i !== list_of_items.length; i++)
	{
		total_price += list_of_items[i];
	}
	return total_price;
}

function quantity(list_of_quantities)
{
	let quantities = 0;

	for(let j = 0; j !== list_of_quantities.length; j++)
	{
		quantities += list_of_quantities[j];
	}
	return quantities;
}

let compare_budgets = function(actual_budget, estimated_budget)
{
	let advice;
	let available_budget =  parseInt(actual_budget);
	let estimatedBudget =  parseInt(estimated_budget);

	if( available_budget === estimatedBudget)
	{
		advice = "your budget limit has been has been reached, you should consider stop adding items";
	}
	else 
		if(available_budget > estimatedBudget)
		{
			let remaining_cash = available_budget - estimatedBudget;
			let equivalent_string = remaining_cash.toString();

			advice = "you still have " + equivalent_string + " left in your budget, you can still add items";
		}
	else
	{
		advice  = "your have items are over your budget, you should consider removing un-important items";
	}

	return advice;
}


let print_overal_list = function (itemsList, quantitiesList, priceList, actualBudget, overalEstimateBudget)
{
	let number_of_columns;
	let body = document.getElementsByTagName("body")[0];

	let table = document.createElement("Table");
	let tableBody = document.createElement("TableBody");

	for(let index = 0 ; index < itemsList.length; index++) // accounts for the cells
	{

		let row = document.createElement("tr");
			for(let pos = 0; pos < number_of_columns; pos++)
			{
				let quantity_num = quantitiesList[index].toString();
				let prices = priceList[index].toString();
				let num_quanty = quantitiesList.toString();

				let cell_box = document.createElement("td");
				let cellText = document.createTextNode(itemsList[index] + "               " + quantity_num + "               " + prices + "               " + num_quanty);
				cell_box.appendChild(cellText);
				row.appendChild(cell_box);
			}
		tableBody.appendChild(row);
	}

	table.appendChild(tableBody);
	body.appendChild(table);
	table.setAttribute("border", "2");

}	

function getItemList(){
	
	return itemsList;
	
}

module.exports = quantity;
module.exports.getItemList = getItemList;