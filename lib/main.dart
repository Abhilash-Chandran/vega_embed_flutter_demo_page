import 'dart:ui' as ui;
import 'dart:html';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:vega_embed_flutter/vega_embed_flutter.dart';
import 'package:flutter_icons/flutter_icons.dart';

void main() async {
  runApp(MyApp());
  jsonCss = await rootBundle.loadString('css/monokai.css');
}

String jsonCss = '';
String rootDir = 'assets/vega_lite_specs';

List<Map<String, Map<String, List<List<String>>>>> sections = [
  {
    'interactive': {
      'interactive': [
        [
          'interactive_index_chart.vl.json',
          'Interactive Index chart',
        ],
        [
          'interactive_legends.vl.json',
          'Stacked Area plot with interactive legends',
        ],
        [
          'multi_series_line_tooltip.vl.json',
          'Multiple line series series with tooltip.',
        ],
        [
          'query_widget.vl.json',
          'plot with query widgets',
        ],
        [
          'rect_brush_view_data.vl.json',
          'Scatter plot with brush and data view.',
        ],
        [
          'scatter_pan_and_zoom.vl.json',
          'Scatter plot with pand and zoom.',
        ],
        [
          'scatter_rect_brush.vl.json',
          'Scatter plot with rectangular brush.',
        ],
      ]
    },
  },
  {
    'interactive_multiview': {
      'multiview': [
        [
          'interactive_scatter_plot.vl.json',
          'Interactive Scatter Plot',
        ],
        [
          'range_selection.vl.json',
          'Range Overview',
        ],
        [
          'cross_filter.vl.json',
          'Chart with Cross filters',
        ],
        [
          'seattle_weather.vl.json',
          'Seattle weather',
        ],
        [
          'connection_airports.vl.json',
          'Airport connections in US',
        ],
      ],
    },
  },
  {
    'maps': {
      'geo': [
        [
          'choropleth_unemployment.vl.json',
          'Choropleth of Unemployment in US',
        ],
        [
          'london_tube_lines.vl.json',
          'London Tube Lines',
        ],
      ]
    }
  },
  {
    'layered_plots': {
      'labeling_annotation': [
        [
          'candle_stick.vl.json',
          'Candle Stick example',
        ],
        [
          'layering_running_averages.vl.json',
          'Layering Running avaerages on line plot',
        ],
        [
          'wheat_wages_example.vl.json',
          'Wheat and wages in US',
        ],
      ],
    },
  },
  {
    'multi_view_displays': {
      'repeat_and_concatenation': [
        [
          'marginal_histogram.vl.json',
          'Marginal Histogram',
        ],
        [
          'repeat_and_layer.vl.json',
          'Repeat multiple plots with layering',
        ],
      ],
      'trellis': [
        [
          'faceted_density.vl.json',
          'Facented Multiple Density plot',
        ],
        [
          'trellis_area.vl.json',
          'Trellis Barley Area chart.',
        ],
      ]
    },
  },
  {
    'scatter_line': {
      'scatter_plots': [
        [
          'colored_scatter_plot.vl.json',
          'Colored Scatter Plot',
        ],
        [
          'bubble_plot.vl.json',
          'Bubble Plot(Gapminder)',
        ],
        [
          'bubble_plot_natural_disaster.vl.json',
          'Bubble Plot(Natural Disaster)',
        ],
        [
          'image_based_scatter.vl.json',
          'Image Based Scatter Plot.',
        ],
        [
          'scatter_with_filled_circles.vl.json',
          'Scatter Plot with filled Scatter',
        ]
      ],
      'line_charts': [
        [
          'multi_series_line.vl.json',
          'Multi Series Line Chart',
        ],
        [
          'sine_cosine.vl.json',
          'Sine and Cosine curves',
        ],
        [
          'step_line_chart.vl.json',
          'Step Chart',
        ],
      ]
    }
  },
  {
    'bar_histogram': {
      'bar_charts': [
        [
          'bar_chart.json',
          'Simple Bar Chart',
        ],
        [
          'responsive_bar_chart.vl.json',
          'A responsive Bar Chart.',
        ],
        [
          'stacked_bar_chart_rounded_corner.vl.json',
          'A stacked bar chart \n with rounded corners',
        ],
        [
          'diverging_stacked_bar.vl.json',
          'A diverging stacked bar chart.',
        ]
      ],
      'histograms': [
        [
          'binned_histogram.json',
          'Histogram wiht binned data',
        ],
        [
          'stacked_density_estimates.vl.json',
          'Stacked Denisity Estimates',
        ],
        [
          '2d_histogram_heatmap.vl.json',
          'A 2D Histogram HeatMap',
        ],
        [
          'layered_histogram.vl.json',
          'Layered Histogram',
        ]
      ],
    },
  },
  {
    'composite_marks': {
      'error_bars_and_bands': [
        [
          'line_chart_with_CI.vl.json',
          'Line chart with confidence interval band',
        ],
        [
          'scatter_mean_SD.vl.json',
          'Scatterplot with Mean and \nStandard deviation Overlay',
        ],
      ],
      'box_plots': [
        [
          'bp_min_max.vl.json',
          'Box Plot with minimum\n /maximum whiskers',
        ],
        [
          'turkey_min_max.vl.json',
          'Trukey Box plot',
        ],
      ]
    },
  }
];

String splitCapitalize(String s) {
  if (!s.contains('_')) {
    return s[0].toUpperCase() + s.substring(1);
  }
  return s.split('_').map((e) => e[0].toUpperCase() + e.substring(1)).join(' ');
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.grey,
      ),
      home: DefaultTabController(
        length: sections.length,
        child: Padding(
          padding: const EdgeInsets.all(4.0),
          child: Scaffold(
            resizeToAvoidBottomInset: true,
            bottomSheet: BottomInfoBar(),
            appBar: PreferredSize(
              preferredSize: Size.fromHeight(60),
              child: AppBar(
                backgroundColor: Colors.grey[850],
                brightness: Brightness.light,
                bottom: TabBar(
                    unselectedLabelColor: Colors.grey[300],
                    indicatorColor: Colors.amber,
                    indicatorPadding: EdgeInsets.only(bottom: 4.0),
                    indicator: ShapeDecoration(
                      color: Colors.grey,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.only(
                          topLeft: Radius.circular(8.0),
                          topRight: Radius.circular(8.0),
                        ),
                      ),
                    ),
                    tabs: sections
                        .map((e) => Container(
                              height: 40,
                              alignment: Alignment.center,
                              child: Text(
                                splitCapitalize(e.keys.first),
                                style: TextStyle(
                                    fontSize: 15, fontWeight: FontWeight.bold),
                              ),
                            ))
                        .toList()),
              ),
            ),
            body: Padding(
              padding: const EdgeInsets.all(8.0),
              child: TabBarView(
                physics: NeverScrollableScrollPhysics(),
                children: sections.map((e) => MainView(e)).toList(),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class BottomInfoBar extends StatelessWidget {
  BottomInfoBar({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(top: 8.0),
      decoration: BoxDecoration(
        border: Border(
          top: BorderSide(
            color: Colors.amberAccent,
          ),
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          FlatButton(
              hoverColor: Colors.amber[100],
              child: Row(
                children: <Widget>[
                  Image.asset('logos/logo_flutter_1080px_clr.png', scale: 45),
                  Text('  Pub Package')
                ],
              ),
              onPressed: () async {
                const url = 'https://pub.dev/packages/vega_embed_flutter';
                if (await canLaunch(url)) {
                  await launch(url);
                }
              }),
          FlatButton.icon(
              hoverColor: Colors.amber[100],
              label: Text(
                'Demo Repo',
              ),
              icon: Icon(
                FontAwesome.github,
                size: 25,
              ),
              onPressed: () async {
                const url =
                    'https://github.com/Abhilash-Chandran/vega_embed_flutter_demo_page';
                if (await canLaunch(url)) {
                  await launch(url);
                }
              }),
          Spacer(flex: 1),
          Icon(
            Icons.flag,
            size: 22,
            color: Colors.deepOrange,
          ),
          FlatButton.icon(
            color: Colors.grey[300],
            onPressed: () async {
              const url = 'https://vega.github.io/vega-lite/examples/';
              if (await canLaunch(url)) {
                await launch(url);
              }
            },
            hoverColor: Colors.amber[100],
            icon: Icon(
              Icons.launch,
              size: 15,
            ),
            label: Text(
              'All examples are from this vega-lite page.',
              softWrap: true,
              style: TextStyle(
                fontStyle: FontStyle.italic,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class MainView extends StatelessWidget {
  final Map<String, Map<String, List<List<String>>>> sectionElements;
  MainView(this.sectionElements);
  @override
  Widget build(BuildContext context) {
    return ListView(
      shrinkWrap: true,
      children: <Widget>[SectionPanel(sectionElements)],
    );
  }
}

class SectionPanel extends StatelessWidget {
  final Map<String, Map<String, List<List<String>>>> sectionElements;
  final List<Widget> sectioncols = [];
  SectionPanel(this.sectionElements);

  @override
  Widget build(BuildContext context) {
    sectionElements.forEach((key, value) {
      value.forEach((key, value) {
        sectioncols.add(Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Text(
                splitCapitalize(key),
                style: TextStyle(
                  fontStyle: FontStyle.italic,
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                ),
              ),
            ),
            Divider(),
            Wrap(
                runAlignment: WrapAlignment.spaceBetween,
                children: value.map(
                  (chartInfo) {
                    // print(chartInfo.keys.first);
                    return ChartRendererElement(
                      wrapElement: chartInfo,
                      parentDir: '$rootDir/${sectionElements.keys.first}/$key',
                    );
                  },
                ).toList())
          ],
        ));
      });
    });
    return Column(
      children: sectioncols,
    );
    // return Text('hello');
  }
}

class ChartRendererElement extends StatefulWidget {
  final String parentDir;
  final List<String> wrapElement;
  ChartRendererElement({this.wrapElement, this.parentDir});

  @override
  _ChartRendererElementState createState() => _ChartRendererElementState();
}

class _ChartRendererElementState extends State<ChartRendererElement> {
  bool visible = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        showDialog(
          useRootNavigator: true,
          context: context,
          barrierDismissible: true,
          builder: (context) {
            return Center(
              child: Container(
                width: MediaQuery.of(context).size.width * 0.95,
                height: MediaQuery.of(context).size.height * 0.85,
                child: Card(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                          flex: 3,
                          child: Container(
                            decoration: BoxDecoration(
                                border: Border(
                              right: BorderSide(
                                width: 1.0,
                                color: Colors.black87,
                              ),
                            )),
                            child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: JsonViewer(
                                assetPath: widget.parentDir +
                                    '/' +
                                    widget.wrapElement[0],
                              ),
                            ),
                          )),
                      Expanded(
                        flex: 4,
                        child: Column(
                          children: <Widget>[
                            Expanded(
                              flex: 3,
                              child: VegaLiteEmbedder(
                                  viewFactoryId: widget.wrapElement[0],
                                  vegaLiteSpecLocation: widget.parentDir +
                                      '/' +
                                      widget.wrapElement[0]),
                            ),
                            SelectableText(
                              'Flutter Web Code',
                              style: TextStyle(
                                fontStyle: FontStyle.italic,
                                fontSize: 15,
                                color: Colors.blueGrey,
                              ),
                            ),
                            Divider(),
                            Expanded(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: SelectableText(
                                  '''
                                VegaLiteEmbedder(
                                  viewFactoryId: ${widget.wrapElement[0].split('\\').last},
                                  vegaLiteSpecLocation: ${widget.parentDir + '/' + widget.wrapElement[0]});
                                ''',
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                      fontWeight: FontWeight.w400,
                                      fontSize: 20),
                                ),
                              ),
                            )
                          ],
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(14.0),
                        child: IconButton(
                            color: Colors.deepOrange,
                            visualDensity: VisualDensity.compact,
                            // focusColor: Colors.indigo,
                            icon: Icon(
                              Icons.close,
                            ),
                            onPressed: () {
                              Navigator.pop(context);
                            }),
                      )
                    ],
                  ),
                ),
              ),
            );
          },
        );
        // });
      },
      child: Container(
        width: 300,
        height: 300,
        child: Column(
          children: <Widget>[
            Expanded(
              child: Image.network(widget.parentDir +
                  '/' +
                  widget.wrapElement[0].replaceAll('.json', '.png')),
            ),
            Text(widget.wrapElement[1])
          ],
        ),
      ),
    );
  }
}

class JsonViewer extends StatefulWidget {
  final String assetPath;

  JsonViewer({this.assetPath});

  @override
  _JsonViewerState createState() => _JsonViewerState();
}

class _JsonViewerState extends State<JsonViewer> {
  final BodyElement body = BodyElement();
  final PreElement pre = PreElement();

  Future<String> jsonContent;

  @override
  void initState() {
    AssetBundle defBundle = DefaultAssetBundle.of(context);
    jsonContent =
        defBundle.loadString(widget.assetPath.replaceAll('assets/', ''));
    body.append(StyleElement()..text = jsonCss);
    body.append(ScriptElement()..src = "/assets/js/highlight.pack.js");
    body.append(ScriptElement()..text = 'hljs.initHighlightingOnLoad();');
    // body.append(pre);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    // ignore: undefined_prefixed_name
    ui.platformViewRegistry.registerViewFactory(widget.assetPath + '_',
        (int viewId) {
      return body;
    });
    return FutureBuilder(
      future: jsonContent,
      builder: (context, AsyncSnapshot<String> snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return Container(
            alignment: Alignment.center,
            height: 200,
            width: 200,
            child: CircularProgressIndicator(),
          );
        }
        if (snapshot.hasData) {
          // if (!body.contains(pre)) {
          //   body.append(pre);
          //   body.append(DivElement()..text = 'Hello world');
          //   pre.appendHtml('<div class="json">${snapshot.data}<div>');
          // }
          // return HtmlElementView(viewType: widget.assetPath + '_');
          return Column(
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(
                  widget.assetPath.split('/').last,
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontStyle: FontStyle.italic,
                  ),
                ),
              ),
              Divider(),
              Expanded(child: SelectableText(snapshot.data)),
            ],
          );
        }
        if (snapshot.error) {
          return SelectableText(
              'Something went wrong while fetching Vega-lite Spec');
        }
        return SelectableText('Sorry could not fetch the Vega-lite Spec');
      },
    );
  }
}
