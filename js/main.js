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

  var DIET_TAGS = ["meat", "dairy", "fish", "parve"];
  var OCCASION_TAGS = ["passover", "shabbat"];
  var TAG_LABELS = {
    meat: "Meat", dairy: "Dairy", fish: "Fish", parve: "Parve",
    passover: "Passover", shabbat: "Shabbat"
  };

  var recipesByTag = {};
  RECIPES.forEach(function (r) {
    (r.tags || []).forEach(function (t) {
      if (!recipesByTag[t]) recipesByTag[t] = [];
      recipesByTag[t].push(r);
    });
  });

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function formatRecipeText(text) {
    var lines = String(text).split("\n");
    var html = "";
    var para = [];
    function flush() {
      if (para.length) {
        html += "<p>" + escapeHtml(para.join("\n")) + "</p>";
        para = [];
      }
    }
    lines.forEach(function (line) {
      var m = /^##\s+(.+)$/.exec(line.trim());
      if (m) {
        flush();
        html += '<h3 class="recipe-section">' + escapeHtml(m[1]) + "</h3>";
      } else if (line.trim() === "") {
        flush();
      } else {
        para.push(line);
      }
    });
    flush();
    return html;
  }

  function suggestMailto(r) {
    var subject = "Chez Mamique - " + r.title_en;
    var body = "Recipe: " + r.title_en + " (" + r.title_fr + ")\n\n" +
      "Attach your photo here, or describe the correction:\n\n";
    return "mailto:smodiano@alum.mit.edu?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
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

  function tagBadgesHtml(r, opts) {
    opts = opts || {};
    var tags = (r.tags || []).filter(function (t) {
      return opts.occasionOnly ? OCCASION_TAGS.indexOf(t) !== -1 : true;
    });
    if (!tags.length) return "";
    return tags.map(function (t) {
      return '<a class="tag-badge tag-' + t + '" href="#/tag/' + t + '">' + escapeHtml(TAG_LABELS[t] || t) + "</a>";
    }).join(" ");
  }

  function recipeListItemHtml(r) {
    return (
      "<li>" +
        '<a class="r-en" href="#/recipe/' + r.slug + '">' + escapeHtml(r.title_en) + "</a>" +
        '<span class="r-fr">' + escapeHtml(r.title_fr) + "</span>" +
        '<span class="r-tags">' + tagBadgesHtml(r) + "</span>" +
      "</li>"
    );
  }

  function renderHome() {
    buildNav(null);
    var html = "";
    html += '<div class="photo-row">' +
      '<img src="images/family/mamimonique-baking.jpg" alt="Mamimonique baking with her grandchildren">' +
      '<img src="images/family/family-dock.jpg" alt="Mamimonique with her daughters and granddaughter">' +
      '<img src="images/family/family-group.jpg" alt="Mamimonique and family">' +
    "</div>";
    html += '<div class="intro-box">' +
      '<p>“Chez Mamique” is an organized collection of Mamimonique’s recipes, handwritten and otherwise, with the French kept as she wrote it and an English translation alongside. The recipes were collected over the years and written by Mamimonique, scanned and saved by Caroline, and translated and made into this website by Sara (with the help of Claude). There are some missing details, a few errors, and we’d love more pictures, so please submit any changes using the button on each recipe or by email. Browse by course below, or search for something specific!</p>' +
      '<p>A few of Sara’s favorites and must-tries: the <a href="#/recipe/ratatouille">ratatouille</a>, <a href="#/recipe/soupe-courgettes-bassoul">soupe de courgettes</a>, <a href="#/recipe/couscous-marocain-etapes">couscous marocain</a>, <a href="#/course/desserts">all the cakes</a>, and the <a href="#/recipe/cake-roquefort-poires-noix">pear walnut roquefort cake</a>!</p>' +
    '</div>';
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

    html += '<h2 class="page-title">Recipes by Dietary Tag</h2>';
    html += '<p class="page-sub">For kosher meal planning &mdash; see a recipe’s page for substitution notes where one applies.</p>';
    html += '<p class="tag-browse">';
    html += DIET_TAGS.map(function (t) {
      var n = (recipesByTag[t] || []).length;
      return '<a href="#/tag/' + t + '">' + escapeHtml(TAG_LABELS[t]) + "</a> (" + n + ")";
    }).join(" &nbsp;|&nbsp; ");
    html += "</p>";
    html += '<p class="tag-browse">Occasion: ';
    html += OCCASION_TAGS.map(function (t) {
      var n = (recipesByTag[t] || []).length;
      return '<a href="#/tag/' + t + '">' + escapeHtml(TAG_LABELS[t]) + "</a> (" + n + ")";
    }).join(" &nbsp;|&nbsp; ");
    html += "</p>";

    app.innerHTML = html;
  }

  function renderTag(key) {
    var label = TAG_LABELS[key];
    if (!label) { renderNotFound(); return; }
    buildNav(null);
    var list = (recipesByTag[key] || []).slice().sort(function (a, b) {
      return a.title_en.localeCompare(b.title_en);
    });
    var html = "";
    html += '<p class="breadcrumb"><a href="#/">Home</a> &gt; ' + escapeHtml(label) + "</p>";
    html += '<h2 class="page-title">' + escapeHtml(label) + "</h2>";
    html += '<p class="page-sub">' + list.length + (list.length === 1 ? " recipe" : " recipes") + "</p>";
    if (!list.length) {
      html += '<div class="empty-state">No recipes tagged yet.</div>';
    } else {
      html += '<ul class="recipe-list">';
      list.forEach(function (r) { html += recipeListItemHtml(r); });
      html += "</ul>";
    }
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
    html += '<p class="detail-tags">' + tagBadgesHtml(r) + "</p>";
    html += '<h2 class="title-en">' + escapeHtml(r.title_en) + "</h2>";
    html += '<p class="title-fr">' + escapeHtml(r.title_fr) + "</p>";
    html += '<p class="recipe-suggest"><a href="' + suggestMailto(r) + '">Suggest a photo or correction for this recipe</a></p>';

    if (r.images && r.images.length) {
      html += '<div class="scan-gallery">';
      r.images.forEach(function (src, i) {
        html += '<img src="' + src + '" alt="Scan of the original recipe page' + (r.images.length > 1 ? ", page " + (i + 1) : "") + '" data-lightbox="' + src + '">';
      });
      html += "</div>";
    }

    html += '<table class="text-table"><thead><tr><th>French</th><th>English</th></tr></thead><tbody><tr>';
    html += '<td><div class="recipe-text">' + formatRecipeText(r.french) + "</div></td>";
    html += '<td><div class="recipe-text">' + formatRecipeText(r.english) + "</div></td>";
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
      html += '<div class="empty-state">Type something above to search all ' + RECIPES.length + ' recipes.</div>';
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
    } else if (parts[0] === "tag" && parts[1]) {
      renderTag(parts[1]);
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
