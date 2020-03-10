import 'package:test/test.dart';
import 'package:vega_embed_flutter_demo_page/api.dart';

import 'package:async/async.dart';

void main() {
  test('Test Fetching VL specs', () async {
    var vlSpecsStream = StreamQueue(Api.getVlSpecs());
    // Check the first result
    await expectLater(
        vlSpecsStream,
        emitsThrough(
            'https://raw.githubusercontent.com/vega/vega-lite/master/examples/specs/airport_connections.vl.json'));
    // check the last url
    await expectLater(
        vlSpecsStream,
        emitsThrough(
            'https://raw.githubusercontent.com/vega/vega-lite/master/examples/specs/window_top_k_others.vl.json'));
  });
}
