
$(function () {

    $("#btnNewBurger").on("click", function (event) {
        event.preventDefault();
        console.log("Are we getting to the click event")
        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };
        console.log("New Burger" + newBurger.burger_name);
        console.log("right before ajax call")
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("new burger added");
            location.reload();
        });
    });

    $(".eat-burger").on("click", function (event) {
        event.preventDefault();

        console.log("CLICKED!!")
        var id = $(this).data("id");
        var burgerDevoured = $(this).data("devoured");

        var devouredState = {
            devoured: 1
        };
        console.log(devouredState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("changed devoured to ", burgerDevoured);
                location.reload();
            });
    });

    $("#btnRemoveBurger").on("click", function (event) {
        event.preventDefault();

        console.log("CLICKED!!")
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger");
                location.reload();
            });
    });
})
