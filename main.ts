function print_to_console(): void {
    const norm_style = "color: white; backround-color: blue;";
    console.log(
        "%cThis is the%c world we%c live in %cright now",
        norm_style,
        "color: red; background-color: green;",
        norm_style,
        "color: blue; background-color: pink;"
    );
}

function alert_user() {
    alert("Someone clicked on a button. Was that you?");
}