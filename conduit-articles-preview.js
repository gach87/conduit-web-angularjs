angular.module("app").component("conduitArticlesPreview", {
  template: `
    <div>
      <div class="article-preview">
      <ng-transclude></ng-transclude>
      <a class="preview-link" href="{{$ctrl.article.href}}">
          <h1>{{$ctrl.article.title}}</h1>
          <p>{{$ctrl.article.description}}</p>
          <span>Read more...</span>
          <ul class="tag-list">
            <li
              ng-repeat="tag in article.tagList"
               class="tag-default tag-pill tag-outline"
            >
              {{tag}}
            </li>
          </ul>
        </a>
      </div>
    </div>
  `,
  bindings: { article: "<" },
  transclude: true,
  controller: function () {},
});
