
import 'dart:convert';

import 'package:http/http.dart' as http;

class Api {

  /// A base url for the Github API
  static final String baseUrl = "https://api.github.com";

  static Stream<String> getVlSpecs() async* {
    http.Response response = await http.get(baseUrl+ "/repos/vega/vega-lite/contents/examples/specs");
    if(response.statusCode == 200){
      Iterable decodedResponse = json.decode(response.body);
      for(Map specExampl in decodedResponse){
        yield VlSpecResponse.fromMap(specExampl).downloadUrl;
      }
    }else{
      yield 'No example specs found';
    }
  }
}


class VlSpecResponse {
    String name;
    String path;
    String sha;
    int size;
    String url;
    String htmlUrl;
    String gitUrl;
    String downloadUrl;
    String type;
    Links links;

    VlSpecResponse({
        this.name,
        this.path,
        this.sha,
        this.size,
        this.url,
        this.htmlUrl,
        this.gitUrl,
        this.downloadUrl,
        this.type,
        this.links,
    });

    factory VlSpecResponse.fromJson(String str) => VlSpecResponse.fromMap(json.decode(str));

    String toJson() => json.encode(toMap());

    factory VlSpecResponse.fromMap(Map<String, dynamic> json) => VlSpecResponse(
        name: json["name"],
        path: json["path"],
        sha: json["sha"],
        size: json["size"],
        url: json["url"],
        htmlUrl: json["html_url"],
        gitUrl: json["git_url"],
        downloadUrl: json["download_url"],
        type: json["type"],
        links: Links.fromMap(json["_links"]),
    );

    Map<String, dynamic> toMap() => {
        "name": name,
        "path": path,
        "sha": sha,
        "size": size,
        "url": url,
        "html_url": htmlUrl,
        "git_url": gitUrl,
        "download_url": downloadUrl,
        "type": type,
        "_links": links.toMap(),
    };
}

class Links {
    String self;
    String git;
    String html;

    Links({
        this.self,
        this.git,
        this.html,
    });

    factory Links.fromJson(String str) => Links.fromMap(json.decode(str));

    String toJson() => json.encode(toMap());

    factory Links.fromMap(Map<String, dynamic> json) => Links(
        self: json["self"],
        git: json["git"],
        html: json["html"],
    );

    Map<String, dynamic> toMap() => {
        "self": self,
        "git": git,
        "html": html,
    };
}
