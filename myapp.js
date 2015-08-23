var drawer = tabris.create("Drawer");
drawer.append(tabris.create("PageSelector"));

var page2 = tabris.create("Page", {
  title: "Scanner un nouvel article",
  topLevel: true
});

var page = tabris.create("Page", {
  title: "Hello, World!",
  topLevel: true
});

var button = tabris.create("Button", {
  text: "Native Widgets",
  layoutData: {centerX: 0, top: 100}
}).appendTo(page);

var textView = tabris.create("TextView", {
  font: "24px",
  layoutData: {centerX: 0, top: [button, 50]}
}).appendTo(page);

button.on("select", function() {
  textView.set("text", "Totally Rock!");
});

drawer.open();