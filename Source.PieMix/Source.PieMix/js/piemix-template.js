
    (function () {
        "use strict";

        var peiMixTemplates = {"pieMixMasterTmpl":"        <div class=\"pie-mix-holder\" ng-style=\"{'height': piemixctrl.svgHolderHeight + 'px'}\">            <svg height=\"{{piemixctrl.svgHeight}}\" width=\"{{piemixctrl.svgWidth}}\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">                <path tabindex=\"0\" ng-attr-d=\"{{path.d}}\" ng-attr-priority=\"{{path.priority}}\" ng-style=\"{'fill' : path.activecolor, 'stroke':piemixctrl.strokeColor, 'stroke-width':piemixctrl.strokeWidth}\" ng-repeat=\"path in piemixctrl.generatedPies  | orderBy:'priority':'false'\" ng-click=\"piemixctrl.pieSliceClicked(path)\" ng-mouseenter=\"path.activecolor = '#000'\" ng-mouseleave=\"path.activecolor = path.color\"/>                <rect ng-if=\"piemixctrl.showLabels != false\" ng-attr-x=\"{{path.colorBox.x}}\" ng-attr-y=\"{{path.colorBox.y}}\" width=\"15\" height=\"15\" style=\"fill-opacity:0;\" ng-click=\"piemixctrl.pieSliceClicked(path)\" ng-style=\"{'fill': path.activecolor, 'fill-opacity': path.fillOpacity}\" ng-repeat=\"path in piemixctrl.generatedPies  | orderBy:'priority':'false'\" ng-mouseenter=\"path.activecolor = '#000'\" ng-mouseleave=\"path.activecolor = path.color\"/>                <text ng-if=\"piemixctrl.showLabels != false\" ng-attr-x=\"{{path.textBox.x}}\" ng-attr-y=\"{{path.textBox.y}}\" ng-repeat=\"path in piemixctrl.generatedPies  | orderBy:'priority':'false'\">{{path.title}}</text>                <polyline ng-if=\"piemixctrl.showLabels != false\" ng-attr-points=\"{{path.ptr}}\" fill=\"none\" stroke=\"#000\" ng-attr-stroke-width=\"{{path.activecolor != '#000' ? 1 : 2}}\" ng-attr-stroke-opacity=\"{{path.activecolor != '#000' ? 0.50 : 1}}\" stroke-linecap=\"round\" stroke-dasharray=\"1, 5\" ng-repeat=\"path in piemixctrl.generatedPies  | orderBy:'priority':'false'\"/>                <circle ng-if=\"piemixctrl.showStrokeCircleAtCenter == true\" ng-attr-cx=\"{{piemixctrl.strokeCircle.cx}}\" ng-attr-cy=\"{{piemixctrl.strokeCircle.cy}}\" ng-attr-r=\"{{piemixctrl.strokeCircle.r}}\" ng-style=\"{'fill' : piemixctrl.strokeCircle.fill, 'stroke':piemixctrl.strokeColor, 'stroke-width':piemixctrl.strokeWidth}\"/>            </svg>        </div>    "};

        angular.module('piemix.modules')
         .run(["$templateCache", function ($templateCache) {
             $templateCache.put("template/piemix/template.html", peiMixTemplates.pieMixMasterTmpl);
         }])
    })();
