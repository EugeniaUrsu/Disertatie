(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource",
                      ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;

        vm.searchCritetia = "GDN";

        productResource.query({ $filter: "substringof('GDN',ProductCode) eq true", $orderby: "Price desc" },
            function (data) {
                vm.products = data;
            });

    }
}());