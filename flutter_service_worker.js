'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fa7e80b84141cbb1115e13c2463f3ee4",
"assets/css/mono-blue.css": "834d3c56449004eca6f36662f2425706",
"assets/css/monokai-sublime.css": "21a69f39183227a80f1b196f29868af7",
"assets/css/monokai.css": "61e38729dbd8f81f129ae38770c9cd68",
"assets/FontManifest.json": "94a2494f1e7ff74a7d0b6cf4f3d4e39d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/js/highlight.pack.js": "2572688ff47e60804fc3d0a761bae404",
"assets/LICENSE": "3db8b26df1ed27bb3c0ea918e03e7952",
"assets/logos/logo_flutter_1080px_clr.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/vega_lite_specs/bar_histogram/bar_charts/bar_chart.json": "594a147aa3c1409ba19e577018602b77",
"assets/vega_lite_specs/bar_histogram/bar_charts/bar_chart.png": "8d00f68bdb313919c43f3b7d4dfcef95",
"assets/vega_lite_specs/bar_histogram/bar_charts/diverging_stacked_bar.vl.json": "94ae4dff32fb43f1c2b2b397d7b20671",
"assets/vega_lite_specs/bar_histogram/bar_charts/diverging_stacked_bar.vl.png": "c0b2f9a304ed864d14db4e62abf22761",
"assets/vega_lite_specs/bar_histogram/bar_charts/responsive_bar_chart.vl.json": "cba85d2c373e5d4729d1b8d6e234ba9d",
"assets/vega_lite_specs/bar_histogram/bar_charts/responsive_bar_chart.vl.png": "d2cacfa3a9a11b1d12b337721a2da0a6",
"assets/vega_lite_specs/bar_histogram/bar_charts/stacked_bar_chart_rounded_corner.vl.json": "f07dc4b89214d9d823a9562ec354ecf5",
"assets/vega_lite_specs/bar_histogram/bar_charts/stacked_bar_chart_rounded_corner.vl.png": "ec67d4e7d2a3719858fbc7fafc242c4c",
"assets/vega_lite_specs/bar_histogram/histograms/2d_histogram_heatmap.vl.json": "e10bf002bd12d14420c47bde03cb8794",
"assets/vega_lite_specs/bar_histogram/histograms/2d_histogram_heatmap.vl.png": "198415835149cddcb16cf4ff2ebba608",
"assets/vega_lite_specs/bar_histogram/histograms/binned_histogram.json": "375a203d4486320cd0bea37884c061be",
"assets/vega_lite_specs/bar_histogram/histograms/binned_histogram.png": "99eb7cd5d9659af17b992ccf51ddf30d",
"assets/vega_lite_specs/bar_histogram/histograms/layered_histogram.vl.json": "908371d69b243a62b6fe45de1fc0b927",
"assets/vega_lite_specs/bar_histogram/histograms/layered_histogram.vl.png": "7f0152fb0a17847f9cdd37b105a2cbcf",
"assets/vega_lite_specs/bar_histogram/histograms/stacked_density_estimates.vl.json": "602961707db270404f3a54dc078abdd5",
"assets/vega_lite_specs/bar_histogram/histograms/stacked_density_estimates.vl.png": "9929a41a813f6042048cac85515c5d9f",
"assets/vega_lite_specs/composite_marks/box_plots/bp_min_max.vl.json": "ba4374833bf884408944872217a9f680",
"assets/vega_lite_specs/composite_marks/box_plots/bp_min_max.vl.png": "8d1fe686a500d2e7acedc4f29377ae99",
"assets/vega_lite_specs/composite_marks/box_plots/turkey_min_max.vl.json": "3f6da0603a8e661e4a7a3ddfcbe0a3d7",
"assets/vega_lite_specs/composite_marks/box_plots/turkey_min_max.vl.png": "f2540d84f8dd707f0781e8a842a2aeca",
"assets/vega_lite_specs/composite_marks/error_bars_and_bands/line_chart_with_CI.vl.json": "6a0d27056f90c77ff99b4b2a801feeda",
"assets/vega_lite_specs/composite_marks/error_bars_and_bands/line_chart_with_CI.vl.png": "2c5642665b42b6a14067d5455ccaf31f",
"assets/vega_lite_specs/composite_marks/error_bars_and_bands/scatter_mean_SD.vl.json": "e0f92aa044a643795e7af1904d59ec05",
"assets/vega_lite_specs/composite_marks/error_bars_and_bands/scatter_mean_SD.vl.png": "86d22d16a656f874bce11a959f465148",
"assets/vega_lite_specs/interactive/interactive/interactive_index_chart.vl.json": "5125de0a869440cc3bbbc62dc55b68fe",
"assets/vega_lite_specs/interactive/interactive/interactive_index_chart.vl.png": "4833c275b17d45fe00446ceb7d3fc9db",
"assets/vega_lite_specs/interactive/interactive/interactive_legends.vl.json": "cd21601122f8a5b9d6f3739e9b1807db",
"assets/vega_lite_specs/interactive/interactive/interactive_legends.vl.png": "5272bd0bfd34f0a82f47e1da8efcca03",
"assets/vega_lite_specs/interactive/interactive/multi_series_line_tooltip.vl.json": "8430ef0219f5186b3230fc8848ff14e1",
"assets/vega_lite_specs/interactive/interactive/multi_series_line_tooltip.vl.png": "686a70bae79fc64f8726efe19da37b26",
"assets/vega_lite_specs/interactive/interactive/query_widget.vl.json": "408d2d11b40212cfc10edcfaddca80b5",
"assets/vega_lite_specs/interactive/interactive/query_widget.vl.png": "bbdb23dbb83895fee77d563813af342d",
"assets/vega_lite_specs/interactive/interactive/rect_brush_view_data.vl.json": "12fa409018ed7596df10ba07e4595c94",
"assets/vega_lite_specs/interactive/interactive/rect_brush_view_data.vl.png": "5a85feb6b3519561acba3c2db1fc8dd8",
"assets/vega_lite_specs/interactive/interactive/scatter_pan_and_zoom.vl.json": "e5704505ea9fca92465628ab98e8dc57",
"assets/vega_lite_specs/interactive/interactive/scatter_pan_and_zoom.vl.png": "02ae5a2f8524ba856814ee1fd7ba4a1f",
"assets/vega_lite_specs/interactive/interactive/scatter_rect_brush.vl.json": "bd2f34484d8d851c53143297fb376612",
"assets/vega_lite_specs/interactive/interactive/scatter_rect_brush.vl.png": "0c8758d214e11d82d6b50d273345f169",
"assets/vega_lite_specs/interactive_multiview/multiview/connection_airports.vl.json": "520a9b4fb0158020f0b30fc95e091e81",
"assets/vega_lite_specs/interactive_multiview/multiview/connection_airports.vl.png": "c25f7e8b79393b57f185aba051ffe5c5",
"assets/vega_lite_specs/interactive_multiview/multiview/cross_filter.vl.json": "a5d1bdfa8f9c1cda666656555f9273e0",
"assets/vega_lite_specs/interactive_multiview/multiview/cross_filter.vl.png": "24ce9804d383cff1fce24c3be748cbb8",
"assets/vega_lite_specs/interactive_multiview/multiview/interactive_scatter_plot.vl.json": "f83c2d56f60291e0c7b1ebf0e23807d5",
"assets/vega_lite_specs/interactive_multiview/multiview/interactive_scatter_plot.vl.png": "684ecbe59c642c3d399d6eeb2c5ffe00",
"assets/vega_lite_specs/interactive_multiview/multiview/range_selection.vl.json": "aa3edc258c9585c3ff847a7fe76e716e",
"assets/vega_lite_specs/interactive_multiview/multiview/range_selection.vl.png": "d1e759b0f2c2cb1187a0afc4922331a3",
"assets/vega_lite_specs/interactive_multiview/multiview/seattle_weather.vl.json": "8b8414b81c9075b39c4e8f15cd3a0404",
"assets/vega_lite_specs/interactive_multiview/multiview/seattle_weather.vl.png": "04f9c6f79dc126d97cd2d15a3e277378",
"assets/vega_lite_specs/layered_plots/labeling_annotation/candle_stick.vl.json": "ece9e2c6f9a8991151c6fbc2feb350f4",
"assets/vega_lite_specs/layered_plots/labeling_annotation/candle_stick.vl.png": "0d9f62d274bff9ee320ed2f122ac40be",
"assets/vega_lite_specs/layered_plots/labeling_annotation/layering_running_averages.vl.json": "3a62c3e42843d982145b98b8fe85d324",
"assets/vega_lite_specs/layered_plots/labeling_annotation/layering_running_averages.vl.png": "a2b8b5ff48c29b3dfb43e55b4ba0182a",
"assets/vega_lite_specs/layered_plots/labeling_annotation/wheat_wages_example.vl.json": "388752488927b38ed107664867f3b9c2",
"assets/vega_lite_specs/layered_plots/labeling_annotation/wheat_wages_example.vl.png": "2e9bea689d5010ae45096f0ef7765d97",
"assets/vega_lite_specs/maps/geo/choropleth_unemployment.vl.json": "f08b8d7213ad99dc6eac540a0f47d5d8",
"assets/vega_lite_specs/maps/geo/choropleth_unemployment.vl.png": "26681c2173a344e184429c17faec637e",
"assets/vega_lite_specs/maps/geo/london_tube_lines.vl.json": "3b3ab34f26f29f7350699dd5029a0ff5",
"assets/vega_lite_specs/maps/geo/london_tube_lines.vl.png": "2f8bd317e565565d5b8cd802a51f7228",
"assets/vega_lite_specs/multi_view_displays/repeat_and_concatenation/marginal_histogram.vl.json": "ea221059dd1b5fdfaf8bb1af256a97f4",
"assets/vega_lite_specs/multi_view_displays/repeat_and_concatenation/marginal_histogram.vl.png": "ea358a21f4f58ea3c99c80da9c6c48bf",
"assets/vega_lite_specs/multi_view_displays/repeat_and_concatenation/repeat_and_layer.vl.json": "bf3d407d63efa4188eab6f7b6e49933a",
"assets/vega_lite_specs/multi_view_displays/repeat_and_concatenation/repeat_and_layer.vl.png": "85555afe91ce4975212a794a36e0ea0d",
"assets/vega_lite_specs/multi_view_displays/trellis/faceted_density.vl.json": "27a991340217195a106f2fab45a7b23c",
"assets/vega_lite_specs/multi_view_displays/trellis/faceted_density.vl.png": "adcef17ffa386f9e8ad8353b50732452",
"assets/vega_lite_specs/multi_view_displays/trellis/trellis_area.vl.json": "ade1c0f25e67efc6aeada0141c23e6fd",
"assets/vega_lite_specs/multi_view_displays/trellis/trellis_area.vl.png": "2659cd824f82875179dc2d93cfe40f34",
"assets/vega_lite_specs/scatter_line/line_charts/multi_series_line.vl.json": "06f7d8736ffe65718cf97388b29fb569",
"assets/vega_lite_specs/scatter_line/line_charts/multi_series_line.vl.png": "cc962fba5994617393911e00d4cd51d7",
"assets/vega_lite_specs/scatter_line/line_charts/sine_cosine.vl.json": "0d5bde180ae2c4b77c0777198a40d328",
"assets/vega_lite_specs/scatter_line/line_charts/sine_cosine.vl.png": "895d181dd663718899228f6c286f00cc",
"assets/vega_lite_specs/scatter_line/line_charts/step_line_chart.vl.json": "be92517babfbb5e315889757b9e4748b",
"assets/vega_lite_specs/scatter_line/line_charts/step_line_chart.vl.png": "150c47cb10c9377a0d59390e290604ef",
"assets/vega_lite_specs/scatter_line/scatter_plots/bubble_plot.vl.json": "52b497f461bdf09088e32c4477a023b6",
"assets/vega_lite_specs/scatter_line/scatter_plots/bubble_plot.vl.png": "18c19e8492edc9ced88b44a03bd48c17",
"assets/vega_lite_specs/scatter_line/scatter_plots/bubble_plot_natural_disaster.vl.json": "d14166c0255dcb27a3fb2b346659e704",
"assets/vega_lite_specs/scatter_line/scatter_plots/bubble_plot_natural_disaster.vl.png": "40083d359d9c416859e324db18ec5095",
"assets/vega_lite_specs/scatter_line/scatter_plots/colored_scatter_plot.vl.json": "84d86e593de32b0bc0a8d60562ced7c8",
"assets/vega_lite_specs/scatter_line/scatter_plots/colored_scatter_plot.vl.png": "1b6c0da1ad34c3195c23f6056f517ad5",
"assets/vega_lite_specs/scatter_line/scatter_plots/image_based_scatter.vl.json": "ad00dfb3b9610d7d734a75cb5984e42d",
"assets/vega_lite_specs/scatter_line/scatter_plots/image_based_scatter.vl.png": "05a86099473430af5da2402ca9113f04",
"assets/vega_lite_specs/scatter_line/scatter_plots/scatter_with_filled_circles.vl.json": "210d3fe8b8da3a7b4cf390a6db64426e",
"assets/vega_lite_specs/scatter_line/scatter_plots/scatter_with_filled_circles.vl.png": "4611bf297a6cfddc278e15377eb0e53d",
"index.html": "91db5d5cb3b957ff2f577b9c1a3239cd",
"/": "91db5d5cb3b957ff2f577b9c1a3239cd",
"main.dart.js": "ec09bcb4d4d4c3d9fc92868795190492"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
