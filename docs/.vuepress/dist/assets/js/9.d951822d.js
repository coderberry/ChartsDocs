(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{168:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Charts accepts what's said to be the whole JS library API. That means that you can inject any option to the chart\nconfiguration directly with PHP. For example, Imagine you want to set a generic config of the Echarts library. In\nthis example you'll see how to enable/disable the chart tooltip based on the API Echarts provide.")]),t._v(" "),s("p",[t._v("The specified option is: "),s("a",{attrs:{href:"https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.show",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.show"),s("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),s("p",[t._v("Charts will automatically set the options up for you. You just need to relax and see your tooltip appear / disappear.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("The presets are sort of like pre-build configuration. With them, you won't need to read or understand\nthe API of the JS library you're working with. In fact, it will do most of the job for you.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),s("p",[t._v("The available presets differ depending on the JS library you're using. You can find the list of available presets below.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"customize-charts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customize-charts","aria-hidden":"true"}},[this._v("#")]),this._v(" Customize charts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#generic-customization"}},[this._v("Generic customization")])]),e("li",[e("a",{attrs:{href:"#chart-presets-heart"}},[this._v("Chart Presets ❤️")]),e("ul",[e("li",[e("a",{attrs:{href:"#chartjs"}},[this._v("Chartjs")])]),e("li",[e("a",{attrs:{href:"#highcharts"}},[this._v("Highcharts")])]),e("li",[e("a",{attrs:{href:"#fusioncharts"}},[this._v("Fusioncharts")])]),e("li",[e("a",{attrs:{href:"#echarts"}},[this._v("Echarts")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"generic-customization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generic-customization","aria-hidden":"true"}},[this._v("#")]),this._v(" Generic customization")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("You can use the "),s("code",[t._v("options()")]),t._v(" method on the chart instance to setup any API settings you wish. As the API docs tell you,\nyou need to set to "),s("code",[t._v("true")]),t._v(" or "),s("code",[t._v("false")]),t._v(" the option found in "),s("code",[t._v("tooltip.show")]),t._v(". To do it, simply call the "),s("code",[t._v("options")]),t._v(" with the settings.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("The settings won't overwrite the old ones, in fact they merge, so you can call "),e("code",[this._v("options()")]),this._v(" multiple times adding just the\noption you want without deleting the old ones.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$chart")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("options")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'tooltip'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'show'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// or false, depending on what you want.")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("Try using the presets done specifically for the library. They are most likely all you'll need.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"chart-presets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chart-presets","aria-hidden":"true"}},[this._v("#")]),this._v(" Chart Presets ❤️")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To call a preset, simply call the method. As an example, if a method "),e("code",[this._v("presetExampleMethod()")]),this._v(" i present in your\nlibrary, you can then call it like so:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$chart")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("presetExampleMethod")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chartjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chartjs","aria-hidden":"true"}},[this._v("#")]),this._v(" Chartjs")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("minimalist(bool $display)")])]),t._v(" "),s("td",[t._v("Minalist chart display (Hide labels and axes).")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("displayLegend(bool $legend)")])]),t._v(" "),s("td",[t._v("Display the chart legend.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("displayAxes(bool $axes, bool $strict = false)")])]),t._v(" "),s("td",[t._v("Set the bar width of the X Axis.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("barWidth(float $width)")])]),t._v(" "),s("td",[t._v("Display the chart legend.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("title(string $title, int $font_size = 14, string $color = '#666', bool $bold = true, string $font_family = \"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif\")")])]),t._v(" "),s("td",[t._v("Set the chart title.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"highcharts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#highcharts","aria-hidden":"true"}},[this._v("#")]),this._v(" Highcharts")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("displayAxes(bool $axes)")])]),t._v(" "),s("td",[t._v("Display the chart axes.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("displayLegend(bool $legend)")])]),t._v(" "),s("td",[t._v("Display the chart legend.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("labelsRotation(float $angle)")])]),t._v(" "),s("td",[t._v("Rotates the labels of the xAxis.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("minimalist(bool $display = false)")])]),t._v(" "),s("td",[t._v("Set the chart style to minimalist.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("label(string $label)")])]),t._v(" "),s("td",[t._v("Set the highcharts yAxis label.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("title(string $title)")])]),t._v(" "),s("td",[t._v("Set the chart title.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("doughnut(int $size = 50)")])]),t._v(" "),s("td",[t._v("Shapes the pie chart into a doughnut. (this affects all pie charts)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"fusioncharts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fusioncharts","aria-hidden":"true"}},[this._v("#")]),this._v(" Fusioncharts")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("label(string $label)")])]),t._v(" "),s("td",[t._v("Set the chart label.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("title(string $title, int $font_size = 16, string $color = '#3D4852', bool $bold = true, string $font_family = \"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif\")")])]),t._v(" "),s("td",[t._v("Set the chart title.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("subtitle(string $subtitle, int $font_size = 12, string $color = '#3D4852', bool $bold = true, string $font_family = \"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif\")")])]),t._v(" "),s("td",[t._v("Set the chart subtitle.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("export(bool $export, bool $client = true)")])]),t._v(" "),s("td",[t._v("Determines if the chart should show the export button.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"echarts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#echarts","aria-hidden":"true"}},[this._v("#")]),this._v(" Echarts")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("displayLegend(bool $legend)")])]),t._v(" "),s("td",[t._v("Show or hide the chart legend.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("tooltip(bool $tooltip)")])]),t._v(" "),s("td",[t._v("Show or hide the tooltip.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("label(string $label)")])]),t._v(" "),s("td",[t._v("Set the chart label.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("minimalist(bool $minimalist = true)")])]),t._v(" "),s("td",[t._v("Show the minimalistic.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("displayAxes(bool $display)")])]),t._v(" "),s("td",[t._v("Display the chart axes.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("export(bool $export = true, string $title = ' ')")])]),t._v(" "),s("td",[t._v("ALlow to export the chart.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("title(string $title, int $font_size = 14, string $color = '#666', bool $bold = true, string $font_family = \"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif\")")])]),t._v(" "),s("td",[t._v("Set the chart title.")])])])])}],!1,null,null,null);r.options.__file="customize_charts.md";e.default=r.exports}}]);