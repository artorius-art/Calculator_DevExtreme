function masuk(data) {
    var inst = $("#textBox1").dxTextBox("instance");
    var tex = data.component.option("text");

    inst.option("value", (inst.option("value") + tex));
}
function notify(e) {
    var buttonText = e.component.option("text");
    DevExpress.ui.notify("The " + buttonText + " button was clicked");
}
function samadengan() {
    var angka = $("#textBox1").dxTextBox("instance");
    var hasil = angka.option("value");
    if (hasil) {
        angka.option("value", eval(hasil));
    }
}
function c() {
    var lec = $("#textBox1").dxTextBox("instance");
    lec.option("value", "");
}
function hapus() {
    var hap = $("#textBox1").dxTextBox("instance");
    hap.option("value", (hap.option("value").substring(0, hap.option("value").length - 1)));
}
