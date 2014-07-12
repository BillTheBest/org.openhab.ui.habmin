define([
        "dojo/_base/declare",
        "dojo/_base/lang",

        "dojox/layout/TableContainer",

        "dijit/form/ValidationTextBox",
        "dijit/form/NumberSpinner",
        "dijit/form/Select",
        "app/dashboard/SaveChart/ColorSelectButton",
        "app/dashboard/SaveChart/LineStyleStore",

        "dojo/i18n!app/nls/SaveChart"
    ],
    function (declare, lang, TableContainer, TextBox, NumberSpinner, Select, ColorButton, LineStyleStore, langSaveChart) {
        return declare([TableContainer], {
            cols: 1,
            labelWidth: "150",

            cfgType: 'axis',
            cfgLabel: "",
            cfgFormat: "",
            cfgColor: "#ffffff",
            cfgMinimum: "",
            cfgMaximum: "",

            cfgMajorLineColor: "#000000",
            cfgMajorLineWidth: "1",
            cfgMajorLineStyle: "None",
            cfgMinorLineColor: "#000000",
            cfgMinorLineWidth: "1",
            cfgMinorLineStyle: "None",

            postCreate: function () {
                this.inherited(arguments);
                var childStyle = "width:98%";

                var lineStore = new LineStyleStore();

                this.labelEditor = new TextBox({
                    label: langSaveChart.Label,
                    style: childStyle,
                    value: this.cfgLabel
                });
                this.formatEditor = new TextBox({
                    label: langSaveChart.Format,
                    style: childStyle,
                    value: this.cfgFormat
                });
                this.colorEditor = new ColorButton({
                    label: langSaveChart.Color,
                    style: childStyle,
                    colorValue: this.cfgColor
                });
                this.minimumEditor = new NumberSpinner({
                    label: langSaveChart.Minimum,
                    style: childStyle,
                    value: this.cfgMinimum
                });
                this.maximumEditor = new NumberSpinner({
                    label: langSaveChart.Maximum,
                    style: childStyle,
                    value: this.cfgMaximum
                });

                this.majorLineColorEditor = new ColorButton({
                    label: langSaveChart.MajorLineColor,
                    style: childStyle,
                    colorValue: this.cfgMajorLineColor
                });
                this.majorLineWidthEditor = new NumberSpinner({
                    label: langSaveChart.MajorLineWidth,
                    style: childStyle,
                    value: this.cfgMajorLineWidth,
                    required: true,
                    constraints: { min: 0, max: 30 },
                    invalidMessage: langSaveChart.LineWidthInvalid
                });
                this.majorLineStyleEditor = new Select({
                    label: langSaveChart.MajorLineStyle,
                    style: childStyle,
                    value: this.cfgMajorLineStyle,
                    store: lineStore.getStore()
                });

                this.minorLineColorEditor = new ColorButton({
                    label: langSaveChart.MinorLineColor,
                    style: childStyle,
                    colorValue: this.cfgMinorLineColor
                });
                this.minorLineWidthEditor = new NumberSpinner({
                    label: langSaveChart.MinorLineWidth,
                    style: childStyle,
                    value: this.cfgMinorLineWidth,
                    required: true,
                    constraints: { min: 0, max: 30 },
                    invalidMessage: langSaveChart.LineWidthInvalid
                });
                this.minorLineStyleEditor = new Select({
                    label: langSaveChart.MinorLineStyle,
                    style: childStyle,
                    value: this.cfgMinorLineStyle,
                    store: lineStore.getStore()
                });

                this.addChild(this.labelEditor);
                this.addChild(this.formatEditor);
                this.addChild(this.colorEditor);
                this.addChild(this.minimumEditor);
                this.addChild(this.maximumEditor);
                this.addChild(this.majorLineColorEditor);
                this.addChild(this.majorLineWidthEditor);
                this.addChild(this.majorLineStyleEditor);
                this.addChild(this.minorLineColorEditor);
                this.addChild(this.minorLineWidthEditor);
                this.addChild(this.minorLineStyleEditor);
            },
            updateData: function () {
                this.cfgLabel = this.labelEditor.get("value");
                this.cfgFormat = this.formatEditor.get("value");
                this.cfgColor = this.colorEditor.get("value");
                this.cfgMinimum = this.minimumEditor.get("value");
                this.cfgMaximum = this.maximumEditor.get("value");
                this.cfgMajorLineColor = this.majorLineColorEditor.getValue();
                this.cfgMajorLineWidth = this.majorLineWidthEditor.get("value");
                this.cfgMajorLineStyle = this.majorLineStyleEditor.get("value");
                this.cfgMinorLineColor = this.minorLineColorEditor.getValue();
                this.cfgMinorLineWidth = this.minorLineWidthEditor.get("value");
                this.cfgMinorLineStyle = this.minorLineStyleEditor.get("value");
            }
        })
    });
