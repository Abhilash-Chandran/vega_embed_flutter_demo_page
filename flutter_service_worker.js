'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "a6f095024d9897de3fbfc40ed2afb4d8",
"/main.dart.js": "2d5ae3f4faca39c25e2254fb34d915ee",
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
"/assets/AssetManifest.json": "932ca5baff006dc55b1ab146a3edadd7",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/LICENSE": "8440d79432b4949aed4eae95700c9f8c",
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
