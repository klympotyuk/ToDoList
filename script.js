var todoList=[];

var todoApp=angular.module("todoApp",['ngStorage']);
todoApp.controller("workCtrl",function($scope,$localStorage){       
    if($localStorage.works==null){
        $scope.data=todoList;
    }
    else{
        $scope.data = $localStorage.works;
    }
    $scope.addWork= function(){
        $scope.data.push({
            name: $scope.work,
            description: $scope.description,
            date: $scope.date,
            completed: $scope.completed
        });
        $scope.work="";
        $scope.description="";
        $scope.date="";
        $scope.completed="";
        $localStorage.works = $scope.data;        
    }
    $scope.YorN=function(completed){
        return completed ? "yes" : "no";
    }
    $scope.removeWork=function(item){
        var index=$scope.data.indexOf(item);
        $scope.data.splice(index,1);
    }    
});