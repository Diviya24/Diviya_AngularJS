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
    .module("Demo", ["ui.Route"])
    .config(function ($stateProvider, $locationProvider) {
        $stateProvider
            .state("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController",
                controllerAs: "homeCtrl"
            })
            .state("/courses", {
                templateUrl: "Templates/courses.html",
                controller: "coursesController as coursesCtrl",
                controllerAs: "coursesCtrl"
            })
            .state("/students", {
                templateUrl: "Templates/students.html",
                controller: "studentsController as studentsCtrl",
                controllerAs: "studentsCtrl"
                 resolve: {
                    studentslist: function ($http) {
                        return $http.get("StudentService.asmx/GetAllStudents")
                            .then(function (response) {
                                return response.data;
                            })
                    }
                }
            })
            .when("/students/:id", {
                templateUrl: "Templates/studentDetails.html",
                controller: "studentDetailsController as studentDetailsCtrl",
                controllerAs: "studentDetailsCtrl"
            })
            .when("/studentsSearch/:name?", {
                templateUrl: "Templates/studentsSearch.html",
                controller: "studentsSearchController",
                controllerAs: "studentsSearchCtrl"

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
   controller("studentsController", function (studentslist,$state, $route) {
        var vm = this;
        vm.studentSearch = function () {
            if (vm.name)
                $location.url("/studentsSearch/" + vm.name)
            else
                $location.url("/studentsSearch")
        }

        $scope.$on("$routeChangeStart", function (event, next, current) {
            $log.debug("RouteChangeStart Event");
            $log.debug(event);
            $log.debug(next);
            $log.debug(current);
        });

        $scope.$on("$locationChangeStart", function (event, next, current) {
            $log.debug("LocationChangeStart Event");
            $log.debug(event);
            $log.debug(next);
            $log.debug(current);
        });

        vm.reloadData = function () {
            $state.reload();
        }
        vm.students = studentslist;

        $http.get("StudentService.asmx/GetAllStudents")
            .then(function (response) {
                vm.students = response.data;
            })
    })*/
    

//html7
/*var app = angular
    .module("JS", [])
    .controller("redColourController", function ($scope, $rootScope) {
        $rootScope.rootScopeColour = "I am Root Scope Colour";
        $scope.redColour = "I am Red Colour";
    })
    .controller("greenColourController", function ($scope) {
        $scope.greenColour = "I am Green Colour";
    })*/
var app = angular
    .module("Demo", ["ui.router"])
    .config(function ($urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "Templates/home.html",
                controller: "homeController",
                controllerAs: "homeCtrl"
                  data: {
                    customData1: "Home State Custom Data 1",
                    customData2: "Home State Custom Data 2"
                }
            })
            .state("courses", {
                url: "/courses",
                templateUrl: "Templates/courses.html",
                controller: "coursesController",
                controllerAs: "coursesCtrl"
                data: {
                    customData1: "Courses State Custom Data 1",
                    customData2: "Courses State Custom Data 2"
                }
            })

            .state("students", {
                url: "/students",
                templateUrl: "Templates/students.html",
                controller: "studentsController",
                controllerAs: "studentsCtrl",
                resolve: {
                    studentslist: function ($http, $location) {
                        return $http.get("StudentService.asmx/GetAllStudents")
                            .then(function (response) {
                                return response.data;
                            })
                    }
                }
            })
    })
    .state("studentDetails", {
        url: "/students/:id",
        templateUrl: "Templates/studentDetails.html",
        controller: "studentDetailsController",
        controllerAs: "studentDetailsCtrl"
    })
    .state("studentsSearch", {
        url: "/studentsSearch/:name",
        templateUrl: "Templates/studentsSearch.html",
        controller: "studentsSearchController",
        controllerAs: "studentsSearchCtrl"
    })
    .state("studentParent", {
        url: "/students",
        controller: "studentParentController",
        controllerAs: "stdParentCtrl",
        templateUrl: "Templates/studentParent.html",
        resolve: {
            studentTotals: function ($http) {
                return $http.get("StudentService.asmx/GetStudentTotals")
                    .then(function (response) {
                        return response.data;
                    })
            }
        },
        abstract: true

    })
    .state("studentParent.students", {
        url: "/",
        templateUrl: "Templates/students.html",
        controller: "studentsController",
        controllerAs: "studentsCtrl",
        resolve: {
            studentslist: function ($http) {
                return $http.get("StudentService.asmx/GetAllStudents")
                    .then(function (response) {
                        return response.data;
                    })
            }
        }
    })
    .state("studentParent.studentDetails", {
        url: "/:id",
        templateUrl: "Templates/studentDetails.html",
        controller: "studentDetailsController",
        controllerAs: "studentDetailsCtrl"
    })
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
    })
    .controller("homeController", function ($state) {
        this.message = "Home Page";

        this.homeCustomData1 = $state.current.data.customData1;
        this.homeCustomData2 = $state.current.data.customData2;

        this.coursesCustomData1 = $state.get("courses").data.customData1;
        this.coursesCustomData2 = $state.get("courses").data.customData2;
    })

    .controller("studentsController", function (studentslist, $state, $location) {
        var vm = this;

        vm.studentSearch = function () {
            if (vm.name)
                $location.url("/studentsSearch/" + vm.name)
            else
                $location.url("/studentsSearch")
        }

        vm.reloadData = function () {
            $state.reload();
        }

        vm.students = studentslist;
    })
    .controller("studentDetailsController", function ($http, $stateParams) {
        var vm = this;
        $http({
            url: "StudentService.asmx/GetStudent",
            method: "get",
            params: { id: $stateParams.id }
        }).then(function (response) {
            vm.student = response.data;
        })
    })
    .controller("studentsController", function (studentslist, $state, $location, studentTotals) {
        var vm = this;

        vm.studentSearch = function () {
            $state.go("studentsSearch", { name: vm.name });
        }

        vm.reloadData = function () {
            $state.reload();
        }

        vm.students = studentslist;
        vm.studentTotals = studentTotals;

    })
    .controller("studentsSearchController", function ($http, $stateParams) {
        var vm = this;

        if ($stateParams.name) {
            $http({
                url: "StudentService.asmx/GetStudentsByName",
                method: "get",
                params: { name: $stateParams.name }
            }).then(function (response) {
                vm.students = response.data;
            })
        }
        else {
            $http.get("StudentService.asmx/GetAllStudents")
                .then(function (response) {
                    vm.students = response.data;
                })
        }
    })
    .controller("studentParentController", function (studentTotals) {
        this.males = studentTotals.males;
        this.females = studentTotals.females;
        this.total = studentTotals.total;
    })

//Html8
/*var app = angular
    .module("Demo", [])
    .controller("countryController", function () {
        this.name = "India";
    })
    .controller("stateController", function () {
        this.name = "Maharashtra";
    })
    .controller("cityController", function () {
        this.name = "Mumbai";
    });*/