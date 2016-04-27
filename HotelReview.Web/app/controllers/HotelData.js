
var mvcapp = angular.module("mvcapp", []);

mvcapp.controller('hotelDataController', function ($scope, $http) {
    $scope.hotels =
        [{
            id: 1,
            name: 'Paradise'
        },
        {
            id: 2,
            name: 'Kakatiya'
        },
        {
            id: 3,
            name: 'ThePark'
        },
        {
            id: 4,
            name: 'Lemontree'
        },
        {
            id: 5,
            name: 'Westin'
        }
        ];


    // var hotelID = $scope.ddlname;
    var url = "api/HotelData";

    $scope.getcall = function () {
        var params = {
            id: $scope.ddlname.id
        };

        debugger;
        $http.get(url, params)
        .success(function (data) {
            debugger;
            $scope.getcallresult = data;
        })
        .error(function (data) {
            $scope.getcallresult = data;
        });

    }






    //$scope.GetValue = function (fruit) {

    //    var fruitId = $scope.ddlname.id;

    //    $window.alert("Selected Value: " + fruitId);

    //}    

    //mainApp.factory('MathService', function () {
    //    var factory = {};

    //    factory.multiply = function (a, b) {
    //        return a * b
    //    }
    //    return factory;
    //});

    //mainApp.service('CalcService', function (MathService) {
    //    this.square = function (a) {
    //        return MathService.multiply(a, a);
    //    }
});

//mainapp.controller("WebAPI", function ($scope, $http) {
//    $http({
//        method: 'GET',
//        url: 'http://localhost:51233/api/Hotel/getHotelReview/{id}'

//    })

//});


