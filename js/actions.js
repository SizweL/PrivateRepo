var task = [];
//placeholders for removed task
var complete = [];

var PriceEstimate = [];

var Quantity = [];

	function add(_task,price_estimate,quantity) {
		 task.push(_task);
		PriceEstimate.push(price_estimate);
		Quantity.push(quantity);
	}
	
	function getTask() {
		var task_arr = task;
		 return task_arr;
	 }
	 
	 function getPrice() {
		var PriceEstimate_arr = PriceEstimate;
		 return PriceEstimate_arr;
	 }
	 
	 function getQuantity() {
		var Quantity_arr = Quantity;
		 return Quantity_arr;
	 }
	 
	 function getComplete() {
		var complete_arr = complete;
		 return complete_arr;
	 }

	
	function remove(complete_task) {
		if (typeof complete_task === "string") {
			complete.push(complete_task);
			//check if the completed task already exits in the task when checked, then remove it
			task.splice(task.indexOf(complete_task), 1);
		}
		else if (typeof complete_task === "object") {
			for (var i = 0; i < complete_task.length; i++) {
				complete.push(complete_task[i]);
				task.splice(task.indexOf(complete_task[i]), 1);
			}
		}
	}
	
	module.exports.add = add;
	module.exports.remove = remove;
	module.exports.getComplete = getComplete;
	module.exports.getPrice = getPrice;
	module.exports.getQuantity = getQuantity;
	module.exports.getTask = getTask;
