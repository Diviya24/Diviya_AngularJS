/// <reference path="angular.min.js" />
/// <reference path="angular-route.min.js" />
/*var myApp = angular.module("myModule", []

);


myApp.controller("myController", function ($scope) {
    var employee = [{
        firstName: "Pavi",
        lastName: "V",
        gender: "Female"
    },
        {
            firstName: "janani",
            lastName: "R",
            gender: "Female"
        },
        {
            firstName: "indhu",
            lastName: "s",
            gender: "Female"
        }
    ];
    var image = {
        name: "CherryBloom"
    };
    var country = [{
        name: "USA",
        cities: [
            { name: "London" },
            {name:"los wegas"}        ]
    },
        {
            name: "India",
            cities: [
                { name: "goa"},
                { name: "chennai" }]
        }
    ];
    var technologies = [
        { name: "c#",likes: 0, dislikes: 0 },
        { name: "JS",likes: 0, dislikes: 0 },
        { name: "Java",likes: 0, dislikes: 0 }
    ];

            var employees = [
                {
                    name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                    gender: "Male", salary: 55000.788
                },
                {
                    name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                    gender: "Female", salary: 68000
                },
                {
                    name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                    gender: "Male", salary: 57000
                },
                {
                    name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                    gender: "Female", salary: 53000
                },
                {
                    name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                    gender: "Male", salary: 60000
                }
    ];
    var employees1 = [
        {
            name: "Ben", dateOfBirth: new Date("November 23, 1980"),
            gender: "Male", salary: 55000
        },
        {
            name: "Sara", dateOfBirth: new Date("May 05, 1970"),
            gender: "Female", salary: 68000
        },
        {
            name: "Mark", dateOfBirth: new Date("August 15, 1974"),
            gender: "Male", salary: 57000
        },
        {
            name: "Pam", dateOfBirth: new Date("October 27, 1979"),
            gender: "Female", salary: 53000
        },
        {
            name: "Todd", dateOfBirth: new Date("December 30, 1983"),
            gender: "Male", salary: 60000
        }
    ];
    var employees2 = [
        { name: "Ben", gender: "Male", salary: 55000, city: "London" },
        { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
        { name: "Mark", gender: "Male", salary: 57000, city: "London" },
        { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
        { name: "Todd", gender: "Male", salary: 60000, city: "London" },
    ];

    $scope.employees2 = employees2;
    $scope.employees1 = employees1;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ?
            !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {

        if ($scope.sortColumn == column) {
            return $scope.reverseSort
                ? 'arrow-down'
                : 'arrow-up';
        }

        return '';
    }
    $scope.technologies = technologies;

    $scope.incrementLikes = function (technology) {
        technology.likes++;
    }
    $scope.incrementDisLikes = function (technology) {
        technology.dislikes++;
    }
    
    $scope.employees = employees;
    $scope.rowCount = 3;
    $scope.country = country;
    $scope.message = "Angular JS";
    $scope.employee = employee;
    $scope.image = image;
});*/

//html2
/*var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http) {

        $http.get("EmployeeService.asmx/GetAllEmployees")
            .then(function (response) {
                $scope.employees = response.data;
            });
    });*/

//html3
/*var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope, stringService) {
        $scope.transformString = function (input) {
            $scope.output = stringService.processString(input);
        };
    });*/

//html4
/*var demoApp = angular.module("demoApp", [])
    .controller("demoController", function
        ($scope, $location, $anchorScroll) {
        $scope.scrollTo = function (scrollLocation) {
            $location.hash(scrollLocation);
            $anchorScroll.yOffset = 20;
            $anchorScroll();
        }
    });*/

//html5
/*var demoApp = angular.module("demoApp", [])
    .controller("countryController",
        function ($scope, $location, $anchorScroll, $http) {
            $http.get("CountryService.asmx/GetData")
                .then(function (response) {
                    $scope.countries = response.data;
                });

            $scope.scrollTo = function (countryName) {
                $location.hash(countryName);
                $anchorScroll();
            }

        });*/

//html6
/*var app = angular
    .module("Demo", ["ngRoute"])
    .config(function ($routeProvider,$locationProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController"
            })
            .when("/courses", {
                templateUrl: "Templates/courses.html",
                controller: "coursesController"
            })
            .when("/students", {
                templateUrl: "Templates/students.html",
                controller: "studentsController"
            })
            .when("/students/:id", {
                templateUrl: "Templates/studentDetails.html",
                controller: "studentDetailsController"
            })
            .otherwise({
                redirectTo: "/home"
            })
        $locationProvider.html5Mode(true);
    })
    .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsController", function ($scope, $http) {
        $http.get("StudentService.asmx/GetAllStudents")
            .then(function (response) {
                $scope.students = response.data;
            })
    })
    .controller("studentDetailsController", function ($scope, $http, $routeParams) {
        $http({
            url: "StudentService.asmx/GetStudent",
            params: { id: $routeParams.id },
            method: "get"
        }).then(function (response) {
            $scope.student = response.data;
        })

    })*/

//html7
var app = angular
    .module("JS", [])
    .controller("redColourController", function ($scope, $rootScope) {
        $rootScope.rootScopeColour = "I am Root Scope Colour";
        $scope.redColour = "I am Red Colour";
    })
    .controller("greenColourController", function ($scope) {
        $scope.greenColour = "I am Green Colour";
    })