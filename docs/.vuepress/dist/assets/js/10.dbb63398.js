(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{166:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p"),t._m(1),e("p"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("In Highcharts, the option is found here: "),e("a",{attrs:{href:"https://api.highcharts.com/highcharts/series.line.color",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.highcharts.com/highcharts/series.line.color"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Since the settings already go directly into the series that we're applying it to, we just need to do the following:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("The presets are sort of like pre-build configuration. With them, you won't need to read or understand\nthe API of the JS library you're working with. In fact, it will do most of the job for you.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),e("p",[t._v("The available presets differ depending on the JS library you're using. You can find the list of available presets below.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"customize-datasets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customize-datasets","aria-hidden":"true"}},[this._v("#")]),this._v(" Customize datasets")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#generic-customization"}},[this._v("Generic customization")])]),s("li",[s("a",{attrs:{href:"#dataset-presets-heart"}},[this._v("Dataset Presets ❤️")]),s("ul",[s("li",[s("a",{attrs:{href:"#chartjs"}},[this._v("Chartjs")])]),s("li",[s("a",{attrs:{href:"#highcharts"}},[this._v("Highcharts")])]),s("li",[s("a",{attrs:{href:"#fusioncharts"}},[this._v("Fusioncharts")])]),s("li",[s("a",{attrs:{href:"#echarts"}},[this._v("Echarts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"generic-customization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generic-customization","aria-hidden":"true"}},[this._v("#")]),this._v(" Generic customization")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To customize any chart dataset, you can us ethe "),s("code",[this._v("options()")]),this._v(" method, the same as the chart customization, but in this case\nin the dataset instance. This will ensure the setting is for the dataset. Following the example, imagine you want to set\ntwo dataset for your line chart. One will be red and the other blue. You can use the API docs to determine what option sets\nthe line color.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("The settings won't overwrite the old ones, in fact they merge, so you can call "),s("code",[this._v("options()")]),this._v(" multiple times adding just the\noption you want without deleting the old ones.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{attrs:{class:"token variable"}},[t._v("$chart")]),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token function"}},[t._v("dataset")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Sample'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'line'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token number"}},[t._v("1")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("2")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("3")]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token function"}},[t._v("options")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'color'")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'#ff0000'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("Try using the presets done specifically for the library. They are most likely all you'll need.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"dataset-presets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dataset-presets","aria-hidden":"true"}},[this._v("#")]),this._v(" Dataset Presets ❤️")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To call a preset, simply call the method. As an example, if a method "),s("code",[this._v("presetExampleMethod()")]),this._v(" i present in your\nlibrary, you can then call it like so:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{attrs:{class:"token variable"}},[t._v("$chart")]),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token function"}},[t._v("dataset")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token function"}},[t._v("presetExampleMethod")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"chartjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chartjs","aria-hidden":"true"}},[this._v("#")]),this._v(" Chartjs")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("color($color)")])]),t._v(" "),e("td",[t._v("Set the dataset border color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("backgroundColor($color)")])]),t._v(" "),e("td",[t._v("Set the dataset background color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("fill(bool $filled)")])]),t._v(" "),e("td",[t._v("Determines if the dataset is filled.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("lineTension(float $tension)")])]),t._v(" "),e("td",[t._v("Set the chart line tension.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dashed(array $dashed = [5])")])]),t._v(" "),e("td",[t._v("Set the line to a dashed line in the chart options.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"highcharts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#highcharts","aria-hidden":"true"}},[this._v("#")]),this._v(" Highcharts")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("Parameter")]),this._v(" "),s("th",[this._v("Description")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[s("code",[this._v("color($color)")])]),this._v(" "),s("td",[this._v("Set the dataset color.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"fusioncharts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fusioncharts","aria-hidden":"true"}},[this._v("#")]),this._v(" Fusioncharts")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("Parameter")]),this._v(" "),s("th",[this._v("Description")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[s("code",[this._v("color($color)")])]),this._v(" "),s("td",[this._v("Set the dataset color.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"echarts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#echarts","aria-hidden":"true"}},[this._v("#")]),this._v(" Echarts")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("Parameter")]),this._v(" "),s("th",[this._v("Description")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[s("code",[this._v("color($color)")])]),this._v(" "),s("td",[this._v("Set the dataset color.")])])])])}],!1,null,null,null);r.options.__file="customize_datasets.md";s.default=r.exports}}]);