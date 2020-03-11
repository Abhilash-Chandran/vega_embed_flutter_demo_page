'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "d210083bf00b34c523f289089c7b24aa",
"/main.dart.js": "d102c26b1277a512ad2ca1bf8b8cd463",
"/assets/vega_lite_specs/maps/geo/london_tube_lines.vl.png": "2f8bd317e565565d5b8cd802a51f7228",
"/assets/vega_lite_specs/maps/geo/london_tube_lines.vl.json": "96e6d8dc6e458836aae1384f326d87e2",
"/assets/vega_lite_specs/maps/geo/choropleth_unemployment.vl.png": "26681c2173a344e184429c17faec637e",
"/assets/vega_lite_specs/maps/geo/choropleth_unemployment.vl.json": "e5a0576574da1dc4c2b3285087419792",
"/assets/vega_lite_specs/layered_plots/labeling_annotation/candle_stick.vl.png": "0d9f62d274bff9ee320ed2f122ac40be",
"/assets/vega_lite_specs/layered_plots/labeling_annotation/layering_running_averages.vl.json": "c6367298111affe890b63314154a94bd",
"/assets/vega_lite_specs/layered_plots/labeling_annotation/wheat_wages_example.vl.png": "2e9bea689d5010ae45096f0ef7765d97",
"/assets/vega_lite_specs/layered_plots/labeling_annotation/layering_running_averages.vl.png": "a2b8b5ff48c29b3dfb43e55b4ba0182a",
"/assets/vega_lite_specs/layered_plots/labeling_annotation/wheat_wages_example.vl.json": "5ca981549235df50aa0280188ee0cad5",
"/assets/vega_lite_specs/layered_plots/labeling_annotation/candle_stick.vl.json": "778d852299ae278f4d38341df661a5e7",
"/assets/vega_lite_specs/interactive_multiview/multiview/interactive_scatter_plot.vl.png": "684ecbe59c642c3d399d6eeb2c5ffe00",
"/assets/vega_lite_specs/interactive_multiview/multiview/interactive_scatter_plot.vl.json": "c6c83b2af12f7f84bae148db4bdaf1fb",
"/assets/vega_lite_specs/interactive_multiview/multiview/connection_airports.vl.json": "f68745fa8086a2f3ab3633e9561230d7",
"/assets/vega_lite_specs/interactive_multiview/multiview/seattle_weather.vl.png": "04f9c6f79dc126d97cd2d15a3e277378",
"/assets/vega_lite_specs/interactive_multiview/multiview/cross_filter.vl.png": "24ce9804d383cff1fce24c3be748cbb8",
"/assets/vega_lite_specs/interactive_multiview/multiview/range_selection.vl.json": "c72bc6278bf3a9295e489a75269ff282",
"/assets/vega_lite_specs/interactive_multiview/multiview/range_selection.vl.png": "d1e759b0f2c2cb1187a0afc4922331a3",
"/assets/vega_lite_specs/interactive_multiview/multiview/connection_airports.vl.png": "c25f7e8b79393b57f185aba051ffe5c5",
"/assets/vega_lite_specs/interactive_multiview/multiview/cross_filter.vl.json": "47404b7eeb0eff6de2766330439dcffa",
"/assets/vega_lite_specs/interactive_multiview/multiview/seattle_weather.vl.json": "d77f62f71080c7c3a70d629c544b4862",
"/assets/vega_lite_specs/single_view_plots/bar_charts/bar_chart.json": "3fdb4fba1b1025a3d861bd19c2333f34",
"/assets/vega_lite_specs/single_view_plots/bar_charts/responsive_bar_chart.vl.json": "d018cb4fc5e6fc8ec29e0e8c43427854",
"/assets/vega_lite_specs/single_view_plots/bar_charts/responsive_bar_chart.vl.png": "d2cacfa3a9a11b1d12b337721a2da0a6",
"/assets/vega_lite_specs/single_view_plots/bar_charts/diverging_stacked_bar.vl.png": "c0b2f9a304ed864d14db4e62abf22761",
"/assets/vega_lite_specs/single_view_plots/bar_charts/stacked_bar_chart_rounded_corner.vl.png": "ec67d4e7d2a3719858fbc7fafc242c4c",
"/assets/vega_lite_specs/single_view_plots/bar_charts/stacked_bar_chart_rounded_corner.vl.json": "70e5a7b1357c1873460cc0bf789603d7",
"/assets/vega_lite_specs/single_view_plots/bar_charts/bar_chart.png": "8d00f68bdb313919c43f3b7d4dfcef95",
"/assets/vega_lite_specs/single_view_plots/bar_charts/diverging_stacked_bar.vl.json": "8a9d30d6c84c3f43aa19c1e2ad46e0b4",
"/assets/vega_lite_specs/single_view_plots/histograms/stacked_density_estimates.vl.png": "9929a41a813f6042048cac85515c5d9f",
"/assets/vega_lite_specs/single_view_plots/histograms/layered_histogram.vl.png": "7f0152fb0a17847f9cdd37b105a2cbcf",
"/assets/vega_lite_specs/single_view_plots/histograms/binned_histogram.png": "99eb7cd5d9659af17b992ccf51ddf30d",
"/assets/vega_lite_specs/single_view_plots/histograms/stacked_density_estimates.vl.json": "15a45756c411d5083806b5bf7d3ac71e",
"/assets/vega_lite_specs/single_view_plots/histograms/2d_histogram_heatmap.vl.png": "198415835149cddcb16cf4ff2ebba608",
"/assets/vega_lite_specs/single_view_plots/histograms/2d_histogram_heatmap.vl.json": "6e64e9bbd8feb89f311cc34dd5369389",
"/assets/vega_lite_specs/single_view_plots/histograms/layered_histogram.vl.json": "2279d992956378470307c1c78c618f46",
"/assets/vega_lite_specs/single_view_plots/histograms/binned_histogram.json": "c0f8ca0f8e9726fa3962ec10472e9ee0",
"/assets/vega_lite_specs/single_view_plots/line_charts/sine_cosine.vl.json": "69f7932a56c1b77a67ca28af3acd37f5",
"/assets/vega_lite_specs/single_view_plots/line_charts/sine_cosine.vl.png": "895d181dd663718899228f6c286f00cc",
"/assets/vega_lite_specs/single_view_plots/line_charts/multi_series_line.vl.png": "cc962fba5994617393911e00d4cd51d7",
"/assets/vega_lite_specs/single_view_plots/line_charts/multi_series_line.vl.json": "171583871ea5fb3e0995c13cdb4f3393",
"/assets/vega_lite_specs/single_view_plots/line_charts/step_line_chart.vl.json": "799ea36f1b0aa06562bb571f46f469bf",
"/assets/vega_lite_specs/single_view_plots/line_charts/step_line_chart.vl.png": "150c47cb10c9377a0d59390e290604ef",
"/assets/vega_lite_specs/single_view_plots/scatter_plots/image_based_scatter.vl.json": "3dc9cf0ad49564437452d0852a9b58c4",
"/assets/vega_lite_specs/single_view_plots/scatter_plots/colored_scatter_plot.vl.json": "250aefe24e3e6e717bc76a47f0a05c68",
"/assets/vega_lite_specs/single_view_plots/scatter_plots/bubble_plot_natural_disaster.vl.png": "40083d359d9c416859e324db18ec5095",
"/assets/vega_lite_specs/single_view_plots/scatter_plots/bubble_plot.vl.json": "7e63202ec4289ff75787bdb575c558be",
"/assets/vega_lite_specs/single_view_plots/scatter_plots/bubble_plot.vl.png": "18c19e8492edc9ced88b44a03bd48c17",
"/assets/vega_lite_specs/single_view_plots/scatter_plots/bubble_plot_natural_disaster.vl.json": "3ed10116a603c5106319c759d7e01ba6",
"/assets/vega_lite_specs/single_view_plots/scatter_plots/colored_scatter_plot.vl.png": "1b6c0da1ad34c3195c23f6056f517ad5",
"/assets/vega_lite_specs/single_view_plots/scatter_plots/scatter_with_filled_circles.vl.png": "4611bf297a6cfddc278e15377eb0e53d",
"/assets/vega_lite_specs/single_view_plots/scatter_plots/image_based_scatter.vl.png": "05a86099473430af5da2402ca9113f04",
"/assets/vega_lite_specs/single_view_plots/scatter_plots/scatter_with_filled_circles.vl.json": "411a0553d9447802cf3f198cbeb8e91b",
"/assets/vega_lite_specs/multi_view_displays/trellis/trellis_area.vl.json": "7654f052cd99c1d2667f20afd5ffa24c",
"/assets/vega_lite_specs/multi_view_displays/trellis/faceted_density.vl.png": "adcef17ffa386f9e8ad8353b50732452",
"/assets/vega_lite_specs/multi_view_displays/trellis/trellis_area.vl.png": "2659cd824f82875179dc2d93cfe40f34",
"/assets/vega_lite_specs/multi_view_displays/trellis/faceted_density.vl.json": "f0567442a3f493ca3c4a546d9468531a",
"/assets/vega_lite_specs/multi_view_displays/repeat_and_concatenation/marginal_histogram.vl.png": "ea358a21f4f58ea3c99c80da9c6c48bf",
"/assets/vega_lite_specs/multi_view_displays/repeat_and_concatenation/repeat_and_layer.vl.png": "85555afe91ce4975212a794a36e0ea0d",
"/assets/vega_lite_specs/multi_view_displays/repeat_and_concatenation/marginal_histogram.vl.json": "0c999c7aeddcdb53fae672ad9f884f0e",
"/assets/vega_lite_specs/multi_view_displays/repeat_and_concatenation/repeat_and_layer.vl.json": "cfbceec758019c21e166d28dab18c7f4",
"/assets/vega_lite_specs/composite_marks/box_plots/bp_min_max.vl.png": "8d1fe686a500d2e7acedc4f29377ae99",
"/assets/vega_lite_specs/composite_marks/box_plots/turkey_min_max.vl.png": "f2540d84f8dd707f0781e8a842a2aeca",
"/assets/vega_lite_specs/composite_marks/box_plots/turkey_min_max.vl.json": "d8db102117502df9b322d223ab43ab3f",
"/assets/vega_lite_specs/composite_marks/box_plots/bp_min_max.vl.json": "16577d2e18b35823b5ab064fa595a772",
"/assets/vega_lite_specs/composite_marks/error_bars_and_bands/scatter_mean_SD.vl.png": "86d22d16a656f874bce11a959f465148",
"/assets/vega_lite_specs/composite_marks/error_bars_and_bands/line_chart_with_CI.vl.json": "282309e7f8c67637f0d872da4fa0a759",
"/assets/vega_lite_specs/composite_marks/error_bars_and_bands/line_chart_with_CI.vl.png": "2c5642665b42b6a14067d5455ccaf31f",
"/assets/vega_lite_specs/composite_marks/error_bars_and_bands/scatter_mean_SD.vl.json": "e66f4bfb7bb121d91492e6c74a58ea00",
"/assets/vega_lite_specs/interactive/interactive/multi_series_line_tooltip.vl.png": "686a70bae79fc64f8726efe19da37b26",
"/assets/vega_lite_specs/interactive/interactive/multi_series_line_tooltip.vl.json": "ce848f47785ed6f21e9e842e829f26b6",
"/assets/vega_lite_specs/interactive/interactive/interactive_index_chart.vl.json": "d73889f062c21a6e819706ddb085a00c",
"/assets/vega_lite_specs/interactive/interactive/rect_brush_view_data.vl.png": "5a85feb6b3519561acba3c2db1fc8dd8",
"/assets/vega_lite_specs/interactive/interactive/rect_brush_view_data.vl.json": "99c07ece9f3a0ea4f87849e1ec825378",
"/assets/vega_lite_specs/interactive/interactive/interactive_legends.vl.json": "895dd051778407be325def5fc206e483",
"/assets/vega_lite_specs/interactive/interactive/query_widget.vl.json": "3b8be66102612f0363acd03dbf11c48d",
"/assets/vega_lite_specs/interactive/interactive/interactive_legends.vl.png": "5272bd0bfd34f0a82f47e1da8efcca03",
"/assets/vega_lite_specs/interactive/interactive/query_widget.vl.png": "bbdb23dbb83895fee77d563813af342d",
"/assets/vega_lite_specs/interactive/interactive/interactive_index_chart.vl.png": "4833c275b17d45fe00446ceb7d3fc9db",
"/assets/vega_lite_specs/interactive/interactive/scatter_rect_brush.vl.json": "5a0b2c47f3db2d855b4b3af959a4bc7b",
"/assets/vega_lite_specs/interactive/interactive/scatter_pan_and_zoom.vl.json": "9d103b312fdbdd5fec80588a9d828c33",
"/assets/vega_lite_specs/interactive/interactive/scatter_rect_brush.vl.png": "0c8758d214e11d82d6b50d273345f169",
"/assets/vega_lite_specs/interactive/interactive/scatter_pan_and_zoom.vl.png": "02ae5a2f8524ba856814ee1fd7ba4a1f",
"/assets/AssetManifest.json": "0d5780e36628b8c650311a4ab9f30920",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/css/monokai.css": "8c43a819e1268fc57605f500adff816b",
"/assets/css/monokai-sublime.css": "0c8b4c0e8a584e7142b08d914644cd9d",
"/assets/css/mono-blue.css": "3e73dc8dc496133131658f9262628694",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/LICENSE": "8440d79432b4949aed4eae95700c9f8c",
"/assets/js/highlight.pack.js": "fd100f9f3f15dbb0d50c03db45059c4b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
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
