define([
        "dojo/_base/declare",
        "dojo/_base/lang",

        "dojox/layout/TableContainer",

        "dijit/form/ValidationTextBox",
        "dijit/form/NumberSpinner",
        "dijit/form/Select",
        "dijit/form/CheckBox",
        "dijit/ColorPalette",

        "dojo/store/Memory",
        "dojo/data/ObjectStore",

        "app/common/ItemModelStore",

        "app/dashboard/SaveChart/LineStyleStore",
        "app/dashboard/SaveChart/ColorSelectButton",

        "dojo/i18n!app/nls/SaveChart"
    ],
    function (declare, lang, TableContainer, TextBox, NumberSpinner, Select, CheckBox, ColorPalette, Memory, ObjectStore, ItemModelStore, LineStyleStore, ColorButton, langSaveChart) {
        return declare([TableContainer], {
            cols: 1,
            labelWidth: "150",

            cfgType: 'item',
            cfgItem: "",
            cfgLabel: "",
            cfgAxis: 1,
            cfgLineColor: "",
            cfgLineWidth: 1,
            cfgLineStyle: "",
            cfgMarkerColor: "",
            cfgMarkerStyle: "",
            cfgLegend: true,
            cfgRepeatTime: 0,

            postCreate: function () {
                this.inherited(arguments);
                var childStyle = "width:98%";

                var lineStore = LineStyleStore();

                if (this.cfgLegend == null)
                    this.cfgLegend = false;
                else if (this.cfgLegend == "true")
                    this.cfgLegend = true;
                else
                    this.cfgLegend = false;

                var axisStore = new Memory({
                    data: [
                        {label: "Left", id: "left"},
                        {label: "Right", id: "right"}
                    ]
                });

                var axisOs = new ObjectStore({ objectStore: axisStore });

                this.itemEditor = new Select({
                    label: langSaveChart.Item,
                    style: childStyle,
                    value: this.cfgItem,
                    labelAttr: "name",
                    labelType: "text",
                    required: true
                });
                this.labelEditor = new TextBox({
                    label: langSaveChart.Label,
                    style: childStyle,
                    value: this.cfgLabel
                });
                this.typeEditor = new TextBox({
                    label: langSaveChart.ChartType,
                    style: childStyle,
                    value: this.cfgType
                });
                this.axisEditor = new Select({
                    label: langSaveChart.Axis,
                    style: childStyle,
                    value: this.cfgAxis,
                    required: true,
                    store: axisOs
                });
                this.lineColorEditor = new ColorButton({
                    label: langSaveChart.LineColor,
                    style: childStyle,
                    colorValue: this.cfgLineColor
                });
                this.lineWidthEditor = new NumberSpinner({
                    label: langSaveChart.LineWidth,
                    style: childStyle,
                    value: this.cfgLineWidth,
                    required: true,
                    constraints: { min: 0, max: 30 },
                    invalidMessage: langSaveChart.LineWidthInvalid
                });
                this.lineStyleEditor = new Select({
                    label: langSaveChart.LineStyle,
                    style: childStyle,
                    value: this.cfgLineStyle,
                    store: lineStore.getStore()
                });
                this.markerColorEditor = new ColorButton({
                    label: langSaveChart.MarkerColor,
                    style: childStyle,
                    value: this.cfgMarkerColor
                });
                this.markerStyleEditor = new Select({
                    label: langSaveChart.MarkerStyle,
                    style: childStyle,
                    value: this.cfgMarkerStyle
                });
                this.legendEditor = new CheckBox({
                    label: langSaveChart.DisplayLegend,
                    value: this.cfgLegend
                });
                this.timeEditor = new NumberSpinner({
                    label: langSaveChart.RepeatTime,
                    style: childStyle,
                    value: this.cfgRepeatTime
                });

                this.addChild(this.itemEditor);
                this.addChild(this.labelEditor);
                this.addChild(this.axisEditor);
                this.addChild(this.lineColorEditor);
                this.addChild(this.lineWidthEditor);
                this.addChild(this.lineStyleEditor);
                this.addChild(this.markerColorEditor);
                this.addChild(this.markerStyleEditor);
                this.addChild(this.legendEditor);
                this.addChild(this.timeEditor);

                ItemModelStore().loadStore().then(lang.hitch(this, function () {
                    console.log("Inner called");
                    console.log("Store is", ItemModelStore().getStore());

                    this.itemEditor.setStore(ItemModelStore().getStore(), this.cfgItem, null);
                }));

                this.itemEditor.on("change", lang.hitch(this, function() {
                    var sel = ItemModelStore().query({name: this.itemEditor.get("value")});
                    console.log("New item selected:", this.itemEditor.get("value"), sel);
                    if(sel.length == 1)
                        this.labelEditor.set("value", sel[0].label);
                }));
            },
            updateData: function () {
                this.cfgLabel = this.labelEditor.get("value");
                this.cfgAxis = this.axisEditor.get("value");
                this.cfgLineColor = this.lineColorEditor.getValue();
                this.cfgLineWidth = this.lineWidthEditor.get("value");
                this.cfgLineStyle = this.lineStyleEditor.get("value");
                this.cfgMarkerColor = this.markerColorEditor.getValue();
                this.cfgMarkerStyle = this.markerStyleEditor.get("value");
                this.cfgRepeatTime = this.timeEditor.get("value");
            }
        })
    });
