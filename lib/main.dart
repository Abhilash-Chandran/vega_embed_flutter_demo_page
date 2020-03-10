import 'package:flutter/material.dart';
import 'package:flutter_portal/flutter_portal.dart';
import 'package:vega_embed_flutter/vega_embed_flutter.dart';

void main() {
  runApp(MyApp());
}

String rootDir = '/assets/vega_lite_specs';

List<Map<String, Map<String, List<List<String>>>>> sections = [
  {
    'single_view_plots': {
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
        ],[
          'layered_histogram.vl.json',
          'Layered Histogram'
        ]
      ],
      'scatter_plots':[
        ['colored_scatter_plot.vl.json','Colored Scatter Plot'],
        ['bubble_plot.vl.json', 'Bubble Plot(Gapminder)'],
        ['bubble_plot_natural_disaster.vl.json', 'Bubble Plot(Natural Disaster)'],
        ['image_based_scatter.vl.json', 'Image Based Scatter Plot.'],
        ['scatter_with_filled_circles.vl.json', 'Scatter Plot with filled circles']
      ]
    },
  },
];

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      builder: (_, child) => Portal(child: child),
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(body: MainView()),
    );
  }
}

class MainView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      shrinkWrap: true,
      itemCount: sections.length,
      itemBuilder: (context, index) {
        print('index is $index');
        return SectionPanel(sections[index], rootDir);
      },
    );
  }
}

class SectionPanel extends StatelessWidget {
  final String parentDir;
  final Map<String, Map<String, List<List<String>>>> sectionElements;
  final List<Widget> sectioncols = [];
  SectionPanel(this.sectionElements, this.parentDir);

  @override
  Widget build(BuildContext context) {
    sectionElements.forEach((key, value) {
      value.forEach((key, value) {
        sectioncols.add(Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(key),
            ),
            Divider(),
            Wrap(
                children: value.map(
              (chartInfo) {
                // print(chartInfo.keys.first);
                return ChartRendererElement(
                  wrapElement: chartInfo,
                  parentDir: '$parentDir/${sectionElements.keys.first}/$key',
                );
              },
            ).toList())
          ],
        ));
      });
    });
    return ExpansionTile(
      initiallyExpanded: true,
      title: Text(sectionElements.keys.first),
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
        print('set state called');

        showDialog(
          useRootNavigator: true,
          context: context,
          barrierDismissible: true,
          builder: (context) {
            return Center(
              child: Container(
                width: MediaQuery.of(context).size.width * 0.85,
                height: MediaQuery.of(context).size.height * 0.85,
                child: Card(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Spacer(
                        flex: 1,
                      ),
                      Expanded(
                        flex: 3,
                        child: VegaLiteEmbedder(
                            viewFactoryId: widget.wrapElement[0],
                            vegaLiteSpecLocation:
                                widget.parentDir + '/' + widget.wrapElement[0]),
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
            Image.network(widget.parentDir +
                '/' +
                widget.wrapElement[0].replaceAll('.json', '.png')),
            Text(widget.wrapElement[1])
          ],
        ),
      ),
    );
  }
}
