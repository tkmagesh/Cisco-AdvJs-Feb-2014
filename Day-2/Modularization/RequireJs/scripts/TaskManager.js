
define(['TaskStorage','jquery'],function(taskStorage,$){

	function init(){
		
		$("#btnAdd").click(onBtnAddClick);
		$("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
		$("#ulTaskList").on("click","li",onTaskItemClick);
		loadTasksFromStorage();
	};

	function loadTasksFromStorage(){
		taskStorage.getAll().forEach(function(t){addTaskToUi(t);});
	}

	function onBtnAddClick(){
		var newTask = taskStorage.add($("#txtTask").val());
		addTaskToUi(newTask);
	}

	function addTaskToUi(newTask){
		$("<li>").html(newTask.name).attr("task-id",newTask.id).appendTo("#ulTaskList");
	}
	function onBtnRemoveCompletedClick(){
		$("#ulTaskList > li.completed").each(function(){
			taskStorage.remove($(this).attr("task-id"));
			$(this).remove();
		})
		
	}
	function onTaskItemClick(){
		$(this).toggleClass("completed");
	}

	return {
		init  : init
	}

});