(function () {
  "use strict";

  var app = document.getElementById("app");
  var navEl = document.getElementById("site-nav");
  var searchForm = document.getElementById("search-form");
  var searchInput = document.getElementById("search");

  var courseByKey = {};
  COURSES.forEach(function (c) { courseByKey[c.key] = c; });

  var recipesByCourse = {};
  COURSES.forEach(function (c) { recipesByCourse[c.key] = []; });
  RECIPES.forEach(function (r) {
    if (!recipesByCourse[r.course]) recipesByCourse[r.course] = [];
    recipesByCourse[r.course].push(r);
  });

  var recipeBySlug = {};
  RECIPES.forEach(function (r) { recipeBySlug[r.slug] = r; });

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function buildNav(currentCourse) {
    var parts = ['<a href="#/"' + (!currentCourse ? ' class="current"' : "") + ">Home</a>"];
    COURSES.forEach(function (c) {
      if (!(recipesByCourse[c.key] || []).length) return;
      var cls = currentCourse === c.key ? ' class="current"' : "";
      parts.push('<a href="#/course/' + c.key + '"' + cls + ">" + escapeHtml(c.en) + "</a>");
    });
    navEl.innerHTML = parts.join(' <span class="sep">|</span> ');
  }

  function recipeListItemHtml(r) {
    return (
      "<li>" +
        '<a class="r-en" href="#/recipe/' + r.slug + '">' + escapeHtml(r.title_en) + "</a>" +
        '<span class="r-fr">' + escapeHtml(r.title_fr) + "</span>" +
      "</li>"
    );
  }

  function renderHome() {
    buildNav(null);
    var html = "";
    html += '<div class="intro-box">A collection of Mamimonique’s recipes, handwritten and otherwise, with the French kept as she wrote it and an English translation alongside. Browse by course below, or search for something specific.</div>';
    html += '<h2 class="page-title">Recipes by Course</h2>';
    html += '<table class="course-table"><tbody>';
    var row = [];
    COURSES.forEach(function (c) {
      var list = recipesByCourse[c.key] || [];
      if (!list.length) return;
      row.push(
        "<td>" +
          '<div class="c-title"><a href="#/course/' + c.key + '">' + escapeHtml(c.en) + "</a></div>" +
          '<div class="c-sub">' + escapeHtml(c.fr) + "</div>" +
          '<div class="c-count">' + list.length + (list.length === 1 ? " recipe" : " recipes") + "</div>" +
        "</td>"
      );
      if (row.length === 2) {
        html += "<tr>" + row.join("") + "</tr>";
        row = [];
      }
    });
    if (row.length) html += "<tr>" + row.join("") + "<td></td></tr>";
    html += "</tbody></table>";
    app.innerHTML = html;
  }

  function renderCourse(key) {
    var c = courseByKey[key];
    if (!c) { renderNotFound(); return; }
    buildNav(key);
    var list = (recipesByCourse[key] || []).slice().sort(function (a, b) {
      return a.title_en.localeCompare(b.title_en);
    });
    var html = "";
    html += '<p class="breadcrumb"><a href="#/">Home</a> &gt; ' + escapeHtml(c.en) + "</p>";
    html += '<h2 class="page-title">' + escapeHtml(c.en) + "</h2>";
    html += '<p class="page-sub">' + escapeHtml(c.fr) + " &mdash; " + list.length + (list.length === 1 ? " recipe" : " recipes") + "</p>";
    html += '<ul class="recipe-list">';
    list.forEach(function (r) { html += recipeListItemHtml(r); });
    html += "</ul>";
    app.innerHTML = html;
  }

  function neighbors(r) {
    var list = (recipesByCourse[r.course] || []).slice().sort(function (a, b) {
      return a.title_en.localeCompare(b.title_en);
    });
    var idx = list.findIndex(function (x) { return x.slug === r.slug; });
    return {
      prev: idx > 0 ? list[idx - 1] : null,
      next: idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null
    };
  }

  function renderRecipe(slug) {
    var r = recipeBySlug[slug];
    if (!r) { renderNotFound(); return; }
    var c = courseByKey[r.course];
    buildNav(r.course);
    var nb = neighbors(r);

    var html = "";
    html += '<p class="breadcrumb"><a href="#/">Home</a> &gt; <a href="#/course/' + r.course + '">' + escapeHtml(c ? c.en : r.course) + "</a> &gt; " + escapeHtml(r.title_en) + "</p>";
    html += '<div class="recipe-detail">';
    html += '<div class="course-label">' + escapeHtml(c ? c.en : r.course) + "</div>";
    html += '<h2 class="title-en">' + escapeHtml(r.title_en) + "</h2>";
    html += '<p class="title-fr">' + escapeHtml(r.title_fr) + "</p>";

    if (r.images && r.images.length) {
      html += '<div class="scan-gallery">';
      r.images.forEach(function (src, i) {
        html += '<img src="' + src + '" alt="Scan of the original recipe page' + (r.images.length > 1 ? ", page " + (i + 1) : "") + '" data-lightbox="' + src + '">';
      });
      html += "</div>";
    }

    html += '<table class="text-table"><thead><tr><th>French</th><th>English</th></tr></thead><tbody><tr>';
    html += '<td><p class="recipe-text">' + escapeHtml(r.french) + "</p></td>";
    html += '<td><p class="recipe-text">' + escapeHtml(r.english) + "</p></td>";
    html += "</tr></tbody></table>";

    if (r.note) {
      html += '<div class="recipe-note">' + escapeHtml(r.note) + "</div>";
    }

    html += '<div class="recipe-nav">';
    html += nb.prev ? '<a href="#/recipe/' + nb.prev.slug + '">&larr; ' + escapeHtml(nb.prev.title_en) + "</a>" : "<span></span>";
    html += nb.next ? '<a href="#/recipe/' + nb.next.slug + '">' + escapeHtml(nb.next.title_en) + " &rarr;</a>" : "<span></span>";
    html += "</div>";

    html += "</div>";
    app.innerHTML = html;

    Array.prototype.forEach.call(app.querySelectorAll("img[data-lightbox]"), function (img) {
      img.addEventListener("click", function () { openLightbox(img.getAttribute("data-lightbox")); });
    });
  }

  function renderSearch(query) {
    buildNav(null);
    var q = query.trim().toLowerCase();
    var html = "";
    html += '<p class="breadcrumb"><a href="#/">Home</a> &gt; Search</p>';
    html += '<h2 class="page-title">Searching for “' + escapeHtml(query) + "”</h2>";

    if (!q) {
      html += '<div class="empty-state">Type something above to search all 168 recipes.</div>';
      app.innerHTML = html;
      return;
    }

    var results = RECIPES.filter(function (r) {
      return (
        r.title_en.toLowerCase().indexOf(q) !== -1 ||
        r.title_fr.toLowerCase().indexOf(q) !== -1 ||
        r.french.toLowerCase().indexOf(q) !== -1 ||
        r.english.toLowerCase().indexOf(q) !== -1
      );
    }).sort(function (a, b) { return a.title_en.localeCompare(b.title_en); });

    html += '<p class="page-sub">' + results.length + (results.length === 1 ? " match" : " matches") + "</p>";

    if (!results.length) {
      html += '<div class="empty-state">No recipes found. Try a different word, or check the French spelling.</div>';
    } else {
      html += '<ul class="recipe-list">';
      results.forEach(function (r) { html += recipeListItemHtml(r); });
      html += "</ul>";
    }
    app.innerHTML = html;
  }

  function renderNotFound() {
    buildNav(null);
    app.innerHTML = '<div class="empty-state">That page could not be found. <a href="#/">Back home</a>.</div>';
  }

  function openLightbox(src) {
    var lb = document.getElementById("lightbox");
    if (!lb) {
      lb = document.createElement("div");
      lb.className = "lightbox";
      lb.id = "lightbox";
      lb.innerHTML = '<img id="lightbox-img" src="">';
      lb.addEventListener("click", function () { lb.hidden = true; });
      document.body.appendChild(lb);
    }
    document.getElementById("lightbox-img").src = src;
    lb.hidden = false;
  }

  function route() {
    var hash = window.location.hash || "#/";
    var parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);

    if (parts.length === 0) {
      renderHome();
    } else if (parts[0] === "course" && parts[1]) {
      renderCourse(parts[1]);
    } else if (parts[0] === "recipe" && parts[1]) {
      renderRecipe(parts[1]);
    } else if (parts[0] === "search") {
      var q = parts.slice(1).join("/") || "";
      renderSearch(q);
      searchInput.value = q;
    } else {
      renderNotFound();
    }
    window.scrollTo(0, 0);
  }

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var val = searchInput.value;
    window.location.hash = "#/search/" + encodeURIComponent(val);
  });

  window.addEventListener("hashchange", route);
  route();
})();
