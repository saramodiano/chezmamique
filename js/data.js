const COURSES = [
  { key: "starters", en: "Starters & Salads", fr: "Entr\u00e9es & Salades" },
  { key: "soups", en: "Soups", fr: "Soupes" },
  { key: "mains", en: "Main Courses", fr: "Plats principaux" },
  { key: "sides", en: "Side Dishes", fr: "Accompagnements" },
  { key: "breads", en: "Breads", fr: "Pains" },
  { key: "desserts", en: "Desserts & Cakes", fr: "Desserts & G\u00e2teaux" },
  { key: "preserves", en: "Jams & Preserves", fr: "Confitures & Conserves" },
  { key: "sauces", en: "Sauces", fr: "Sauces" },
  { key: "drinks", en: "Drinks", fr: "Boissons" },
  { key: "notes", en: "Mamimonique's Notes & Tips", fr: "Notes & Conseils de Mamimonique" },
];

const RECIPES = [
  {
    "slug": "griffes",
    "title_fr": "Griffes",
    "title_en": "\"Griffes\" (Fried Pastry Claws)",
    "course": "desserts",
    "images": [
      "images/scans/griffes.jpg"
    ],
    "french": "3 oeufs\n3 verres de farine\n2 verres de lait\n\nFaites une pâte, passez-la au four sur une plaque huilée.\nDécoupez-la et mettez-la à frire, dans une friture pas trop chaude.",
    "english": "3 eggs\n3 glasses flour\n2 glasses milk\n\nMake a batter, bake it in the oven on an oiled sheet.\nCut it into shapes and fry in oil that's not too hot.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "kobs-martine",
    "title_fr": "Kobs (Martine)",
    "title_en": "\"Kobs\" Meat Patties (Martine)",
    "course": "mains",
    "images": [
      "images/scans/kobs-martine.jpg"
    ],
    "french": "500 g viande hachée\n2 oeufs\neau\n2 biscottes râpées (chapelure)\nsel, poivre, ail\nsi trop collant → + herbes hachées\n\n① Hamburgers.\n② Ou boulettes.\nSauce: oignon-ail, faire revenir + eau, sel, poivre, cuire.\nCuire les boulettes dans la sauce jusqu'au bout.\nLa sauce doit rester liquide.\n③ Au four: ajouter un peu de citron râpé + un oeuf dur au milieu, ou du lait aigre.\nCuire 20 à 30 min, avec des pommes de terre sautées tout autour.",
    "english": "500 g ground meat\n2 eggs\nwater\n2 crushed crackers (breadcrumbs)\nsalt, pepper, garlic\nif too sticky → add chopped herbs\n\n① Patties\n② Or meatballs\nSauce: onion and garlic, browned + water, salt, pepper, cooked.\nCook the meatballs in the sauce until done.\nThe sauce should stay liquid.\n③ In the oven: add a little grated lemon zest + a hard-boiled egg in the middle, or some sour milk.\nCook 20-30 minutes, with sautéed potatoes all around.",
    "note": "To make kosher: the recipe already gives a parve option (lemon zest and a hard-boiled egg) alongside the sour milk — use that version instead.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "brownies-amandes",
    "title_fr": "Brownies aux amandes (États-Unis)",
    "title_en": "Almond Brownies (United States)",
    "course": "desserts",
    "images": [
      "images/scans/brownies-amandes.jpg"
    ],
    "french": "Pour 36 petits gâteaux:\n200 g chocolat à 70% de cacao\n100 g amandes effilées\n170 g beurre\n150 g sucre en poudre\n3 oeufs\n1/2 cuillère à café cannelle en poudre\n50 g farine\nPréparation: 25 mn. Cuisson: 25 mn.\n\nCassez le chocolat en morceaux dans une casserole. Ajoutez 2 cuillerées à soupe d'eau et mettez à fondre sur feu doux, dans un bain-marie chaud, ou au micro-ondes. Laissez tiédir. Faites dorer les amandes sans matière grasse, dans une poêle antiadhésive, brisez-les entre vos doigts. Travaillez 150 g de beurre dans une terrine avec le sucre et la cannelle, jusqu'à ce que le mélange devienne léger et onctueux. Ajoutez alors les oeufs un à un, en alternant avec la farine. Incorporez le chocolat fondu et les amandes. Beurrez un moule carré de 22 cm de côté (ou rectangulaire), chemisez le fond avec un papier sulfurisé, beurré également, et versez la pâte dans le moule. Faites cuire à four modéré 150° (th. 5) pendant 25 minutes. Laissez refroidir complètement avant de démouler, puis découpez en petits carrés de 5 cm de côté. Déposez-les dans des caissettes en papier (facultatif).\n\nNotre conseil: sortez le beurre à température ambiante quelque temps avant de l'utiliser. Travaillez bien entre chaque oeuf et chaque apport de farine.",
    "english": "Makes 36 small squares:\n200 g chocolate, 70% cocoa\n100 g sliced almonds\n170 g butter\n150 g granulated sugar\n3 eggs\n1/2 tsp ground cinnamon\n50 g flour\nPrep: 25 min. Cooking: 25 min.\n\nBreak the chocolate into pieces in a saucepan. Add 2 tbsp water and melt over low heat, in a hot water bath, or in the microwave. Let cool slightly. Toast the almonds with no added fat in a nonstick pan, then crumble them between your fingers. Cream 150 g butter in a bowl with the sugar and cinnamon until light and smooth. Add the eggs one at a time, alternating with the flour. Fold in the melted chocolate and the almonds. Butter a 22 cm square pan (or a rectangular one), line the bottom with parchment paper, also buttered, and pour in the batter. Bake in a moderate oven at 150°C (gas mark 5) for 25 minutes. Let cool completely before unmolding, then cut into 5 cm squares. Place in paper cases, if you like.\n\nOur tip: bring the butter to room temperature a while before using it. Mix well between each egg and each addition of flour.",
    "note": "Shares a page with a Chocolate Chip Cookies recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "pains-anis",
    "title_fr": "Pains d'anis",
    "title_en": "Anise Bread (Biscotti-Style)",
    "course": "desserts",
    "images": [
      "images/scans/pains-anis.jpg"
    ],
    "french": "2 oeufs, 50 g beurre, 100 g sucre\n200 g farine, 1 paquet levure\n1 petite tasse lait, 1 petite cuillère anis vert\n\nFaire fondre le beurre au bain-marie.\nAjouter sucre, oeufs, lait.\nPuis farine, anis, levure.\nSi la pâte n'est pas assez consistante,\najouter un peu de farine.\nÉtendre la pâte en petits pains\nlongs et étroits. Faire cuire au\nfour et, à la fin de la cuisson,\ncouper en tranches et laisser dorer\nde chaque côté.",
    "english": "2 eggs, 50 g butter, 100 g sugar\n200 g flour, 1 packet baking powder\n1 small cup milk, 1 small spoonful aniseed\n\nMelt the butter over a double boiler.\nAdd the sugar, eggs, milk.\nThen the flour, aniseed, baking powder.\nIf the dough isn't thick enough,\nadd a little more flour.\nShape the dough into small, long,\nnarrow loaves. Bake in the\noven and, near the end of baking,\nslice it and let it brown\non each side, biscotti-style.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "pain-anne",
    "title_fr": "Pain Anne",
    "title_en": "Anne's Bread",
    "course": "breads",
    "images": [
      "images/scans/pain-anne.jpg"
    ],
    "french": "2 tasses farine    4 cuillères à café levure\n1 cuillère à soupe matière grasse\n1 oeuf    1/2 tasse lait    mélanger\n→ petits pains, 15 min four chaud",
    "english": "2 cups flour    4 tsp baking powder\n1 tbsp fat (butter or shortening)\n1 egg    1/2 cup milk    mix together\n→ shape into small rolls, bake 15 minutes in a hot oven",
    "note": "Shares a page with Maria's Salt Cod.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "pate-foie-annie",
    "title_fr": "Pâté de foie Annie",
    "title_en": "Annie's Liver Pâté",
    "course": "starters",
    "images": [
      "images/scans/pate-foie-annie.jpg"
    ],
    "french": "Dans une casserole, faire fondre 1 boîte de graisse avec sel et poivre.\nAttendre que ce soit bien chaud.\n6-7 petits foies.\nLes mettre dans la casserole, 5 secondes de chaque côté, pour qu'ils soient juste pochés.\nLes mettre dans le mixeur.\nVerser la graisse et mixer.",
    "english": "In a pan, melt 1 can of fat with salt and pepper.\nWait until it's very hot.\n6-7 small livers.\nPut them in the pan, 5 seconds on each side, so they're just poached.\nPut them in the blender.\nPour in the fat and blend.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "charlotte-aux-pommes",
    "title_fr": "Charlotte aux pommes",
    "title_en": "Apple Charlotte",
    "course": "desserts",
    "images": [
      "images/scans/charlotte-aux-pommes.jpg"
    ],
    "french": "1 kg pommes\n125 g pain trempé\n4 oeufs, blancs battus fermes\nraisins de Corinthe\n4 à 5 cuillères sucre en poudre\nquelques cuillères rhum\n\nCouper les pommes en lamelles minces.\nMettre dans un moule caramélisé ou une cocotte.\nCuire au four 1h30.",
    "english": "1 kg apples\n125 g soaked bread\n4 eggs, whites whipped to stiff peaks\ncurrants\n4-5 tbsp sugar\na few spoonfuls of rum\n\nCut the apples into thin slices.\nPut in a caramelized mold or a pot.\nBake for 1.5 hours.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "clafoutis-pommes",
    "title_fr": "Clafoutis aux pommes",
    "title_en": "Apple Clafoutis",
    "course": "desserts",
    "images": [
      "images/scans/clafoutis-pommes.jpg"
    ],
    "french": "Mettre dans un plat:\n10 cuillères à soupe farine\n6 cuillères à soupe sucre\n3 oeufs\n1 cuillère à café de levure\n1 morceau de beurre ou 2 cuillères d'huile\n6 pommes.",
    "english": "Put in a dish:\n10 tbsp flour\n6 tbsp sugar\n3 eggs\n1 tsp baking powder\n1 knob butter or 2 tbsp oil\n6 apples.",
    "note": "Shares a page with a Sorbet recipe and Prunes in Brandy.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "tarte-pommes-pate-sablee",
    "title_fr": "Tarte aux pommes, pâte sablée",
    "title_en": "Apple Tart with Shortcrust Pastry",
    "course": "desserts",
    "images": [
      "images/scans/tarte-pommes-pate-sablee.jpg"
    ],
    "french": "Pâte sablée:\n300 g de farine\n150 g de matière grasse: margarine (75 g) / beurre (75 g)\n75 g sucre\nBien mélanger. Ajouter très peu d'eau.\nFaire une boule de cette pâte.\nAplatir avec la paume de la main dans le moule.\n\nTarte aux pommes:\nÉplucher et couper les pommes en petites tranches.\nLes placer sur la pâte.\nPréparer la \"migaine\" (terme lorrain) avec: 1 oeuf entier, 100 g de sucre, crème fraîche (20 cl). Bien battre et verser sur les pommes.\nCuire 35 minutes à four 210°C.",
    "english": "Shortcrust pastry:\n300 g flour\n150 g fat: margarine (75 g) / butter (75 g)\n75 g sugar\nMix well. Add very little water.\nForm the dough into a ball.\nFlatten into the pan with the palm of your hand.\n\nApple tart:\nPeel and thinly slice the apples.\nArrange them on the dough.\nMake the \"migaine\" (a Lorraine term for this custard) with: 1 whole egg, 100 g sugar, crème fraîche (20 cl / 200 ml). Beat well and pour over the apples.\nBake 35 minutes at 210°C.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "tarte-abricots",
    "title_fr": "Tarte abricots",
    "title_en": "Apricot Tart",
    "course": "desserts",
    "images": [
      "images/scans/tarte-abricots.jpg"
    ],
    "french": "Pâte brisée: 200 g farine, beurre ou huile, 1 pincée sel, 70 g sucre, 1 oeuf + cognac\nchapelure ou poudre d'amandes\nAbricots: 1 kg 1/2, coupés et posés sur le dos\n\n- 200 g sucre\n- 2 oeufs\n- 20 cl crème fraîche\n\nCuire 35 min, four 7-8.\nMettre au frigidaire un peu après.\nServir froid.",
    "english": "Shortcrust pastry: 200 g flour, butter or oil, pinch of salt, 70 g sugar, 1 egg + a splash of cognac\nbreadcrumbs or ground almonds\nApricots: 1.5 kg, halved and placed cut-side down\n\n- 200 g sugar\n- 2 eggs\n- 20 cl (200 ml) heavy cream\n\nBake 35 minutes, oven setting 7-8.\nRefrigerate for a while afterward.\nServe cold.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "roquette-pignons-parmesan",
    "title_fr": "Roquette aux pignons et au parmesan",
    "title_en": "Arugula with Pine Nuts and Parmesan",
    "course": "starters",
    "images": [
      "images/scans/roquette-pignons-parmesan.jpg"
    ],
    "french": "Pour 6 personnes:\n200 g de roquette\n4 c.à.s. de pignons de pin\n80 g de parmesan frais\n4 c.à.s. d'huile d'olive extra-vierge\n1 c.à.s. de vinaigre de vin vieux\n1/2 c.à.c. de fleur de sel\npoivre noir du moulin\n\nBien trier, laver et essorer la roquette. Éliminer la cosse et couper en trois ou quatre morceaux. Mettre dans un saladier, ajouter l'huile, la fleur de sel et le vinaigre. Remuer. Ajouter les pignons légèrement colorés à la chaleur, puis mélanger de nouveau. Parsemer de copeaux de parmesan frais, donner quelques tours de poivre du moulin et servir aussitôt.\n\nNotes du chef:\n- il existe 22 sortes de roquette; c'est au départ une herbe sauvage, charnue, légèrement veloutée dessous.\n- les pignons sont à classer dans les épices; les faire rôtir à sec pour avoir le maximum de goût dans la poêle. Préchauffer la poêle, maintenir une flamme moyenne pour que la coloration se fasse progressivement. À une certaine coloration, une partie des corps huileux va ressortir; c'est prêt. C'est une erreur de griller trop longtemps à l'avance (1/2 heure à 1 heure, c'est tout). Dans la même ligne, on peut traiter les graines de cumin (mais pas dans la recette des oranges où les graines sont utilisées natures).",
    "english": "Serves 6:\n200 g arugula\n4 tbsp pine nuts\n80 g fresh parmesan\n4 tbsp extra-virgin olive oil\n1 tbsp aged wine vinegar\n1/2 tsp fleur de sel\nfreshly ground black pepper\n\nTrim, wash, and dry the arugula well. Remove any tough stems and cut into 3-4 pieces. Put in a bowl, add the oil, fleur de sel, and vinegar. Toss. Add the pine nuts, lightly toasted, then toss again. Scatter with parmesan shavings, add a few turns of the pepper mill, and serve immediately.\n\nChef's notes:\n- there are 22 varieties of arugula; it starts out as a wild, fleshy herb, slightly velvety underneath.\n- pine nuts belong with the spices; dry-toast them in the pan for maximum flavor. Preheat the pan, keep the flame at medium so they color gradually. Once they take on some color, some of their oils will come to the surface — that's when they're ready. It's a mistake to toast them too far ahead (30 min to 1 hour at most). The same goes for cumin seeds (but not in the orange salad recipe, where the seeds are used raw).",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "recettes-salees-diverses",
    "title_fr": "Recettes salées diverses",
    "title_en": "Assorted Savory Recipes",
    "course": "starters",
    "images": [
      "images/scans/recettes-salees-diverses-1.jpg",
      "images/scans/recettes-salees-diverses-2.jpg"
    ],
    "french": "Ratzi'min (aubergines farcies)\nGrosse aubergine, coupée en \"sandwich\"\nSteak haché ou viande\nOeuf, sel, mie de pain, huile, persil\nFarcir l'aubergine\nTremper dans chapelure + oeuf, cuire 1/2 h, rôtir\nSauce tomate: faire cuire les aubergines dedans 1/2 h\n+ champignons ou coeurs d'artichauts\n\nSalade d'aubergine en tranches\nCuire à l'huile, puis la sauce\nSauce: farine, poivrons coupés, oignon, ail, poivre, sel, cuire\nServir le lendemain\n\nFilfel poivron (à macérer)\nGriller sur la flamme, en sauce + huile\n\nAubergine grillée entière au feu, écrasée,\npuis sauce + oeuf dur écrasé, ± mayonnaise\n\nOeufs et courgettes (kichouf)\nÀ râper + gruyère, cuire au four\n40 min, four 5-6",
    "english": "Ratzi'min (Stuffed Eggplant)\nLarge eggplant, sliced \"sandwich-style\"\nGround meat or steak\nEgg, salt, breadcrumbs, oil, parsley\nStuff the eggplant\nDip in breadcrumbs + egg, cook 1/2 hour, roast\nTomato sauce: cook the eggplants in it for 1/2 hour\n+ mushrooms or artichoke hearts\n\nSliced Eggplant Salad\nCook in oil, then add the sauce\nSauce: flour, chopped peppers, onion, garlic, pepper, salt; cook\nServe the next day\n\nFilfel Pepper Dip (left to marinate)\nGrill over an open flame, serve in a sauce with oil\n\nWhole eggplant grilled over the fire, mashed,\nthen mixed with sauce + crushed hard-boiled egg, with a little mayonnaise\n\nEggs and Zucchini (\"Kichouf\")\nGrated zucchini + Gruyère, baked in the oven\n40 minutes, oven setting 5-6",
    "note": "",
    "tags": [
      "meat",
      "dairy"
    ]
  },
  {
    "slug": "gateau-chocolat-assouline",
    "title_fr": "Gâteau chocolat (Assouline)",
    "title_en": "Assouline's Chocolate Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-chocolat-assouline.jpg"
    ],
    "french": "125 g sucre\n125 g amandes\n4 oeufs, blancs en neige\n125 g chocolat\n\nCuisson: four à gas mark 6 (180°), 30 à 40 minutes.",
    "english": "125 g sugar\n125 g almonds\n4 eggs, whites whipped to stiff peaks\n125 g chocolate\n\nBake at gas mark 6 (180°C), 30-40 minutes.",
    "note": "Shares a page with the Moroccan Omelet (Broda).",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "bagna-cauda",
    "title_fr": "Bagna cauda",
    "title_en": "Bagna Cauda",
    "course": "starters",
    "images": [
      "images/scans/bagna-cauda.jpg"
    ],
    "french": "Pour 6 personnes:\n12 anchois entiers frais ou demi-frais au sel\n4 gousses d'ail nouveau\n75 g de beurre en pommade\n4 c.à.s. d'huile d'olive très fruitée\n\nBien rincer les anchois sous l'eau courante. Séparer les filets, bien les éponger et les couper en petits morceaux. Ceci peut se préparer un peu à l'avance.\nPeler les gousses d'ail, les passer au presse-ail. Ajouter les anchois, le beurre et l'huile d'olive. Bien mélanger les éléments à froid (importance du beurre en pommade); ceci peut se faire à l'avance. Mettre sur feu très doux, 3-4 minutes, et bien travailler jusqu'à obtention d'une pâte onctueuse (se fait au dernier moment; le beurre ne doit pas fondre, les éléments doivent simplement s'amalgamer). Servir aussitôt avec des tranches de baguette grillées, avec des crudités de votre choix.\n\nNotes du chef:\n- le Bagna Cauda est un beurre composé qui se sert en accompagnement de crudités.\n- la saison des anchois frais est très courte: de septembre à novembre, et un petit retour en janvier; donc prendre la semi-conserve au sel.\n- enlever l'arête centrale, séparer les filets, bien rincer à l'eau; les éponger.\n- ail: en cuisine provençale, on n'utilise pas le couteau mais le presse-ail; ne pas éplucher totalement l'ail avant de le mettre dans le presse-ail. Pas de perte de jus, et l'ail n'a pas le temps de s'oxyder; si on n'a pas de presse-ail, il faut écraser l'ail avant de le hacher.\n- ne pas craindre de mettre du beurre dans le bagna cauda; cela ajoute de l'onctuosité et adoucit le goût assez prononcé de l'anchois. L'huile d'olive est là pour parfumer.\n- la chaleur du feu doit être minime, et il faut tourner vivement pour amalgamer les différents éléments. Fouetter encore un peu hors du feu.\n- bien couper les tranches de baguette en biais; cela fait de belles tranches.\n- les petites tomates cerise: enlever le coeur, et y piquer un bâtonnet en bois, pour les attraper facilement.\n- ne pas laver les champignons de Paris, mais les passer au pinceau.\n- carottes et céleris coupés en bâtonnets\n- mini-fenouils coupés en deux\n- oignons coupés en quatre, puis les lamelles sont séparées\n- choux-fleurs séparés en petits bouquets.",
    "english": "Serves 6:\n12 whole fresh or lightly salt-cured anchovies\n4 cloves new-season garlic\n75 g softened butter\n4 tbsp fruity olive oil\n\nRinse the anchovies well under running water. Separate the fillets, pat dry, and cut into small pieces. This can be done a little ahead.\nPeel the garlic and put it through a garlic press. Add the anchovies, butter, and olive oil. Mix everything well while cold (the softened butter matters here); this can be done ahead too. Set over very low heat for 3-4 minutes, working it until you get a smooth paste (do this at the last moment; the butter shouldn't melt, the ingredients should just come together). Serve right away with grilled baguette slices and crudités of your choice.\n\nChef's notes:\n- Bagna Cauda is a compound butter served as a dip for raw vegetables.\n- fresh anchovy season is very short: September to November, with a small return in January; so use the salt-cured kind otherwise.\n- remove the central bone, separate the fillets, rinse well; pat dry.\n- garlic: in Provençal cooking, a garlic press is used instead of a knife; don't fully peel the garlic before pressing it. No juice is lost, and the garlic doesn't have time to oxidize; without a press, crush the garlic before chopping.\n- don't be afraid to add butter to bagna cauda; it adds smoothness and softens the anchovy's strong flavor. The olive oil is there for fragrance.\n- keep the heat very low, and stir briskly to bring the ingredients together. Whisk a little more off the heat.\n- cut the baguette slices on an angle for nicer pieces.\n- for cherry tomatoes: remove the core and skewer with a small wooden stick, for easy dipping.\n- don't wash button mushrooms — brush them clean instead.\n- cut carrots and celery into sticks\n- halve baby fennel\n- quarter onions, then separate into petals\n- break cauliflower into small florets.",
    "note": "",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "oeufs-au-lait",
    "title_fr": "Oeufs au lait (crème renversée)",
    "title_en": "Baked Custard (Crème Renversée)",
    "course": "desserts",
    "images": [
      "images/scans/oeufs-au-lait.jpg"
    ],
    "french": "1 litre lait, 5 ou 6 oeufs, sucre, vanille.\n① Fouetter comme pour une omelette.\n② Ajouter le lait, mélanger chaud ou froid.\nFaire un caramel avec 15 morceaux de sucre, en tapisser le moule.\nMettre ① + ② dans le moule, cuire au bain-marie 1 heure.",
    "english": "1 liter milk, 5 or 6 eggs, sugar, vanilla.\n① Whisk as if for an omelet.\n② Add the milk, mix (hot or cold milk both work).\nMake a caramel with 15 sugar cubes, and coat the mold with it.\nPour ① + ② into the mold, cook in a water bath for 1 hour.",
    "note": "One of four short recipes on a single page of notes.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "bananes-creme-coco",
    "title_fr": "Bananes à la crème de coco (Kloei Chum) — Thaïlande",
    "title_en": "Bananas in Coconut Cream (Kloei Chum) — Thailand",
    "course": "desserts",
    "images": [
      "images/scans/bananes-creme-coco.jpg"
    ],
    "french": "2 à 4 personnes\n4 bananes, 1 dl de lait de coco concentré, 200 g de sucre, 3 dl d'eau, 1 prise de sel.\n\nFaites chauffer le lait de coco concentré avec le sel. Réservez. Pelez les bananes. Dans une casserole, faites chauffer le sucre à feu moyen. Dès qu'il commence à roussir, mouillez avec l'eau et portez à ébullition. Déposez les bananes dans ce caramel et laissez cuire jusqu'à ce qu'elles prennent légèrement couleur. Déposez les bananes sur des assiettes à dessert et arrosez-les avec le lait de coco.",
    "english": "Serves 2-4\n4 bananas, 1 dl (100 ml) concentrated coconut milk, 200 g sugar, 3 dl (300 ml) water, 1 pinch salt.\n\nHeat the concentrated coconut milk with the salt. Set aside. Peel the bananas. In a saucepan, heat the sugar over medium heat. As soon as it starts to brown, add the water and bring to a boil. Put the bananas in this caramel and cook until they take on a little color. Place the bananas on dessert plates and drizzle with the coconut milk.",
    "note": "Part of a 2-page spread of Thai recipes.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "banias",
    "title_fr": "Banias",
    "title_en": "Banias (Baby Eggplant Stew)",
    "course": "mains",
    "images": [
      "images/scans/banias.jpg"
    ],
    "french": "1 oignon, coupé en petits morceaux.\nJeter l'oignon dans l'huile ou la margarine.\nY ajouter les banias lavés, avec les bouts coupés,\ndans la casserole avec:\n1 bouillon-cube + eau\nSaler, poivrer.\nConcentré de tomates ou tomates fraîches\n+ viande ou poulet.\nN.B.: diluer d'abord le bouillon-cube\ndans un verre d'eau chaude.",
    "english": "1 onion, cut into small pieces.\nAdd the onion to oil or margarine.\nAdd the washed banias (small eggplants), ends trimmed,\nto the pot with:\n1 bouillon cube + water\nSalt, pepper.\nTomato paste or fresh tomatoes,\n+ meat or chicken.\nN.B.: first dissolve the bouillon cube\nin a glass of hot water.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "foret-noire",
    "title_fr": "Forêt noire",
    "title_en": "Black Forest Cake",
    "course": "desserts",
    "images": [
      "images/scans/foret-noire.jpg"
    ],
    "french": "Pour la génoise: 5 oeufs, 150 g sucre, 100 g farine, 50 g fécule, 25 g cacao non sucré.\nPour la crème: 250 g chocolat de couverture ou chocolat fondant, 250 g crème fraîche.\nPour la crème pâtissière: 1/2 verre de lait, 1 jaune d'oeuf, 1 cuillère à soupe de farine, 1 cuillère à soupe de sucre.\n(J'ai mis le double de crème pâtissière de la recette.)\n\nPréparer la génoise: casser les oeufs pour mesurer le volume, qui ne doit pas dépasser 1/4 de litre, dans une terrine; au bain-marie, fouetter les oeufs entiers en ajoutant le sucre peu à peu jusqu'à ce que le mélange tiédisse; hors du feu, continuer à fouetter pendant 1/4 d'heure à petite vitesse, jusqu'à ce que le mélange devienne coulant et léger.\nMélanger la fécule et le cacao; ajouter doucement à la première préparation. Verser dans des moules à manqué de 20 cm de diamètre, beurrés et farinés.\nMettre au four chaud, th. 5, pendant 30 minutes. Démouler, laisser refroidir.\nPréparer la crème: faire fondre le chocolat au bain-marie, ajouter la crème pâtissière et la crème fraîche, laisser refroidir.\nCouper les génoises en deux, tartiner chaque disque de crème, superposer, masquer tout autour et dessus, garnir de copeaux.\nRégalez-vous bien!",
    "english": "For the sponge: 5 eggs, 150 g sugar, 100 g flour, 50 g cornstarch, 25 g unsweetened cocoa.\nFor the chocolate cream: 250 g dark chocolate or couverture, 250 g crème fraîche.\nFor the pastry cream: 1/2 glass milk, 1 egg yolk, 1 tbsp flour, 1 tbsp sugar.\n(I doubled the pastry cream from the original recipe.)\n\nMake the sponge: crack the eggs into a bowl to measure the volume, which shouldn't exceed 1/4 liter; over a double boiler, whisk the whole eggs, adding the sugar little by little, until the mixture is warm; off the heat, keep whisking for 15 minutes at low speed until the mixture becomes light and flows easily.\nMix the cornstarch and cocoa; fold gently into the first mixture. Pour into buttered, floured 20 cm cake pans.\nBake in a hot oven, gas mark 5, for 30 minutes. Unmold and let cool.\nMake the cream: melt the chocolate over a double boiler, add the pastry cream and the crème fraîche, let cool.\nSlice the sponge cakes in half, spread each layer with cream, stack them, cover the whole cake with more cream, and decorate with chocolate shavings.\nEnjoy!",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "bouillabaisse",
    "title_fr": "Bouillabaisse",
    "title_en": "Bouillabaisse",
    "course": "mains",
    "images": [
      "images/scans/bouillabaisse.jpg"
    ],
    "french": "Huile d'olive + 2 oignons + ail, faire revenir (blond).\nAjouter 5 tomates épluchées.\n1 bouquet garni, sel, poivre, safran.\n+ eau (pour 6 personnes).\nLaisser bouillir, puis cuire à feu vif.\nMettre le poisson, cuire environ 6 minutes.\nServir le potage à part, avec un peu\nde poisson mouliné dedans, + rouille,\ncroûtons + aïoli.\n+ Poisson servi à part.\n\nPoissons: rascasse, vive, rouget, grondin, langoustine, congre, lotte, petite raie (facultatif), moules, crabes.",
    "english": "Olive oil + 2 onions + garlic, sauté until golden.\nAdd 5 peeled tomatoes.\n1 bouquet garni, salt, pepper, saffron.\n+ water (for 6 people).\nBring to a boil, then cook over high heat.\nAdd the fish, cook about 6 minutes.\nServe the broth separately, with a little\npuréed fish stirred in, + rouille (garlicky chili sauce),\ncroutons + aioli.\n+ Fish served on the side.\n\nFish: scorpionfish, weever, red mullet, gurnard, langoustine, conger eel, monkfish, small skate (optional), mussels, crab.",
    "note": "",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "buns",
    "title_fr": "Buns (Grande-Bretagne)",
    "title_en": "Buns (Great Britain)",
    "course": "breads",
    "images": [
      "images/scans/buns.jpg"
    ],
    "french": "Pour environ 30 buns:\n650 g de farine\n50 g de levure de boulanger\n1/3 de litre de lait\n2 oeufs\n100 g de beurre\n60 g de sucre en poudre\n150 g de raisins de Corinthe\n1/2 cuillerée à café de quatre-épices\n2 cuillerées à café de gingembre en poudre\n15 g de sel\n1 oeuf pour dorer\nPréparation: 1 heure, 3 heures à l'avance. Cuisson: 20 mn.\n\nSur le plan de travail, versez la farine en fontaine. Délayez la levure avec un peu de lait tiède et incorporez-la à un quart de la farine prélevée sur la fontaine; laissez pousser ce levain 20 mn. Au centre de la fontaine, cassez 2 oeufs, ajoutez les épices, le reste du lait, le sel, le sucre. Mélangez parfaitement et incorporez le levain. Travaillez à nouveau la pâte et ajoutez le beurre ramolli. Formez une boule, recouvrez-la d'un linge, laissez lever la pâte 1 heure. Reprenez la pâte, rompez-la pour en chasser l'air, remettez-la en boule, faites-la lever encore 45 mn environ. Coupez la pâte en 3 morceaux et chaque morceau en 10 parts. Aplatissez chaque part au rouleau, au centre déposez 1 cuillerée à café de raisins, enfermez-les dans la pâte en formant une boule. Posez les buns sur la plaque du four beurrée, laissez lever 45 mn. Dorez à l'oeuf battu, donnez sur le dessus 3 coups de ciseaux et faites cuire à four chaud 230° (7 au thermostat) pendant 20 mn environ.\n\nNotre conseil: ces merveilleux petits pains se servent au petit déjeuner ou au goûter avec beurre et confiture.",
    "english": "Makes about 30 buns:\n650 g flour\n50 g baker's yeast\n1/3 liter milk\n2 eggs\n100 g butter\n60 g granulated sugar\n150 g currants\n1/2 tsp mixed spice (quatre-épices)\n2 tsp ground ginger\n15 g salt\n1 egg, for glazing\nPrep: 1 hour, 3 hours ahead. Cooking: 20 min.\n\nOn a work surface, pour the flour into a mound and make a well. Dissolve the yeast in a little warm milk and mix it with a quarter of the flour from the well; let this starter rise for 20 minutes. In the center of the well, crack in 2 eggs, add the spices, the rest of the milk, the salt, the sugar. Mix thoroughly and work in the starter. Knead the dough again and add the softened butter. Shape into a ball, cover with a cloth, and let the dough rise for 1 hour. Punch it down to release the air, re-shape into a ball, and let rise again for about 45 minutes. Cut the dough into 3 pieces, and each piece into 10 parts. Roll out each part, place 1 tsp currants in the center, and enclose them in the dough, shaping into a ball. Place the buns on a buttered baking sheet, let rise 45 minutes. Brush with beaten egg, snip the tops 3 times with scissors, and bake in a hot oven at 230°C (gas mark 7) for about 20 minutes.\n\nOur tip: these wonderful little buns are lovely for breakfast or an afternoon snack, with butter and jam.",
    "note": "Shares a page with a Pain de Mie (sandwich bread) recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "bulter-denise-levy",
    "title_fr": "Bulter (Mme Denise Levy)",
    "title_en": "Butter Cake (Mme Denise Levy)",
    "course": "desserts",
    "images": [
      "images/scans/bulter-denise-levy.jpg"
    ],
    "french": "135 g beurre\n135 g sucre\n1 oeuf\n1 cuillère eau de vie\n235 g farine\n1 cuillère à café levure\nCannelle",
    "english": "135 g butter\n135 g sugar\n1 egg\n1 spoonful brandy (eau de vie)\n235 g flour\n1 tsp baking powder\nCinnamon",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "haricots-beurre",
    "title_fr": "Haricots beurre",
    "title_en": "Buttered Green Beans",
    "course": "sides",
    "images": [
      "images/scans/haricots-beurre.jpg"
    ],
    "french": "Faire blanchir, égoutter.\nPersillade + crème.",
    "english": "Blanch, then drain.\nParsley-garlic + cream.",
    "note": "Shares a page with Carrots Vichy and Swiss chard.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "marrons-glaces",
    "title_fr": "Marrons glacés",
    "title_en": "Candied Chestnuts",
    "course": "desserts",
    "images": [
      "images/scans/marrons-glaces.jpg"
    ],
    "french": "Égoutter les marrons (du sirop).\nSucre glace, vanille râpée.\nChauffer le four à fond.\nGriller et placer sur papier aluminium,\nles marrons côte à côte, sans se toucher.\nÉteindre le four, enfourner 5 minutes,\nsortir, laisser sécher 24h à l'air.",
    "english": "Drain the chestnuts (from their syrup).\nPowdered sugar, grated vanilla.\nHeat the oven to its highest setting.\nToast them and arrange on aluminum foil,\nchestnuts side by side, not touching.\nTurn off the oven, put them in for 5 minutes,\ntake out, and let dry in the open air for 24 hours.",
    "note": "Shares a page with a Falafel recipe.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "marrons-glaces-boite",
    "title_fr": "Marrons glacés (avec boîte de marrons au sirop)",
    "title_en": "Candied Chestnuts (Shortcut, with Tinned Chestnuts)",
    "course": "desserts",
    "images": [
      "images/scans/marrons-glaces-boite.jpg"
    ],
    "french": "Boîte(s) de marrons au sirop. Égoutter les marrons, mettre le sirop de côté.\nMélanger le sirop à du sucre glace (pas trop liquide).\nNapper les marrons.\nLes disposer sur la grille, au-dessus d'une plaque recouverte de papier aluminium.\nChauffer le four à fond. Éteindre le four, puis enfourner les marrons, placés côte à côte sans se toucher, 5 minutes.\nSortir les marrons et les laisser sécher 24h à l'air libre.",
    "english": "Tin(s) of chestnuts in syrup. Drain the chestnuts, set the syrup aside.\nMix the syrup with powdered sugar (not too runny).\nCoat the chestnuts with it.\nArrange them on a rack, over a tray lined with aluminum foil.\nHeat the oven to full temperature. Turn off the oven, then put the chestnuts in, placed side by side without touching, for 5 minutes.\nTake the chestnuts out and let them dry in the open air for 24 hours.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "cremes-vanille-caramelisees",
    "title_fr": "Crèmes de vanille caramélisées",
    "title_en": "Caramelized Vanilla Creams (Crème Brûlée)",
    "course": "desserts",
    "images": [
      "images/scans/cremes-vanille-caramelisees.jpg"
    ],
    "french": "Pour 4 personnes\nPréparation: 15 mn. Cuisson: 15 mn. Réfrigération: 3 h.\n\n30 cl de crème liquide parvé (sucrée)\n5 jaunes d'oeufs\n30 g de sucre semoule (ou 60 g si la crème n'est pas sucrée)\n10 cl de lait de soja\n4 c.à.c. de cassonade\n1 gousse de vanille\n2 c.à.c. rases de Maïzena\n\nPortez la crème et le lait à ébullition avec la gousse de vanille fendue en deux. Retirez du feu puis laissez infuser à couvert. Après 20 mn, retirez la vanille et portez à nouveau le lait à ébullition.\nFouettez les 5 jaunes d'oeufs avec les 30 g de sucre semoule dans une terrine, jusqu'à ce que le mélange devienne blanc et mousseux, puis incorporez la Maïzena et délayez avec le lait infusé.\nTransvasez le mélange dans une casserole à fond épais, puis faites épaissir sur feu doux en remuant sans cesse, jusqu'à ce que votre crème nappe bien la spatule.\nRépartissez aussitôt la crème cuite dans des petits plats à gratin individuels. Laissez-la refroidir au réfrigérateur au moins 3 h (ou mieux, préparez-la la veille).\nJuste avant de servir, allumez le grill du four et saupoudrez les crèmes d'une couche fine et régulière de cassonade. Passez les plats sous le gril très chaud, juste le temps de caraméliser le sucre, et sans réchauffer la crème. Servez aussitôt.",
    "english": "Serves 4\nPrep: 15 min. Cooking: 15 min. Chilling: 3 h.\n\n30 cl (300 ml) non-dairy (parve) sweetened liquid cream\n5 egg yolks\n30 g caster sugar (or 60 g if the cream is unsweetened)\n10 cl (100 ml) soy milk\n4 tsp brown sugar\n1 vanilla pod\n2 level tsp cornstarch\n\nBring the cream and milk to a boil with the vanilla pod, split in two. Remove from heat and let infuse, covered. After 20 minutes, remove the vanilla and bring the milk back to a boil.\nWhisk the 5 egg yolks with the 30 g caster sugar in a bowl until pale and fluffy, then stir in the cornstarch and thin with the infused milk.\nPour the mixture into a heavy-bottomed saucepan and thicken over low heat, stirring constantly, until the custard coats the back of a spoon.\nImmediately divide the custard among small individual gratin dishes. Chill at least 3 hours (or better, make it the day before).\nJust before serving, heat the oven broiler and sprinkle the creams with a thin, even layer of brown sugar. Broil under high heat just long enough to caramelize the sugar, without reheating the custard. Serve immediately.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "carottes-vichy",
    "title_fr": "Carottes Vichy",
    "title_en": "Carrots Vichy",
    "course": "sides",
    "images": [
      "images/scans/carottes-vichy.jpg"
    ],
    "french": "(Même méthode pour les petits pois, les haricots verts)\nFaire revenir les carottes\n+ persillade + un peu d'eau (+ crème).",
    "english": "(Same method works for peas and green beans)\nSauté the carrots\n+ parsley-garlic + a little water (+ cream).",
    "note": "Shares a page with recipes for buttered green beans and Swiss chard.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "hallah",
    "title_fr": "Hallah",
    "title_en": "Challah (Friday Night Bread)",
    "course": "breads",
    "images": [
      "images/scans/hallah.jpg"
    ],
    "french": "Natte du vendredi soir (6 personnes)\nPréparation: 30 mn. Cuisson: 20 mn.\n\n250 g de farine tamisée\n25 g de levure du boulanger\nune pincée de sel\n50 g de sucre en poudre\n4 oeufs + 1 jaune d'oeuf\n4 cuillerées à soupe d'huile\n1/4 de verre d'eau\n\nDisposez la farine en puits dans la terrine.\nAjoutez la levure diluée dans un peu d'eau tiède, le sucre, l'oeuf battu, l'huile, le sel, l'eau. Pétrissez bien.\nLaissez reposer la pâte pendant 1h pour la faire lever.\nRompez votre pâte et divisez-la en trois parties que vous façonnez en trois longs rouleaux. Tressez-les et laissez reposer de nouveau sur une plaque beurrée allant au four, de préférence à la chaleur, pour qu'ils doublent de volume.\nDorez au jaune d'oeuf battu. Enfournez dans un four assez chaud pendant 20 minutes.\nBon appétit!",
    "english": "A braided loaf for Friday night (serves 6)\nPrep: 30 min. Baking: 20 min.\n\n250 g sifted flour\n25 g baker's yeast\na pinch of salt\n50 g granulated sugar\n4 eggs + 1 egg yolk\n4 tbsp oil\n1/4 glass water\n\nMake a well with the flour in a bowl.\nAdd the yeast dissolved in a little warm water, the sugar, the beaten egg, the oil, the salt, and the water. Knead well.\nLet the dough rest for 1 hour to rise.\nPunch down the dough and divide it into three parts; shape each into a long rope. Braid them and let rise again on a buttered baking sheet, ideally somewhere warm, until doubled in size.\nBrush with beaten egg yolk. Bake in a fairly hot oven for 20 minutes.\nBon appétit!",
    "note": "",
    "tags": [
      "parve",
      "shabbat"
    ]
  },
  {
    "slug": "tarte-au-fromage",
    "title_fr": "Tarte au fromage",
    "title_en": "Cheese Tart",
    "course": "desserts",
    "images": [
      "images/scans/tarte-au-fromage.jpg"
    ],
    "french": "Pâte brisée, cuite préalablement dans le moule, environ 5 min.\n1 boîte de fromage blanc (500 g)\n4 cuillerées de crème fraîche\n4 cuillerées de sucre fin\n1 sachet de sucre vanillé\n3 jaunes d'oeufs\nBattre les blancs en neige.\n\nMettre ce mélange onctueux sur la pâte et cuire à feu doux jusqu'à ce que le dessus devienne brun foncé.\nBon dessert.",
    "english": "Shortcrust pastry, pre-baked in the pan for about 5 minutes.\n1 tin fromage blanc (500 g)\n4 tbsp crème fraîche\n4 tbsp fine sugar\n1 packet vanilla sugar\n3 egg yolks\nBeat the egg whites to stiff peaks.\n\nPour this smooth mixture over the crust and bake in a low oven until the top turns a deep brown.\nEnjoy your dessert!",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "truffes-aux-marrons",
    "title_fr": "Truffes aux marrons",
    "title_en": "Chestnut Truffles",
    "course": "desserts",
    "images": [
      "images/scans/truffes-aux-marrons.jpg"
    ],
    "french": "350 g purée de marrons, non sucrée\n150 g chocolat fondant fin\n150 g sucre glace\n75 g beurre très frais\n30 g cacao ou vermicelle de chocolat\n\nMélanger dans l'ordre: chocolat fondu + beurre + sucre + purée de marrons.\n2 à 3 heures au réfrigérateur.",
    "english": "350 g unsweetened chestnut purée\n150 g fine dark chocolate\n150 g powdered sugar\n75 g very fresh butter\n30 g cocoa powder or chocolate vermicelli, for coating\n\nMix in this order: melted chocolate + butter + sugar + chestnut purée.\nRefrigerate for 2-3 hours.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "blanc-poulet-amandes",
    "title_fr": "Blancs de poulet aux amandes",
    "title_en": "Chicken Breast with Almonds",
    "course": "mains",
    "images": [
      "images/scans/blanc-poulet-amandes.jpg"
    ],
    "french": "Pour 4 personnes\nPréparation: 20 min. Cuisson: 20 min.\n\n4 escalopes de poulet (ou dinde, ou veau)\n1 kg d'épinards frais (ou surgelés)\n2 c.à.s. d'huile\n20 g de margarine\n25 cl de crème fraîche parvé\n1 gousse d'ail\n50 g d'amandes effilées\n1 pincée de noix de muscade\n\nÉqueutez et lavez les épinards. Faites-les blanchir 5 min à l'eau bouillante salée puis égouttez. Pressez-les dans les mains pour éliminer le plus d'eau possible, mettez-les sur une planche et hachez-les grossièrement au couteau. Faites fondre la margarine dans une petite cocotte, et mettez les épinards à réchauffer doucement, à couvert, après les avoir salés, poivrés et assaisonnés de noix de muscade.\n\nFaites chauffer l'huile dans une poêle. Faites cuire les escalopes pendant 12 à 15 min à feu moyen en les retournant une fois à mi-cuisson. Salez et poivrez-les.\n\nPendant ce temps, pelez et hachez finement l'ail. Fouettez la crème avec l'ail, du sel et du poivre. Faites chauffer quelques instants sur feu doux.\n\nFaites griller les amandes effilées quelques minutes à sec dans une poêle.\n\nVérifiez l'assaisonnement des épinards puis répartissez-les sur des assiettes de service chaudes. Posez une escalope dessus. Saupoudrez d'amandes grillées et nappez de sauce à l'ail juste au moment de servir.",
    "english": "Serves 4\nPrep: 20 min. Cooking: 20 min.\n\n4 chicken escalopes (or turkey, or veal)\n1 kg fresh spinach (or frozen)\n2 tbsp oil\n20 g margarine\n25 cl (250 ml) non-dairy (parve) cream\n1 clove garlic\n50 g sliced almonds\n1 pinch nutmeg\n\nTrim and wash the spinach. Blanch 5 min in salted boiling water, then drain. Squeeze with your hands to remove as much water as possible, place on a board, and chop coarsely. Melt the margarine in a small pot, and warm the spinach through gently, covered, after seasoning with salt, pepper, and nutmeg.\n\nHeat the oil in a pan. Cook the escalopes 12-15 min over medium heat, turning once halfway. Salt and pepper.\n\nMeanwhile, peel and finely chop the garlic. Whisk the cream with the garlic, salt, and pepper. Warm briefly over low heat.\n\nToast the sliced almonds for a few minutes, dry, in a pan.\n\nCheck the spinach's seasoning, then divide among warm serving plates. Place an escalope on top. Sprinkle with toasted almonds and coat with the garlic sauce just before serving.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "brochettes-poulet-thai",
    "title_fr": "Brochettes de poulet (Satéh Kai) — Thaïlande",
    "title_en": "Chicken Satay (Satéh Kai) — Thailand",
    "course": "starters",
    "images": [
      "images/scans/brochettes-poulet-thai.jpg"
    ],
    "french": "4 personnes\n400 g de blanc de poulet, 1,5 c.à.s. de curry de Madras, 1/2 c.à.c. de sel, 2 c.à.s. d'huile neutre, 4 c.à.s. de lait de coco.\nPour la sauce cacahuète: 425 g de pâte d'arachide en boîte, 2 c.à.s. de satéh en poudre, 6 c.à.s. d'huile, 3 c.à.s. de sucre, 2 c.à.s. de vinaigre.\n\nDans un saladier, mélangez le lait de coco, l'huile, le curry et le sel. Coupez les blancs de poulet en fines et longues tranches et mettez-les à mariner une demi-heure dans ce mélange.\nPour faire la sauce, mélangez énergiquement la pâte d'arachide, l'huile, le vinaigre et le sucre jusqu'à obtention d'une sauce homogène, que vous servirez dans des mini-coupelles individuelles.\nEnfilez ensuite chaque lamelle de poulet sur une brochette et faites-les cuire soit sur le gril, soit à la poêle dans une goutte d'huile.\n(Les proportions ci-dessus sont prévues pour un plat principal pour 4 personnes accompagné de riz. Elles conviennent pour l'apéritif pour 6 à 8 convives.)",
    "english": "Serves 4\n400 g chicken breast, 1.5 tbsp Madras curry powder, 1/2 tsp salt, 2 tbsp neutral oil, 4 tbsp coconut milk.\nFor the peanut sauce: 425 g canned peanut paste, 2 tbsp satay spice powder, 6 tbsp oil, 3 tbsp sugar, 2 tbsp vinegar.\n\nIn a bowl, mix the coconut milk, oil, curry powder, and salt. Cut the chicken breasts into thin, long strips and marinate in this mixture for half an hour.\nFor the sauce, vigorously mix the peanut paste, oil, vinegar, and sugar until smooth, and serve in small individual dipping bowls.\nThread each chicken strip onto a skewer and cook either on the grill or in a pan with a drop of oil.\n(The quantities above are for a main course for 4, served with rice. They also work as an appetizer for 6-8 guests.)",
    "note": "Part of a 2-page spread of Thai recipes.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "poule-au-riz",
    "title_fr": "Poule au riz (blanquette)",
    "title_en": "Chicken and Rice (Blanquette-Style)",
    "course": "mains",
    "images": [
      "images/scans/poule-au-riz.jpg"
    ],
    "french": "Cuire la poule dans l'eau (→ bouillon), à feu doux, jusqu'à ce qu'elle soit bien cuite.\nFaire une sauce blanche (dorée) avec le bouillon + champignons.\nMettre le riz dans un moule à savarin.\nAu centre: la sauce + la poule + les champignons.\n+ servir la poule découpée sur le plat.",
    "english": "Cook the chicken in water (to make a broth), over low heat, until fully cooked.\nMake a white (golden) sauce with the broth + mushrooms.\nPack the rice into a ring mold.\nIn the center: the sauce + the chicken + the mushrooms.\nServe with the chicken carved onto the dish.",
    "note": "One of four short recipes on a single page of notes.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "nana-enfants-galette",
    "title_fr": "Des enfants autour d'une galette (fête des Rois)",
    "title_en": "Children Around a King Cake (Twelfth Night Treats)",
    "course": "desserts",
    "images": [
      "images/scans/nana-enfants-galette.jpg"
    ],
    "french": "DES ENFANTS AUTOUR D'UNE GALETTE\n\nLa fête des Rois est souvent l'occasion d'un grand goûter qui réunit les moins de douze ans autour de la galette et d'alléchantes friandises. Attention au choix de celles-ci: évitez la crème au beurre, qui est lourde, les savarins au rhum, à cause de l'alcool, les fours à la pâte d'amandes, qui mangés sans retenue, sont indigestes, les beignets et autres fritures. La galette elle-même sera là plutôt comme prétexte à réunion que comme base du goûter: elle est en pâte feuilletée, ne l'oubliez pas. Un petit triangle de galette, lourd d'un espoir de fève, suffira à chacun.\nEn revanche, servez des madeleines, des brioches, des tranches de cake, toutes sortes de biscuits. Donnez du chocolat chaud dans les tasses et de l'orangeade dans les verres; s'il y avait plusieurs sirops, les gourmands goûteraient à tous et ce beau mélange les rendrait malades. Comme bonbons, pâtes de fruits, caramels.\n\nVoici quelques recettes simples et inoffensives, choisissez parmi elles.\n\nDENTS DE LOUP: 2 oeufs, même poids de sucre en poudre, même poids de farine.\nMélangez consciencieusement les oeufs et le sucre. Ajoutez à la pâte obtenue la farine par cuillerées. Tournez bien. Versez dans chaque rainure d'un petit appareil ondulé beurré la valeur d'une cuillerée à moka de pâte (ou d'une très petite cuillerée à café). Faites blondir à four chaud: neuf à dix minutes suffisent. Décollez sur une grille. Mettez les biscuits refroidis dans une boîte métallique. Vous pouvez les faire plusieurs jours à l'avance.\n\nBISCUITS À L'ORANGE: 2 oeufs, 250 g de sucre en poudre, 250 g de beurre, 500 g de farine, 2 oranges, 1 paquet de levure en poudre.\nMettez dans une terrine la farine, les oeufs, le sucre, le beurre en petits morceaux et travaillez tout cela avec les doigts jusqu'à consistance de \"sable\". Ajoutez alors les jus des oranges pressées et leur zeste râpé, le tout tournant avec une spatule. Finissez par la levure. Modelez des noix de pâte en aplatis, faites-les cuire sur une tôle beurrée, en ménageant un certain espace entre elles dans un four modérément chaud. Quand les biscuits auront blondi, au bout de vingt minutes environ, sortez-les du four et posez-les sur une grille pour qu'ils refroidissent.\n\nTUILES AUX AMANDES: 2 blancs d'oeufs, 100 g de sucre, 50 g de farine, 50 g d'amandes coupées en filets, 40 g de beurre fondu.\nMettez dans une terrine les blancs et le sucre, faites-les mousser à la fourchette. Mélangez-y la farine, les filets d'amandes, le beurre très mou. Versez par cuillerées espacées votre pâte liquide sur une tôle beurrée, poudrez chaque plaquette de sucre très fin, mettez cinq minutes à four chaud. Transportez vite les tuiles sur une bouteille ou sur le rouleau à pâtisserie pour les façonner en tuiles arrondies. Elles y refroidiront dans leur forme. Vous les enfermerez ensuite dans une boîte en fer.\n\nBISCUITS ARCHE DE NOÉ: 70 g de sucre en poudre vanillé, 2 cuillerées à soupe de lait, 60 g de beurre, 125 g de farine, 1 pincée de levure en poudre.\nVersez dans le lait le sucre et la vanille. Dans une terrine, pétrissez du bout des doigts beurre et farine, ajoutez-y un peu de lait. Vous obtiendrez une pâte ferme que vous découperez à 1 cm d'épaisseur et que vous écraserez avec des emporte-pièce ayant forme de lapin, agneau, chat, etc. Faites dorer à four chaud sur une tôle beurrée. Ces biscuits \"animaliers\" ont toujours un succès fou.\n\nPÂTE DE FRUITS: 1 kg de bonnes pommes, 200 g de dattes, 1 kg de sucre cristallisé.\nÉpluchez les pommes et râpez-les finement. Mêlez-y le sucre et les dattes hachées et posez-le tout sur feu doux en remuant. Quand vous aurez une pâte épaisse, versez-la sur le marbre huilé ou une plaque de porcelaine huilée. Vous n'aurez plus qu'à découper en petits carrés la pâte refroidie et à rouler ces carrés dans du sucre glace.\n\nCARAMELS AU CHOCOLAT: 150 g de chocolat, autant de beurre, autant de miel, autant de sucre.\nMêlez tout cela dans une casserole épaisse. Laissez bouillir franchement cinq minutes. Quand la pâte se détache un peu du fond de la casserole, versez-la sur le marbre huilé et découpez-la en carrés sans attendre qu'elle soit complètement froide. Posez chaque carré dans une collerette de papier.\n\nEt voici pour mémoire la formule de la GALETTE PARISIENNE: 250 g de farine, autant de beurre, 1 cuillerée à café de sel, 1 tasse d'eau, ou moins, selon la farine.\nPétrissez farine, eau, sel, façonnez-en une boule que vous laisserez reposer un quart d'heure. Abaissez-la au rouleau en carré, mettez le beurre au centre allongé, rabattez dessus les quatre angles du carré. Roulez-la en forme de bande allongée que vous reployez en trois, allongez dans l'autre sens, repliez une seconde fois, vingt minutes de repos, puis nouveau tours et nouveau repos. Enfin, derniers tours. Formez sous le rouleau une galette ronde. Rayez sa surface avec les dents d'une fourchette et mouillez-la avec du lait. Glissez la fève par-dessous. Mettez à four chaud vingt-cinq minutes. Servez chaud si possible.\n\nJe vous rappelle que la pâte feuilletée toute prête se trouve si vous êtes pressée.\n\nPas de nappe endentelée mais une nappe de couleur. Comme vaisselle et verrerie, ce que vous avez de plus rustique. Des serviettes assorties à la nappe, que vous attacherez autour de chaque petit cou! N'oubliez pas les couronnes dorées pour le roi et la reine. Et si vous mettez devant chaque assiette un menu jouet (la matière plastique offre là des ressources variées), la joie sera à son comble. — Mariette.\n\nSABLÉS ÉCOSSAIS: 125 g de beurre frais, 75 g de miel, 250 g de farine tamisée.\nMélangez beurre et miel, en remuant bien. Ajoutez petit à petit la farine en pétrissant à la main vigoureusement, sans ajouter aucun liquide. Aplatissez au rouleau à 4 mm. Découpez avec un emporte-pièce en forme de coeur, dorez au jaune d'oeuf, enfournez sur une tôle légèrement beurrée. Ne laissez pas cuire trop longtemps: enlevez les sablés dès qu'ils seront dorés.",
    "english": "CHILDREN AROUND A KING CAKE\n\nTwelfth Night (Epiphany) is often the occasion for a big party gathering children under twelve around the galette and tempting treats. Choose those treats carefully: avoid heavy buttercream, rum savarins (because of the alcohol), almond-paste petits fours (indigestible if eaten without restraint), doughnuts, and other fried foods. The galette itself should really be more of a reason to gather than the main event of the party — it's made of puff pastry, don't forget. One small triangle, weighty with the hope of finding the charm, is plenty for each child.\nInstead, serve madeleines, brioche, slices of pound cake, all kinds of cookies. Give out hot chocolate in cups and orangeade in glasses; if there were several kinds of syrup, the greedier children would try them all, and mixing them would make them sick. For candy, stick to fruit pastes and caramels.\n\nHere are a few simple, harmless recipes to choose from.\n\nWOLF'S TEETH COOKIES: 2 eggs, an equal weight of sugar, an equal weight of flour.\nBeat the eggs and sugar thoroughly together. Fold in the flour, a spoonful at a time. Stir well. Spoon about a teaspoon of batter into each groove of a small buttered ridged mold (madeleine- or langue-de-chat-style). Bake in a hot oven until golden — 9 to 10 minutes is enough. Lift off onto a rack. Once cooled, store in a tin. These can be made several days ahead.\n\nORANGE COOKIES: 2 eggs, 250 g sugar, 250 g butter, 500 g flour, 2 oranges, 1 packet baking powder.\nPut the flour, eggs, sugar, and butter (in small pieces) in a bowl and work with your fingers until sandy in texture. Add the juice of the oranges and their grated zest, stirring with a spatula. Finish with the baking powder. Shape into small flattened balls, and bake on a buttered sheet, spaced apart, in a moderate oven. Once golden, after about 20 minutes, remove from the oven and cool on a rack.\n\nALMOND TUILES: 2 egg whites, 100 g sugar, 50 g flour, 50 g sliced almonds, 40 g melted butter.\nWhisk the whites and sugar together with a fork until foamy. Mix in the flour, almond slivers, and very soft butter. Drop spoonfuls of the batter, spaced apart, onto a buttered sheet, dust each with fine sugar, and bake 5 minutes in a hot oven. Quickly drape the warm tuiles over a bottle or rolling pin to curve them into their classic shape; they'll cool and set that way. Store in a tin afterward.\n\nNOAH'S ARK COOKIES: 70 g vanilla sugar, 2 tbsp milk, 60 g butter, 125 g flour, 1 pinch baking powder.\nStir the sugar and vanilla into the milk. In a bowl, rub the butter and flour together with your fingertips, then add a little of the milk. You'll get a firm dough; roll it to 1 cm thick and cut out shapes with animal-shaped cutters — rabbit, lamb, cat, and so on. Bake until golden on a buttered sheet in a hot oven. These animal cookies are always a huge hit.\n\nFRUIT PASTE: 1 kg good apples, 200 g dates, 1 kg granulated sugar.\nPeel the apples and grate them finely. Mix in the sugar and the chopped dates, and cook over low heat, stirring. Once you have a thick paste, spread it on an oiled marble slab or oiled porcelain tray. Once cooled, cut into small squares and roll them in powdered sugar.\n\nCHOCOLATE CARAMELS: 150 g chocolate, the same of butter, the same of honey, the same of sugar.\nCombine everything in a heavy saucepan. Boil hard for 5 minutes. Once the mixture starts pulling away from the bottom of the pan, pour it onto an oiled marble slab and cut into squares right away, before it's fully cold. Wrap each square in a twist of paper.\n\nAnd for the record, here's the recipe for the classic PARISIAN GALETTE: 250 g flour, the same of butter, 1 tsp salt, 1 cup water, or a little less, depending on the flour.\nKnead the flour, water, and salt into a ball, and let rest 15 minutes. Roll out into a square, place the butter, shaped into a block, in the center, and fold the four corners of the square over it. Roll into a long strip, fold into thirds, turn and roll again in the other direction, fold a second time; rest 20 minutes, then give it more turns and more resting. Finally, after the last turns, roll it under the pin into a round galette. Score the surface in a crosshatch with a fork and brush with milk. Slip the lucky charm (fève) underneath. Bake 25 minutes in a hot oven. Serve warm if you can.\n\nA reminder that ready-made puff pastry is available if you're short on time.\n\nSkip the lacy tablecloth — use a colorful one instead. For dishes and glassware, go with your most rustic pieces. Napkins to match the tablecloth, tied around each little neck! Don't forget the gold paper crowns for the king and queen. And if you set a little toy menu at each place (plastic offers plenty of options here), the joy will be complete. — Mariette\n\nSCOTTISH SHORTBREAD: 125 g fresh butter, 75 g honey, 250 g sifted flour.\nMix the butter and honey well. Gradually work in the flour by hand, kneading vigorously, with no liquid added. Roll out to 4 mm. Cut out heart shapes with a cutter, brush with egg yolk, and bake on a lightly buttered sheet. Don't overbake — remove the shortbread as soon as it turns golden.",
    "note": "",
    "tags": []
  },
  {
    "slug": "gateau-chocolat-rapide",
    "title_fr": "Gâteau au chocolat",
    "title_en": "Chocolate Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-chocolat-rapide.jpg"
    ],
    "french": "20 min cuisson\n6 oeufs, blancs en neige\n200 g sucre\n250 g chocolat fondu\n250 g amandes moulues",
    "english": "20 minutes baking time\n6 eggs, whites whipped to stiff peaks\n200 g sugar\n250 g melted chocolate\n250 g ground almonds",
    "note": "Shares a page with a spinach side dish (see Sylvia Israel's Spinach).",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "cookies-chocolat",
    "title_fr": "Cookies au chocolat (États-Unis)",
    "title_en": "Chocolate Chip Cookies (United States)",
    "course": "desserts",
    "images": [
      "images/scans/cookies-chocolat.jpg"
    ],
    "french": "Pour environ 50 cookies:\n2 oeufs\n200 g sucre roux de canne\n150 g sucre semoule\n1 cuillerée à café d'extrait de vanille\n450 g farine\n1 sachet de levure chimique\n200 g beurre ramolli\n1 pincée de sel\n300 g chocolat riche en cacao\nhuile\nPréparation: 30 mn. Cuisson: 10 mn par plaque.\n\nBattez dans une terrine les oeufs, la vanille et les deux sucres, jusqu'à ce que le mélange devienne mousseux. Ajoutez ensuite la farine et la levure tamisées, le sel, puis le beurre juste fondu, en travaillant bien à la spatule en bois pour éviter la formation de grumeaux. Râpez, à l'aide d'un couteau économe, 300 g de copeaux de chocolat. Incorporez-les à la pâte sans trop la travailler. Huilez légèrement au pinceau une plaque à pâtisserie. À l'aide d'une cuillère à soupe, déposez dessus des petits tas de pâte de 30 g environ, puis aplatissez-les avec la main pour former des disques de 5 cm de diamètre. Mettez au frais, le temps de préchauffer le four à 180° (6 au thermostat). Enfournez à mi-hauteur et laissez cuire 10 minutes par plaque. Les cookies doivent être tendres et moelleux au centre. Une fois cuits, déposez-les un à un sur une grille, afin qu'ils refroidissent complètement.\n\nNotre conseil: enfermés dans une boîte hermétique, les cookies se conserveront plusieurs semaines.",
    "english": "Makes about 50 cookies:\n2 eggs\n200 g cane brown sugar\n150 g granulated sugar\n1 tsp vanilla extract\n450 g flour\n1 packet baking powder\n200 g softened butter\n1 pinch salt\n300 g chocolate, high in cocoa\noil\nPrep: 30 min. Cooking: 10 min per batch.\n\nIn a bowl, beat the eggs, vanilla, and both sugars until foamy. Then add the sifted flour and baking powder, the salt, and the just-melted butter, mixing well with a wooden spatula to avoid lumps. Using a vegetable peeler, shave 300 g of chocolate into curls. Fold them into the dough without overworking it. Lightly oil a baking sheet with a brush. Using a tablespoon, drop mounds of dough of about 30 g onto it, then flatten with your hand into 5 cm discs. Chill while the oven preheats to 180°C (gas mark 6). Bake on the middle rack for 10 minutes per batch. The cookies should be soft and tender in the center. Once baked, transfer them one by one to a rack to cool completely.\n\nOur tip: stored in an airtight container, the cookies will keep for several weeks.",
    "note": "Shares a page with an Almond Brownies recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "fondants-chocolat",
    "title_fr": "Fondants au chocolat",
    "title_en": "Chocolate Fondants",
    "course": "desserts",
    "images": [
      "images/scans/fondants-chocolat.jpg"
    ],
    "french": "Pour 6-8 personnes:\n300 g chocolat noir\n250 g margarine\n250 g sucre\n250 g farine\n4 oeufs\n\nFondre le chocolat + la margarine.\nAjouter le sucre puis les oeufs.\nMettre dans des ramequins beurrés.\nCuire à 225° environ 14 minutes.",
    "english": "Serves 6-8:\n300 g dark chocolate\n250 g margarine\n250 g sugar\n250 g flour\n4 eggs\n\nMelt the chocolate + margarine.\nAdd the sugar, then the eggs.\nPour into buttered ramekins.\nBake at 225°C for about 14 minutes.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "pots-creme-chocolat",
    "title_fr": "Petits pots de crème au chocolat",
    "title_en": "Chocolate Pots de Crème",
    "course": "desserts",
    "images": [
      "images/scans/pots-creme-chocolat.jpg"
    ],
    "french": "Pour 6 à 8 personnes:\n1 litre de lait\n250 g de chocolat noir mi-amer\n175 g de sucre\n8 jaunes d'oeufs\n1 oeuf entier\nPréparation: 10 mn + 30 mn de refroidissement. Cuisson: 40 à 50 mn.\n\nFaites bouillir le lait. Ajoutez-lui le chocolat cassé en morceaux et le sucre. Portez à nouveau à ébullition en remuant, puis sortez du feu, couvrez et laissez infuser jusqu'à complet refroidissement. Passez alors au chinois, ajoutez les jaunes un à un puis l'oeuf entier battu en omelette. Passez à nouveau au chinois. Versez la crème dans des petits pots individuels. Placez-les dans un bain-marie chaud, faites frémir sur feu doux 20 minutes, puis mettez le bain-marie à four doux, chauffé d'avance, à 150° (thermostat 5). Laissez cuire 20 à 30 minutes sans ouvrir le four. Vérifiez la cuisson en piquant la crème avec une lame de couteau: elle doit être prise. Laissez refroidir avant de mettre au réfrigérateur. Il est conseillé de préparer ces petits pots la veille.\n\nLE CONSEIL DU CHEF: Michel Rostang, à Paris, vous recommande de boire un banyuls avec ce dessert.",
    "english": "Serves 6-8:\n1 liter milk\n250 g semisweet dark chocolate\n175 g sugar\n8 egg yolks\n1 whole egg\nPrep: 10 min + 30 min cooling. Cooking: 40-50 min.\n\nBring the milk to a boil. Add the chocolate, broken into pieces, and the sugar. Bring back to a boil, stirring, then remove from heat, cover, and let infuse until completely cool. Strain through a fine sieve, add the egg yolks one at a time, then the whole egg beaten like an omelet. Strain again. Pour the custard into individual pots. Place them in a hot water bath, let simmer gently over low heat for 20 minutes, then put the water bath in a low oven, preheated to 150°C (gas mark 5). Bake 20-30 minutes without opening the oven. Check doneness by piercing with a knife blade — the custard should be set. Let cool before refrigerating. It's best to make these a day ahead.\n\nTHE CHEF'S TIP: Michel Rostang, in Paris, recommends a banyuls wine with this dessert.",
    "note": "Shares a page with a Florentines recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "truffes-chocolat",
    "title_fr": "Truffes au chocolat",
    "title_en": "Chocolate Truffles",
    "course": "desserts",
    "images": [
      "images/scans/truffes-chocolat.jpg"
    ],
    "french": "2 tablettes de chocolat\n100 g beurre fin\n150 g sucre glace\n2 jaunes d'oeufs\n\nTravailler le sucre + les jaunes.\nY incorporer le chocolat, fondu avec 1 goutte d'eau.\nMélanger avec le beurre.\nTravailler le tout ensemble jusqu'à ce que la pâte soit bien lisse.\nLaisser poser une nuit au frais.\nEn faire des boules que l'on roule dans des vermicelles en sucre ou du cacao.\nMettre les truffes dans des petits gobelets de papier glacé.",
    "english": "2 bars of chocolate\n100 g fine butter\n150 g powdered sugar\n2 egg yolks\n\nCream the sugar and egg yolks together.\nMix in the chocolate, melted with a drop of water.\nBlend in the butter.\nWork it all together until the paste is smooth.\nLet rest overnight in the fridge.\nRoll into balls and coat in sugar sprinkles or cocoa.\nPlace the truffles in small paper cups.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "choucroute-aricach",
    "title_fr": "Choucroute (Aricach)",
    "title_en": "Choucroute Garnie (Aricach)",
    "course": "mains",
    "images": [
      "images/scans/choucroute-aricach.jpg"
    ],
    "french": "Pour 6 personnes\nPréparation et cuisson: 3 heures\n\n2 kg de choucroute\n500 g de boeuf salé\n500 g de boeuf fumé\n1 pied de veau\n1 carotte\n1 gros oignon piqué de 2 clous de girofle\n100 g de margarine\n20 baies de genièvre\n1/2 litre de vin blanc sec\nbouquet garni (persil, thym, laurier)\nsel, poivre\n12 saucisses de Strasbourg\n6 saucisses à l'ail\n500 g de pommes de terre\n\nDans un grand faitout, mettez la moitié de la choucroute crue et les divers ingrédients: oignon, carotte, bouquet garni, baies de genièvre. Puis la viande: le boeuf salé, le pied de veau, le boeuf fumé, la margarine. Recouvrez de choucroute. Mouillez avec le vin blanc et assez d'eau pour arriver presque à la hauteur de la choucroute. Salez et poivrez. Laissez cuire à feu doux 3 heures environ en tout.\n30 minutes avant la fin, faites cuire les pommes de terre épluchées (15 minutes à l'eau, puis 15 minutes sur la choucroute). En même temps, mettez les saucisses à l'ail. Laissez mijoter le tout ensemble jusqu'au moment de servir.\nFaites pocher les saucisses de Strasbourg dans de l'eau frémissante. Vous ne les déposerez sur la choucroute qu'au dernier moment.\nPrésentez la choucroute dans un grand plat. Mettez dessus le boeuf fumé et salé coupé en tranches, les saucisses à l'ail en rondelles, les saucisses de Strasbourg entières. Les pommes de terre sont servies à part.\n\n\"La choucroute réchauffée est encore meilleure; s'il vous en reste, vous pouvez la servir froide en salade garnie de rondelles d'oeufs durs et de betteraves rouges.\"",
    "english": "Serves 6\nPrep and cooking: 3 hours\n\n2 kg sauerkraut\n500 g salted beef\n500 g smoked beef\n1 veal foot\n1 carrot\n1 large onion, studded with 2 cloves\n100 g margarine\n20 juniper berries\n1/2 liter dry white wine\nbouquet garni (parsley, thyme, bay leaf)\nsalt, pepper\n12 Strasbourg sausages\n6 garlic sausages\n500 g potatoes\n\nIn a large pot, put half the raw sauerkraut and the various flavorings: onion, carrot, bouquet garni, juniper berries. Then the meat: the salted beef, veal foot, smoked beef, and margarine. Cover with the rest of the sauerkraut. Add the white wine and enough water to come nearly level with the sauerkraut. Salt and pepper. Simmer, covered, over low heat for about 3 hours total.\n30 minutes before the end, cook the peeled potatoes (15 minutes in water, then 15 minutes on top of the sauerkraut). At the same time, add the garlic sausages. Let everything simmer together until serving.\nPoach the Strasbourg sausages in barely simmering water. Only add them to the sauerkraut at the very last moment.\nServe the sauerkraut on a large platter. Top with the sliced smoked and salted beef, the garlic sausages in rounds, and the whole Strasbourg sausages. Serve the potatoes on the side.\n\n\"Reheated sauerkraut is even better; if you have leftovers, you can serve it cold as a salad, garnished with sliced hard-boiled eggs and beets.\"",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "nana-pate-a-choux",
    "title_fr": "Pâte à choux... partout !",
    "title_en": "Choux Pastry... Everywhere!",
    "course": "desserts",
    "images": [
      "images/scans/nana-pate-a-choux.jpg"
    ],
    "french": "PÂTE À CHOUX... PARTOUT\n\nIl y a en cuisine des formules-clés d'où découlent, moyennant de minces retouches, dix, vingt recettes. Formules-clés: celles de la pâte feuilletée, de la pâte brisée, de la pâte à choux! Aujourd'hui, c'est celle-ci qui va nous occuper.\n\nLa recette de base: pour une quinzaine de choux, dessert suffisant pour cinq ou six personnes, il vous faut 125 g de farine, 100 g de beurre, 15 g de sucre, 3 g de sel, 1/4 de litre d'eau et trois oeufs.\nDans une quelconque casserole, mettez en même temps le liquide, le beurre, le sucre, le sel. Faites chauffer; dans le mélange bouillant, jetez d'un seul coup toute la farine, et remuez vigoureusement avec spatule ou cuiller en bois. Quand le mélange devient une pâte lisse, mettez la casserole à chaleur très douce, sur le bord de la cuisinière par exemple, et travaillez la pâte fortement, toujours jusqu'à ce qu'elle se détache de la casserole et de la cuiller. Hors du feu, incorporez les oeufs l'un après l'autre, en travaillant vivement la pâte à chaque addition. L'épaisseur de la pâte varie avec la qualité de la farine et la grosseur des oeufs. Trois oeufs très petits en nécessiteraient un quatrième.\n\nChoux à la crème: une poche à douille n'est pas indispensable; au moyen d'une cuiller, prélevez de grosses noix de pâte, déposez-les sur la plaque beurrée et farinée du four, assez loin les unes des autres car elles gonflent. Dorez chaque chou au pinceau avec un petit oeuf battu et faites cuire à four chaud pendant quinze à vingt minutes. Mettez les choux à refroidir sur un plat. Découpez un couvercle avec des ciseaux et introduisez la crème de garniture: pâtissière ou Saint-Honoré. Les choux peuvent être faits la veille sans inconvénient, leur crème également. Mais ne les garnissez qu'avant le repas.\nCrème pâtissière: 125 g de sucre en poudre, 35 g de farine, trois jaunes d'oeufs, 1/2 litre de lait.\nTravaillez les jaunes et le sucre au fouet dans une casserole, ajoutez-y peu à peu la farine sans grumeaux, le lait bouillant parfumé à la vanille ou au citron. Laissez bouillir quelques minutes en remuant toujours. Ne garnissez les choux qu'avec la crème froide.\nCrème Saint-Honoré: mêmes proportions. Mais on ajoute à la crème pâtissière toute chaude six blancs d'oeufs battus en neige ferme. Cette crème est la garniture idéale des choux.\n\nChoux pralinés: sur la pâte à choux disposée en grosses noix sur la tôle farinée, parsemez un fin hachis d'amandes mêlé de sucre en poudre et faites cuire à four chaud. Vous emplirez les choux refroidis de cette: Crème pralinée: 100 g de sucre, trois jaunes d'oeufs, une petite cuillerée de fécule, deux verres de lait, 100 g de beurre, 80 g de pralin en poudre.\nTravaillez ensemble sucre et jaunes, ajoutez la fécule, puis le lait bouillant. Faites épaissir sur feu doux en remuant avec une cuillère, mais enlevez du feu dès que l'ébullition s'annonce. Laissez refroidir. Puis faites ramollir un peu le beurre (il ne doit pas fondre), et incorporez-lui au fouet, peu à peu, la crème froide et le pralin que l'on achète chez le confiseur.\n\nÉclairs au chocolat: pour eux, il vous faudrait une poche avec une petite douille. À défaut, divisez la pâte à choux en petits bâtonnets longs et larges comme votre majeur. Et déposez ces bâtonnets avec deux cuillères à café sur la tôle farinée. Dorez-les avec un pinceau mouillé d'oeuf battu et faites cuire à four chaud comme les choux. Pour qu'ils ne se ramollissent pas à la sortie du four, laissez-les encore cinq minutes, la porte entrouverte, sur un papier beurré (la même précaution est valable avec les choux). Quand les éclairs seront froids, découpez un couvercle en longueur avec les ciseaux, emplissez-les de crème au chocolat et glacez les couvercles avec du fondant au chocolat.\nCrème au chocolat: une crème pâtissière à laquelle on ajoute 100 g de chocolat fondu et les deux blancs battus en neige.\nFondant au chocolat: 100 g de chocolat sont mis à fondre dans deux cuillerées à soupe d'eau. On ajoute au chocolat une forte cuillerée de fondant (préparé pour cet usage, qu'on trouve chez les confiseurs) qu'on fait tiédir pour le feu. Attention! Ne l'utilisez pas tiède. Ne le versez pas sur les éclairs: plongez-y chaque couvercle de chou, geste rapide et n'y touchez plus.\n\nÉclairs au café: même préparation. Mais garnissez-les de crème au café et recouvrez-les de fondant au café.\nCrème au café: c'est l'éternelle crème pâtissière que vous additionnez non pas de chocolat mais d'une cuillerée à soupe d'essence de café, puis des deux blancs battus.\nFondant au café: lui aussi a troqué l'essence de café contre le chocolat dont il est question plus haut.\n\nPolkas: pâte à choux dont on dépose une couronne étroite au bord d'une galette ronde en pâte brisée. À four chaud, en dix à douze minutes, la couronne cuit et gonfle. On emplit le puits central au moment de servir de crème à la vanille ou au chocolat, qu'on saupoudre de sucre et que l'on caramélise au fer rouge.\n\nBeignets soufflés: pâte à choux que l'on fait tomber par cuillerées dans la friture chaude. Cela gonfle, s'arrondit, se dore. On égoutte, on fourre de crème Saint-Honoré, on sert saupoudré de sucre fin.\n\nSalambos: des petits choux cuits à four chaud, garnis de crème Chantilly, et coiffés de sirop de sucre que l'on parsème d'un hachis de pistaches.\nCrème Chantilly: fouettez 1/4 de belle et bonne crème jusqu'à ce qu'elle épaississe sans trop. Refroidie, elle montera plus vite. Ajoutez-lui en fouettant 40 g de sucre vanillé et deux cuillerées à soupe de lait froid.\nSirop de sucre: mettez 50 g de sucre en morceaux dans un ustensile non étamé. Ajoutez une cuillerée à soupe d'eau et une pincée de crème de tartre et faites cuire à grand cassé, ou sucre blondissant. Vous y tremperez le couvercle des choux.\n\nSaint-Honoré: ce gâteau magnifique est fait en grande partie de pâte à choux. Sur une base ronde, en pâte brisée, de la grandeur d'une assiette de dessert, criblée de coups de fourchette pour qu'elle reste plate, dessinez une couronne de pâte à choux avec une poche à douille. Dorez-la à l'oeuf. Faites cuire ensemble à four chaud une douzaine de petits choux (des demi-moules de pâte). Laissez refroidir tout cela. Préparez un sucre en grand cassé, comme ci-dessus, dans lequel vous tremperez les petits choux que vous poserez ensuite sur la couronne gonflée (le caramel blond les y fixera). Garnissez le centre du gâteau de la crème Saint-Honoré dont vous avez plus haut la formule. Et puis... recueillez les applaudissements que vous aurez bien mérités!\n\nReligieuses: un chou garni intérieurement de crème au chocolat, glacé extérieurement de fondant au chocolat, surmonté d'un petit chou empli de crème au café et glacé d'un fondant au café. Vous avez dans cet article tous les éléments qui vous permettront de mener à bien ce chef-d'oeuvre.\n\nPetits choux qu'on emplit intérieurement de crème Saint-Honoré, qu'on pose en pyramide dans un plat creux en cristal, et qu'on recouvre d'une sauce au chocolat ainsi faite: 150 g de chocolat, fondus dans un verre d'eau, et crème lisse, additionnée d'une noix de beurre, et jeté en nappe chaude sur la pyramide de choux. Servez froid ou chaud selon la saison et votre préférence.\n\nRamequins au fromage: ceci n'est plus un dessert, mais une entrée succulente!\nProportions: celles de la pâte à choux dont on supprime seulement le sucre.\nDispersez la pâte en grosses noix sur la tôle beurrée et farinée. Mettez à four chaud. Découpez un couvercle dans chaque chou et emplissez-les d'une sauce Béchamel épaisse, poivrée, additionnée de gruyère râpé. Servez chaud.\nPour la sauce: 1/4 de lait, 30 g de beurre, 30 g de farine, 30 g de gruyère, sel, poivre. — Legrillon.",
    "english": "CHOUX PASTRY... EVERYWHERE\n\nSome recipes are master formulas: with small tweaks, each one branches into ten or twenty dishes. The classic master formulas are puff pastry, shortcrust, and choux pastry! Today, it's choux pastry's turn.\n\nThe basic recipe: for about fifteen choux, enough dessert for five or six people, you need 125 g flour, 100 g butter, 15 g sugar, 3 g salt, 1/4 liter water, and three eggs.\nPut the liquid, butter, sugar, and salt together in a saucepan. Heat; once boiling, tip in all the flour at once and beat vigorously with a wooden spoon or spatula. Once the mixture forms a smooth dough, move the pan to very low heat (the edge of the stove, for instance) and keep working the dough hard until it pulls away from the pan and spoon. Off the heat, beat in the eggs one at a time, working the dough vigorously after each one. The dough's thickness varies with the flour and the size of the eggs — three very small eggs might call for a fourth.\n\nCream Puffs: a piping bag isn't essential; with a spoon, scoop generous mounds of dough onto a buttered, floured baking sheet, well spaced apart since they puff up. Brush each puff with beaten egg and bake in a hot oven for 15-20 minutes. Let the puffs cool on a plate. Cut off a lid with scissors and fill with pastry cream or Saint-Honoré cream. The puffs — and their filling — can be made the day before without any trouble, but only fill them just before the meal.\nPastry Cream: 125 g sugar, 35 g flour, 3 egg yolks, 1/2 liter milk.\nWhisk the yolks and sugar together in a saucepan, gradually whisk in the flour (no lumps), then the boiling milk, flavored with vanilla or lemon. Boil a few minutes, stirring constantly. Only fill the puffs once the cream has cooled.\nSaint-Honoré Cream: same proportions, but fold six stiffly beaten egg whites into the hot pastry cream. This is the ideal filling for choux.\n\nPraline Puffs: on the choux dough, piped in generous mounds on the floured sheet, scatter a fine mix of chopped almonds and sugar, and bake in a hot oven. Fill the cooled puffs with: Praline Cream: 100 g sugar, 3 egg yolks, a small spoonful of cornstarch, 2 glasses milk, 100 g butter, 80 g praline powder.\nCream the sugar and yolks together, add the cornstarch, then the boiling milk. Thicken over low heat, stirring, removing from the heat the moment it starts to boil. Let cool. Soften the butter slightly (it shouldn't melt), then whisk in the cold cream and store-bought praline, little by little.\n\nChocolate Éclairs: for these you'll want a piping bag with a small nozzle. Failing that, shape the dough into sticks as long and wide as your middle finger, using two teaspoons, onto the floured sheet. Brush with beaten egg and bake in a hot oven, as for the puffs. To keep them from going soft out of the oven, leave them 5 more minutes with the oven door ajar, on buttered paper (the same trick works for puffs). Once cool, slice a lid lengthwise with scissors, fill with chocolate cream, and glaze the lids with chocolate fondant icing.\nChocolate Cream: pastry cream with 100 g melted chocolate and two beaten egg whites folded in.\nChocolate Fondant Icing: melt 100 g chocolate in 2 tbsp water. Stir in a heaping spoonful of fondant icing (sold ready-made at confectioners'), warmed gently. Important: use it just warm, not hot. Don't pour it over the éclairs — instead, dip each lid in quickly, and don't touch it again once dipped.\n\nCoffee Éclairs: same method, but fill with coffee cream and ice with coffee fondant.\nCoffee Cream: the same eternal pastry cream, flavored with a tablespoon of coffee extract instead of chocolate, with the two beaten whites folded in.\nCoffee Fondant: same as the chocolate fondant above, swapping coffee extract for the chocolate.\n\nPolkas: choux dough piped in a narrow ring around the edge of a round shortcrust base. Baked in a hot oven, the ring puffs and cooks in 10-12 minutes. Just before serving, fill the center well with vanilla or chocolate pastry cream, dust with sugar, and caramelize with a hot iron.\n\nPuffy Fritters (Beignets Soufflés): choux dough dropped by spoonfuls into hot oil. It puffs, rounds out, and turns golden. Drain, fill with Saint-Honoré cream, and serve dusted with fine sugar.\n\nSalambos: small choux baked in a hot oven, filled with whipped cream, and topped with sugar syrup scattered with chopped pistachios.\nWhipped Cream: whip 1/4 liter of good heavy cream until it thickens, not too stiff. Chilled cream whips faster. Whisk in 40 g vanilla sugar and 2 tbsp cold milk.\nSugar Syrup: put 50 g sugar cubes in an untinned (or stainless) pan. Add a tablespoon of water and a pinch of cream of tartar, and cook to the hard-crack (lightly golden) stage. Dip the lid of each puff in this.\n\nSaint-Honoré: this magnificent cake is mostly made of choux pastry. On a round shortcrust base, the size of a dessert plate, pricked all over with a fork to keep it flat, pipe a ring of choux dough. Brush with egg. Bake together in a hot oven with a dozen small puffs (half-sized choux). Let everything cool. Prepare a hard-crack sugar syrup, as above, and dip the small puffs in it, then set them onto the puffed ring (the amber caramel glues them in place). Fill the center with Saint-Honoré cream (recipe above). And then... collect the well-earned applause!\n\nReligieuses: a choux puff filled with chocolate cream, iced with chocolate fondant on the outside, topped with a smaller puff filled with coffee cream and iced with coffee fondant. This article has given you everything you need to pull off this masterpiece.\n\nSmall Puffs filled with Saint-Honoré cream, stacked in a pyramid in a deep crystal dish, and covered with a chocolate sauce made as follows: 150 g chocolate, melted in a glass of water, with smooth cream and a knob of butter stirred in, poured warm over the pyramid of puffs. Serve cold or warm, depending on the season and your preference.\n\nCheese Ramekins: no longer a dessert, but a delicious starter!\nQuantities: the same choux dough, simply made without the sugar.\nSpoon the dough in generous mounds onto a buttered, floured sheet. Bake in a hot oven. Cut a lid in each puff and fill with a thick, peppery béchamel sauce, mixed with grated gruyère. Serve hot.\nFor the sauce: 1/4 liter milk, 30 g butter, 30 g flour, 30 g gruyère, salt, pepper. — Legrillon",
    "note": "",
    "tags": []
  },
  {
    "slug": "confiture-clementines",
    "title_fr": "Confiture de clémentines (Espagne)",
    "title_en": "Clementine Jam (Spain)",
    "course": "preserves",
    "images": [
      "images/scans/confiture-clementines.jpg"
    ],
    "french": "Pour 6 pots:\n2,500 kg de petites clémentines\n2 citrons\nsucre en poudre\nPréparation: 15 mn réparties sur 3 jours. Cuisson: 1h25.\n\nLavez les clémentines et les citrons, essuyez-les, coupez-les en fines lamelles sans ôter la peau et, si possible, au robot pour avoir des tranches ultra-fines et régulières. Mettez-les dans une jatte, couvrez d'eau. Le deuxième jour, transvasez le tout dans une bassine, portez sur le feu et faites cuire pendant 25 minutes. Versez à nouveau dans la jatte. Le troisième jour, pesez les fruits, ajoutez-leur leur poids en sucre, moins 500 g, remettez dans la bassine et faites cuire environ 1 heure. Mettez en pots, couvrez immédiatement avec de la Cellophane.\n\nNotre conseil: achetez, si possible, des agrumes non traités.",
    "english": "Makes 6 jars:\n2.5 kg small clementines\n2 lemons\ngranulated sugar\nPrep: 15 min, spread over 3 days. Cooking: 1h25.\n\nWash the clementines and lemons, dry them, and slice them very thin without peeling — using a food processor if possible, for ultra-fine, even slices. Put them in a bowl, cover with water. On the second day, transfer everything to a preserving pan, bring to the heat, and cook for 25 minutes. Pour back into the bowl. On the third day, weigh the fruit, add its weight in sugar minus 500 g, return to the pan, and cook for about 1 hour. Pot up and cover immediately with cellophane.\n\nOur tip: buy untreated (unwaxed) citrus if you can.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "gateau-corava",
    "title_fr": "Gâteau Corava",
    "title_en": "Corava Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-corava.jpg"
    ],
    "french": "Avoir deux récipients au bain-marie:\n100 g chocolat cuisine + 100 g chocolat fin + 150 g sucre, sans sel.\nFaire fondre, puis laisser refroidir.\nDans l'autre récipient: 4 à 5 oeufs → blancs en neige + 3/4 tasse sucre en poudre à ajouter aux blancs.\nAjouter les jaunes au chocolat.\n3 cuillères à soupe de farine\n1/2 cuillère à café de levure chimique\n1 petite cuillère de maïzena\nà ajouter après les blancs. Mélanger.\nPuis ajouter 1/3 tasse de noix concassées. Mélanger.\nMettre dans un moule rond, diamètre 26 à 28 cm.\nFour moyen, 3/4 d'heure (ça peut durer plus). Si le gâteau monte et retombe, tant pis.\n\nCrème: 50 g + 50 g de deux chocolats, au bain-marie + 2 oeufs → blancs montés en neige ferme, puis + 3 cuillères à soupe de sucre, 1 par 1.\nMélanger le chocolat + les jaunes + 1 cuillère à café de café, doucement.\nPuis ajouter les blancs.\nMélanger et étaler sur le gâteau une fois froid.\nSaupoudrer 1/2 tasse de noix concassées sur le dessus.",
    "english": "Set up two bowls over a double boiler:\n100 g cooking chocolate + 100 g fine chocolate + 150 g sugar, unsalted.\nMelt it, then let cool.\nIn the other bowl: 4-5 eggs → whip the whites to stiff peaks + 3/4 cup powdered sugar to add to the whites.\nAdd the egg yolks to the chocolate.\n3 tbsp flour\n1/2 tsp baking powder\n1 small spoonful cornstarch\nadded after the whites. Mix.\nThen add 1/3 cup chopped walnuts. Mix.\nPour into a round pan, 26-28 cm across.\nMedium oven, 3/4 hour (it can take longer). If the cake rises and falls, don't worry about it.\n\nIcing: 50 g + 50 g of two kinds of chocolate, melted over a double boiler + 2 eggs → whites whipped to stiff peaks, then + 3 tbsp sugar, added one at a time.\nMix the chocolate + egg yolks + 1 tsp coffee, gently.\nThen fold in the whites.\nMix and spread over the cake once it has cooled.\nSprinkle 1/2 cup chopped walnuts on top.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "coquelets-nicoise",
    "title_fr": "Coquelets à la niçoise, marinés au miel et au citron",
    "title_en": "Cornish Hens, Niçoise Style, Marinated in Honey and Lemon",
    "course": "mains",
    "images": [
      "images/scans/coquelets-nicoise.jpg"
    ],
    "french": "Pour 4 personnes:\nPréparation: 15 mn. Marinade: 30 mn. Cuisson: 30 mn.\n\n2 coquelets fendus en deux\ncitrons\nvin blanc\noignons\nmiel liquide\npetites olives noires de Nice\nherbes de Provence\nhuile d'olive\nsel, poivre\n\nMélangez dans un bol le jus d'un citron, une pincée de sel, une pincée de poivre, la moitié du miel, 5 cl d'huile et les herbes de Provence. Badigeonnez la peau des coquelets de ce mélange et laissez mariner pendant 30 min. Allumez le gril du four.\nÉmincez les oignons, taillez le dernier citron en rondelles. Faites chauffer le reste d'huile dans une poêle sur feu moyen puis faites revenir les oignons jusqu'à obtenir une coloration blonde. Ajoutez le reste du miel ainsi que les rondelles de citron. Tournez 1 min à la cuillère en bois, versez le vin blanc et poursuivez la cuisson sur feu doux en surveillant, jusqu'à ce que le liquide soit complètement évaporé. Incorporez les olives en fin de cuisson.\nDans le même temps, placez les coquelets, côté peau vers le haut, sur la grille du four à 20 cm du gril. Faites-les cuire pendant 30 min en les retournant toutes les 10 min, et en les arrosant souvent de la marinade au cours de la cuisson. Présentez les coquelets sur un lit de fondue d'oignons aux olives.",
    "english": "Serves 4:\nPrep: 15 min. Marinating: 30 min. Cooking: 30 min.\n\n2 Cornish hens, split in half\nlemons\nwhite wine\nonions\nliquid honey\nsmall Niçoise black olives\nherbes de Provence\nolive oil\nsalt, pepper\n\nIn a bowl, mix the juice of one lemon, a pinch of salt, a pinch of pepper, half the honey, 5 cl (50 ml) oil, and the herbes de Provence. Brush the skin of the hens with this mixture and marinate 30 minutes. Preheat the oven broiler.\nThinly slice the onions, and slice the remaining lemon into rounds. Heat the rest of the oil in a pan over medium heat and sauté the onions until golden. Add the rest of the honey and the lemon rounds. Stir 1 minute with a wooden spoon, add the white wine, and continue cooking over low heat, watching closely, until the liquid has fully evaporated. Stir in the olives at the end.\nMeanwhile, place the hens, skin-side up, on the oven rack 20 cm from the broiler. Cook 30 minutes, turning every 10 minutes and basting often with the marinade. Serve the hens over a bed of the onion-olive compote.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "couscous",
    "title_fr": "Couscous",
    "title_en": "Couscous",
    "course": "mains",
    "images": [
      "images/scans/couscous-1.jpg",
      "images/scans/couscous-2.jpg"
    ],
    "french": "Couscous (pour 10 personnes)\nViandes: boulettes (à part du couscous, viande hachée ou bouillon), collier d'agneau, jarret, poulet, merguez\n\nLégumes: pois chiches, 2 gros oignons, 2 grosses tomates ou 1 boîte de tomates pelées, carottes, navets, choux (si on veut), aubergines (si on aime), coeurs d'artichauts, courgettes, fèves (si on a), poivrons, + piment, paprika\n1,5 kg graine de couscous, piment (harissa)\n\n1. Faire revenir l'oignon (ciselé) dans de l'huile\n2. Ajouter les tomates pelées, coupées en dés, remuer\n3. Ajouter le collier, faire revenir, ajouter l'eau (à recouvrir), sel, poivre et poivron, carottes coupées et navets\n4. Préparer la graine de couscous dans un grand récipient: jeter la graine, verser de l'eau et rouler entre les 2 mains, ajouter 1 cuillère d'huile et rouler de nouveau, les grains ne colleront pas\n5. Réserver les morceaux de collier d'agneau cuits\n6. Le chou (le cuire et le réserver)\n7. Mettre le poulet à cuire dans le bouillon, au 3/4 cuit, le relever, l'égoutter, pour le cuire au four plus tard et le couper ensuite en morceaux, prêts à être servis\n8. Jarret, si y en a (coupé en gros morceaux, une part pour chacun)\n9. Les merguez seront grillées au four au dernier moment\n10. Après la cuisson du poulet, mettre dans le bouillon l'aubergine coupée en gros dés\n11. Courgettes en gros dés et fèves (cuisson à petits bouillons 10-12 min, goûter)\n12. Coeurs d'artichauts\n\nCuire le couscous à la vapeur, en deux fois:\n1ère opération: quand la vapeur sort, jeter la graine dans le grand récipient avec l'eau et le sel, et rouler.\n2ème opération: cuire le couscous.\n\nServir la sauce harissa (harissa + bouillon, 1 louche ou 2).\nServir une salade verte.",
    "english": "Couscous (serves 10)\nMeats: meatballs (made separately from the couscous, from ground meat or broth), lamb neck, shank, chicken, merguez sausage\n\nVegetables: chickpeas, 2 large onions, 2 large tomatoes or 1 tin of peeled tomatoes, carrots, turnips, cabbage (optional), eggplant (if you like it), artichoke hearts, zucchini, fava beans (if available), peppers, plus chili and paprika\n1.5 kg couscous grain, chili paste (harissa)\n\n1. Brown the chopped onion in oil\n2. Add the peeled, diced tomatoes, and stir\n3. Add the lamb neck, brown it, add water to cover, salt, pepper, bell pepper, chopped carrots and turnips\n4. Prepare the couscous grain in a large bowl: pour in the grain, add water, and roll it between your two hands; add 1 spoonful of oil and roll again so the grains won't stick together\n5. Set aside the cooked pieces of lamb neck\n6. The cabbage (cook it and set it aside)\n7. Put the chicken to cook in the broth; when it's three-quarters done, take it out and drain it, to finish cooking in the oven later, then cut it into pieces, ready to serve\n8. Shank, if you have it (cut into large pieces, one portion per person)\n9. The merguez sausages should be grilled in the oven at the last moment\n10. After the chicken is cooked, add the diced eggplant to the broth\n11. Zucchini in large dice and fava beans (simmer gently for 10-12 minutes, taste)\n12. Artichoke hearts\n\nSteam the couscous twice:\n1st round: once the steam rises, pour the grain into the large bowl with water and salt, and roll it.\n2nd round: finish cooking the couscous.\n\nServe with harissa sauce (harissa mixed with broth, 1-2 ladles).\nServe a green salad.",
    "note": "Pieced together from two scanned pages.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "creme-anglaise",
    "title_fr": "Crème anglaise",
    "title_en": "Custard (Crème Anglaise)",
    "course": "desserts",
    "images": [
      "images/scans/creme-anglaise.jpg"
    ],
    "french": "1 litre de lait\n200 g sucre en poudre\n8 jaunes d'oeufs\nvanille, café ou chocolat (si café, mettre moins de lait)\n\nMettre les oeufs dans une terrine. Les battre comme pour une omelette.\nAjouter le lait + café + sucre.\nRemettre le tout sur le feu jusqu'à ce que le liquide soit sur le point d'arriver à ébullition, sans laisser bouillir.\n\nAvant d'ajouter le lait aux jaunes, on peut y incorporer 1 cuillère à café de fécule ou de maïzena par litre.\n\nCette crème s'emploie pour saucer les poudings, les oeufs en neige. On la sert aussi seule, accompagnée de biscuits (laissés au choix).",
    "english": "1 liter milk\n200 g granulated sugar\n8 egg yolks\nvanilla, coffee, or chocolate (if using coffee, use less milk)\n\nPut the egg yolks in a bowl. Beat them as if for an omelet.\nAdd the milk + coffee + sugar.\nPut it all back over the heat until the liquid is just about to boil, without letting it actually boil.\n\nBefore adding the milk to the yolks, you can stir in 1 tsp cornstarch per liter.\n\nThis custard is used as a sauce for puddings and floating islands (oeufs en neige). It's also served on its own, with a choice of biscuits on the side.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "nana-dedie-meres",
    "title_fr": "Recettes aux noix (1951)",
    "title_en": "Walnut Recipes (1951)",
    "course": "desserts",
    "images": [
      "images/scans/nana-dedie-meres.jpg"
    ],
    "french": "DÉDIÉ à nos mères, femmes, filles, toutes ménagères hors-ligne\n\nCrème aux noix pour gâteau de Savoie: battez ensemble la valeur d'une tasse à thé de beurre et une tasse de sucre en poudre, ajoutez deux cuillerées à bouche de café fort et une tasse de noix pilées. Coupez horizontalement un gâteau de Savoie et étendez une couche de cette crème entre deux couches de gâteau...\n\nAutre gâteau aux noix: battez ensemble 1/3 de tasse à thé de beurre, ajoutez 2 jaunes d'oeufs, 1/2 tasse de lait, 1/3 de tasse de farine et deux cuillerées de levure. Un peu de vanille, du sel et une tasse de noix pilées. En dernier lieu ajoutez les deux blancs d'oeufs battus en neige. Faites cuire le tout dans un moule au four 45 minutes environ. On peut servir autour une crème sur laquelle on jette quelques moitiés de cerneaux...\n\nSalade de fruits et de noix: coupez en fines tranches un ananas, 12 dattes, une orange, ajoutez une tasse de noix en petits morceaux et une banane en tranches, arrosez le tout d'un peu de rhum et de sucre en poudre...\n\nTôt-fait aux noix: 6 oeufs ou 3, sucre et farine poids égal que les oeufs, un zeste de citron et une tasse de cerneaux pilés. Mélangez la farine, le sucre, les jaunes d'oeufs et les cerneaux pilés, travaillez 1/4 d'heure environ, ajoutez les blancs d'oeufs battus en neige ferme, faites cuire dans un moule beurré à feu vif 3/4 d'heure.\n\nGâteaux Christine aux noix: sur du pain rassis coupé en tranches minces versez 1/2 de lait bouillant, un peu de sucre, couvrez le vase qui contient cette préparation et laissez reposer 1/4 d'heure, ajoutez des écorces d'oranges, une tasse de cerneaux pilés et un oeuf battu en neige. Le tout bien mélangé se versera dans un moule dont on aura caramélisé l'intérieur et l'on fera cuire au four. Le gâteau Christine se démoule sur un plat et se sert chaud ou froid selon le goût.\n\nMassepains aux noix: 1/2 livre de noix pilées, poids égal de sucre en poudre, 3 blancs d'oeufs. Mélangez les noix avec le sucre et délayez la pâte avec les blancs battus en neige très ferme. Chauffez une tôle et graissez-la, étendez par petites plaques ovales le mélange, faites cuire à feu vif. Dès que les massepains ont pris couleur, les rouler à mesure sur un rouleau de pâtisserie. Les conserver dans des boîtes.\n\nSablés aux noix (recette rapide): 1 oeuf, 100 g de sucre, 100 g de farine très fine, une cuillerée à bouche de rhum et une tasse de noix pilées. On bat ensemble pendant 5 minutes l'oeuf et le sucre, puis on ajoute le rhum et la farine, et on travaille 5 minutes en ajoutant les noix pilées. Sur une tôle beurrée, on y dépose la pâte par petits espaces, décorer les petits gâteaux ainsi faits avec une moitié de cerneau au milieu et faire cuire au four vif.\n\nSalade d'orange aux noix: pelez une orange, coupez-la en tranches fines, ajoutez 1/3 tasse de sucre en poudre, deux cuillerées pleines de gelée de coing ou de groseille, des cerises de conserve si possible ou bien des raisins de Corinthe et une tasse de cerneaux. Versez dessus de la crème fraîche et servez.\n\nLES CERNEAUX: la région de la Noix de Grenoble produit les cerneaux très réputés appelés cerneaux Mayettes, et une autre variété, les cerneaux Chabertes. Le Diois, dans la Drôme, est aussi une région très connue pour ses cerneaux appelés cerneaux de Die, et en fait de son côté un important commerce.",
    "english": "DEDICATED to our mothers, wives, daughters, housewives of every kind\n\nWalnut cream for a Savoy sponge cake: beat together about a teacup of butter and a cup of sugar, add two tablespoons of strong coffee and a cup of crushed walnuts. Slice a Savoy sponge cake in half horizontally and spread a layer of this cream between the two layers...\n\nAnother walnut cake: beat together 1/3 teacup butter, add 2 egg yolks, 1/2 cup milk, 1/3 cup flour, and two spoonfuls baking powder. A little vanilla, salt, and a cup of crushed walnuts. Lastly, fold in the two egg whites, whipped to stiff peaks. Bake in a pan in the oven for about 45 minutes. Serve with a custard on the side, topped with a few walnut halves...\n\nFruit and walnut salad: thinly slice a pineapple, 12 dates, an orange, add a cup of chopped walnuts and a sliced banana, drizzle with a little rum and powdered sugar...\n\nQuick walnut cake (\"Tôt-fait\"): 6 eggs, or 3, with sugar and flour matching the eggs' weight, the zest of one lemon, and a cup of crushed walnuts. Mix the flour, sugar, egg yolks, and crushed walnuts, work for about 15 minutes, fold in the egg whites whipped to stiff peaks, and bake in a buttered pan in a hot oven for 45 minutes.\n\nChristine Walnut Cakes: pour hot milk over thinly sliced stale bread (half a glass), with a little sugar; cover the bowl and let sit 15 minutes, then add candied orange peel, a cup of crushed walnuts, and a stiffly beaten egg. Mix well and pour into a caramel-lined pan; bake in the oven. Unmold onto a plate and serve warm or cold, as you prefer.\n\nWalnut Marzipan: 1/2 lb crushed walnuts, an equal weight of powdered sugar, 3 egg whites. Mix the walnuts with the sugar and bind with the egg whites, whipped very stiff. Heat and grease a baking sheet, spread the mixture into small oval patties, and bake in a hot oven. As soon as they take on color, roll them, while still warm, over a rolling pin. Store in tins.\n\nQuick walnut shortbread: 1 egg, 100 g sugar, 100 g fine flour, a tablespoon of rum, and a cup of crushed walnuts. Beat the egg and sugar together for 5 minutes, then add the rum and flour, and work for 5 more minutes, folding in the crushed walnuts. Drop spoonfuls onto a buttered sheet, spaced apart; top each with half a walnut, and bake in a hot oven.\n\nOrange and walnut salad: peel an orange, slice thinly, add 1/3 cup powdered sugar, two heaping spoonfuls of quince or redcurrant jelly, preserved cherries if you have them (or currants), and a cup of walnuts. Pour fresh cream over the top and serve.\n\nABOUT WALNUT KERNELS: the Grenoble walnut-growing region produces the famous Mayette walnut kernels, and another variety called Chaberte. The Diois area, in the Drôme, is also well known for its \"Die\" walnut kernels, and does a significant trade in them.",
    "note": "",
    "tags": []
  },
  {
    "slug": "gateau-citron-dorit",
    "title_fr": "Gâteau citron Dorit",
    "title_en": "Dorit's Lemon Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-citron-dorit.jpg"
    ],
    "french": "250 g farine    + 2 citrons\n250 g sucre     1/2 levure chimique\n250 g margarine ramollie\n5 oeufs\n\nMélanger la margarine et le sucre, râper le zeste des 2 citrons,\n+ jaunes d'oeuf, farine + levure.\nBattre les blancs avec une pincée de sel.\nMélanger le tout.\nMettre dans un moule à cake, 40 min, four à 7.\n\nPresser les citrons + 1 cuillère de sucre + 1 tasse d'eau,\nfaire chauffer, laisser tiédir, piquer des trous avec un pinceau [et badigeonner].\nMettre un papier aluminium au fond du moule.",
    "english": "250 g flour    + 2 lemons\n250 g sugar     1/2 packet baking powder\n250 g softened margarine\n5 eggs\n\nCream the margarine and sugar, grate in the zest of the 2 lemons,\n+ egg yolks, flour + baking powder.\nBeat the egg whites with a pinch of salt.\nFold everything together.\nPour into a loaf pan, bake 40 minutes at oven setting 7.\n\nSqueeze the lemons + 1 spoonful of sugar + 1 cup water,\nwarm it through, let cool slightly, prick holes in the cake with a pastry brush [and brush the syrup over].\nLine the bottom of the pan with aluminum foil.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "galette-potiron-dorothy",
    "title_fr": "Galette de potiron (Dorothy)",
    "title_en": "Dorothy's Pumpkin Fritters",
    "course": "desserts",
    "images": [
      "images/scans/galette-potiron-dorothy.jpg"
    ],
    "french": "1 kg potiron (pumpkin)\n3 oeufs\n1 tasse de farine\n2 cuillères à soupe de sucre\n1/2 cuillère à café de sel\n1 cuillère à café vanille\n1 cuillère à café cannelle\n2 cuillères à café levure chimique\nSaupoudrer de sucre glace et de cannelle.\n\nCuire le potiron dans l'eau jusqu'à ce qu'il soit mou et que l'eau soit évaporée.\nRéduire en purée. Ajouter les oeufs.\nBattre, puis ajouter le reste des ingrédients.\nFaire frire des cuillerées dans l'huile d'olive jusqu'à ce qu'elles soient dorées (environ 30 galettes).",
    "english": "1 kg pumpkin\n3 eggs\n1 cup flour\n2 tbsp sugar\n1/2 tsp salt\n1 tsp vanilla\n1 tsp cinnamon\n2 tsp baking powder\nDust with powdered sugar and cinnamon.\n\nCook the pumpkin in water until soft and the water has evaporated.\nMash into a purée. Add the eggs.\nBeat, then fold in the rest of the ingredients.\nDrop spoonfuls into olive oil and fry until golden (makes about 30 fritters).",
    "note": "Shares a page with Mrs. Claudy's Apple Cake.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "magrets-canard-raisins",
    "title_fr": "Magrets de canard aux raisins",
    "title_en": "Duck Breast with Grapes",
    "course": "mains",
    "images": [
      "images/scans/magrets-canard-raisins.jpg"
    ],
    "french": "Pour 6 personnes:\n3 magrets de canard\n300 g raisin blanc épluché\n2 cuillerées à soupe d'eau\n2 cuillerées à soupe de vinaigre de cidre\n2 cuillerées à soupe de miel\n50 g de beurre\nsel, poivre\nPréparation: 10 mn. Cuisson: 20 mn.\n\nFaites dorer les magrets dans une poêle anti-adhésive sans matière grasse, en commençant par le côté peau. Comptez 4 minutes de cuisson de chaque côté. Posez-les ensuite dans un plat en inox et terminez la cuisson au four, préalablement chauffé à 210° (thermostat 7), pendant 8 minutes. Réservez-les au chaud sur le plat de service et découpez-les en fines tranches. Videz la poêle du gras qu'ils ont rendu, déglacez-la avec l'eau, le vinaigre, laissez réduire de moitié, ajoutez le miel, le beurre en parcelles et les raisins, salez, poivrez. Versez sur les magrets.\n\nNotre conseil: choisissez du miel liquide pour cette préparation. Vous pouvez accompagner ce plat d'un riz créole.",
    "english": "Serves 6:\n3 duck breasts\n300 g peeled white grapes\n2 tbsp water\n2 tbsp cider vinegar\n2 tbsp honey\n50 g butter\nsalt, pepper\nPrep: 10 min. Cooking: 20 min.\n\nBrown the duck breasts in a nonstick pan with no added fat, starting skin-side down. Cook 4 minutes per side. Transfer to a stainless steel dish and finish cooking in an oven preheated to 210°C (gas mark 7) for 8 minutes. Keep warm on the serving dish and slice thinly. Pour the fat out of the pan, deglaze with the water and vinegar, reduce by half, add the honey, butter in small pieces, and the grapes; salt and pepper. Pour over the duck.\n\nOur tip: use liquid honey for this recipe. This dish pairs well with Creole-style rice.",
    "note": "To make kosher: use margarine instead of the butter in the pan sauce.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "magret-canard-moutarde",
    "title_fr": "Magret de canard à la moutarde",
    "title_en": "Duck Breast with Mustard",
    "course": "mains",
    "images": [
      "images/scans/magret-canard-moutarde.jpg"
    ],
    "french": "Pour 4 personnes\nPréparation: 20 min. Marinade: 2 h. Cuisson: 20 min.\n\n2 magrets de canard\n4 c.à.s. de moutarde\n1 c.à.s. de miel\n1 c.à.s. d'huile d'olive\n1,5 verre de bouillon de volaille\n1 c.à.c. de jus d'orange\n1 c.à.s. de sucre\n4 endives\n4 figues\nsel, poivre\n\nDans un plat creux, préparez une marinade en mélangeant huile, moutarde et miel. Salez, poivrez. Faites-y mariner les magrets 2 heures au frais, en les retournant de temps à autre.\nÉgouttez les magrets, taillez la peau en croisillons et faites-les cuire dans une cocotte, d'abord côté peau pendant 7 min à feu vif, puis de l'autre côté, 5 min à feu moyen. Laissez reposer 2 à 3 min hors du feu dans la cocotte avec le couvercle, pour qu'ils gardent leur moelleux.\nPendant la cuisson des magrets, coupez les endives en deux, faites-les dorer dans un faitout avec de l'huile ou de la margarine. Ajoutez le jus d'orange, 1/2 verre de bouillon, sel et poivre et faites cuire à couvert 10 min. Puis à découvert et sur feu vif, ajoutez le sucre au jus de cuisson pour faire caraméliser les endives.\nEnlevez le gras de la cocotte où vous avez fait cuire les magrets, ajoutez la marinade et un verre de bouillon. Faites déglacer les sucs de cuisson et laissez réduire la sauce pendant 5 min.\nCoupez les magrets en aiguillettes. Dressez-les dans un plat de service avec les endives. Nappez avec la sauce. Décorez d'une figue coupée en quatre.",
    "english": "Serves 4\nPrep: 20 min. Marinating: 2 h. Cooking: 20 min.\n\n2 duck breasts\n4 tbsp mustard\n1 tbsp honey\n1 tbsp olive oil\n1.5 glasses chicken broth\n1 tsp orange juice\n1 tbsp sugar\n4 heads endive\n4 figs\nsalt, pepper\n\nIn a shallow dish, make a marinade by mixing the oil, mustard, and honey. Salt, pepper. Marinate the duck breasts in this, chilled, for 2 hours, turning occasionally.\nDrain the duck breasts, score the skin in a crosshatch, and cook in a pot, skin-side down first for 7 minutes over high heat, then the other side for 5 minutes over medium heat. Let rest 2-3 minutes off the heat in the covered pot, so they stay juicy.\nWhile the duck cooks, halve the endives and brown them in a pot with oil or margarine. Add the orange juice, 1/2 glass broth, salt and pepper, and cook covered for 10 minutes. Then, uncovered over high heat, add the sugar to the cooking liquid to caramelize the endives.\nSkim the fat from the pot the duck cooked in, add the marinade and a glass of broth. Deglaze the browned bits and let the sauce reduce for 5 minutes.\nSlice the duck breasts into strips. Arrange on a serving dish with the endives. Coat with the sauce. Garnish with a fig cut into quarters.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "canard-chataignes",
    "title_fr": "Canard aux châtaignes",
    "title_en": "Duck with Chestnuts",
    "course": "mains",
    "images": [
      "images/scans/canard-chataignes.jpg"
    ],
    "french": "Pour 4 personnes\nPréparation: 15 min. Cuisson: 1 heure.\n\n1 canard de 1,5 kg\n500 g de châtaignes en boîte\n1 pomme\n10 cl de cidre brut\n10 cl de bouillon de volaille\n1 feuille de laurier\n5 grains de poivre\nsel et poivre\n\nPréchauffez le four à th. 7 (210°). Lavez la pomme, coupez-la en quartiers sans l'éplucher, enlevez ses pépins et placez-la à l'intérieur du canard avec le laurier et tous les grains de poivre. Frottez la peau du canard avec un peu de sel et de poivre.\nPlacez le canard dans le four, sur une grille au-dessus de la lèchefrite, et laissez cuire 30 minutes en arrosant avec la graisse rendue. Retirez-le du four et placez-le dans un plat à rôtir au fond duquel vous verserez une cuillerée de graisse, le cidre et le bouillon. Poursuivez la cuisson pendant 15 minutes encore.\nRetournez le canard, entourez-le des châtaignes et laissez-le cuire encore un quart d'heure. Vous servirez le canard avec les châtaignes et le fond de cuisson, filtré, dans une saucière chaude.",
    "english": "Serves 4\nPrep: 15 min. Cooking: 1 hour.\n\n1 duck, 1.5 kg\n500 g tinned chestnuts\n1 apple\n10 cl (100 ml) dry cider\n10 cl (100 ml) chicken broth\n1 bay leaf\n5 peppercorns\nsalt and pepper\n\nPreheat the oven to 210°C (gas mark 7). Wash the apple, cut into wedges without peeling, remove the seeds, and place inside the duck with the bay leaf and all the peppercorns. Rub the duck's skin with a little salt and pepper.\nPlace the duck in the oven on a rack over a drip pan, and roast 30 minutes, basting with the rendered fat. Remove from the oven and transfer to a roasting dish; pour in a spoonful of the fat, the cider, and the broth. Continue cooking 15 more minutes.\nTurn the duck, surround it with the chestnuts, and cook another 15 minutes. Serve the duck with the chestnuts and the strained pan juices, in a warm sauce boat.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "canard-citrons-confits-olives",
    "title_fr": "Canard aux citrons confits et aux olives",
    "title_en": "Duck with Preserved Lemons and Olives",
    "course": "mains",
    "images": [
      "images/scans/canard-citrons-confits-olives.jpg"
    ],
    "french": "Pour 4 personnes\nPréparation: 30 min. Cuisson: 1 heure.\n\n1 canard d'environ 1,8 kg\n5 citrons confits\n80 g d'olives vertes\n80 g d'olives noires\n3 gousses d'ail\n2 c.à.s. d'huile d'olive\nsel, poivre\n\nSalez et poivrez le canard à l'intérieur et à l'extérieur. Glissez à l'intérieur 2 citrons confits en quartiers. Faites dorer la volaille de 12 à 15 min dans une cocotte avec l'huile d'olive.\nRetirez le canard de la cocotte. Jetez la graisse. Déglacez le fond de cuisson avec 15 cl d'eau; laissez bouillir et réduire 4 à 5 min en grattant les sucs à la spatule.\nRemettez le canard dans la cocotte. Ajoutez les citrons confits restants, coupés en quartiers, et les gousses d'ail écrasées. Couvrez et laissez cuire 30 min en retournant la volaille à mi-cuisson.\nDénoyautez les olives vertes et noires. Ébouillantez-les séparément, rafraîchissez et égouttez-les. Ajoutez-les dans la cocotte et poursuivez la cuisson 10 min.\nPrésentez le canard entier entouré des citrons et des olives. Accompagnez du jus de cuisson dégraissé et filtré. Servez avec de la semoule nature ou des courgettes.",
    "english": "Serves 4\nPrep: 30 min. Cooking: 1 hour.\n\n1 duck, about 1.8 kg\n5 preserved lemons\n80 g green olives\n80 g black olives\n3 cloves garlic\n2 tbsp olive oil\nsalt, pepper\n\nSalt and pepper the duck inside and out. Tuck 2 preserved lemons, quartered, inside it. Brown the bird in a pot with the olive oil, 12-15 minutes.\nRemove the duck from the pot. Discard the fat. Deglaze the pot with 15 cl (150 ml) water; boil and reduce 4-5 minutes, scraping up the browned bits.\nReturn the duck to the pot. Add the remaining preserved lemons, quartered, and the crushed garlic. Cover and cook 30 minutes, turning the bird halfway through.\nPit the green and black olives. Blanch them separately, refresh in cold water, and drain. Add to the pot and continue cooking 10 minutes.\nServe the whole duck surrounded by the lemons and olives. Serve with the skimmed, strained pan juices. Accompany with plain couscous or zucchini.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "canard-orange",
    "title_fr": "Canard à l'orange",
    "title_en": "Duck à l'Orange",
    "course": "mains",
    "images": [
      "images/scans/canard-orange.jpg"
    ],
    "french": "Faire rôtir au four 1 canard (1h1/4).\nFlamber au cognac.\nDécouper le canard encore saignant.\n\nDans 1 cocotte: 3 échalotes, persil, jus de 2 oranges, jus d'1 citron, le jus du canard.\nLaisser cuire 3/4 h.\nRetirer les morceaux de canard.\nJeter le foie dans le jus.\nLaisser cuire quelques minutes.\nPasser le jus.\nRemettre les morceaux de canard dans le jus.\nFaire rôtir 3 oranges dans une poêle avec du beurre.\nFaire blanchir les lamelles de peau d'orange 1/2 heure.",
    "english": "Roast 1 duck in the oven (1 hour 15 min).\nFlambé with cognac.\nCarve the duck while still rare.\n\nIn a pot: 3 shallots, parsley, juice of 2 oranges, juice of 1 lemon, the duck's juices.\nLet cook 3/4 hour.\nRemove the duck pieces.\nAdd the liver to the sauce.\nLet cook a few more minutes.\nStrain the sauce.\nReturn the duck pieces to the sauce.\nSauté 3 oranges in a pan with butter.\nBlanch the strips of orange peel for 1/2 hour.",
    "note": "To make kosher: use margarine or a neutral oil instead of butter for the orange garnish.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "gateau-anglais",
    "title_fr": "Gâteau anglais",
    "title_en": "English Cake (No-Bake Chocolate Biscuit Fruitcake)",
    "course": "desserts",
    "images": [
      "images/scans/gateau-anglais.jpg"
    ],
    "french": "Environ 24 petits gâteaux secs, écrasés\n250 g raisins secs\nDans une casserole: 1 cuillère sucre de canne,\n3-4 cuillères à soupe cacao en poudre,\n3-4 cuillères à soupe sucre en poudre,\n80 g beurre fondu.\nFaire fondre le tout ensemble dans la casserole, en remuant.\nMélanger avec les raisins + biscuits écrasés.\nVerser le mélange rapidement dans un plat.\nMettre une feuille d'aluminium au fond du moule\net tasser le tout, lisser avec les mains → pâte compacte.\n80 g chocolat en tablette: faire fondre et glacer le dessus.\n2 heures au réfrigérateur.\nDémouler et couper en carrés.",
    "english": "About 24 plain biscuits, crushed\n250 g raisins\nIn a saucepan: 1 tbsp cane sugar,\n3-4 tbsp cocoa powder,\n3-4 tbsp powdered sugar,\n80 g melted butter.\nMelt it all together in the saucepan, stirring.\nMix in the raisins and crushed biscuits.\nPour the mixture quickly into a dish.\nLine the bottom of the pan with a sheet of foil\nand press it all down, smoothing with your hands into a compact block.\n80 g chocolate bar: melt it and glaze the top.\n2 hours in the fridge.\nUnmold and cut into squares.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "falafel",
    "title_fr": "Falafel",
    "title_en": "Falafel",
    "course": "starters",
    "images": [
      "images/scans/falafel.jpg"
    ],
    "french": "Tremper les pois chiches.\nCoriandre, persil\nSel, poivre\nCumin, poivre de Cayenne\nAil, oeuf\n1/4 paquet levure chimique\n+ un peu d'eau",
    "english": "Soak the chickpeas.\nCilantro, parsley\nSalt, pepper\nCumin, cayenne pepper\nGarlic, egg\n1/4 packet baking powder\n+ a little water",
    "note": "Shares a page with a Marrons Glacés recipe.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "papillotes-poisson-rebecca",
    "title_fr": "Filet de poisson en papillotes (Rebecca)",
    "title_en": "Fish Fillet in Foil Parcels (Rebecca)",
    "course": "mains",
    "images": [
      "images/scans/papillotes-poisson-rebecca.jpg"
    ],
    "french": "Faire un lit de rondelles de poireaux (le blanc seulement), préalablement cuites,\net de 2 ou 3 lamelles de champignons, rondelles de tomates épépinées.\nPoser le filet de poisson sur ce lit et ajouter sel, poivre, épices,\n1 cuillère à café de crème (facultatif).\nFaire cuire 4 à 5 minutes, four chaud.",
    "english": "Make a bed of sliced leeks (white part only), pre-cooked,\nwith 2-3 slices of mushroom and slices of seeded tomato.\nPlace the fish fillet on this bed and add salt, pepper, spices,\nand 1 tsp cream (optional).\nCook 4-5 minutes in a hot oven.",
    "note": "",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "pain-poisson-juju",
    "title_fr": "Pain poisson (Juju)",
    "title_en": "Fish Terrine (Juju)",
    "course": "starters",
    "images": [
      "images/scans/pain-poisson-juju.jpg"
    ],
    "french": "600 g filet de poisson\n200 g crevettes décortiquées\n4 oeufs, blancs en neige\n200 g crème fraîche\nsel, poivre\n\n1 couche de poisson / 1 couche de crevettes.\nCuire au bain-marie, en cocotte-minute, 1/2 heure.",
    "english": "600 g fish fillet\n200 g shelled shrimp\n4 eggs, whites whipped to stiff peaks\n200 g crème fraîche\nsalt, pepper\n\nLayer: 1 layer fish / 1 layer shrimp.\nCook in a water bath, in a pressure cooker, for 1/2 hour.",
    "note": "To make kosher: replace the shrimp with more of the fish fillet, or with another kosher fish.",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "ile-flottante",
    "title_fr": "Île flottante",
    "title_en": "Floating Islands",
    "course": "desserts",
    "images": [
      "images/scans/ile-flottante.jpg"
    ],
    "french": "Faire une crème anglaise, parfumée (café, chocolat, vanille, ou kirsch), avec 6 jaunes d'oeufs.\nBattre les blancs très fermes, avec du sucre ajouté par oeuf.\nFaire un caramel et le verser chaud en tournant dans les blancs en neige,\n+ 1 feuille de gélatine, fondue dans très peu d'eau froide.\nPréparer un moule uni, l'huiler, y mettre les blancs ainsi préparés, mettre au frais.\nDémouler sur la crème au moment de servir.",
    "english": "Make a crème anglaise, flavored (coffee, chocolate, vanilla, or kirsch), with 6 egg yolks.\nBeat the egg whites very stiff, with sugar added per egg.\nMake a caramel and pour it hot, stirring it into the whipped whites,\n+ 1 sheet gelatin, melted in a very small amount of cold water.\nPrepare a plain mold, oil it, pour in the prepared whites, and chill.\nUnmold onto the custard just before serving.",
    "note": "Shares a page with a Quatre-Quarts cake recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "petits-florentins",
    "title_fr": "Petits florentins",
    "title_en": "Florentines",
    "course": "desserts",
    "images": [
      "images/scans/petits-florentins.jpg"
    ],
    "french": "Pour 25 petits gâteaux:\n100 g d'écorces d'orange confites\n100 g d'amandes effilées\n150 g de sucre semoule\n50 g de miel\n150 g de crème fraîche\n60 g de farine\n200 g de chocolat fondant pour le glaçage\nPréparation: 20 mn. Cuisson: 8 mn.\n\nAvec un bon petit couteau, coupez en très petits morceaux les écorces d'orange confites, mélangez-les aux amandes. Laissez en attente. Dans une casserole à fond épais, versez le sucre, le miel, la crème fraîche. Mettez sur le feu et faites cuire 3 à 5 mn en mélangeant à la spatule en bois. Vérifiez la cuisson en versant une goutte dans un bol d'eau froide: la boule formée doit être molle et malléable. Ajoutez à ce mélange les fruits et la farine. Mélangez. Huilez la plaque du four avec deux petites cuillères, faites des tas réguliers en les aplatissant légèrement et en les espaçant peu. Faites cuire 7 à 8 mn à four moyen 180° (5 au thermostat). Laissez refroidir, décollez à la spatule.\nPour le glaçage: râpez le chocolat, faites-le fondre au bain-marie, en remuant. À la spatule, étalez un peu de chocolat sur la face plane des florentins, laissez durcir sur une grille.\n\nNotre conseil: ces florentins se conserveront parfaitement dans une boîte en métal, en les séparant par une petite feuille de Cellophane.",
    "english": "Makes 25 small cakes:\n100 g candied orange peel\n100 g sliced almonds\n150 g granulated sugar\n50 g honey\n150 g crème fraîche\n60 g flour\n200 g dark chocolate, for the glaze\nPrep: 20 min. Cooking: 8 min.\n\nWith a small sharp knife, cut the candied orange peel into very small pieces, and mix with the almonds. Set aside. In a heavy-bottomed saucepan, combine the sugar, honey, and crème fraîche. Place over heat and cook 3-5 minutes, stirring with a wooden spatula. Check doneness by dropping a bit into a bowl of cold water: it should form a soft, pliable ball. Add the fruit and flour to this mixture. Mix. Oil the baking sheet, using two small spoons to form even mounds, flattening them slightly and spacing them out. Bake 7-8 minutes in a moderate oven at 180°C (gas mark 5). Let cool, then lift off with a spatula.\nFor the glaze: grate the chocolate, melt it over a double boiler, stirring. With a spatula, spread a little chocolate on the flat side of each florentine, and let set on a rack.\n\nOur tip: these florentines keep perfectly in a metal tin, separated by a small sheet of cellophane.",
    "note": "Shares a page with a Chocolate Pots de Crème recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "foie-gras-marchand",
    "title_fr": "Foie gras, canard ou oie — cuit au naturel (Michel Marchand)",
    "title_en": "Foie Gras, Duck or Goose — Cooked Naturally (Michel Marchand)",
    "course": "starters",
    "images": [
      "images/scans/foie-gras-marchand.jpg"
    ],
    "french": "1 beau foie gras de 700 g environ\n1 trait de porto, 1 trait de cognac\n12 g de sel au kilo, 3 g de poivre blanc au moulin\net une terrine d'une contenance de 3/4 de litre.\n\nDégorger votre foie 2 heures à l'eau courante, séparer soigneusement les lobes et dénerver.\nMettre à plat sur un plateau tous les morceaux de foie et assaisonner (sel, poivre). Ajouter le cognac et le porto.\nLaisser mariner 2 ou 3 heures en recouvrant d'une feuille d'aluminium.\nRemplir la terrine avec les morceaux de foie marinés, en les comprimant petit à petit les uns avec les autres.\nLisser légèrement avec la main.\nFermer hermétiquement avec le couvercle, puis cuire au bain-marie dans une eau à 80 degrés, dans un four préchauffé à 220°, pendant 10/12 min.\nSortir la terrine du four, poser un poids sur la planchette, et laisser reposer au réfrigérateur 24 à 48h.",
    "english": "1 fine foie gras, about 700 g\nA splash of port, a splash of cognac\n12 g salt per kilo, 3 g ground white pepper\nand a terrine dish holding 3/4 liter.\n\nSoak your foie for 2 hours under running water, carefully separate the lobes and remove the veins.\nLay all the pieces of foie flat on a tray and season (salt, pepper). Add the cognac and port.\nLet marinate 2-3 hours, covered with aluminum foil.\nFill the terrine dish with the marinated pieces of foie, pressing them gently together as you go.\nSmooth lightly with your hand.\nSeal tightly with the lid, then cook in a water bath at 80°C, in an oven preheated to 220°C, for 10-12 minutes.\nTake the terrine out of the oven, place a weight on a board on top, and let it rest in the refrigerator for 24 to 48 hours.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "soupe-oignon",
    "title_fr": "Soupe à l'oignon (gratinée)",
    "title_en": "French Onion Soup, Gratinéed",
    "course": "soups",
    "images": [
      "images/scans/soupe-oignon.jpg"
    ],
    "french": "300 g d'oignons, 4 cuillères à café de beurre, 2 cuillères à café de farine, 2 litres d'eau, 2 bouillon-cubes, 200 g de gruyère râpé.\n\nFaire cuire les oignons très doucement et légèrement rissoler dans le beurre, en mélangeant constamment à la cuillère en bois. Saupoudrez-les de farine, ajoutez petit à petit 2 litres d'eau froide et les bouillon-cubes, laissez cuire 20 minutes.\nDisposez dans une soupière pouvant aller au four de très minces tranches de pain rassis; saupoudrez chaque couche de tranches de pain avec du gruyère râpé et une pincée de poivre. Continuez ainsi avec 3 ou 4 couches de pain et fromage + poivre. Versez le bouillon sur ce mélange (tenue assez épaisse). Ajoutez quelques noisettes de beurre à la surface, faites gratiner au four pendant quelques minutes.\n\nOn peut rajouter des croûtons que l'on aura préalablement fait dorer dans une poêle avec un peu de beurre.",
    "english": "300 g onions, 4 tsp butter, 2 tsp flour, 2 liters water, 2 bouillon cubes, 200 g grated gruyère.\n\nCook the onions very gently, letting them lightly brown in the butter, stirring constantly with a wooden spoon. Dust with the flour, gradually add the 2 liters of cold water and the bouillon cubes, and let cook 20 minutes.\nIn an oven-safe soup tureen, layer in very thin slices of stale bread; sprinkle each layer of bread with grated gruyère and a pinch of pepper. Continue with 3 or 4 layers of bread and cheese + pepper. Pour the broth over this (it should be fairly thick). Dot the surface with a few knobs of butter, and gratin in the oven for a few minutes.\n\nYou can add croutons, pre-browned in a pan with a little butter.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "chevres-marines-herbes",
    "title_fr": "Petits chèvres frais marinés aux herbes de Provence",
    "title_en": "Fresh Goat Cheese Marinated with Herbes de Provence",
    "course": "starters",
    "images": [
      "images/scans/chevres-marines-herbes.jpg"
    ],
    "french": "Pour 6 personnes:\n3 chèvres frais ou demi-frais (peut se faire avec du fromage de brebis)\npour la marinade, de belles herbes de Provence (romarin, estragon, fenouil, thym)\nhuile d'olive\n600 g de fèves fraîches (à défaut, haricots verts, petits pois)\n6 c.à.c. de vinaigre balsamique\n1 c.à.c. d'herbes de Provence\npoivre\n\nMarinade: doit se faire au minimum 3 jours avant la dégustation (10 jours, c'est bien); peut se garder au moins un mois. Dans un pot, verser d'abord l'huile d'olive (c'est de la conservation; il ne faut donc aucun contact entre le fromage et les parois du pot). Il faut que chaque fromage soit totalement enrobé d'huile. S'il y a un contact, il y a risque de fermentation. Couper le fromage en tranches d'1 cm d'épaisseur; on le pose sur les herbes; on verse un peu d'huile, herbes, huile, fromage, huile, herbes, fromage... Le pot doit rester à l'abri de la lumière; si le fromage est plus sec, il se conserve plus longtemps.\n\nPeler les fèves et les ébouillanter; couper le fromage en tranches; dresser sur assiette.\nParsemer de fèves et d'herbes de Provence. Poivrer. Napper d'huile. Faire tomber des petites gouttes de vinaigre sur l'assiette et servir. Faire un tour de poivre au moment de servir.\n\nNB:\n- les fèves se trouvent pendant les trois mois d'été, jusqu'aux vendanges du Bordelais; on plante un pied de fèves au début de chaque rang pour attirer les pucerons.\n- enlever la cosse et la petite peau qui les entoure; il faut prendre des fèves jeunes; si elles sont blanches, elles sont farineuses.\n- on les fait blanchir pour faire ressortir la pigmentation, les attendrir à l'extérieur en les gardant à peine croquantes au centre.",
    "english": "Serves 6:\n3 fresh or semi-fresh goat cheeses (can also be made with sheep's cheese)\nfor the marinade, good herbes de Provence (rosemary, tarragon, fennel, thyme)\nolive oil\n600 g fresh fava beans (or green beans or peas, if unavailable)\n6 tsp balsamic vinegar\n1 tsp herbes de Provence\npepper\n\nMarinade: start at least 3 days before serving (10 days is even better); it will keep at least a month. In a jar, pour in olive oil first — this preserves the cheese, so it must never touch the sides of the jar directly. Each piece of cheese needs to be fully coated in oil; any direct contact risks fermentation. Slice the cheese 1 cm thick; lay it on the herbs; pour in a little oil, herbs, oil, cheese, oil, herbs, cheese... Keep the jar away from light; drier cheese keeps longer.\n\nPeel the fava beans and blanch them; slice the cheese; arrange on a plate.\nScatter with fava beans and herbes de Provence. Pepper. Drizzle with oil. Dot the plate with a few drops of vinegar and serve. Add a turn of the pepper mill just before serving.\n\nNotes:\n- fava beans are in season for the three summer months, up to the Bordeaux grape harvest; a row of fava bean plants is traditionally planted at the start of each vine row to attract aphids away from the grapes.\n- remove the pod and the thin skin around each bean; use young beans — if they're white inside, they're starchy.\n- blanching brings out their bright green color and softens the outside while keeping a little bite in the center.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "legumes-barigoule",
    "title_fr": "Légumes frais à la barigoule",
    "title_en": "Fresh Vegetables à la Barigoule",
    "course": "sides",
    "images": [
      "images/scans/legumes-barigoule.jpg"
    ],
    "french": "1) Carottes, coeurs d'artichauts et fenouil.\nCuire chaque légume avec de l'huile, de l'ail,\ndu citron coupé en quartiers, du persil\n(mijoter plutôt que cuire), sel, poivre.\n2) Quand les légumes sont cuits, retirer du feu\net casser un oeuf par-dessus.",
    "english": "1) Carrots, artichoke hearts, and fennel.\nCook each vegetable with oil, garlic,\nlemon cut into wedges, parsley\n(simmer gently rather than boil), salt, pepper.\n2) Once the vegetables are cooked, remove from heat\nand crack an egg over the top.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "beignets",
    "title_fr": "Beignets",
    "title_en": "Fritters (Beignets)",
    "course": "desserts",
    "images": [
      "images/scans/beignets.jpg"
    ],
    "french": "200 g farine blanche\n3 oeufs\n3 cuillères huile\n1 morceau beurre fondu\nsel\n1 paquet levure\n1 paquet sucre vanillé\n+ 1 verre lait ou eau\n\nLaisser reposer 2 heures.\nAjouter les blancs en neige au moment de l'emploi de la pâte.\nParfumer avec du rhum ou de l'eau de vie (3 cuillères).",
    "english": "200 g white flour\n3 eggs\n3 tbsp oil\n1 knob melted butter\nsalt\n1 packet baking powder\n1 packet vanilla sugar\n+ 1 glass milk or water\n\nLet rest 2 hours.\nFold in stiffly beaten egg whites just before using the batter.\nFlavor with rum or brandy (3 tbsp).",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "sorbet-fruits",
    "title_fr": "Sorbet aux fruits",
    "title_en": "Fruit Sorbet",
    "course": "desserts",
    "images": [
      "images/scans/sorbet-fruits.jpg"
    ],
    "french": "3 blancs d'oeufs, montés en neige molle\n150 g sucre\nquelques gouttes de citron\njus ou pulpe de 500 g de fruits\n(mûres, cassis, myrtilles, framboises...)",
    "english": "3 egg whites, whipped to soft peaks\n150 g sugar\na few drops of lemon juice\njuice or pulp from 500 g fruit\n(blackberries, blackcurrants, blueberries, raspberries...)",
    "note": "Shares a page with an Apple Clafoutis recipe and Prunes in Brandy.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "charlotte-germaine",
    "title_fr": "Charlotte Germaine",
    "title_en": "Germaine's Charlotte",
    "course": "desserts",
    "images": [
      "images/scans/charlotte-germaine.jpg"
    ],
    "french": "8 oeufs\n150-200 g sucre\ncannelle\nraisins, rhum ou mirabelle\ncitron\npommes, 1 kg ou plus (arrosées de citron, épicées de cannelle)\n+ jaunes\n+ 100 g fécule ou maïzena\n+ raisins\n+ blancs en neige\nCuire au bain-marie, 1h30 à 2h.\nDémouler chaud.\nLe lendemain, repasser au four doux et arroser de sirop.\n\nPour une charlotte avec d'autres fruits: démouler froid et ajouter du kirsch.",
    "english": "8 eggs\n150-200 g sugar\ncinnamon\nraisins, rum or mirabelle brandy\nlemon\napples, 1 kg or more (sprinkled with lemon, spiced with cinnamon)\n+ egg yolks\n+ 100 g cornstarch\n+ raisins\n+ whites whipped to stiff peaks\nCook in a water bath (bain-marie), 1.5 to 2 hours.\nUnmold while warm.\nThe next day, warm it gently in the oven and drizzle with syrup.\n\nFor a charlotte with other fruit: unmold cold instead and add kirsch.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "pamplemousses-whisky",
    "title_fr": "Pamplemousses au Whisky",
    "title_en": "Grapefruit with Whisky",
    "course": "desserts",
    "images": [
      "images/scans/pamplemousses-whisky.jpg"
    ],
    "french": "Préparation: 15 mn. Cuisson: 8 mn.\nIngrédients: 4 pamplemousses, 100 g sucre, 10 cl eau, 4 cuillères à soupe de whisky\n\nPeler les pamplemousses en retirant la peau blanche, couper en rondelles de 2 cm.\nMettre sucre + eau dans une poêle à feu doux jusqu'à ébullition.\nLaisser bouillir doucement à feu doux 2 mn.\nAjouter les rondelles pendant 6 mn, en les retournant une fois.\nDisposer sur un plat en métal, arroser de whisky, saupoudrer de sucre.\nPasser quelques instants au grill pour les caraméliser.\nServir chaud ou froid.",
    "english": "Prep: 15 min. Cooking: 8 min.\nIngredients: 4 grapefruits, 100 g sugar, 10 cl (100 ml) water, 4 tbsp whisky\n\nPeel the grapefruits, removing the white pith, and cut into 2 cm rounds.\nPut the sugar + water in a pan over low heat until it boils.\nLet it simmer gently for 2 minutes.\nAdd the grapefruit rounds for 6 minutes, turning once.\nArrange on a metal dish, drizzle with whisky, and sprinkle with sugar.\nPut under the broiler for a few moments to caramelize.\nServe hot or cold.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "gravlax",
    "title_fr": "Gravlax (saumon mariné)",
    "title_en": "Gravlax (Cured Salmon)",
    "course": "starters",
    "images": [
      "images/scans/gravlax.jpg"
    ],
    "french": "Filet de saumon\n2 grosses cuillères de gros sel\n1 cuillère à soupe de sucre en poudre\nAneth surgelé (ou séché, ou frais)\n\n24 à 36 heures à l'avance.\nPresser pendant 1 heure.\nCouvrir de papier aluminium.\nPoser une boîte de conserve dessus, en guise de poids.\n\nAu moment de servir:\nArroser de marinade à trois reprises.\nCongeler 2 heures.\nCouper en lamelles fines.\nArroser de marinade en servant.",
    "english": "Salmon fillet\n2 heaping tbsp coarse salt\n1 tbsp granulated sugar\nFrozen dill (or dried, or fresh)\n\n24 to 36 hours ahead.\nPress for 1 hour.\nCover with aluminum foil.\nSet a tin can on top as a weight.\n\nWhen serving:\nBaste with the marinade three times.\nFreeze for 2 hours.\nSlice into thin strips.\nDrizzle with marinade as you serve.",
    "note": "",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "curry-vert-poulet",
    "title_fr": "Curry vert au poulet (Kaeng Khiev Wan Kai) — Thaïlande",
    "title_en": "Green Chicken Curry (Kaeng Khiev Wan Kai) — Thailand",
    "course": "mains",
    "images": [
      "images/scans/curry-vert-poulet.jpg"
    ],
    "french": "6 personnes\n4 blancs de poulet, 4 c.à.s. de pâte de curry vert (voir recette), 2 c.à.s. d'huile, 4 c.à.s. de nuoc-mam, 4 petits piments rouges frais, 5 feuilles de bergamote, 10 feuilles de basilic, 6 c.à.s. de lait de coco concentré (épiceries orientales), 2 c.à.s. de sucre.\n\nPréparez 2,5 dl de lait de coco en diluant les 6 c.à.s. de concentré avec de l'eau, délayez ensuite la pâte de curry vert dans ce lait. Coupez les blancs de poulet en grosses bouchées. Épépinez les piments rouges et coupez-les en très fine julienne les feuilles de bergamote et de basilic. Chauffez l'huile dans une poêle antiadhésive et faites-y revenir les morceaux de poulet juste le temps de les dorer légèrement, mouillez avec le lait de coco au curry vert, remuez pendant 2 minutes, puis laissez mijoter sur feu très très doux pendant 10 minutes. Ajoutez le nuoc-mam et le sucre, laissez mijoter encore 2 minutes, puis servez dans un plat creux en parsemant le piment rouge, la bergamote et le basilic. Accompagnez de riz blanc.\n(Si vous dégustez ce plat avec fourchette et couteau, vous pouvez laisser les blancs de poulet entiers, on les coupe en bouchées car les Thaïlandais n'utilisent pas de couteau à table, seulement fourchette et cuillère.)",
    "english": "Serves 6\n4 chicken breasts, 4 tbsp green curry paste (see recipe), 2 tbsp oil, 4 tbsp fish sauce, 4 small fresh red chilies, 5 kaffir lime leaves, 10 basil leaves, 6 tbsp concentrated coconut milk (Asian grocery stores), 2 tbsp sugar.\n\nMake 2.5 dl (250 ml) coconut milk by diluting the 6 tbsp of concentrate with water, then stir the green curry paste into it. Cut the chicken breasts into large bite-sized pieces. Deseed the red chilies and finely julienne them along with the kaffir lime and basil leaves. Heat the oil in a nonstick pan and sauté the chicken pieces just until lightly golden, then add the green curry coconut milk, stir for 2 minutes, and simmer over very low heat for 10 minutes. Add the fish sauce and sugar, simmer 2 more minutes, then serve in a deep dish, scattered with the red chili, lime leaves, and basil. Serve with white rice.\n(If eating this with a fork and knife, you can leave the chicken breasts whole and cut them at the table — Thai diners don't use a knife at the table, only a fork and spoon, so the chicken is normally cut into bite-size pieces beforehand.)",
    "note": "Part of a 2-page spread of Thai recipes.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "pate-curry-vert",
    "title_fr": "Pâte de curry vert (Nam Prik Keng Khiao Wan) — Thaïlande",
    "title_en": "Green Curry Paste (Nam Prik Keng Khiao Wan) — Thailand",
    "course": "sauces",
    "images": [
      "images/scans/pate-curry-vert.jpg"
    ],
    "french": "Pour 4 c.à.s.\n6 petits piments verts frais, 7 grains de poivre noir ou blanc, 1/2 c.à.c. de graines de cumin, 1 c.à.c. de graines de coriandre, 4 racines de coriandre, 1 c.à.c. de galanga en poudre, 1 c.à.c. de sel, 1 c.à.c. de pâte de crevette (kapi), 1 c.à.c. de citronnelle en poudre, 6 échalotes, 4 gousses d'ail, 1 c.à.s. d'huile.\n\nOuvrez les piments, épépinez-les puis hachez-les finement. Hachez les échalotes. Pelez et coupez en morceaux les gousses d'ail. Mettez les graines de cumin et de coriandre dans une poêle antiadhésive et faites-les griller et légèrement colorer à feu moyen pendant 2 à 3 minutes pour qu'elles dégagent leurs arômes. Mettez dans le bol du mixer tous les ingrédients prévus et faites tourner jusqu'à obtention d'une pâte homogène.\n(La pâte non utilisée se conserve très bien au frigo, mais on la trouve toute prête dans le commerce.)",
    "english": "Makes 4 tbsp\n6 small fresh green chilies, 7 black or white peppercorns, 1/2 tsp cumin seeds, 1 tsp coriander seeds, 4 cilantro roots, 1 tsp galangal powder, 1 tsp salt, 1 tsp shrimp paste (kapi), 1 tsp lemongrass powder, 6 shallots, 4 cloves garlic, 1 tbsp oil.\n\nSplit the chilies, deseed, and chop finely. Chop the shallots. Peel and chop the garlic cloves. Toast the cumin and coriander seeds in a dry nonstick pan over medium heat for 2-3 minutes, until lightly colored and fragrant. Put all the ingredients in a blender and blend until you get a smooth paste.\n(Unused paste keeps very well in the fridge, but it's also sold ready-made.)",
    "note": "Part of a 2-page spread of Thai recipes.\n\nTo make kosher: leave out the shrimp paste (kapi) — a little extra salt, or a spoonful of white miso for depth, gets you close. Kosher-certified fish sauce is another option if you want to keep that savory note.",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "oeuf-champignons",
    "title_fr": "Oeuf dur et champignons au four",
    "title_en": "Hard-Boiled Egg and Mushroom Gratin",
    "course": "starters",
    "images": [
      "images/scans/oeuf-champignons.jpg"
    ],
    "french": "Beurre chaud.\nHacher les champignons.\nJaunes d'oeufs + champignons.\nPasser au four.\n+ maïzena, ou sauce blanche, ou rien.",
    "english": "Hot butter.\nChop the mushrooms.\nEgg yolks + mushrooms.\nBake in the oven.\n+ cornstarch, or a white sauce, or nothing.",
    "note": "Shares a page with a Mashed Potato Salad.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "galette-noisettes",
    "title_fr": "Galette aux noisettes (Grimpfrey)",
    "title_en": "Hazelnut Galette",
    "course": "desserts",
    "images": [
      "images/scans/galette-noisettes.jpg"
    ],
    "french": "Pâte: 200 g farine, 125 g beurre, 1 pincée de sel → pétrir en sable.\nAjouter une goutte d'eau pour pouvoir rouler la pâte.\n\nPuis mélanger: 100 à 150 g sucre (cassonade/vergeoise brune), 1 cuillère à soupe de farine, amandes hachées, 50 g beurre.\nÉtaler sur la pâte.\nCuire au four 20 minutes.",
    "english": "Crust: 200 g flour, 125 g butter, 1 pinch salt → rub together into coarse crumbs.\nAdd a drop of water so the dough can be rolled out.\n\nThen mix: 100-150 g sugar (dark brown/vergeoise sugar), 1 tbsp flour, chopped almonds, 50 g butter.\nSpread over the crust.\nBake 20 minutes.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "pain-maison",
    "title_fr": "Pain (5 céréales)",
    "title_en": "Homemade Multigrain Bread",
    "course": "breads",
    "images": [
      "images/scans/pain-maison.jpg"
    ],
    "french": "1 kg farine 5 céréales, bise, ou de campagne\n3 cuillères à café de sel\ngraines de courge, tournesol, pignons, noix, noisettes ou autres (1 poignée de chaque)\n1 cube de levure émietté\n8 dl d'eau\n\nMélanger la farine, le sel, les graines.\nPuis le cube de levure + l'eau.\nPétrir 3 minutes.\nLaisser lever minimum 1 heure.\nCuire 20 minutes à 220°, puis 30 minutes à 180°.\nAu sortir du four, asperger le pain d'eau.",
    "english": "1 kg multigrain, whole wheat, or country-style flour\n3 tsp salt\npumpkin seeds, sunflower seeds, pine nuts, walnuts, hazelnuts, or others (1 handful of each)\n1 cube fresh yeast, crumbled\n8 dl (800 ml) water\n\nMix the flour, salt, and seeds.\nThen the crumbled yeast + the water.\nKnead for 3 minutes.\nLet rise for at least 1 hour.\nBake 20 minutes at 220°C, then 30 minutes at 180°C.\nAs soon as it comes out of the oven, spray the loaf with water.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "biscuits-ikea",
    "title_fr": "Biscuits Ikea",
    "title_en": "Ikea Spiced Biscuits",
    "course": "desserts",
    "images": [
      "images/scans/biscuits-ikea-1.jpg",
      "images/scans/biscuits-ikea-2.jpg"
    ],
    "french": "Pour 2,5 kg de pâte:\n225 g beurre\n330 g mélasse\n3 dl crème\n250 g sucre blanc\n200 g sucre brun\n20 g bicarbonate de soude\n2 cc cannelle moulue\n2 cc cardamome moulue\n2 cc girofle moulu\n2 cc gingembre moulu\n1 à 1,100 kg farine fleur\n\nFaire fondre le beurre, ajouter les sucres, la mélasse, les épices et la crème. Bien remuer, à masse fluide. Laisser refroidir. Ajouter le bicarbonate dissous dans de l'eau. Bien mélanger.\n\nPetit à petit ajouter la farine sans cesser de remuer.\nLaisser reposer une nuit au frais.\nAbaisser la pâte à 3 mm et découper les formes, les déposer sur une plaque beurrée.\nChauffer le four à 175° et cuire 7-10 min.\nLaisser refroidir les biscuits sur la plaque quelques instants.",
    "english": "For 2.5 kg of dough:\n225 g butter\n330 g molasses\n3 dl (300 ml) cream\n250 g white sugar\n200 g brown sugar\n20 g baking soda\n2 tsp ground cinnamon\n2 tsp ground cardamom\n2 tsp ground cloves\n2 tsp ground ginger\n1 to 1.1 kg all-purpose flour\n\nMelt the butter, add the sugars, molasses, spices, and cream. Stir well until smooth. Let cool. Add the baking soda dissolved in a little water. Mix well.\n\nGradually add the flour, stirring the whole time.\nLet rest overnight in the fridge.\nRoll out the dough to 3 mm and cut out shapes; place on a buttered baking sheet.\nHeat the oven to 175°C and bake for 7-10 minutes.\nLet the biscuits cool on the baking sheet for a few minutes before moving them.",
    "note": "Two pages of the same recipe, combined here.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "gratin-poireaux",
    "title_fr": "Gratin de poireaux",
    "title_en": "Leek Gratin",
    "course": "sides",
    "images": [
      "images/scans/gratin-poireaux.jpg"
    ],
    "french": "Pour 6 personnes:\n2,5 kg poireaux\n10 tomates\n300 g gruyère râpé\n200 g crème fraîche\n3 oignons émincés\n3 gousses d'ail hachées\n3 cuillerées à soupe huile\n1 cuillère à soupe basilic haché\n1 cuillère à soupe persil haché\n10 g beurre\nsel, poivre\nPréparation: 30 mn. Cuisson: 30 mn.\n\nÉpluchez, lavez les poireaux, coupez les blancs en tronçons de 5 cm. Faites-les cuire 20 minutes à l'eau bouillante salée. Égouttez-les. Coupez les tomates en quartiers. Versez l'huile dans une cocotte, lorsqu'elle est chaude mettez les tomates, les oignons, l'ail, le persil, le basilic, du sel et du poivre. Faites revenir le tout pendant 10 minutes sur feu doux. Beurrez un plat à four, disposez successivement la moitié des tomates revenues, 100 g de gruyère râpé, les poireaux, 100 g de gruyère et le reste des tomates, arrosez avec la crème fraîche, répartissez sur le dessus le reste de fromage râpé, faites gratiner à four chaud 210° (thermostat 7) pendant 30 minutes. Servez chaud dans le plat de cuisson.\n\nNotre conseil: vous pouvez remplacer le gruyère par du parmesan fraîchement râpé.",
    "english": "Serves 6:\n2.5 kg leeks\n10 tomatoes\n300 g grated gruyère\n200 g crème fraîche\n3 sliced onions\n3 cloves garlic, chopped\n3 tbsp oil\n1 tbsp chopped basil\n1 tbsp chopped parsley\n10 g butter\nsalt, pepper\nPrep: 30 min. Cooking: 30 min.\n\nPeel and wash the leeks, cut the white parts into 5 cm lengths. Cook 20 minutes in salted boiling water. Drain. Cut the tomatoes into wedges. Pour the oil into a pot; once hot, add the tomatoes, onions, garlic, parsley, basil, salt and pepper. Sauté it all for 10 minutes over low heat. Butter a baking dish, layer in: half the cooked tomatoes, 100 g grated gruyère, the leeks, 100 g gruyère, and the rest of the tomatoes; drizzle with the crème fraîche, scatter the remaining cheese on top, and gratin in a hot oven at 210°C (gas mark 7) for 30 minutes. Serve hot, straight from the baking dish.\n\nOur tip: you can swap the gruyère for freshly grated parmesan.",
    "note": "Shares a page with a Leek Mousse recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "mousse-poireaux",
    "title_fr": "Mousse de poireaux",
    "title_en": "Leek Mousse",
    "course": "sides",
    "images": [
      "images/scans/mousse-poireaux.jpg"
    ],
    "french": "Pour 6 personnes:\n2 kg poireaux fins\n200 g crème fraîche\n125 g beurre\n1 cuillère à soupe huile\nsel, poivre du moulin\nPréparation: 15 mn. Cuisson: 30 mn.\n\nÉpluchez et lavez les poireaux à plusieurs eaux. Ôtez environ un tiers du vert. Faites pocher 5 min à l'eau bouillante salée 5 ou 6 poireaux, égouttez-les, réservez-les pour la décoration. Émincez tous les autres poireaux. Faites chauffer 50 g de beurre dans une sauteuse, versez-y les poireaux émincés, faites-les fondre doucement en remuant souvent, pendant 30 min environ. Passez les poireaux à la moulinette, grille fine, ou encore mieux au mixer, salez, poivrez. Faites fondre le reste du beurre jusqu'à ce qu'il devienne couleur noisette. Mettez la purée de poireaux au bain-marie et incorporez peu à peu le beurre puis la crème; mélangez à la spatule en bois. Versez cette mousse de poireaux dans le légumier de service et décorez avec les poireaux pochés, très peu huilés.\n\nNotre conseil: cette purée très fine accompagne parfaitement tous les rôtis de viande ou de volaille.",
    "english": "Serves 6:\n2 kg thin leeks\n200 g crème fraîche\n125 g butter\n1 tbsp oil\nsalt, freshly ground pepper\nPrep: 15 min. Cooking: 30 min.\n\nPeel and wash the leeks in several changes of water. Remove about a third of the green part. Poach 5 or 6 whole leeks for 5 minutes in salted boiling water, drain, and set aside for garnish. Thinly slice all the remaining leeks. Heat 50 g butter in a sauté pan, add the sliced leeks, and let them soften gently, stirring often, for about 30 minutes. Pass the leeks through a fine food mill, or better still a blender; salt and pepper. Melt the rest of the butter until it turns hazelnut-brown. Set the leek purée over a water bath and gradually work in the butter, then the cream; stir with a wooden spatula. Pour this leek mousse into the serving dish and garnish with the poached leeks, very lightly oiled.\n\nOur tip: this very smooth purée is a perfect match for any roasted meat or poultry.",
    "note": "Shares a page with a Leek Gratin recipe.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "poulet-citron",
    "title_fr": "Poulet au citron",
    "title_en": "Lemon Chicken",
    "course": "mains",
    "images": [
      "images/scans/poulet-citron.jpg"
    ],
    "french": "(La veille)\nI. Nettoyer le poulet.\nMixer ensemble dans un saladier: 2 gros oignons, 1 tête d'ail entière, 1 botte de coriandre\n+ huile d'olive, sel, poivre, safran, gingembre.\nFaire mariner le poulet dans cette sauce toute la nuit. Attacher les pattes.\n\nII. Mettre le poulet dans une cocotte + 2 verres d'eau + huile d'arachide + 1 oignon coupé fin.\nFaire cuire doucement.\nTourner souvent les morceaux, doucement.\nPuis, une fois cuit, faire griller le poulet au four.\n\nIII. La sauce: + olives vertes dénoyautées et/ou olives rouge-brun.\n300 g d'olives pour 1 poulet\n+ 1 citron confit, coupé\nCuire la sauce à part.\nLaisser mijoter.",
    "english": "(Prepare the day before)\nI. Clean the chicken.\nBlend together in a bowl: 2 large onions, 1 whole head of garlic, 1 bunch cilantro\n+ olive oil, salt, pepper, saffron, ginger.\nMarinate the chicken in this sauce overnight. Tie the legs together.\n\nII. Put the chicken in a pot + 2 glasses water + peanut oil + 1 thinly sliced onion.\nCook gently.\nTurn the pieces often, gently.\nThen, once cooked, broil the chicken in the oven.\n\nIII. The sauce: + pitted green olives and/or reddish-brown olives.\n300 g olives per chicken\n+ 1 chopped preserved lemon\nCook the sauce separately.\nLet it simmer.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "tarte-meringuee-citron",
    "title_fr": "Tarte meringuée au citron (Claudine Frucht)",
    "title_en": "Lemon Meringue Tart (Claudine Frucht)",
    "course": "desserts",
    "images": [
      "images/scans/tarte-meringuee-citron.jpg"
    ],
    "french": "Pâte:\n200 g farine (ou 250 g)\n100 g margarine (ou 200 g)\n1 cuillère à café de sucre, sel\n1 verre d'eau\n\nL'étaler, la cuire à blanc en mettant des haricots dessus pour éviter qu'elle ne gonfle.\n\nCrème:\n30 g farine\n25 g maïzena\n185 g sucre en poudre\n1 pincée de sel\n3 citrons\n3 jaunes d'oeufs\n37 cl d'eau\n\nDans une casserole, mélangez la farine, l'eau, la maïzena, le sucre et le sel. Faire chauffer et travailler jusqu'à ce que le mélange soit ferme et brillant.\nVerser le mélange sur les trois jaunes d'oeufs dans un saladier et remettre le tout dans la casserole sur feu doux pendant cinq minutes, en tournant sans arrêt, comme pour une crème anglaise. Puis ajouter le zeste des citrons râpé et le jus des citrons dans la casserole. Mélanger et laisser tiédir quelques minutes sur feu doux, puis verser sur la pâte cuite.\n\nMeringue:\nBattre les 3 blancs d'oeufs avec 110 g de sucre glace. La répartir à la cuiller sur la crème au citron.\n\nRemettre au four à 100° durant 40 minutes environ.",
    "english": "Crust:\n200 g flour (or 250 g)\n100 g margarine (or 200 g)\n1 tsp sugar, salt\n1 glass water\n\nRoll it out and blind-bake it, with dried beans on top to stop it puffing up.\n\nFilling:\n30 g flour\n25 g cornstarch\n185 g granulated sugar\n1 pinch salt\n3 lemons\n3 egg yolks\n37 cl (370 ml) water\n\nIn a saucepan, mix the flour, water, cornstarch, sugar, and salt. Heat and work it until the mixture is firm and glossy.\nPour the mixture over the three egg yolks in a bowl and return it all to the saucepan over low heat for five minutes, stirring constantly, as for a custard. Then add the grated lemon zest and the lemon juice to the saucepan. Mix and let cool slightly over low heat, then pour over the baked crust.\n\nMeringue:\nBeat the 3 egg whites with 110 g powdered sugar. Spoon it over the lemon filling.\n\nBake again at 100°C for about 40 minutes.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "tarte-au-citron",
    "title_fr": "Tarte au citron",
    "title_en": "Lemon Tart",
    "course": "desserts",
    "images": [
      "images/scans/tarte-au-citron.jpg"
    ],
    "french": "Pâte: 1 oeuf, 70 g sucre, sel. Battre jusqu'à ce que ça mousse.\nAjouter 200 g farine + levure. Mélanger.\nAjouter 60 g beurre ramolli. Mélanger et rajouter éventuellement un peu de farine. Mélanger à la main sans trop travailler.\nFrigidaire: 1 heure.\nBeurrer et fariner un moule à tarte.\nFoncer le moule en laissant un peu déborder la pâte. Faire cuire à blanc 15 min, th. 6 1/2.\nCouper la pâte qui déborde.\n\nGarniture: 3 oeufs + 100 g sucre + sel + 100 g beurre ramolli + le zeste de 4 citrons + jus de citron passé. Mixer.\nVerser dans le moule.\nTh. 6 1/2 pendant 20 min.",
    "english": "Dough: 1 egg, 70 g sugar, salt. Beat until foamy.\nAdd 200 g flour + baking powder. Mix.\nAdd 60 g softened butter. Mix, adding a little more flour if needed. Mix by hand without overworking it.\nRefrigerate: 1 hour.\nButter and flour a tart pan.\nLine the pan, letting the dough overhang slightly. Blind-bake 15 minutes at gas mark 6 1/2.\nTrim off the overhanging dough.\n\nFilling: 3 eggs + 100 g sugar + salt + 100 g softened butter + zest of 4 lemons + strained lemon juice. Blend.\nPour into the pan.\nBake at gas mark 6 1/2 for 20 minutes.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "tarte-louis-philippe",
    "title_fr": "Tarte Louis Philippe",
    "title_en": "Louis Philippe Tart (Pear and Almond Tart)",
    "course": "desserts",
    "images": [
      "images/scans/tarte-louis-philippe-1.jpg",
      "images/scans/tarte-louis-philippe-2.jpg"
    ],
    "french": "Temps de préparation: 20 minutes\nTemps de cuisson: 25 minutes\nProportions pour 6 personnes\n\nPâte à tarte: 200 g farine, 100 g sucre, 100 g beurre\nPâte d'amandes: 100 g poudre d'amandes, 75 g sucre, 60 g beurre, 2 oeufs, 1/2 citron, 1 cuillère à soupe Cointreau, 5 poires moyennes\n\nPréparez votre pâte en mélangeant à la main, dans un saladier, la farine avec le sucre, le beurre et trois cuillerées à soupe d'eau.\nLorsque vous aurez obtenu une pâte homogène, étalez-la au rouleau et foncez votre tourtière.\nD'autre part, épluchez les poires, coupez-les en deux, retirez le coeur et disposez ces demi-poires en cercle dans la tourtière, les pointes vers le centre; remplissez les vides avec les demi-poires restantes.\nDans un grand bol, travaillez la poudre d'amandes avec le sucre et le beurre, les 2 jaunes d'oeuf, le jus d'1/2 citron et la liqueur.\nÉtalez cette pâte sur toute la surface de la tarte et mettez au four assez chaud (thermostat 7-8) pendant 25 minutes.\nCette tarte se sert froide.",
    "english": "Prep time: 20 minutes\nBaking time: 25 minutes\nServes 6\n\nTart dough: 200 g flour, 100 g sugar, 100 g butter\nAlmond paste: 100 g ground almonds, 75 g sugar, 60 g butter, 2 eggs, 1/2 lemon, 1 tbsp Cointreau, 5 medium pears\n\nPrepare the dough by hand-mixing, in a bowl, the flour with the sugar, butter, and three tablespoons of water.\nOnce you have a smooth dough, roll it out and line your tart pan.\nMeanwhile, peel the pears, cut them in half, remove the core, and arrange the pear halves in a circle in the tart pan, points toward the center; fill in the gaps with the remaining pear halves.\nIn a large bowl, work together the ground almonds with the sugar and butter, the 2 egg yolks, the juice of 1/2 lemon, and the liqueur.\nSpread this mixture over the whole surface of the tart and bake in a fairly hot oven (setting 7-8) for 25 minutes.\nServe this tart cold.",
    "note": "Pieced together from two scanned pages.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "magic-lemon-cake",
    "title_fr": "Magic Lemon Pudding Cake (Isabelle Taillandier)",
    "title_en": "Magic Lemon Pudding Cake (Isabelle Taillandier)",
    "course": "desserts",
    "images": [
      "images/scans/magic-lemon-cake.jpg"
    ],
    "french": "4 cuillères à soupe de beurre mou\n1 citron\n90 g sucre\n2 oeufs\n30 g farine\n175 ml lait\n\nMélanger le beurre, le zeste (finement râpé) et le sucre.\n+ les jaunes d'oeufs\n+ la farine\n+ le jus de citron\n+ le lait\nIncorporer les blancs montés en neige ferme.\nMoule beurré.\nCuire au bain-marie, au four, 40 minutes à 160°.\nServir chaud.",
    "english": "4 tbsp soft butter\n1 lemon\n90 g sugar\n2 eggs\n30 g flour\n175 ml milk\n\nMix together the butter, finely grated zest, and sugar.\n+ the egg yolks\n+ the flour\n+ the lemon juice\n+ the milk\nFold in the stiffly whipped egg whites.\nButtered pan.\nBake in a water bath in the oven, 40 minutes at 160°C.\nServe warm.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "makroud",
    "title_fr": "Makroud (Algérie)",
    "title_en": "Makroud (Algeria)",
    "course": "desserts",
    "images": [
      "images/scans/makroud.jpg"
    ],
    "french": "Pour 6 à 8 personnes:\n1 kg de semoule\n1 kg de dattes\n1 litre d'huile d'arachide\n300 g de miel\n60 g de sucre en poudre\n1 flacon d'eau de fleur d'oranger\n2 cuillerées à café de cannelle en poudre\n120 g de beurre\n20 g de sel\n4 jaunes d'oeufs\nPréparation: 1 h. Cuisson: 15 mn.\n\nDénoyautez les dattes, passez-les à la moulinette, pétrissez-les avec 3 cuillerées à soupe d'huile, 2 cuillerées à soupe d'eau de fleur d'oranger et la cannelle, jusqu'à obtention d'une pâte homogène. Versez la semoule sur la table, faites une fontaine, mouillez avec 1 dl d'huile, ajoutez le beurre, les 4 jaunes d'oeufs, 1 dl d'eau tiède, le sucre et le sel. Travaillez à la main pour obtenir une pâte. Étendez-la au rouleau. Déposez la farce de dattes sur la moitié de la pâte, recouvrez de l'autre moitié et découpez au couteau des rectangles ou des losanges. Vous pouvez aussi enrouler la farce dans la pâte pour découper des gâteaux ronds. Faites chauffer le reste de l'huile; quand elle est bien chaude, plongez-y les gâteaux, qui doivent prendre une teinte légèrement dorée. Égouttez-les, roulez-les dans le miel, égouttez à nouveau.\n\nNotre conseil: vous pouvez enduire une seconde fois les gâteaux de miel en les badigeonnant au pinceau.",
    "english": "Serves 6-8:\n1 kg semolina\n1 kg dates\n1 liter peanut oil\n300 g honey\n60 g granulated sugar\n1 small bottle orange blossom water\n2 tsp ground cinnamon\n120 g butter\n20 g salt\n4 egg yolks\nPrep: 1 hour. Cooking: 15 min.\n\nPit the dates and pass them through a food mill, then knead with 3 tbsp oil, 2 tbsp orange blossom water, and the cinnamon, until you get a smooth paste. Pour the semolina onto the table, make a well, moisten with 1 dl (100 ml) oil, add the butter, the 4 egg yolks, 1 dl (100 ml) warm water, the sugar, and the salt. Work by hand into a dough. Roll it out. Spread the date filling over half the dough, cover with the other half, and cut into rectangles or diamonds with a knife. You can also roll the filling inside the dough to cut round cakes instead. Heat the rest of the oil; once very hot, fry the cakes until lightly golden. Drain, roll in honey, and drain again.\n\nOur tip: you can coat the cakes in honey a second time, brushing it on.",
    "note": "Shares a page with a Messelmen recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "morue-maria",
    "title_fr": "Morue Maria",
    "title_en": "Maria's Salt Cod",
    "course": "mains",
    "images": [
      "images/scans/morue-maria.jpg"
    ],
    "french": "Couper la morue à l'avance, la dessaler.\nL'égoutter, puis ajouter\n5 oeufs durs\n3 oignons\n1 gousse d'ail, piment, laurier, poivre\npersil\ncarottes, pommes de terre\n1 verre vin blanc, 1 verre huile d'olive\nou eau\n\nFaire une couche d'oignons,\nune couche de carottes et pommes de terre, une couche d'oeufs...\nFaire la sauce et la verser dessus.",
    "english": "Cut the salt cod ahead of time, and soak it to remove the salt.\nDrain it, then add\n5 hard-boiled eggs\n3 onions\n1 clove garlic, chili, bay leaf, pepper\nparsley\ncarrots, potatoes\n1 glass white wine, 1 glass olive oil\nor water\n\nMake a layer of onions,\na layer of carrots and potatoes, a layer of eggs...\nMake the sauce and pour it over the top.",
    "note": "Shares a page with Anne's Bread.",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "salade-puree-pomme-de-terre",
    "title_fr": "Salade purée de pomme de terre",
    "title_en": "Mashed Potato Salad",
    "course": "starters",
    "images": [
      "images/scans/salade-puree-pomme-de-terre.jpg"
    ],
    "french": "1 pomme de terre par personne, moulinée, pressée.\nHuile, sel, vinaigre.\nMayonnaise. Oeufs durs, tomate, [garniture au choix].\nSalade verte.",
    "english": "1 potato per person, mashed or riced, pressed to drain.\nOil, salt, vinegar.\nMayonnaise. Hard-boiled eggs, tomato, garnish of your choice.\nGreen salad.",
    "note": "Shares a page with an Egg and Mushroom Gratin.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "gateau-matzenehl",
    "title_fr": "Gâteau Matzemehl",
    "title_en": "Matzo Meal Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-matzenehl.jpg"
    ],
    "french": "6 oeufs\n300 g sucre\n75 g fécule\n75 g farine de matzo (Matzemehl)",
    "english": "6 eggs\n300 g sugar\n75 g cornstarch\n75 g matzo meal",
    "note": "Shares a page with a Passover Chocolate Cake and Passover Macaroons.",
    "tags": [
      "parve",
      "passover"
    ]
  },
  {
    "slug": "meringues",
    "title_fr": "Meringues",
    "title_en": "Meringues",
    "course": "desserts",
    "images": [
      "images/scans/meringues.jpg"
    ],
    "french": "3 blancs d'oeufs\n180 g sucre semoule\nJus de citron, à ajouter en dernier\n\nMettre par petits tas sur papier sulfurisé.\nCuire à four très doux.\nLaisser sécher au four fermé.",
    "english": "3 egg whites\n180 g caster sugar\nA little lemon juice, added last\n\nDrop in small mounds on parchment paper.\nBake in a very low oven.\nLet dry in the closed (turned-off) oven.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "messelmen",
    "title_fr": "Messelmen (Algérie)",
    "title_en": "Messelmen (Algeria)",
    "course": "desserts",
    "images": [
      "images/scans/messelmen.jpg"
    ],
    "french": "Pour environ 30 gâteaux:\n500 g de farine\n150 g de sucre\n1 dl d'huile d'olive\n2 dl d'eau\nsel\n100 g de miel\n100 g de pignons de pin\nhuile pour friture\nPréparation: 15 mn + 30 mn de repos. Cuisson: 5 mn par fournée.\n\nDans la farine disposée en fontaine, mettez le sucre, le sel, l'huile d'olive et l'eau. Travaillez jusqu'à ce que la pâte forme une boule bien lisse. Laissez-la reposer 30 minutes. Étendez-la sur 1 cm d'épaisseur. Détaillez des ronds de 5 cm de diamètre à l'emporte-pièce. Plongez-les dans une friture d'huile chaude pendant 5 minutes. Retirez-les, posez-les sur du papier absorbant avant de les napper de miel. Parsemez aussitôt de pignons.\n\nNotre conseil: l'huile doit être chaude sans être fumante, pour ne pas brûler les messelmen.",
    "english": "Makes about 30 cakes:\n500 g flour\n150 g sugar\n1 dl (100 ml) olive oil\n2 dl (200 ml) water\nsalt\n100 g honey\n100 g pine nuts\noil for frying\nPrep: 15 min + 30 min resting. Cooking: 5 min per batch.\n\nMake a well in the flour and add the sugar, salt, olive oil, and water. Work until the dough forms a smooth ball. Let it rest 30 minutes. Roll it out to 1 cm thick. Cut out 5 cm rounds with a cutter. Fry them in hot oil for 5 minutes. Remove, drain on paper towels, then coat with honey. Sprinkle immediately with pine nuts.\n\nOur tip: the oil should be hot but not smoking, so the messelmen don't burn.",
    "note": "Shares a page with a Makroud recipe.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "nana-lait-meconnu",
    "title_fr": "Le lait, ce méconnu !",
    "title_en": "Milk, So Misunderstood!",
    "course": "notes",
    "images": [
      "images/scans/nana-lait-meconnu.jpg"
    ],
    "french": "LE LAIT, CE MÉCONNU !\n\nMéconnu, oui. L'adulte en absorbe précisément trop peu: il ne songe pas assez que le lait lui est aussi indispensable qu'au nourrisson et il va demander à d'autres éléments, parfois nocifs, ce que cet aliment lui apporterait avec abondance et bienfaisance.\n\nLe lait est un aliment complet ou presque complet. Il vous apporte les éléments réclamés quotidiennement par votre organisme: de l'azote (les protides, tout comme la viande); des hydrates de carbone (le sucre de lait, ou lactose, est l'un des meilleurs qui soient); des graisses, ou lipides (la crème est la plus succulente des graisses); des vitamines A, D, C, B1 et B2, celles-ci très rares ailleurs, et pourtant indispensables; des sels minéraux: phosphore, soude, potasse, magnésie, fer, iode, et le merveilleux, l'irremplaçable calcium, si difficile à administrer chimiquement de façon utile.\n\nSongez qu'il vous faut 1 gramme de calcium quotidien: vos muscles, vos dents, vos os, vos ongles, en ont besoin. À cause de cet apport considérable de calcium, on ne peut pas supprimer sans danger le lait ou le fromage de l'alimentation. Alors que beaucoup d'aliments sont interchangeables, alors qu'on peut remplacer la viande par le poisson, et vice versa, il est impossible de se passer de laitages sans dommage grave.\n\nNotons que par ailleurs, le beurre est la seule matière grasse qu'apporte à l'organisme des protides et des glucides.\n\nQUE DEVRAIT ÊTRE LA RATION JOURNALIÈRE?\n\nSi vous consommez du lait par jour, vous trouverez dans ce litre, outre mille éléments utiles, votre ration totale de calcium, qui est de 1 gramme quotidien. Songez que pour trouver ce gramme dans la viande seule, il faudrait en consommer 5 kilos, dans les pommes de terre seules, 3 kilos.\n\nPourtant, peu d'adultes absorbent le litre de lait quotidien, sauf les futures mamans et celles qui allaitent, pour qui il est un minimum. Ceux qui consomment 1/2 litre de lait peuvent compléter leur ration de chaux en y ajoutant chaque jour 50 grammes de fromage à pâte dure (gruyère, cantal ou port-salut), ou 2 pots de yaourt, ou 3 cuillerées de lait en poudre ajoutées à leurs aliments.\n\nTrop de gens se contentent du quart de lait quotidien absorbé en hâte au lever, ou suppriment ce lait qui subsiste à peine, à l'état de \"nuage\", dans un thé matinal. Trop de mères oublient que l'adolescent pousserait mieux s'il avait son litre de lait quotidien.\n\nPourquoi les Nordiques ont-ils augmenté leur taille de 0 m. 10 depuis 1925? Parce que leur consommation de lait atteint depuis cette époque 1 litre par jour et par personne.\n\nNE LE CONSOMMEZ PAS TOUJOURS À LA TASSE\n\nMangez-le en tartines, absorbez-le dans des sauces et des entremets, buvez-le en cocktails rose et or, dégustez-le en confiture!\n\n♦ EN TARTINES: ouvrez une boîte de lait condensé sucré, et tartinez-en une lamelle de pain frais: goûter exquis pour l'enfant comme pour vous.\n\n♦ EN SAUCES: vous connaissez la formule de la sauce-miracle, la Béchamel, cette sauce de base qui devient tour à tour, selon ce qu'on lui ajoute, Mornay, Aurore, etc.: 30 grammes de beurre, 30 grammes de farine, 2 litres d'eau, 2 bouillon-cubes, 200 g de gruyère râpé.\n\n♦ EN ENTREMETS: nous ne parlons ici, il n'y a pas longtemps, des innombrables crèmes, toutes à base de lait. Les gâteaux de riz, de semoule, de petites pâtes, régulièrement du lait. Je vous en rappelle les recettes:\nGâteau de riz: 100 g de riz, 2 oeufs, 4 cuillerées à soupe de sucre en poudre, 1/2 litre de lait, vanille.\nLavez bien le riz. Faites-le cuire doucement dans du lait sucré et vanillé. Laissez un peu refroidir et ajoutez les jaunes d'oeufs, puis les blancs battus en neige ferme. Mettez en moule caramélisé et cuisez au bain-marie, à four pas trop chaud, car les blancs en neige coloreraient trop vite. Démoulez froid et servez à volonté avec une crème anglaise vanillée ou bien entouré de gelée de groseilles.\n\nSemoule au chocolat: 1/2 litre de lait, 50 g de semoule, 2 grosses barres de chocolat à cuire, 2 cuillerées à soupe de sucre.\nFaites bouillir le lait sucré, ajoutez-y le chocolat que vous aurez fait fondre dans 2 cuillerées d'eau chaude, et enfin jetez, en pluie, dans le liquide bouillant, la semoule. Remuez le mélange à la cuillère sur feu doux. Quand il sera devenu épais (il faut dix minutes environ), versez-le dans un moule mouillé d'eau froide, et démoulez bien froid. Et servez tel quel ou sous une crème à la vanille.\n\nGâteau de vermicelle: 1/2 litre de lait, 75 g de vermicelle, 1 oeuf, 20 g de raisins secs. Caramel: 3 cuillerées à soupe de sucre.\nFaites bouillir le lait sucré, jetez-y le vermicelle. Au bout de dix minutes de cuisson, ajoutez-y les raisins préalablement lavés, puis les laissez macérer dans du rhum. Hors du feu, et au bout de cinq minutes, ajoutez le jaune d'oeuf, puis le blanc battu en neige. Versez dans un moule caramélisé. Mettez à four modéré pour un quart d'heure. Démoulez froid. Une sauce au rhum n'est pas indispensable, mais ajoute à l'agrément.\n\n♦ EN COCKTAILS: glacez le lait autant que possible (c'est facile si vous avez un réfrigérateur), faites-le mousser en le fouettant, ajoutez-lui tel ou tel jus de fruit, tel ou tel sirop. Et vous aurez toute une gamme de boissons dont vos convives ne se lasseront pas.\nJe vous recommande les adjonctions de jus d'orange, jus d'ananas, de sirop de groseilles, de pulpe de pêche ou de framboises fraîches (100 gr. par verre de lait).\n\n♦ EN CONFITURE: faites dissoudre 300 gr. de sucre en morceaux dans 1 litre de lait très réduit. Mettez à feu modéré et de temps en temps remuez avec une cuillère en bois jusqu'à ce que le mélange épaississe. Quand votre \"confiture\" est très épaisse sous la cuillère, versez-la dans une jatte. Et servez bien froid cet excellent dessert que les Chiliens conservent des mois sans qu'il s'altère. — Mariette.",
    "english": "MILK, SO MISUNDERSTOOD!\n\nMisunderstood, yes. Adults drink precisely too little of it: they don't think enough about how milk is just as essential to them as it is to a baby, and so they turn to other, sometimes less wholesome, sources for what milk could give them in abundance and goodness.\n\nMilk is a complete, or nearly complete, food. It supplies what your body needs daily: nitrogen (protein, just like meat); carbohydrates (milk sugar, or lactose, is one of the best kinds there is); fats (cream is the most delicious of fats); vitamins A, D, C, B1 and B2 — rare elsewhere, yet essential; minerals: phosphorus, sodium, potassium, magnesium, iron, iodine, and the wonderful, irreplaceable calcium, so hard to supply usefully through supplements.\n\nConsider that you need 1 gram of calcium a day: your muscles, teeth, bones, and nails all need it. Because of this substantial calcium content, milk or cheese can't safely be cut from the diet. While many foods are interchangeable — fish can replace meat, and vice versa — dairy simply can't be given up without real harm.\n\nNote also that butter is the only fat that supplies the body with both protein and carbohydrates.\n\nWHAT SHOULD THE DAILY RATION BE?\n\nIf you drink a liter of milk a day, that liter alone — on top of a thousand other useful things — gives you your full daily calcium requirement of 1 gram. Consider that to get that same gram from meat alone, you'd need to eat 5 kilos of it; from potatoes alone, 3 kilos.\n\nAnd yet few adults drink their liter of milk a day, except mothers-to-be and nursing mothers, for whom it's the bare minimum. Those who drink only half a liter can make up the difference by adding, daily, 50 grams of hard cheese (gruyère, cantal, or port-salut), or 2 cups of yogurt, or 3 spoonfuls of powdered milk stirred into their food.\n\nToo many people make do with a quarter-cup of milk, gulped down hastily on waking, or skip it entirely, leaving barely a \"cloud\" of it in their morning tea. Too many mothers forget that a teenager would grow better with their full liter of milk a day.\n\nWhy have Scandinavians grown 10 cm taller on average since 1925? Because their milk consumption has reached 1 liter per person per day since that time.\n\nDON'T ALWAYS DRINK IT PLAIN FROM A CUP\n\nSpread it on toast, work it into sauces and desserts, drink it in pink-and-gold cocktails, savor it as a jam!\n\n♦ ON TOAST: open a tin of sweetened condensed milk, and spread it on a slice of fresh bread — an exquisite treat for children and adults alike.\n\n♦ IN SAUCES: you know the formula for the miracle sauce, béchamel — this base sauce that becomes, depending on what you add, Mornay, Aurore, and so on: 30 g butter, 30 g flour, 2 liters water, 2 bouillon cubes, 200 g grated gruyère.\n\n♦ AS DESSERTS: countless milk-based custards and puddings have been covered before. Rice, semolina, and small pasta puddings all rely on milk too. Here are the recipes again:\nRice pudding: 100 g rice, 2 eggs, 4 tbsp sugar, 1/2 liter milk, vanilla.\nWash the rice well. Cook gently in sweetened, vanilla-infused milk. Let cool slightly, then stir in the egg yolks, then the stiffly beaten whites. Pour into a caramelized mold and bake in a water bath, in a not-too-hot oven (the egg whites would brown too fast otherwise). Unmold once cold and serve with vanilla custard, or surrounded with redcurrant jelly.\n\nChocolate semolina pudding: 1/2 liter milk, 50 g semolina, 2 large baking chocolate bars, 2 tbsp sugar.\nBoil the sweetened milk, add the chocolate (melted beforehand in 2 tbsp hot water), and finally sprinkle in the semolina in a steady rain. Stir over low heat. Once it thickens (about 10 minutes), pour into a mold rinsed with cold water, and unmold once fully cold. Serve as is, or with vanilla custard.\n\nVermicelli pudding: 1/2 liter milk, 75 g vermicelli, 1 egg, 20 g raisins. Caramel: 3 tbsp sugar.\nBoil the sweetened milk, add the vermicelli. After 10 minutes of cooking, add the raisins (pre-washed, then soaked in rum). Off the heat, after 5 minutes, add the egg yolk, then the whipped white. Pour into a caramelized mold. Bake in a moderate oven for 15 minutes. Unmold once cold. A rum sauce isn't essential, but it adds a nice touch.\n\n♦ AS COCKTAILS: chill the milk as cold as possible (easy with a fridge), whip it to make it foamy, and stir in whatever fruit juice or syrup you like. You'll have a whole range of drinks your guests will never tire of.\nI recommend adding orange juice, pineapple juice, redcurrant syrup, or peach pulp or fresh raspberries (100 g per glass of milk).\n\n♦ AS JAM: dissolve 300 g sugar cubes in 1 liter of well-reduced milk. Cook over medium heat, stirring occasionally with a wooden spoon, until it thickens. Once your \"jam\" is very thick on the spoon, pour it into a dish. Serve this excellent dessert very cold — the Chileans keep it for months without it spoiling. — Mariette",
    "note": "",
    "tags": []
  },
  {
    "slug": "nem-sot",
    "title_fr": "Salade de porc haché (Nem Sot) — Thaïlande",
    "title_en": "Minced Pork Salad (Nem Sot) — Thailand",
    "course": "starters",
    "images": [
      "images/scans/nem-sot.jpg"
    ],
    "french": "4 personnes\n400 g de porc haché, 200 g de noix de cajou, 100 g de gingembre, 8 échalotes, 4 brins de ciboulette, 4 brins de menthe, 2 c.à.c. de sucre, 2 c.à.c. de piment sec moulu, 4 c.à.s. de jus de citron, 4 c.à.s. de sauce de poisson (nuoc-mam), bassine de friture, salade verte au choix.\n\nFaites frire les noix de cajou à la grande friture jusqu'à ce qu'elles soient dorées, puis égouttez-les sur du papier de cuisine. Mettez le porc haché dans une grande poêle avec 6 c.à.s. d'eau et remuez continuellement jusqu'à cuisson de la viande et évaporation totale de l'eau. Réservez. Hachez finement les échalotes. Pelez le gingembre et râpez-en 4 c.à.c. Coupez la ciboulette en tronçons de 2 cm. Ciselez finement les feuilles de menthe. Mettez la viande dans un saladier, ajoutez les échalotes, la ciboulette, le jus de citron, le sucre, le piment en poudre, le nuoc-mam, les feuilles de menthe et les noix de cajou. Mélangez à fond. Servez froid avec des feuilles de salade.",
    "english": "Serves 4\n400 g ground pork, 200 g cashews, 100 g ginger, 8 shallots, 4 sprigs chives, 4 sprigs mint, 2 tsp sugar, 2 tsp ground dried chili, 4 tbsp lemon juice, 4 tbsp fish sauce (nuoc-mam), oil for frying, salad greens of your choice.\n\nDeep-fry the cashews until golden, then drain on paper towels. Put the ground pork in a large pan with 6 tbsp water and stir constantly until the meat is cooked and the water has fully evaporated. Set aside. Finely chop the shallots. Peel the ginger and grate 4 tsp of it. Cut the chives into 2 cm lengths. Finely shred the mint leaves. Put the meat in a bowl, add the shallots, chives, lemon juice, sugar, chili powder, fish sauce, mint leaves, and cashews. Mix thoroughly. Serve cold on lettuce leaves.",
    "note": "Part of a 2-page spread of Thai recipes.\n\nTo make kosher: ground beef or chicken works well in place of the pork.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "couscous-marocain-etapes",
    "title_fr": "Couscous à la marocaine, par étapes (Minouchka)",
    "title_en": "Moroccan Couscous, Step by Step (Minouchka)",
    "course": "mains",
    "images": [],
    "french": "Pour réaliser un couscous à la mode marocaine et avoir un goût authentique, il importe de respecter certaines règles: utiliser un couscoussier; utiliser de la semoule à couscous \"moyenne\" non précuite; ne pas mélanger les viandes; utiliser des légumes frais; ne pas abuser des épices (Ras el Hanout, poivre, safran, gingembre moulu suffisent, pas d'ail); respecter le temps de cuisson de chaque ingrédient; déguster dans le même plat.\n\nPour 6 personnes. Comptez largement 2h.\n\nPour le bouillon:\n1,5 kg d'épaule de mouton\n2 oignons blancs\n1 petit bouquet de persil plat\nUn grand verre de pois chiches secs\n4 c. à soupe d'huile neutre\nÉpices: 1 c. à café pleine de Ras el Hanout, 1 c. à café de poivre noir, 1 c. à café de gingembre, 1/2 c. à café de pistils de safran, 1 c. à café de gingembre moulu, un cube de bouillon, un petit piment doux (\"poivron piquant\") et sel.\nLégumes: 4 grosses carottes, 2 courgettes, 4 navets, 2 pommes de terre ou patates douces, 1 morceau de potiron, des fèves. Variantes possibles: chou blanc, poivron, aubergine (colore la sauce), 1-2 tomates.\nEnviron 4 L d'eau\n\nPour la semoule à couscous:\n1 kg de couscous moyen\n2 à 4 c. à soupe d'huile d'olive\n1/2 verre d'eau à température ambiante\nSel\nSmen (beurre rance, facultatif)\n\nPréparation du bouillon: faire chauffer l'huile dans la marmite du couscoussier, ajouter la viande en gros morceaux. Incorporer les oignons en grosses lamelles, le persil, les épices, mélanger. Saisir brièvement — la viande doit colorer légèrement, pas autant que pour un tajine. Ajouter les pois chiches et le piment doux. Arroser d'eau pour bien couvrir la viande. Couvrir et laisser cuire pendant que vous préparez les légumes et la semoule.\nÉplucher et couper les légumes en gros morceaux. Dès que la viande est à moitié fondante, ajouter le navet et la carotte, compter 15 minutes, puis ajouter le reste des légumes et compter encore 15 minutes. Cuire le potiron à part, dans une louche de bouillon et une louche d'eau. Goûter et rectifier l'assaisonnement. Ne pas trop mélanger le bouillon pendant la cuisson; la viande et les légumes doivent rester très cuits, fondants, mais pas réduits en purée.\n\nPréparation de la semoule: dans un très grand saladier, mettre le couscous, le sel et un filet d'huile d'olive. Mélanger du bout des doigts pour bien enduire les graines, puis arroser de peu d'eau, petit à petit, en mélangeant, jusqu'à ce que les graines se détachent, roulent, et aient un aspect humide. Placer la semoule dans le haut du couscoussier, préalablement réchauffé au-dessus du bouillon. Luter les deux parties du couscoussier (joint, ou un sac plastique roulé, ou un torchon humide) pour que la vapeur ne s'échappe pas. Couvrir ou non, au choix.\nAprès environ 15 minutes de cuisson à la vapeur, retirer le couscous dans un grand plat (une gasaâ, idéalement). Asperger d'un peu d'eau et égrainer à la cuillère en bois ou à la main, pour aérer les grains (attention, c'est très chaud). N'ajoutez l'eau que par petites poignées pour éviter de faire des boulettes de pâte. Remettre dans le haut du couscoussier et répéter l'opération 3 à 5 fois, 15 à 20 minutes à chaque fois, jusqu'à ce que le couscous soit cuit — goûter pour vérifier. À la dernière étape, ajouter 1/4 c. à café de smen ou de beurre rance pour parfumer. Arroser d'une petite louche de bouillon à chaque reprise, pour que le couscous s'imprègne des saveurs.\n\nPour le dressage: former un dôme de couscous dans un grand plat creux, avec un puits au centre. Arroser généreusement de bouillon (environ 3 louches). Placer la viande au centre, décorer de légumes variés tout autour, terminer avec le potiron et les pois chiches. Arroser à nouveau de bouillon, et servir le reste du bouillon à part, dans un bol.\nServir aussitôt, très chaud, avec de la harissa et du lait fermenté ou caillé. On sert parfois des raisins frais ou de la pastèque en accompagnement, pour rafraîchir le palais entre deux bouchées, le couscous se dégustant très chaud.",
    "english": "To make an authentically Moroccan-tasting couscous, a few rules matter: use a couscoussier (steamer pot); use \"medium,\" non-instant couscous grain; don't mix different meats in one pot; use fresh vegetables; don't overdo the spices (Ras el Hanout, pepper, saffron, and ground ginger are enough — no garlic); respect each ingredient's own cooking time; and serve everything in one communal dish.\n\nServes 6. Allow a good 2 hours.\n\nFor the broth:\n1.5 kg lamb shoulder\n2 white onions\n1 small bunch flat-leaf parsley\nA large glass of dried chickpeas\n4 tbsp neutral oil\nSpices: 1 heaping tsp Ras el Hanout, 1 tsp black pepper, 1 tsp ginger, 1/2 tsp saffron threads, 1 tsp ground ginger, a bouillon cube, a small mild chili (\"poivron piquant\") and salt.\nVegetables: 4 large carrots, 2 zucchini, 4 turnips, 2 potatoes or sweet potatoes, 1 piece of pumpkin, fava beans. Optional additions: white cabbage, bell pepper, eggplant (colors the broth), 1-2 tomatoes.\nAbout 4 liters water\n\nFor the couscous grain:\n1 kg medium couscous\n2-4 tbsp olive oil\n1/2 glass room-temperature water\nSalt\nSmen (aged, fermented butter — optional)\n\nMaking the broth: heat the oil in the couscoussier's bottom pot, add the meat in large pieces. Add the onions in thick slices, the parsley, the spices, and mix. Sear briefly — the meat should color lightly, less than for a tagine. Add the chickpeas and the mild chili. Add water to generously cover the meat. Cover and simmer while you prepare the vegetables and couscous.\nPeel and cut the vegetables into large chunks. Once the meat is half-tender, add the turnip and carrot; after 15 minutes, add the rest of the vegetables and cook 15 more minutes. Cook the pumpkin separately, in a ladle of broth and a ladle of water. Taste and adjust seasoning. Don't stir the broth too much as it cooks; the meat and vegetables should end up very tender but not mushy, and there should still be plenty of broth covering everything at the end.\n\nPreparing the couscous: in a very large bowl, combine the couscous, salt, and a generous drizzle of olive oil. Rub gently with your fingertips to coat the grains, then sprinkle in a little water at a time, mixing, until the grains separate, roll loosely, and look slightly damp. Place the grain in the top part of the couscoussier, pre-warmed over the broth. Seal the two halves of the couscoussier (with a gasket, a rolled plastic bag, or a damp cloth) so steam doesn't escape. Cover the grain or not, as you like.\nAfter about 15 minutes of steaming, tip the couscous into a large dish (traditionally a gasaâ, an earthenware bowl). Sprinkle with a little water and fluff with a wooden spoon or your hands to separate the grains (careful, it's very hot). Add water only in small amounts at a time, or you'll end up with little dough balls. Return to the top of the couscoussier and repeat this 3-5 times, steaming 15-20 minutes each round, until the couscous is fully cooked — taste to check. At the final round, stir in 1/4 tsp smen or aged butter for flavor. A small ladle of broth stirred in at each round helps the couscous soak up flavor.\n\nTo serve: mound the couscous into a dome on a large deep platter, with a well in the center. Ladle broth generously over the top (about 3 good ladles). Place the meat in the center, arrange the vegetables evenly around it, and finish with the pumpkin and chickpeas. Ladle more broth over everything, and serve the rest of the broth in a bowl on the side.\nServe right away, very hot, with harissa and fermented or soured milk. Fresh grapes or cut watermelon are sometimes served alongside, to refresh the palate between bites, since couscous is eaten piping hot.",
    "note": "To make kosher: the smen (fermented butter) is already marked optional — leave it out, or use a parve margarine or extra olive oil in its place.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "omelette-marocaine-broda",
    "title_fr": "Omelette marocaine (Broda)",
    "title_en": "Moroccan Omelet (Broda)",
    "course": "mains",
    "images": [
      "images/scans/omelette-marocaine-broda.jpg"
    ],
    "french": "1 kg pommes de terre, cuites à l'eau, écrasées à la fourchette\n1/2 boîte de petits pois, ou frais\nail écrasé, oignon, persil\ncornichons au vinaigre, coupés\ncarottes très cuites, avec les pommes de terre\nsel, poivre\n8 oeufs entiers\n+ citron mariné ou jus d'1/2 citron\n\nMélanger. Mettre dans un plat pour cuire le mélange.\nCouvrir de papier aluminium.\nSortir de temps en temps pour que ça n'attache pas, en remuant.\nCuire au four, 210°, 1 heure.",
    "english": "1 kg potatoes, boiled, mashed with a fork\n1/2 tin peas, or fresh\ncrushed garlic, onion, parsley\npickles in vinegar, chopped\nvery well-cooked carrots, cooked with the potatoes\nsalt, pepper\n8 whole eggs\n+ marinated lemon or juice of 1/2 lemon\n\nMix together. Put in a dish to bake.\nCover with aluminum foil.\nTake it out from time to time so it doesn't stick, stirring.\nBake in the oven, 210°C, for 1 hour.",
    "note": "Shares a page with Assouline's Chocolate Cake.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "gateau-pommes-claudy",
    "title_fr": "Gâteau pommes (Mme Claudy)",
    "title_en": "Mrs. Claudy's Apple Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-pommes-claudy.jpg"
    ],
    "french": "125 g beurre mou\n1 tasse à thé sucre\n2 oeufs\n1 tasse farine\n1/2 paquet levure\n\nMettre une couche de pâte, une couche de pommes, et ainsi de suite.\n30 à 40 minutes, à 200°.",
    "english": "125 g soft butter\n1 teacup sugar\n2 eggs\n1 teacup flour\n1/2 packet baking powder\n\nLayer: one layer of batter, one layer of apples, and so on.\nBake 30-40 minutes at 200°C.",
    "note": "Shares a page with Dorothy's Pumpkin Fritters.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "souffle-fromage-nana",
    "title_fr": "Soufflé au fromage (Nana)",
    "title_en": "Nana's Cheese Soufflé",
    "course": "mains",
    "images": [
      "images/scans/souffle-fromage-nana.jpg"
    ],
    "french": "Pour 6 personnes:\nRoux: 60 g beurre + 80 g farine, dans une casserole.\nMouiller avec 1/2 litre de lait, mélanger.\nSaler légèrement.\nAprès un bouillon, retirer du feu.\nCasser 4 oeufs, l'un après l'autre.\nMonter les blancs en neige.\nIncorporer 150 g de fromage râpé\n+ les blancs.\nVerser dans un plat beurré, au four, 40 minutes.\n\nAutre version: identique, mais remplacer le fromage par du foie moulu.",
    "english": "Serves 6:\nRoux: 60 g butter + 80 g flour, in a saucepan.\nMoisten with 1/2 liter milk, mix.\nSalt lightly.\nOnce it's had one boil, remove from heat.\nAdd 4 eggs, one at a time.\nWhip the egg whites to stiff peaks.\nFold in 150 g grated cheese\n+ the whites.\nPour into a buttered dish, bake 40 minutes.\n\nAnother version: the same, but swap the cheese for ground liver.",
    "note": "Shares a page with a waffle (gaufres) recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "navarin-mouton",
    "title_fr": "Navarin (poitrine ou collet de mouton)",
    "title_en": "Navarin (Lamb Breast or Neck Stew)",
    "course": "mains",
    "images": [
      "images/scans/navarin-mouton.jpg"
    ],
    "french": "Faire revenir la viande, puis\nfaire un roux blond.\nAjouter des navets rôtis (10 min)\n+ la viande + 1 pomme reinette.",
    "english": "Brown the meat, then\nmake a blond roux.\nAdd roasted turnips (10 min)\n+ the meat + 1 reinette apple.",
    "note": "Shares a page with Veal Lights and Tripe.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "gateau-chocolat-noblex",
    "title_fr": "Gâteau chocolat Noblex (Mi-Bloch)",
    "title_en": "Noblex Chocolate Cake (Mi-Bloch)",
    "course": "desserts",
    "images": [
      "images/scans/gateau-chocolat-noblex.jpg"
    ],
    "french": "Deux dosages, pour deux tailles de moule:\n\nVersion 1: 160 g chocolat, 125 g beurre ou 1 cuillère huile, 3 cuillères à soupe farine, 125 g sucre, 3 cuillères à café, 5 oeufs (blancs en neige)\n\nVersion 2: 200 g chocolat, 2 cuillères huile, 4 cuillères farine, 200 g sucre, 4 cuillères à café, 6 oeufs\n\nCuire 20 minutes, four 5 1/2 - 6 (150-160°)",
    "english": "Two sets of quantities, for two pan sizes:\n\nVersion 1: 160 g chocolate, 125 g butter or 1 tbsp oil, 3 tbsp flour, 125 g sugar, 3 tsp (coffee or vanilla), 5 eggs (whites whipped to stiff peaks)\n\nVersion 2: 200 g chocolate, 2 tbsp oil, 4 tbsp flour, 200 g sugar, 4 tsp, 6 eggs\n\nBake 20 minutes, oven setting 5 1/2-6 (150-160°C)",
    "note": "Shares a page with the Punch Dial recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "gateau-orange",
    "title_fr": "Gâteau à l'orange",
    "title_en": "Orange Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-orange.jpg"
    ],
    "french": "170 g farine\n170 g beurre\n115 g sucre\n3 oeufs, 3 oranges, 1 paquet levure\n\nBattre le beurre avec le sucre. Ajouter le zeste des 3 oranges, la levure et la farine.\nMettre dans un moule à tarte, au four.\nUne fois froid, ajouter le jus des oranges, le sucre et un petit verre de rhum.\nN.B.: on peut remplacer par du citron.",
    "english": "170 g flour\n170 g butter\n115 g sugar\n3 eggs, 3 oranges, 1 packet baking powder\n\nBeat the butter with the sugar. Add the zest of the 3 oranges, the baking powder and the flour.\nPour into a tart pan and bake.\nOnce cool, add the orange juice, sugar, and a small glass of rum.\nN.B.: you can use lemon instead.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "salade-oranges-oignon-cumin",
    "title_fr": "Salade d'oranges à l'oignon frais et au cumin",
    "title_en": "Orange Salad with Spring Onion and Cumin",
    "course": "starters",
    "images": [
      "images/scans/salade-oranges-oignon-cumin.jpg"
    ],
    "french": "Pour 6 personnes:\n6 oranges non traitées\n3 oignons frais (oignon \"provençal\" à peau blanche, pas oignon jaune)\n6 brins d'aneth, si possible fleuris (fin d'été)\n6 c.à.s. d'huile d'olive très fruitée\n1 c.à.s. de graines de cumin, poivre du moulin\n\nPeler les oranges à vif et les couper en tranches fines; couper finement l'oignon en rondelles et effeuiller l'aneth (séparer les anneaux des oignons en rouelles).\nRanger les oranges dans un plat creux; les parsemer de rondelles d'oignons; saupoudrer de cumin, de brindilles d'aneth, et d'un filet d'huile d'olive. Procéder par couches successives.\nLaisser mariner au frais pendant 12 heures et donner quelques tours de poivre du moulin au moment de servir (très important, cela rehausse le goût).\n\nNotes du chef:\n- plat délicieux; important de respecter le temps de marinade: minimum 12 heures, maximum 24 heures: l'huile va partiellement pénétrer l'oignon; l'acidité de l'agrume va rendre un peu de jus: liquide acide + huile = \"vinaigrette\"; mais après 24 heures, il existe un début de fermentation, et les goûts et les textures sont altérés.\n- l'aneth fleuri donne plus d'agressivité au plat.\n- dans un plat: verser d'abord un filet d'huile pour isoler; puis cumin, oignon, aneth, puis les oranges à peine chevauchées, filet d'huile... Utiliser un plat en porcelaine, fonte émaillée, ou terre avec intérieur verni. Terminer par l'oignon et l'aneth.\n- pas de sel ni de poivre, le plat se suffit à lui-même; seulement un petit tour de poivre au moment de servir.\n- filmer et réserver au frais.",
    "english": "Serves 6:\n6 untreated (unwaxed) oranges\n3 spring onions (\"Provençal\" white-skinned onion, not yellow onion)\n6 sprigs dill, flowering if possible (late summer)\n6 tbsp fruity olive oil\n1 tbsp cumin seeds, ground pepper\n\nPeel the oranges down to the flesh and slice thinly; thinly slice the onion into rings and pick the dill fronds (separate the onion rings).\nArrange the oranges in a shallow dish; scatter with onion rings; sprinkle with cumin, dill, and a drizzle of olive oil. Build up in layers.\nLet marinate, chilled, for 12 hours, and add a few turns of the pepper mill just before serving (very important — it brings out the flavor).\n\nChef's notes:\n- a delicious dish; it's important to respect the marinating time: 12 hours minimum, 24 hours maximum. The oil partly penetrates the onion; the citrus's acidity releases a little juice, forming an acid-and-oil \"vinaigrette\"; but after 24 hours, fermentation begins and the flavors and textures suffer.\n- flowering dill gives the dish more bite.\n- in the dish: first drizzle a little oil as a barrier; then cumin, onion, dill, then the oranges just overlapping, another drizzle of oil... Use a porcelain, enameled cast-iron, or glazed earthenware dish. Finish with the onion and dill.\n- no salt or pepper during marinating — the dish doesn't need it; just a light turn of the pepper mill at serving time.\n- cover and keep chilled.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "gateau-orbey",
    "title_fr": "Gâteau Orbey et crème anglaise Orbey",
    "title_en": "Orbey Cake with Orbey Custard",
    "course": "desserts",
    "images": [
      "images/scans/gateau-orbey.jpg"
    ],
    "french": "175 g amandes grillées fines\n175 g beurre\n150 g sucre en poudre\nTravailler 1/2 heure.\n\nCrème anglaise (Orbey)\nPrélever 4-5 cuillères qu'on mélange à l'amalgame\net l'on travaille encore 1/4 h.\nTapisser le moule et mettre au frigidaire.\nServir chacun à part.",
    "english": "175 g finely ground toasted almonds\n175 g butter\n150 g granulated sugar\nWork together for 1/2 hour.\n\nOrbey Custard (Crème Anglaise)\nTake 4-5 spoonfuls and mix into the almond paste,\nthen work for another 1/4 hour.\nLine the mold with it and refrigerate.\nServe each one separately.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "betteraves-orientale",
    "title_fr": "Betteraves à l'orientale (Maroc)",
    "title_en": "Oriental-Style Beets (Morocco)",
    "course": "starters",
    "images": [
      "images/scans/betteraves-orientale.jpg"
    ],
    "french": "Pour 6 personnes:\n2 betteraves rouges\n3 oranges\n1 oignon doux\n2 cuillerées à soupe d'huile d'olive\n1 bouquet de menthe fraîche\n1 pincée de cannelle\nsel, poivre\nPréparation: 5 mn. Pas de cuisson.\n\nPelez les betteraves et coupez-les en dés. Pressez le jus d'une orange. Pelez à vif les deux autres, détachez-les délicatement en quartiers. Émincez l'oignon en fines rondelles, ajoutez-les aux betteraves, saupoudrez de cannelle. Mélangez. Ajoutez le jus d'orange et l'huile d'olive. Salez, poivrez. Mélangez à nouveau. Décorez avec les quartiers d'orange et des feuilles de menthe. Servez frais.\n\nNotre conseil: pour plus d'exotisme, vous pouvez ajouter une cuillerée à soupe de fleur d'oranger à la sauce.",
    "english": "Serves 6:\n2 red beets\n3 oranges\n1 sweet onion\n2 tbsp olive oil\n1 bunch fresh mint\n1 pinch cinnamon\nsalt, pepper\nPrep: 5 min. No cooking.\n\nPeel the beets and dice them. Juice one orange. Peel the other two down to the flesh and gently separate into segments. Thinly slice the onion, add it to the beets, sprinkle with cinnamon. Mix. Add the orange juice and olive oil. Salt, pepper. Mix again. Garnish with the orange segments and mint leaves. Serve chilled.\n\nOur tip: for extra flair, you can add a tablespoon of orange blossom water to the dressing.",
    "note": "Shares a page with a Tuna Marmitako recipe.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "carottes-orientale",
    "title_fr": "Carottes à l'orientale",
    "title_en": "Oriental-Style Carrots",
    "course": "starters",
    "images": [
      "images/scans/carottes-orientale.jpg"
    ],
    "french": "(Hors d'oeuvre)\nCuire les carottes, puis les couper en rondelles.\nLes déposer dans une coupe.\nAssaisonnement: ail, persil, jus de citron et poivre noir, huile, paprika, à volonté; remuer le tout en servant la coupe.\nÀ consommer tièdes ou froides.",
    "english": "(Starter)\nCook the carrots, then slice into rounds.\nPlace in a serving bowl.\nDressing: garlic, parsley, lemon juice and black pepper, oil, paprika, to taste; toss it all together just before serving.\nServe warm or cold.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "osso-buco",
    "title_fr": "Osso Buco",
    "title_en": "Osso Buco",
    "course": "mains",
    "images": [
      "images/scans/osso-buco.jpg"
    ],
    "french": "Faire revenir la viande après l'avoir passée dans la farine,\n+ tomates + oignon émincé.\nLaisser mijoter.",
    "english": "Brown the meat after dusting it in flour,\n+ tomatoes + sliced onion.\nLet it simmer.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "paella",
    "title_fr": "Paëlla",
    "title_en": "Paella",
    "course": "mains",
    "images": [
      "images/scans/paella-1.jpg",
      "images/scans/paella-2.jpg",
      "images/scans/paella-3.jpg"
    ],
    "french": "Paëlla (10 personnes)\n- 1 lapin (coupé en morceaux)\n- 1 calamar ou 2 (bien nettoyé et coupé)\n- Quelques moules ou une boîte\n- 700 g d'agneau (petits morceaux)\n- 700 g porc (petits morceaux)\n- 1 poivron, 3 tomates, haricots verts, pommes de terre\n- 10 langoustines, chorizo\n- 1 boîte safran, citrons\n\nFaire revenir dans l'huile d'olive le lapin, l'agneau, le porc et le calamar. Une fois le tout revenu, ajouter les oignons coupés et le poivron, et poivre (et chorizo), sel. Une fois le poivron presque cuit, ajouter les 3 tomates épluchées et tourner jusqu'à ce que les tomates soient fondues →\n\nEnsuite rajouter de l'eau salée et mettre environ 3 ou 400 g de haricots verts. Une fois les haricots cuits (il faut goûter et tourner presque tout le temps pour que cela n'attache pas), remettre de l'eau, et une fois que l'eau est [absorbée] jeter le riz et remettre de l'eau si nécessaire. Ensuite, une fois le riz cuit (il faut que toute l'eau soit absorbée), rajouter petits pois, fonds d'artichauts, moules et safran + jus de citron. Cuire les langoustines dans un court-bouillon 10 minutes et les remettre dessus.\n\nNe pas jeter le riz tant que les invités ne sont pas là, car la paella n'attend pas.\nBon appétit.",
    "english": "Paella (serves 10)\n- 1 rabbit, cut into pieces\n- 1 or 2 squid, well cleaned and cut\n- A few mussels, or one tin\n- 700 g lamb, small pieces\n- 700 g pork, small pieces\n- 1 bell pepper, 3 tomatoes, green beans, potatoes\n- 10 langoustines, chorizo\n- 1 tin saffron, lemons\n\nBrown the rabbit, lamb, pork, and squid in olive oil. Once everything is browned, add the chopped onions and bell pepper, pepper (and chorizo), and salt. Once the pepper is nearly cooked, add the 3 peeled tomatoes and stir until the tomatoes have broken down →\n\nThen add salted water and about 300-400 g of green beans. Once the beans are cooked (taste them, and stir almost constantly so nothing sticks), top up with water; once the water has been absorbed, add the rice and top up with water again if needed. Once the rice is cooked (all the water should be absorbed), add peas, artichoke hearts, mussels and saffron, plus lemon juice. Cook the langoustines in a court-bouillon for 10 minutes and place them on top.\n\nDon't add the rice until the guests have arrived, because paella doesn't wait.\nBon appétit!",
    "note": "Pieced together from three scanned pages.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "gateau-chocolat-pessah",
    "title_fr": "Gâteau chocolat Pessah",
    "title_en": "Passover Chocolate Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-chocolat-pessah.jpg"
    ],
    "french": "1/2 livre chocolat\n1/2 livre sucre en poudre\n1/2 livre amandes pelées\n6 oeufs\nCuire 3/4 heure à feu doux.",
    "english": "1/2 lb chocolate\n1/2 lb powdered sugar\n1/2 lb peeled almonds\n6 eggs\nBake 3/4 hour in a low oven.",
    "note": "Shares a page with a Matzo Meal Cake and Passover Macaroons.",
    "tags": [
      "parve",
      "passover"
    ]
  },
  {
    "slug": "macaron-pessah",
    "title_fr": "Macaron Pessah (Germaine Nayer)",
    "title_en": "Passover Macaroons (Germaine Nayer)",
    "course": "desserts",
    "images": [
      "images/scans/macaron-pessah.jpg"
    ],
    "french": "3 blancs d'oeufs, battus en neige ferme\n1/2 livre amandes moulues\n1/2 livre semoule, à verser progressivement en fouettant les blancs\nquelques gouttes de citron dans les blancs\n\nAjouter les amandes → pâte épaisse à laisser reposer au frigo.",
    "english": "3 egg whites, whipped to stiff peaks\n1/2 lb ground almonds\n1/2 lb semolina, added gradually while whisking the whites\na few drops of lemon in the whites\n\nAdd the almonds to form a thick paste, and let rest in the fridge.",
    "note": "Shares a page with a Passover Chocolate Cake and a Matzo Meal Cake.",
    "tags": [
      "parve",
      "passover"
    ]
  },
  {
    "slug": "pain-pessah",
    "title_fr": "Pain Pessah",
    "title_en": "Passover Rolls",
    "course": "breads",
    "images": [
      "images/scans/pain-pessah.jpg"
    ],
    "french": "1 verre d'eau\n1/2 verre huile    } Bouillir ensemble\n1 cuillère à café sel\n+ 1 verre et quart farine de Matzoh\nLaisser bouillir 2 à 3 minutes sur le feu\nLaisser refroidir\nAjouter 4 oeufs entiers, 1 à 1\nFariner les boules en roulant à la main,\nles mettre sur la plaque du four\nFaire cuire: 1er four 180°, 2ème four 160°\n(c'est une pâte à choux)\nIl faut que les boules soient dorées...",
    "english": "1 glass water\n1/2 glass oil    } boil together\n1 tsp salt\n+ 1 1/4 glasses matzo meal\nLet it boil 2-3 minutes over the heat\nLet cool\nAdd 4 whole eggs, one at a time\nShape into balls by rolling in floured hands,\nplace them on the baking sheet\nBake: first at 180°C, then at 160°C\n(it's a choux pastry method)\nThe rolls should come out golden...",
    "note": "",
    "tags": [
      "parve",
      "passover"
    ]
  },
  {
    "slug": "pavlova-isa",
    "title_fr": "Pavlova (Isa)",
    "title_en": "Pavlova (Isa)",
    "course": "desserts",
    "images": [
      "images/scans/pavlova-isa.jpg"
    ],
    "french": "Pour 10 personnes:\n6 blancs d'oeufs\n340 g sucre\n1 cuillère à café extrait de vanille\n1 cuillère à soupe maïzena\n1 cuillère à café vinaigre\nGarniture: 50 cl crème fouettée + sucre, fruits.\n\n1) Battre les blancs en neige ferme. Ajouter le sucre jusqu'à dissolution. + vanille + maïzena + vinaigre.\n2) Four 120°C (thermostat 2). Façonner un socle sur du papier aluminium beurré.\n3) Four 1h à 1h15, jusqu'à ce que la meringue soit sèche.\n4) Laisser refroidir.\n5) Battre la crème fouettée longuement.\n6) Décorer.",
    "english": "Serves 10:\n6 egg whites\n340 g sugar\n1 tsp vanilla extract\n1 tbsp cornstarch\n1 tsp vinegar\nTopping: 50 cl (500 ml) whipped cream + sugar, fruit.\n\n1) Whip the egg whites to stiff peaks. Add the sugar until dissolved. + vanilla + cornstarch + vinegar.\n2) Oven at 120°C (gas mark 2). Shape a base on buttered foil.\n3) Bake 1 to 1h15, until the meringue is dry.\n4) Let cool.\n5) Whip the cream well.\n6) Decorate.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "poivrons-et-viande",
    "title_fr": "Poivrons et viande (Frau Bauermann, Allemagne)",
    "title_en": "Peppers and Meat (Frau Bauermann, Germany)",
    "course": "mains",
    "images": [
      "images/scans/poivrons-et-viande.jpg"
    ],
    "french": "Préparation: viande hachée, tomates, poivrons coupés fin.\nFaire cuire la viande hachée dans une poêle (+ ail).\nFaire cuire séparément, dans une cocotte: poivrons rouges et verts + tomates,\najouter: herbes de Provence, poivre, sel.\nUne fois cuits (ou presque), ajouter la viande, cuite, même froide.\nLaisser mijoter.\nServir.\n\n* Pour compléter: faire cuire du riz (blanc ou complet) pour servir avec.\n\nProvenance: Allemagne. Recette de Frau Bauermann.",
    "english": "Prep: ground meat, tomatoes, finely chopped peppers.\nCook the ground meat in a pan (+ garlic).\nSeparately, cook in a Dutch oven: red and green peppers + tomatoes,\nadd: herbes de Provence, pepper, salt.\nOnce cooked (or nearly), add the meat, cooked, even if cold.\nLet simmer.\nServe.\n\n* To round out the meal: cook rice (white or brown) to serve alongside.\n\nOrigin: Germany. Frau Bauermann's recipe.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "poivrons-sauce-moutarde",
    "title_fr": "Poivrons sauce moutarde",
    "title_en": "Peppers in Mustard Sauce",
    "course": "starters",
    "images": [
      "images/scans/poivrons-sauce-moutarde.jpg"
    ],
    "french": "Poivrons passés au four pour pouvoir les éplucher.\nCouper en lamelles.\nMettre dans un saladier.\nFaire une rémoulade et la verser dessus.",
    "english": "Roast the peppers in the oven so they can be peeled.\nCut into strips.\nPut in a salad bowl.\nMake a rémoulade (mustardy dressing) and pour it over.",
    "note": "Shares a page with Tomatoes Provençal, Purées, and Piperade.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "souffle-ananas",
    "title_fr": "Soufflé ananas",
    "title_en": "Pineapple Soufflé",
    "course": "desserts",
    "images": [
      "images/scans/souffle-ananas.jpg"
    ],
    "french": "Pour 8 personnes:\n1 boîte 1/4 d'ananas, 6 oeufs\n1 grosse cuillère de farine, 250 g sucre\n1 noix de beurre frais, 1 citron pressé\n\n1) Passer 3 rondelles d'ananas en purée → jus\n2) + le jus de la boîte + le sucre\nFaire cuire 5 minutes dans une casserole.\n3) Couper le reste de l'ananas en losanges.\n4) Battre les oeufs avec la farine + le beurre + le jus de citron.\nPuis ajouter le mélange ① une fois refroidi aux étapes 3 et 4.\nMettre le tout dans un moule à charlotte caramélisé, cuire au bain-marie 3/4 heure.\nDémouler, servir froid avec de la crème anglaise par-dessus.",
    "english": "Serves 8:\n1 1/4 tin pineapple, 6 eggs\n1 heaping tbsp flour, 250 g sugar\n1 knob fresh butter, 1 lemon, juiced\n\n1) Purée 3 pineapple rings → juice\n2) + the juice from the tin + the sugar\nCook 5 minutes in a saucepan.\n3) Cut the rest of the pineapple into diamonds.\n4) Beat the eggs with the flour + butter + lemon juice.\nThen fold in mixture ① once cooled, into steps 3 and 4.\nPut it all into a caramelized charlotte mold, cook in a water bath for 3/4 hour.\nUnmold, serve cold with crème anglaise on top.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "piperade",
    "title_fr": "Piperade",
    "title_en": "Piperade",
    "course": "mains",
    "images": [
      "images/scans/piperade.jpg"
    ],
    "french": "Faire cuire les poivrons dans l'huile, 1/4 heure.\nCuire du riz dans la même huile + eau.\nFaire des oeufs brouillés.\nMélanger le tout.",
    "english": "Cook the peppers in oil, 15 minutes.\nCook rice in the same oil + water.\nMake scrambled eggs.\nMix it all together.",
    "note": "Shares a page with Tomatoes Provençal, Purées, and Peppers in Mustard Sauce.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "oeufs-poches-crecy",
    "title_fr": "Oeufs pochés Crécy",
    "title_en": "Poached Eggs Crécy (with Carrot Purée)",
    "course": "mains",
    "images": [
      "images/scans/oeufs-poches-crecy.jpg"
    ],
    "french": "Pour 3 ou 6 personnes. Préparation: 20 minutes. Cuisson: 35 minutes.\n\nÉléments de base: 6 oeufs, 300 g de carottes, 40 g de beurre, 2 oignons, 1 petit bol de béchamel, 1 oeuf, 3 cuillerées de crème fraîche, sel, poivre, vinaigre, muscade.\n\nPeler et couper les carottes puis les oignons. Les faire cuire à l'eau salée environ 30 minutes, jusqu'à ce qu'ils soient bien tendres. Les égoutter et les passer au mixer ou au presse-purée. Assaisonner de sel, poivre, muscade et ajouter le beurre.\nPendant la cuisson des carottes, faire la béchamel. Hors du feu, y ajouter la crème fraîche et le jaune d'oeuf.\nFaire chauffer de l'eau additionnée d'une cuillerée de vinaigre par litre. Quand l'eau est frémissante, y glisser les oeufs doucement, un à un. Laisser frémir trois minutes; retirer avec une écumoire et sécher sur un torchon. Dans un plat chaud, faire un lit de purée de carottes; dresser les oeufs dessus et napper avec la béchamel à la crème.\nTous les éléments, en particulier la purée de carottes et la béchamel, doivent être tenus très chauds afin qu'on ne soit pas obligé de réchauffer le plat au four après dressage, ce qui pourrait modifier le degré de cuisson des oeufs.\nOn peut remplacer les oeufs pochés par des oeufs mollets.\n\nLes petits trucs de la cuisinière: en entrée, on comptera un oeuf par personne; en plat principal, deux oeufs (d'où la différence dans l'indication du nombre de personnes). Il est préférable de casser les oeufs dans une soucoupe afin de les glisser plus facilement dans l'eau, très près de la surface. À moins que la casserole ne soit très large, mieux vaut n'en cuire que trois à la fois.",
    "english": "Serves 3 (as a main) or 6 (as a starter). Prep: 20 minutes. Cooking: 35 minutes.\n\nBase ingredients: 6 eggs, 300 g carrots, 40 g butter, 2 onions, 1 small bowl béchamel sauce, 1 egg, 3 spoonfuls crème fraîche, salt, pepper, vinegar, nutmeg.\n\nPeel and chop the carrots, then the onions. Cook in salted water for about 30 minutes, until very tender. Drain and purée in a blender or food mill. Season with salt, pepper, nutmeg, and stir in the butter.\nWhile the carrots cook, make the béchamel. Off the heat, stir in the crème fraîche and egg yolk.\nHeat water with a spoonful of vinegar per liter. Once simmering, slide in the eggs gently, one at a time. Let poach three minutes; lift out with a slotted spoon and dry on a cloth. In a warm dish, make a bed of carrot purée; arrange the eggs on top and coat with the creamy béchamel.\nEverything — especially the carrot purée and béchamel — should be kept very hot, so the dish doesn't need reheating in the oven after plating, which could overcook the eggs.\nSoft-boiled eggs can be used instead of poached.\n\nThe cook's little tricks: as a starter, count one egg per person; as a main course, two eggs (hence the range in servings). It's best to crack the eggs into a saucer first, so they slide into the water more easily, close to the surface. Unless your pot is very wide, it's better to poach only three eggs at a time.",
    "note": "",
    "tags": []
  },
  {
    "slug": "pot-au-feu",
    "title_fr": "Pot au feu",
    "title_en": "Pot-au-Feu (Beef and Vegetable Stew)",
    "course": "mains",
    "images": [
      "images/scans/pot-au-feu.jpg"
    ],
    "french": "1 kg boeuf en jarret + os à moelle.\nMettre dans l'eau froide après avoir paré la viande.\nÉcumer, cuire doucement.\nAjouter poireaux, oignons, ail, navets,\npommes de terre, carottes.\nCuire 1h1/2 en cocotte-minute.",
    "english": "1 kg beef shank + marrow bone.\nPut in cold water after trimming the meat.\nSkim, and simmer gently.\nAdd leeks, onions, garlic, turnips,\npotatoes, carrots.\nCook 1.5 hours in a pressure cooker.",
    "note": "Shares a page with the Choucroute (sauerkraut) recipe.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "omelette-pommes-terre",
    "title_fr": "Omelette aux pommes de terre (\"Marlshode\")",
    "title_en": "Potato Omelet (\"Marlshode\")",
    "course": "mains",
    "images": [
      "images/scans/omelette-pommes-terre.jpg"
    ],
    "french": "600 g de pommes de terre\n8 oeufs\n3 cuillères d'huile\n3 gousses d'ail, persil, poivre, sel, laurier, thym\n\nPommes de terre cuites à la vapeur (épluchées et coupées en 2).\nÉcrasez-les dans un saladier avec une fourchette. Ajouter ail, persil et les oeufs légèrement battus (sel, poivre). Assaisonner.\nFaites chauffer sur le gaz une cocotte en fonte, à l'huile, à feu doux.\nQuand la cocotte est bien chaude, verser la préparation, et laisser cuire 5 mn à feu moyen.\nPuis placer la cocotte dans le four chaud pendant 20 à 30 mn, à thermostat 7, et surveiller.\nSe sert avec de la salade (tiède ou froide).\n\nVariante: viande hachée et oignons peuvent remplacer les pommes de terre.",
    "english": "600 g potatoes\n8 eggs\n3 tbsp oil\n3 cloves garlic, parsley, pepper, salt, bay leaf, thyme\n\nSteam the potatoes (peeled and halved).\nMash them in a bowl with a fork. Add the garlic, parsley, and the lightly beaten eggs (salt, pepper). Season.\nHeat a cast-iron pot on the stove with the oil, over low heat.\nOnce the pot is very hot, pour in the mixture and cook 5 minutes over medium heat.\nThen place the pot in a hot oven for 20-30 minutes, gas mark 7, and keep an eye on it.\nServe with salad (warm or cold).\n\nVariation: ground meat and onions can replace the potatoes.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "pruneaux-eau-de-vie",
    "title_fr": "Pruneaux à l'eau de vie",
    "title_en": "Prunes in Brandy",
    "course": "desserts",
    "images": [
      "images/scans/pruneaux-eau-de-vie.jpg"
    ],
    "french": "Gros pruneaux\n1 litre eau-de-vie de bonne qualité\nLes égoutter après séchage.\nMettre dans un bocal: sucre + eau-de-vie + les fruits.",
    "english": "Large prunes\n1 liter good-quality brandy\nDrain them once dried.\nPut in a jar: sugar + brandy + the fruit.",
    "note": "Shares a page with an Apple Clafoutis recipe and a Fruit Sorbet.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "puits-damour",
    "title_fr": "Puits d'amour",
    "title_en": "Puits d'Amour (Caramel-Topped Pastry)",
    "course": "desserts",
    "images": [
      "images/scans/puits-damour.jpg"
    ],
    "french": "Pour 6 personnes:\n200 g de pâte feuilletée surgelée\n1/2 litre de lait\n3 oeufs\n225 g de sucre\n35 g de farine\n25 g de Maïzena\n1 paquet de sucre vanillé\n1 cuillerée à soupe de rhum\nPréparation: 20 mn. Cuisson de la pâte: 20 mn. Cuisson de la crème: 10 mn.\n\nFaites dégeler la pâte dans le bas du réfrigérateur, étendez-la très finement sur 4 mm d'épaisseur. Découpez dans la pâte un carré de 25 cm, chiquetez tout autour. Posez-le sur une tôle beurrée. Piquez la pâte à la fourchette. Recouvrez-la d'un carré de papier sulfurisé, étalez dessus une couche de haricots secs. Enfournez à four très chaud 280° (9 au thermostat) pendant 15 mn. Retirez papier et haricots, remettez au four 5 mn. Sortez le gâteau, laissez-le refroidir sur une grille. Préparez la crème pâtissière: dans une terrine, mettez 1 oeuf entier, 2 jaunes et 125 g de sucre et fouettez jusqu'à ce que le sucre soit fondu, ajoutez la farine tamisée et la Maïzena, mélangez sans faire de grumeaux, continuez de fouetter jusqu'à ce que le mélange soit crémeux et blanchisse. Faites bouillir le lait avec le sucre vanillé, versez-le dans le mélange en continuant à fouetter. Remettez sur le feu, amenez à ébullition en remuant à la cuiller en bois pour que le fond n'attache pas. Après deux ou trois gros bouillons, parfumez au rhum, laissez refroidir. Étendez la crème sur le gâteau à l'aide d'une spatule, jusqu'à 1 mm des bords. Saupoudrez largement la crème du reste de sucre, chauffez sur la flamme un fer à repasser en fonte, et appliquez-le sur le sucre pour le caraméliser.\n\nNotre conseil: chiqueter, c'est faire des entailles au couteau sur l'épaisseur de la pâte.",
    "english": "Serves 6:\n200 g frozen puff pastry\n1/2 liter milk\n3 eggs\n225 g sugar\n35 g flour\n25 g cornstarch\n1 packet vanilla sugar\n1 tbsp rum\nPrep: 20 min. Baking the pastry: 20 min. Cooking the custard: 10 min.\n\nThaw the pastry in the bottom of the fridge, and roll it out very thinly, to 4 mm. Cut a 25 cm square from the dough, and scallop the edges with a knife. Place it on a buttered baking sheet. Prick the dough with a fork. Cover with a square of parchment paper, and spread a layer of dried beans on top. Bake in a very hot oven, 280°C (gas mark 9), for 15 minutes. Remove the paper and beans, and bake 5 more minutes. Remove and let cool on a rack. Make the pastry cream: in a bowl, combine 1 whole egg, 2 yolks, and 125 g sugar, and whisk until the sugar dissolves; add the sifted flour and cornstarch, mix without lumps, and keep whisking until creamy and pale. Boil the milk with the vanilla sugar, then pour it into the mixture while whisking. Return to the heat, bring to a boil, stirring with a wooden spoon so it doesn't stick. After two or three good boils, flavor with rum, and let cool. Spread the cream over the pastry with a spatula, to within 1 mm of the edges. Generously dust the cream with the rest of the sugar, heat a cast-iron flat-iron over a flame, and press it onto the sugar to caramelize it.\n\nOur tip: scalloping means cutting small notches around the edge of the dough with a knife.",
    "note": "Shares a page with Quindim.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "punch-dial",
    "title_fr": "Punch Dial",
    "title_en": "Punch \"Dial\"",
    "course": "drinks",
    "images": [
      "images/scans/punch-dial.jpg"
    ],
    "french": "3 verres/pers. 30 personnes\n1/2 bouteille Grand Marnier ou/et Cointreau\n2 bouteilles Gin (ordinaire)\n4 litres jus d'ananas\n4 litres jus d'orange\n± sirop de sucre de canne",
    "english": "3 glasses per person. Serves 30.\n1/2 bottle Grand Marnier and/or Cointreau\n2 bottles gin (ordinary)\n4 liters pineapple juice\n4 liters orange juice\nCane sugar syrup, to taste",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "gateau-quatre-quarts",
    "title_fr": "Gâteau 4/4 (Quatre-Quarts)",
    "title_en": "Quatre-Quarts (Pound Cake)",
    "course": "desserts",
    "images": [
      "images/scans/gateau-quatre-quarts.jpg"
    ],
    "french": "4 oeufs\n1/2 livre beurre fondu\n1/2 livre sucre\n1/2 livre farine\n1 cuillère de rhum\n+ un peu de levure\nFour pas très chaud.",
    "english": "4 eggs\n1/2 lb melted butter\n1/2 lb sugar\n1/2 lb flour\n1 spoonful rum\n+ a little baking powder\nBake in a not-too-hot oven.",
    "note": "Shares a page with a Floating Islands (Île Flottante) recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "pate-gelee-coing",
    "title_fr": "Pâte et gelée de coing (tarte Claudine)",
    "title_en": "Quince Paste and Jelly (Claudine's Tart)",
    "course": "preserves",
    "images": [
      "images/scans/pate-gelee-coing.jpg"
    ],
    "french": "Peler les coings, couper en 4, enlever le coeur,\nmettre dans l'eau froide.\nDans une bassine, cuire dans l'eau à feu doux jusqu'à ce qu'ils soient mous.\nVerser sur un tamis, sans presser.\nLe jus devient la gelée (le cuire à part, mesurer et peser).\nPasser les coings + 1 litre de sucre par litre de fruit,\ncouvrir d'un film, mouliner,\nétaler la pâte sur 2 cm d'épaisseur.\n\n1) Peler et enlever le coeur\n2) Blanchir les fruits avec un peu de sucre\n   Les garder sans eau → pâte\n3) Écraser et refaire bouillir doucement,\n   ajouter un peu moins de sucre que le poids des fruits\n   + le jus d'1/2 citron\n   laisser épaissir\n   et remuer dans la poêle.",
    "english": "Peel the quinces, cut into quarters, remove the cores,\nput them in cold water.\nIn a pot, cook in water over low heat until soft.\nPour through a sieve, without pressing.\nThe juice becomes the jelly (cook it separately, measure and weigh it).\nPass the quinces through a food mill with 1 liter of sugar per liter of fruit,\ncover with plastic wrap, blend,\nspread the paste out 2 cm thick.\n\n1) Peel and core\n2) Blanch the fruit with a little sugar.\n   Keep it dry, without water, to make the paste.\n3) Mash it and bring back to a gentle boil,\n   add sugar — a little less than the weight of the fruit —\n   plus the juice of half a lemon.\n   Let it thicken,\n   stirring it in the pan.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "quindim",
    "title_fr": "Quindim (Brésil)",
    "title_en": "Quindim (Brazil)",
    "course": "desserts",
    "images": [
      "images/scans/quindim.jpg"
    ],
    "french": "Pour 6 personnes:\n470 g de sucre en poudre\n200 g de noix de coco râpée\n8 jaunes d'oeufs\n8 oeufs entiers\n50 g de beurre\nvanille liquide\nPréparation: 15 mn. Cuisson: 30 mn.\n\nDans une terrine, battez au fouet les oeufs entiers et les jaunes, ajoutez 450 g de sucre, 40 g de beurre ramolli, la noix de coco râpée et quelques gouttes de vanille. Battez quelques instants pour bien mélanger. Beurrez des petits moules individuels avec le reste du beurre. Saupoudrez de sucre en poudre en retournant les moules pour en faire tomber l'excédent. Remplissez-les de pâte, posez-les sur la lèchefrite du four contenant 1 ou 2 cm d'eau chaude. Faites cuire à four doux 180° (6 au thermostat) pendant 30 minutes. Démoulez, laissez refroidir avant de mettre au réfrigérateur. Servez très frais.\n\nNotre conseil: vous pouvez démouler dans des caissettes en papier pour petits fours. Si vous n'avez pas de petits moules individuels, vous pouvez vous servir d'un moule à manqué et découper des cubes que vous mettrez dans des caissettes.",
    "english": "Serves 6:\n470 g sugar\n200 g grated coconut\n8 egg yolks\n8 whole eggs\n50 g butter\nliquid vanilla\nPrep: 15 min. Cooking: 30 min.\n\nIn a bowl, whisk the whole eggs and yolks together, add 450 g sugar, 40 g softened butter, the grated coconut, and a few drops of vanilla. Whisk briefly to combine well. Butter small individual molds with the rest of the butter. Dust with sugar, tipping out the excess. Fill with the batter, and place in a water bath in the oven with 1-2 cm of hot water. Bake in a low oven at 180°C (gas mark 6) for 30 minutes. Unmold, let cool before refrigerating. Serve very cold.\n\nOur tip: you can unmold into small paper petit-four cases. If you don't have individual molds, use a single cake pan and cut the quindim into cubes to place in paper cases.",
    "note": "Shares a page with a Puits d'Amour recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "gateau-rachel",
    "title_fr": "Gâteau Rachel",
    "title_en": "Rachel's Marble Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-rachel.jpg"
    ],
    "french": "5 oeufs\n250 g margarine fondue\n2 1/2 tasses sucre (séparé: avec les blancs, et dans le mélange)\n1 paquet levure + les jaunes\n3 1/2 tasses farine\n1 tasse lait\n1 tasse yaourt ou lait caillé\n→ mélange blanc\n\nMettre la moitié du mélange dans le moule.\nAjouter du cacao à l'autre moitié du mélange et la verser par-dessus.\nCuire 1 heure, four moyen, 250°.",
    "english": "5 eggs\n250 g melted margarine\n2 1/2 cups sugar (split between the whites and the batter)\n1 packet baking powder + the egg yolks\n3 1/2 cups flour\n1 cup milk\n1 cup yogurt or buttermilk\n→ makes a white batter\n\nPour half the batter into the pan.\nStir cocoa into the other half, and pour that on top.\nBake 1 hour, medium oven, 250°C.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "gateau-raphael",
    "title_fr": "Gâteau Raphaël",
    "title_en": "Raphael Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-raphael.jpg"
    ],
    "french": "100 grs de noisettes moulues\n100 grs d'amandes moulues\n200 grs de sucre en poudre\n2 oeufs, les blancs en neige\n1 cuillère de kirsch ou mirabelle\n\nMélanger le tout en formant une pâte épaisse.\nMettre dans un petit plateau bien beurré, à four doux,\nensuite un peu plus chaud.\nUne fois doré, démouler et glacer à volonté.\nGarnir de fruits confits.",
    "english": "100 g ground hazelnuts\n100 g ground almonds\n200 g granulated sugar\n2 eggs, whites whipped to stiff peaks\n1 spoonful of kirsch or mirabelle brandy\n\nMix everything together into a thick paste.\nPlace in a small, well-buttered pan; bake in a low oven,\nthen a little hotter.\nOnce golden, unmold and glaze as you like.\nGarnish with candied fruit.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "jus-de-groseilles",
    "title_fr": "Jus de groseilles",
    "title_en": "Red Currant Juice, Syrup and Jelly",
    "course": "preserves",
    "images": [
      "images/scans/jus-de-groseilles.jpg"
    ],
    "french": "Écraser dans une terrine 2 kg de groseilles rouges et laisser égoutter 24 heures.\nEnsuite presser dans un torchon pour recueillir le jus, le peser, le mettre au feu dans une bassine avec le même poids de sucre. Donner un bouillon, écumer. Faire refroidir, puis mettre en bouteilles fermées hermétiquement.\n\nPour le sirop de groseilles: pour 2 kg de jus, mettre 2 kg 500 de sucre.\n\nGelée de groseilles: écraser les fruits, leur donner un bouillon, les égoutter, puis extraire le jus, le peser, et cuire à feu pas trop vif avec le même poids de sucre.\nÉcumer soigneusement, surveiller la cuisson.",
    "english": "Crush 2 kg red currants in a bowl and let drain for 24 hours.\nThen press them in a cloth to collect the juice, weigh it, and put it on the heat in a pot with an equal weight of sugar. Bring to a boil once, skim. Let cool, then bottle in tightly sealed bottles.\n\nFor red currant syrup: for 2 kg juice, use 2.5 kg sugar.\n\nRed Currant Jelly: crush the fruit, bring to a boil, drain, then extract the juice, weigh it, and cook over not-too-high heat with an equal weight of sugar.\nSkim carefully, and watch the cooking closely.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "confiture-rhubarbe",
    "title_fr": "Confiture de rhubarbe",
    "title_en": "Rhubarb Jam",
    "course": "preserves",
    "images": [
      "images/scans/confiture-rhubarbe.jpg"
    ],
    "french": "2 kg 1/2 rhubarbe épluchée + 2 kg sucre.\nCouper la rhubarbe en petits dés.\nDans une terrine, mettre une couche de\nrhubarbe, une couche de sucre, et ainsi de suite.\nLaisser 24h au frais.\nFaire cuire en écumant, 20 minutes,\nen remuant.\nÉcumer.\nMettre en pots.",
    "english": "2.5 kg peeled rhubarb + 2 kg sugar.\nCut the rhubarb into small cubes.\nIn a bowl, layer rhubarb and sugar,\nalternating.\nLet sit 24 hours in a cool place.\nCook, skimming as you go, for 20 minutes,\nstirring.\nSkim off any foam.\nPot it up.",
    "note": "Shares a page with a layered omelet recipe.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "rose-des-sables",
    "title_fr": "Rose des sables",
    "title_en": "Rose des Sables (Chocolate Cornflake Clusters)",
    "course": "desserts",
    "images": [
      "images/scans/rose-des-sables.jpg"
    ],
    "french": "Faire fondre 300 g chocolat à croquer\ndans 200 g de végétaline.\nRetirer du feu et ajouter 120 g sucre glace.\nBien mélanger le tout.\nVerser le paquet entier de corn-flakes,\nbien mélanger avec une cuillère en bois.\nPuis faire de petits tas sur une feuille\nd'aluminium. Laisser bien refroidir,\nensuite décoller et mettre au frigo.",
    "english": "Melt 300 g dark chocolate\nwith 200 g vegetable shortening.\nRemove from heat and add 120 g powdered sugar.\nMix well.\nPour in the whole box of corn flakes,\nand stir gently with a wooden spoon.\nThen drop small mounds onto a sheet\nof aluminum foil. Let cool completely,\nthen peel off and refrigerate.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "mousse-de-saumon",
    "title_fr": "Mousse de saumon",
    "title_en": "Salmon Mousse",
    "course": "starters",
    "images": [
      "images/scans/mousse-de-saumon.jpg"
    ],
    "french": "Saumon fumé, 300 g\n2 dl crème, pas trop épaisse\n4 feuilles de gélatine\n\nTout mixer + incorporer les feuilles de gélatine (ramollies).\nFouetter les 2 dl de crème restants et les incorporer ensuite, puis décorer.\nGarnir de endives, carottes et champignons hachés, poêlés.",
    "english": "Smoked salmon, 300 g\n2 dl (200 ml) cream, not too thick\n4 sheets gelatin\n\nBlend everything together + fold in the softened gelatin sheets.\nWhip the remaining 2 dl of cream and fold it in afterward, then decorate.\nGarnish with chopped endive, carrots, and mushrooms, lightly sautéed.",
    "note": "",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "rillettes-saumon",
    "title_fr": "Rillettes de saumon",
    "title_en": "Salmon Rillettes",
    "course": "starters",
    "images": [
      "images/scans/rillettes-saumon.jpg"
    ],
    "french": "Entrée pour 4 personnes\n250 g de filet de saumon cru, sans peau, sans arêtes\n10 g de beurre pour poêler le saumon\n75 g de beurre pommade (sortir le beurre du frigo 2h à l'avance)\n75 g de mayonnaise\n15 g de ciboulette ciselée\njus de citron\nsel, poivre du moulin\n\nVinaigrette: moutarde de Meaux à l'ancienne, 1/3 de vinaigre de xérès, 2/3 d'huile de noix, sel, poivre.\n\nSalade: frisée, lollo, trévise, rampon, feuilles de chêne, endive, tomates cerises, radis, tranches de citron.",
    "english": "Starter for 4\n250 g raw salmon fillet, skinless and boneless\n10 g butter, for searing the salmon\n75 g softened butter (take it out of the fridge 2 hours ahead)\n75 g mayonnaise\n15 g chopped chives\nlemon juice\nsalt, freshly ground pepper\n\nVinaigrette: old-style Meaux mustard, 1/3 sherry vinegar, 2/3 walnut oil, salt, pepper.\n\nSalad: frisée, lollo rosso, treviso, lamb's lettuce (mâche), oak leaf lettuce, endive, cherry tomatoes, radishes, lemon slices.",
    "note": "",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "tartare-de-saumon",
    "title_fr": "Tartare de saumon",
    "title_en": "Salmon Tartare",
    "course": "starters",
    "images": [
      "images/scans/tartare-de-saumon.jpg"
    ],
    "french": "500 g = saumon fumé\n600 g = saumon (filet cru)\nOignons blancs 2-3\nHerbes\n1 filet d'huile d'olive\nJus de citron (goûter)\n\nPasser tout au Maggi-mix (pas trop longtemps).\nGarnir avec des oeufs de saumon ou autre chose.",
    "english": "500 g smoked salmon\n600 g salmon (raw fillet)\n2-3 white (spring) onions\nHerbs\nA drizzle of olive oil\nLemon juice (to taste)\n\nBlend everything briefly in a food processor (not too long).\nGarnish with salmon roe, or something else.",
    "note": "",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "saumon-papillote",
    "title_fr": "Saumon en papillote",
    "title_en": "Salmon in Foil Parcels",
    "course": "mains",
    "images": [
      "images/scans/saumon-papillote.jpg"
    ],
    "french": "Champignons, beurre, sel, poivre, persil, ail: à sauter, puis laisser sur le feu + crème fraîche.\nCarottes, haricots verts: cuire doucement dans la crème.\nSaumon + beurre + sel/poivre + crème + citron + oignon.\nMettre en papillote.\nFour à 180°, 8 min.\nPuis ajouter les légumes et remettre le tout 3-4 min.",
    "english": "Mushrooms, butter, salt, pepper, parsley, garlic: sauté, then let sit on the heat + crème fraîche.\nCarrots, green beans: cook gently in cream.\nSalmon + butter + salt/pepper + cream + lemon + onion.\nWrap in a foil parcel.\nOven at 180°C, 8 minutes.\nThen add the vegetables and put back in for another 3-4 minutes.",
    "note": "",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "pain-de-mie",
    "title_fr": "Pain de mie",
    "title_en": "Sandwich Bread (Pain de Mie)",
    "course": "breads",
    "images": [
      "images/scans/pain-de-mie.jpg"
    ],
    "french": "Pour 2 moules à couvercle de 18, un rond de 24, et un pain libre avec le reste de la pâte:\n750 g de farine\n15 g de sel\n40 g de levure de boulanger\n25 g de sucre\n60 g de beurre\n1/4 de litre de lait tiède\n1 cuillerée à soupe d'huile\n40 g de beurre\nCuisson: 35 mn.\n\nAvant de commencer, vérifiez la fraîcheur de la levure: elle ne doit pas être sèche et dure. Avec le quart de la farine et la levure délayée dans un demi-verre d'eau juste tiède, faites une pâte molle. Laissez-la reposer 6 minutes. Dans le reste de la farine tamisée, disposée en puits, mettez le sel, le sucre, le beurre ramolli, l'huile, et le levain. Mouillez au lait en mélangeant pour obtenir une pâte souple et douce. Travaillez-la jusqu'à ce qu'elle soit lisse. Au besoin, remettez-la en couronne et ajoutez un peu de lait: elle doit être collante. Pour la retirer de la table, farinez vos doigts et l'entourage de la pâte. Ramassez-la, déposez-la dans une terrine couverte, mettez-la dans un endroit tiède (25 à 30°). Lorsqu'elle a doublé de volume, videz-la de son air sur la table et faites-la reposer à nouveau 10 minutes environ dans un endroit tiède. Beurrez les moules. Pesez strictement le morceau de pâte pour chaque moule. Ce poids est indiqué sur les couvercles. Pour le moule rond, mettez 350 g de pâte. Celle-ci doit toujours être légèrement farinée. Posez-la dans le moule de manière qu'elle épouse parfaitement le fond. Laissez monter jusqu'à ce qu'elle occupe à peu près le volume du moule. Glissez le couvercle. Mettez au four très chaud 230° (thermostat 7), 35 minutes. N'ouvrez jamais les moules en cours de cuisson: la pâte brûlante exploserait.",
    "english": "Makes enough for 2 lidded 18 cm pans, one 24 cm round loaf, and a free-form loaf from the leftover dough:\n750 g flour\n15 g salt\n40 g baker's yeast\n25 g sugar\n60 g butter\n1/4 liter warm milk\n1 tbsp oil\n40 g butter\nCooking: 35 min.\n\nBefore starting, check the yeast is fresh: it shouldn't be dry or hard. With a quarter of the flour and the yeast dissolved in half a glass of just-warm water, make a soft starter dough. Let it rest 6 minutes. In the rest of the sifted flour, arranged in a well, put the salt, sugar, softened butter, oil, and the starter. Moisten with milk, mixing to get a soft, supple dough. Knead until smooth. If needed, re-shape into a ring and add a little more milk — it should be sticky. To lift it off the table, flour your fingers and the edge of the dough. Gather it up, place it in a covered bowl, and put it somewhere warm (25-30°C). Once it has doubled in size, punch it down on the table and let it rest again for about 10 minutes somewhere warm. Butter the pans. Weigh the dough precisely for each pan — the correct weight is marked on the lids. For the round pan, use 350 g dough. It should always be lightly floured. Place it in the pan so it fits the bottom perfectly. Let it rise until it fills about the volume of the pan. Slide the lid on. Bake in a very hot oven at 230°C (gas mark 7) for 35 minutes. Never open the pans while baking — the hot dough would burst out.",
    "note": "Shares a page with a Buns recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "nana-les-sauces",
    "title_fr": "Les sauces ! (guide, avec krapfen et pain aux raisins)",
    "title_en": "Sauces! (A Guide, with Krapfen and Raisin Bread)",
    "course": "sauces",
    "images": [
      "images/scans/nana-les-sauces.jpg"
    ],
    "french": "A TOUTES LES SAUCES - LES SAUCES !\n\nSavoureuse, veloutée à point, la sauce vient rendre exquis un plat qui, sans elle, serait souvent fade et sec. \"Elle fait passer le poisson\", affirme le proverbe. Mais il y a bien des sauces. Essayons de les classer.\n\n1. À BASE DE ROUX — se subdivisent en sauces blanches et brunes.\nSauce blanche: 30 g de beurre, 30 g de farine, 400 à 500 g d'eau. Faire fondre le beurre à petit feu, ajouter la farine en remuant avec la cuiller en bois. Laisser cuire jusqu'à ce que cela mousse. Avant que ça ne brunisse, jetez-y tout le liquide. Amenez à ébullition, faites épaissir. Ajoutez une très petite cuillerée de sel, du poivre s'il y a lieu.\nDécoulent de cette formule: sauce Béchamel (sauce blanche au lait); sauce à la tomate (sauce blanche à la purée de tomates); sauce Aurore (Béchamel + purée de tomates); sauce Mornay (Béchamel + gruyère râpé); sauce Nantua (Béchamel au beurre d'écrevisses); sauce veloutée (sauce blanche au bouillon de poule ou au fumet de poisson, selon qu'on la veut grasse ou maigre); sauce aux câpres (sauce blanche additionnée de câpres, pour accompagner cervelle ou poisson bouilli); etc.\n\nLa sauce brune type est d'un usage moins courant dans les familles; c'est la sauce espagnole, dont les hygiénistes médisent parce que \"riche\" et difficile à digérer. Formule: 30 g de beurre, 40 g de farine, 1 litre de bouillon (ou de concentré dissous dans de l'eau). Faites-la comme l'autre; il est seulement plus mouillé parce qu'elle doit cuire longtemps. Ajoutez-lui un mirepoix, c'est-à-dire deux fortes cuillerées à soupe de légumes (carotte, oignon, céleri) coupés en petits morceaux et dorés au beurre. Laissez bouillir doucement une heure.\nEn découlent: la sauce Duxelles (espagnole au vin et à la tomate).\n\n2. ÉMULSIONNÉES À FROID — type: la mayonnaise. Formule pour 4 ou 5 personnes: 200 g d'huile, 1 jaune d'oeuf, 1 cuillerée à café de vinaigre, 1 pincée de sel fin.\nMettez le jaune d'oeuf au fond du bol, et avec une fourchette tandis que vous versez l'huile goutte à goutte tout d'abord, puis plus vite et en filet, quand la sauce prend de l'épaisseur. Versez ainsi toute l'huile que vous aurez préparée dans une petite carafe ou dans un verre. Ajoutez le sel et le vinaigre en tournant toujours.\nAttention! le froid figé l'huile et empêche d'épaissir. En hiver, \"chambrez\" à la cuisine l'oeuf et l'huile deux heures avant de faire la sauce, pour qu'ils aient la même température.\nSi votre mayonnaise reste liquide, mettez un autre jaune dans un autre bol, et recommencez à tourner en versant goutte à goutte sur le jaune la première sauce ratée. Cette fois la sauce sera parfaite.\nEn découlent: la sauce verte (mayonnaise à la purée d'herbes); l'aïlloli (mayonnaise à l'ail); la sauce tartare (mayonnaise où la moutarde remplace l'oeuf); la rémoulade (mayonnaise à la moutarde et aux fines herbes); etc.\n\n3. ÉMULSIONNÉES À CHAUD — type: la sauce hollandaise. Formule: 2 jaunes d'oeufs, 125 g de beurre.\nMettez au bain-marie, dans une petite casserole, les jaunes en compagnie d'une cuillerée à soupe d'eau froide. Et ajoutez le beurre par petits morceaux successifs, en tournant sans cesse avec une fourchette ou au fouet. N'attendez pas qu'un morceau soit complètement fondu pour en ajouter l'autre. Quand vous n'aurez plus de beurre, que la sauce aura bien épaissi, salez-la et envoyez-la sur table: c'est une escorte délicieuse pour les asperges.\nEn découlent: la béarnaise, où l'on remplace le beurre par de l'huile, et où l'on ajoute une pointe d'ail; la sauce au vin blanc, qui réunit fumet de poisson, oeufs et beurre; la sauce au vin rouge, merveilleuse avec le gibier; etc.\n\nET ENCORE: outre les sauces combinées, il y a enfin: le jus (suc de viande et de matières grasses), exquise sauce naturelle; la demi-glace, jus concentré jusqu'à la gelée; le beurre fondu (ou maître-d'hôtel s'il est additionné de fines herbes); le beurre noir, indispensable à la raie.\n\nUne sauce très simple peut être savoureuse. Ce qui importe à toutes, c'est qu'elles soient faites avec d'excellents produits (beurre fin, oeufs frais, huile de choix), que les proportions en soient exactes, et que vous mettiez tout votre soin à les exécuter. — Legrillon\n\n— Les krapfen ou beignets viennois —\n250 g de farine, 100 g de beurre, 10 g de sucre, 5 g de sel fin, 7 g de levure de boulanger, deux oeufs, deux cuillerées à soupe de lait.\nDans le quart de la farine, creusé en fontaine, mettez la levure et le lait tiède, mélangez-la au lait d'abord, puis à un peu de farine. Roulez-la en boule molle, posez-la dans une casserole d'eau tiède où elle devra doubler de volume.\nEn attendant, prenez le reste de la farine, creusez-y une autre fontaine où vous casserez les oeufs, pétrissez longuement et fortement, comme une pâte à brioche, en prenant la pâte à poignée, et en la rejetant violemment sur la planche ou le marbre. Quand elle se détache des doigts, ajoutez-y sucre et le beurre ramolli (pétrissez encore). Épongez alors le levain, étendez-y la pâte à laquelle vous mélerez délicatement la pâte à laquelle vous mélerez délicatement, farinée, sous couvercle, pendant trois heures à chaleur douce. Puis, remettez-la sur la planche ou marbre. Elle a grossi: farinez-la pour l'amincir. Remettez-la dans la saladière, mais, frais, trois à la nuit. Le lendemain, pétrissez-la, farinée, sous le rouleau du lundinant 3 mm. d'épaisseur, découpez-la en rondelles avec un verre à eau, garnissez la moitié des rondelles avec une petite cuillerée de confiture (abricot de préférence), recouvrez avec les autres, et pincez les bords.\nLaissez lever trois quarts d'heure au chaud, puis plongez chaque krapfen dans la friture bouillante. Quand une face est gonflée et dorée, retournez le beignet. Servez sous une pluie de sucre fin.\n\n— Le pain aux raisins —\nDeux oeufs, 120 g de farine, 120 g de sucre en poudre, 60 g de beurre, quatre cuillerées à soupe de lait, 4 g de levure anglaise, une cuillerée à soupe de rhum, 75 g de raisins de Corinthe.\nMélangez oeufs et sucre et travaillez-les. Versez le lait à la fois toute la farine, puis le beurre malaxé, mais non fondu, et les raisins macérés dans le rhum, avec celui-ci. Ne pétrissez pas longtemps. Ajoutez la levure juste avant de verser le mélange dans le moule à cake beurré et foncé d'un papier blanc également beurré. Ce gâteau devant gonfler, choisissez un moule un peu grand. Une demi-heure de four doux.",
    "english": "AT EVERY SAUCE — SAUCES!\n\nRich and perfectly smooth, sauce turns an ordinary dish into something exquisite — without it, a dish is often flat and dry. \"It makes the fish go down,\" as the proverb says. But there are so many sauces — let's try to sort them out.\n\n1. ROUX-BASED SAUCES — divided into white and brown.\nWhite sauce: 30 g butter, 30 g flour, 400-500 g water. Melt the butter over low heat, stir in the flour with a wooden spoon. Cook until foamy. Before it browns, pour in all the liquid. Bring to a boil, let thicken. Add a small pinch of salt, and pepper if you like.\nFrom this base come: béchamel (white sauce made with milk); tomato sauce (white sauce with tomato purée); Aurore sauce (béchamel + tomato purée); Mornay sauce (béchamel + grated gruyère); Nantua sauce (béchamel with crayfish butter); velouté (white sauce made with chicken broth or fish stock, depending on whether you want it rich or light); caper sauce (white sauce with capers, for brains or boiled fish); etc.\n\nThe classic brown sauce is less common in home kitchens — this is Spanish sauce (sauce espagnole), which health advocates criticize as \"rich\" and hard to digest. Formula: 30 g butter, 40 g flour, 1 liter broth (or stock concentrate dissolved in water). Make it the same way as the white sauce, just wetter, since it cooks longer. Add a mirepoix — two heaping tablespoons of diced vegetables (carrot, onion, celery) browned in butter. Simmer gently for an hour.\nFrom this comes: Duxelles sauce (espagnole with wine and tomato).\n\n2. COLD EMULSIFIED SAUCES — the classic: mayonnaise. For 4-5 people: 200 g oil, 1 egg yolk, 1 tsp vinegar, 1 pinch fine salt.\nPut the egg yolk in the bottom of a bowl; with a fork, whisk while pouring in the oil, drop by drop at first, then faster in a thin stream as the sauce thickens. Pour in all the oil you've prepared in a small jug or glass. Add the salt and vinegar, whisking the whole time.\nNote: cold stiffens the oil and stops it thickening properly. In winter, bring the egg and oil to room temperature in the kitchen two hours before making the sauce, so they match in temperature.\nIf your mayonnaise stays runny, put another yolk in a fresh bowl, and start whisking again, dribbling the first, failed sauce in drop by drop onto the new yolk. This time it will come together perfectly.\nFrom this come: green sauce (mayonnaise with puréed herbs); aïoli (mayonnaise with garlic); tartar sauce (mayonnaise where mustard replaces the egg); rémoulade (mayonnaise with mustard and fine herbs); etc.\n\n3. HOT EMULSIFIED SAUCES — the classic: hollandaise. Formula: 2 egg yolks, 125 g butter.\nSet the yolks in a small pan over a water bath with a tablespoon of cold water. Add the butter in small pieces, one after another, whisking constantly with a fork or whisk. Don't wait for one piece to fully melt before adding the next. Once all the butter is in and the sauce has thickened nicely, season with salt and serve right away — a wonderful match for asparagus.\nFrom this come: béarnaise, where oil replaces the butter and a touch of garlic is added; white wine sauce, combining fish stock, eggs, and butter; red wine sauce, wonderful with game; etc.\n\nAND MORE: beyond the composed sauces, there's also: jus (the natural juices of meat and fat), an exquisite sauce in its own right; demi-glace, stock reduced until syrupy; melted butter (or maître d'hôtel butter, when mixed with fine herbs); and brown butter (beurre noir), essential with skate.\n\nEven a very simple sauce can be delicious. What matters for all of them is using excellent ingredients (fine butter, fresh eggs, good oil), measuring the proportions exactly, and taking real care in making them. — Legrillon\n\n— Krapfen (Viennese Doughnuts) —\n250 g flour, 100 g butter, 10 g sugar, 5 g fine salt, 7 g baker's yeast, 2 eggs, 2 tbsp milk.\nIn a quarter of the flour, make a well; add the yeast and warm milk, mix with the milk first, then with a little flour. Roll into a soft ball, place in a pot of warm water, where it should double in size.\nMeanwhile, take the rest of the flour, make another well, and crack in the eggs; knead long and vigorously, like a brioche dough, picking up handfuls and slapping it hard onto the board or marble. Once it no longer sticks to your fingers, add the sugar and softened butter (keep kneading). Fold in the risen starter, gently working it in; cover with a floured cloth and let rest 3 hours in gentle warmth. Then return to the board — it will have grown; flour it to thin it out. Put it back in the bowl, chilled, overnight. The next day, roll the floured dough to 3 mm thick, cut into rounds with a drinking glass, fill half the rounds with a small spoonful of jam (apricot preferred), cover with the remaining rounds, and pinch the edges shut.\nLet rise 45 minutes somewhere warm, then fry each krapfen in hot oil. Once one side puffs up and turns golden, flip. Serve dusted generously with fine sugar.\n\n— Raisin Bread (Pain aux Raisins) —\n2 eggs, 120 g flour, 120 g granulated sugar, 60 g butter, 4 tbsp milk, 4 g baking powder, 1 tbsp rum, 75 g currants.\nBeat the eggs and sugar together. Pour in the milk, all the flour at once, then the softened (not melted) butter, and the currants, soaked in rum along with the rum itself. Don't overwork the dough. Add the baking powder just before pouring the mixture into a buttered loaf pan, lined with buttered white paper. Since this cake rises, choose a slightly larger pan. Bake 30 minutes in a low oven.",
    "note": "",
    "tags": []
  },
  {
    "slug": "choucroute",
    "title_fr": "Choucroute",
    "title_en": "Sauerkraut (Choucroute)",
    "course": "mains",
    "images": [
      "images/scans/choucroute.jpg"
    ],
    "french": "1 kg choucroute.\nLa jeter dans l'eau bouillante, puis égoutter.\nÉgoutter, presser.\nHuile + oignons de la cocotte → faire blondir.\nFaire un peu revenir la choucroute.\nAjouter du pickelfleisch (boeuf salé).\nLaisser cuire 1h1/2 à 2h.\nAjouter saucisses et pommes de terre\n10 minutes avant de servir.\n+ une pièce de viande chaude.",
    "english": "1 kg sauerkraut.\nBlanch it in boiling water, then drain.\nDrain and press it dry.\nOil + onions from the pot → brown lightly.\nSauté the sauerkraut briefly.\nAdd salted beef (pickelfleisch).\nCook 1.5 to 2 hours.\nAdd sausages and potatoes\n10 minutes before serving.\n+ a hot piece of meat.",
    "note": "Shares a page with the Pot-au-Feu recipe.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "savarin",
    "title_fr": "Savarin",
    "title_en": "Savarin",
    "course": "desserts",
    "images": [
      "images/scans/savarin.jpg"
    ],
    "french": "(Moule 25x25cm; si le moule est plus petit = 150 g farine)\n250 g farine\n40 g levure du boulanger\n6 cuillères à soupe de lait\n5 g sel\n50 g beurre\n2 oeufs entiers\n15 g sucre\n\nMélanger le tout dans l'ordre ci-dessus.\nFaire tiédir le beurre, puis le laisser refroidir pour le travailler avec le reste.\nLorsque la pâte est lisse, la mettre dans un moule graissé et fariné.\nLaisser lever.\nPuis four chaud: 20 min (meilleur fait de la veille).\n\nSirop pour le savarin:\n4 verres d'eau, faire fondre et bouillir avec\n200 g sucre\n+ 1 verre de rhum\nVerser chaud sur le savarin froid, jusqu'à ce qu'il gonfle.\nOu verser froid sur un savarin chaud.",
    "english": "(25x25 cm pan; if the pan is smaller, use 150 g flour)\n250 g flour\n40 g baker's yeast\n6 tbsp milk\n5 g salt\n50 g butter\n2 whole eggs\n15 g sugar\n\nMix everything in the order above.\nWarm the butter slightly, then let it cool, to work it in with the rest.\nOnce the dough is smooth, put it in a greased, floured pan.\nLet rise.\nThen bake in a hot oven: 20 minutes (best made the day before).\n\nSyrup for the savarin:\n4 glasses water, melt and bring to a boil with\n200 g sugar\n+ 1 glass rum\nPour hot over the cold savarin, until it swells.\nOr pour cold syrup over a hot savarin.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "pate-sablee-grimprey",
    "title_fr": "Pâte à tarte sablée (Grimprey) et pâte à quiche",
    "title_en": "Shortcrust Pastry (Grimprey) and Quiche Dough",
    "course": "desserts",
    "images": [
      "images/scans/pate-sablee-grimprey.jpg"
    ],
    "french": "Pour 1/4 farine (soit 300 g):\n1/2 beurre\n1/4 sucre\n1 pincée de sel\nMélanger la farine et le beurre, à moitié ramolli, avec le sucre au centre, et émietter (sabler) du bout des doigts.\nPuis ajouter un peu d'eau (1/2 verre) pour lier le tout.\n\nPâte à quiche: identique, mais sans sucre.\n2 oeufs + crème en quantité + sel.",
    "english": "For 1/4 portion flour (about 300 g):\n1/2 portion butter\n1/4 portion sugar\n1 pinch salt\nMix the flour and the half-softened butter with the sugar in the center, and rub together with your fingertips into coarse crumbs.\nThen add a little water (1/2 glass) to bring it together.\n\nQuiche dough: the same, but without sugar.\n2 eggs + a good amount of cream + salt.",
    "note": "Shares a page with the Sour Cherry Clafoutis recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "tom-yam-koung",
    "title_fr": "Soupe aux crevettes et à la citronnelle (Tom Yam Koung) — Thaïlande",
    "title_en": "Shrimp and Lemongrass Soup (Tom Yam Koung) — Thailand",
    "course": "soups",
    "images": [
      "images/scans/tom-yam-koung.jpg"
    ],
    "french": "4 personnes\n16 crevettes moyennes, 2 tiges de citronnelle, 3 c.à.c. de galanga en poudre, 2 échalotes, 2 citrons, 6 feuilles de bergamote, 1 c.à.c. de sucre, 4 c.à.s. de nuoc-mam, 2 brins de coriandre, 4 c.à.s. d'huile, 4 petits piments verts frais, sel.\n\nÉtêtez les crevettes, gardez les têtes. Décortiquez les crevettes en laissant l'extrémité de la queue intacte. Défibrez la citronnelle en l'écrasant à petits coups de pilon, puis coupez-la en tronçons de 5 cm de long. Pressez le jus de 2 citrons. Hachez les échalotes et l'ail finement. Coupez en très fine julienne les feuilles de bergamote. Retirez soigneusement les graines des piments, puis coupez ceux-ci en fines lamelles.\nFaites chauffer un filet d'huile dans une grande casserole, jetez-y les têtes de crevette et faites-les revenir à feu vif, en remuant, pendant 4 minutes. Mouillez ensuite avec 1,5 litre d'eau et laissez bouillir jusqu'à évaporation d'un tiers. Passez dans une autre casserole pour éliminer les têtes de crevette; vous devez avoir un litre de bouillon. Remontez en ébullition, ajoutez la citronnelle, le galanga, l'ail et une bonne pincée de sel. Laissez mijoter 5 minutes. Ajoutez le nuoc-mam, le jus de citron, les échalotes et le sucre, puis plongez-y les crevettes... et retirez la casserole du feu dès qu'elles sont cuites. Répartissez immédiatement les crevettes dans 4 bols que vous remplirez avec le bouillon. Décorez avec les feuilles de coriandre. Présentez le piment à part, dont chacun se servira selon son goût.",
    "english": "Serves 4\n16 medium shrimp, 2 stalks lemongrass, 3 tsp galangal powder, 2 shallots, 2 lemons, 6 kaffir lime leaves, 1 tsp sugar, 4 tbsp fish sauce, 2 sprigs cilantro, 4 tbsp oil, 4 small fresh green chilies, salt.\n\nRemove the shrimp heads, keeping them. Shell the shrimp, leaving the tail tip on. Bruise the lemongrass lightly with a pestle, then cut into 5 cm lengths. Juice 2 lemons. Finely chop the shallots and garlic. Finely shred the kaffir lime leaves into a julienne. Carefully deseed the chilies, then slice thinly.\nHeat a drizzle of oil in a large pot, add the shrimp heads, and sauté over high heat, stirring, for 4 minutes. Add 1.5 liters water and boil until reduced by a third. Strain into another pot to remove the shrimp heads — you should have 1 liter of broth. Bring back to a boil, add the lemongrass, galangal, garlic, and a good pinch of salt. Simmer 5 minutes. Add the fish sauce, lemon juice, shallots, and sugar, then add the shrimp... and take the pot off the heat as soon as they're cooked. Immediately divide the shrimp among 4 bowls and fill with the broth. Garnish with cilantro leaves. Serve the chili on the side, for everyone to add to taste.",
    "note": "Part of a 2-page spread of Thai recipes.\n\nTo make kosher: a similar soup can be made with chicken or a firm kosher fish in place of the shrimp — the lemongrass, galangal, and lime broth is the real flavor base.",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "petits-pains",
    "title_fr": "Petits pains",
    "title_en": "Small Bread Rolls",
    "course": "breads",
    "images": [
      "images/scans/petits-pains.jpg"
    ],
    "french": "25 min de cuisson environ\n1 kg farine\n1 paquet levure boulangère\n2 oeufs\n1/2 verre huile\n1 c. à café sel\n1 c. à café sucre\n+ eau\nPétrir. Laisser lever. Faire des petites boules espacées sur une plaque.\n(Bon avec de la tchoutchouka ou autre chose)",
    "english": "About 25 minutes baking time\n1 kg flour\n1 packet baker's yeast\n2 eggs\n1/2 glass oil\n1 tsp salt\n1 tsp sugar\n+ water\nKnead. Let rise. Shape into small balls, spaced out on a baking sheet.\n(Good served with tchoutchouka or something else)",
    "note": "Shares a page with a tchoutchouka (chakchouka) recipe.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "clafoutis-cerises-aigres",
    "title_fr": "Clafoutis aux cerises aigres",
    "title_en": "Sour Cherry Clafoutis",
    "course": "desserts",
    "images": [
      "images/scans/clafoutis-cerises-aigres.jpg"
    ],
    "french": "4 oeufs, 4 cuillères à soupe farine, 1 verre eau de vie.\nMélanger le tout.\nAjouter 1/2 litre de lait.\nPuis 65 g de beurre en petits morceaux\n+ 1 cuillère de sucre par oeuf.\nEt 1 kg de cerises aigres.\nVerser dans un plat beurré et cuire au four.",
    "english": "4 eggs, 4 tbsp flour, 1 glass brandy.\nMix it all together.\nAdd 1/2 liter milk.\nThen 65 g butter, in small pieces,\n+ 1 tbsp sugar per egg.\nAnd 1 kg sour cherries.\nPour into a buttered dish and bake.",
    "note": "Shares a page with a shortcrust pastry recipe.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "ailes-poulet-epicees",
    "title_fr": "Ailes de poulet épicées",
    "title_en": "Spiced Chicken Wings",
    "course": "starters",
    "images": [
      "images/scans/ailes-poulet-epicees.jpg"
    ],
    "french": "Pour 4 personnes:\nPréparation: 10 mn. Cuisson: 40 mn. Marinade: 1 h.\n\n12 ailes de poulet\n2 c.à.s. d'huile de tournesol\n1 c.à.s. de jus de citron\n1 c.à.c. de cumin\n1 c.à.c. d'origan\n1 c.à.c. de paprika\n1 gousse d'ail\npiment de Cayenne\nsel\n\nCoupez les ailes de poulet en deux. Dans un saladier, mélangez l'huile, le jus de citron, l'ail écrasé, le cumin, l'origan, le paprika, une pincée de sel et une de piment de Cayenne. Enduisez les ailes de ce mélange, couvrez et laissez mariner à température ambiante au moins une heure.\nPréchauffez le four, thermostat 7 (210°). Disposez les ailes sur la grille du four, sous laquelle vous aurez placé un grand plat creux pour recueillir le jus. Faites griller les ailes 40 mn environ. Elles doivent être bien dorées et croustillantes.\nServez les ailes de poulet grillées avec une sauce mayonnaise et accompagnées d'une salade verte.",
    "english": "Serves 4:\nPrep: 10 min. Cooking: 40 min. Marinating: 1 h.\n\n12 chicken wings\n2 tbsp sunflower oil\n1 tbsp lemon juice\n1 tsp cumin\n1 tsp oregano\n1 tsp paprika\n1 clove garlic\ncayenne pepper\nsalt\n\nCut the chicken wings in half. In a bowl, mix the oil, lemon juice, crushed garlic, cumin, oregano, paprika, a pinch of salt, and a pinch of cayenne. Coat the wings in this mixture, cover, and marinate at room temperature for at least an hour.\nPreheat the oven to 210°C (gas mark 7). Arrange the wings on the oven rack, with a large dish placed underneath to catch the juices. Grill the wings for about 40 minutes. They should be well browned and crisp.\nServe the grilled wings with mayonnaise and a green salad.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "calmars",
    "title_fr": "Calmars",
    "title_en": "Squid Stew",
    "course": "mains",
    "images": [
      "images/scans/calmars.jpg"
    ],
    "french": "Mettre quelques cuillères d'huile d'olive dans\nune casserole avec 1 à 3 oignons hachés.\nFaire revenir et ajouter les calamars\ncoupés en lamelles. Laisser roussir.\nAjouter 3 ou 4 tomates pelées et\nécrasées. Quand tout est bien incorporé,\nmouiller avec du vin blanc sec et\nautant d'eau bouillante.\nAssaisonner de sel et poivre.\nAjouter un bouquet garni.\nLaisser cuire à couvert et\ndoucement 1h30.\nQuand les calamars sont tendres au toucher,\najouter ail et persil hachés, et servir.",
    "english": "Put a few spoonfuls of olive oil in\na pot with 1 to 3 chopped onions.\nBrown them, then add the squid,\ncut into strips. Let it brown a little.\nAdd 3 or 4 peeled, crushed tomatoes.\nOnce everything is well combined,\nmoisten with dry white wine and\nan equal amount of boiling water.\nSeason with salt and pepper.\nAdd a bouquet garni.\nCover and let simmer\ngently for 1.5 hours.\nWhen the squid is tender to the touch,\nadd chopped garlic and parsley, and serve.",
    "note": "",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "omelettes-superposees",
    "title_fr": "Omelettes superposées",
    "title_en": "Stacked Layer Omelets",
    "course": "starters",
    "images": [
      "images/scans/omelettes-superposees.jpg"
    ],
    "french": "Faire trois petites omelettes, avec\ntomates, fromage, lard, jambon (une garniture par omelette).\nLes mettre l'une sur l'autre et\ncouper en parts.",
    "english": "Make three small omelets, with\ntomato, cheese, bacon, and ham (one filling per omelet).\nStack them one on top of the other and\ncut into wedges to serve.",
    "note": "Shares a page with a rhubarb jam recipe.\n\nTo make kosher: swap the bacon and ham for kosher beef bacon or pastrami, or leave the meat out of that one omelet and fill it with sautéed onions or mushrooms instead.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "filet-boeuf-saute-thai",
    "title_fr": "Filet de boeuf sauté (Nüa Phat Nam Man Hoi) — Thaïlande",
    "title_en": "Stir-Fried Beef (Nüa Phat Nam Man Hoi) — Thailand",
    "course": "mains",
    "images": [
      "images/scans/filet-boeuf-saute-thai.jpg"
    ],
    "french": "2 personnes\n400 g de lamelles de filet de boeuf surgelé 400 g, 100 g de champignons de Paris 100 g, 4 gousses d'ail, 4 brins de ciboulette, 4 c.à.s. d'huile, 2 c.à.s. de sauce d'huître, 2 c.à.s. de sauce soja, 1 c.à.s. de farine, 2 c.à.s. d'huile de sésame.\n\nLaissez dégeler les lamelles de viande à température ambiante. Mélangez dans un saladier l'huile de sésame et la sauce soja, puis délayez-y la farine. Faites tremper la viande 20 minutes dans cette marinade. Hachez finement l'ail. Ciselez la ciboulette. Brossez les champignons sous le robinet et retirez-les pieds. Émincez les têtes en tranches de 0,5 cm. Faites fortement chauffer à sec une poêle antiadhésive, jetez-y les champignons, remuez, attendez que leur végétation soit sortie, ajoutez l'ail et laissez revenir 2 minutes en remuant. Ajoutez alors le contenu du saladier, remuez au maximum la chaleur du feu, et laissez mijoter 5 minutes en remuant constamment. Débarrassez dans un plat de service chaud, parsemez de ciboulette et servez immédiatement, avec du riz blanc.",
    "english": "Serves 2\n400 g frozen beef fillet strips, 100 g button mushrooms, 4 cloves garlic, 4 sprigs chives, 4 tbsp oil, 2 tbsp oyster sauce, 2 tbsp soy sauce, 1 tbsp flour, 2 tbsp sesame oil.\n\nLet the beef strips thaw at room temperature. In a bowl, mix the sesame oil and soy sauce, then stir in the flour. Marinate the beef in this for 20 minutes. Finely chop the garlic. Chop the chives. Brush the mushrooms under the tap and remove the stems. Slice the caps into 0.5 cm slices. Heat a nonstick pan hard and dry, add the mushrooms, stir, and wait until they release their liquid; add the garlic and sauté 2 minutes, stirring. Then add the contents of the bowl, turn the heat to maximum, and simmer for 5 minutes, stirring constantly. Transfer to a hot serving dish, sprinkle with chives, and serve immediately, with white rice.",
    "note": "Part of a 2-page spread of Thai recipes.\n\nTo make kosher: swap the oyster sauce for a mushroom-based \"vegetarian oyster sauce\" (sold in most Asian grocery stores) or a mix of soy sauce and a little sugar.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "salade-fraises-citronnette-menthe",
    "title_fr": "Salade de fraises à la citronnette de menthe",
    "title_en": "Strawberry Salad with Mint-Lemon Dressing",
    "course": "starters",
    "images": [
      "images/scans/salade-fraises-citronnette-menthe.jpg"
    ],
    "french": "Pour 6 personnes:\n750 g de fraises\n1 bouquet de menthe\n1 c.à.s. de jus de citron\n3 c.à.s. d'huile d'olive peu fruitée\n75 g de sucre\npoivre finement concassé\n\nS'assurer que les fraises soient très propres et les équeuter. Les mettre en coupe.\nFaire fondre d'abord le sucre dans le jus de citron, mettre 3-4 tours de poivre à infuser dans l'huile (si on mélange trop tôt, le sucre va se dissoudre dans le corps huileux et le poivre va se refermer dans l'acidité du citron).\nCiseler la menthe au dernier moment (ne pas l'émincer, car elle s'oxyderait plus vite). On l'utilise crue, non blanchie.\nAvec un fouet, mélanger le sucre/citron, le poivre/huile, puis les mélanger ensemble.\nVerser sur les fraises, et ajouter la menthe ciselée.\nRemuer, filmer et réserver au froid 1/2 heure.\nServir très frais.\n\nNB:\n- se sert en entrée\n- la \"citronnette de menthe\" est l'appellation d'un produit fini en tant que tel; c'est le mélange jus de citron + poivre + menthe.\n- il faut des fraises charnues (Mara des bois); éviter la gariguette.\n- menthe assez vigoureuse (poivrée ou similaire).",
    "english": "Serves 6:\n750 g strawberries\n1 bunch mint\n1 tbsp lemon juice\n3 tbsp mild olive oil\n75 g sugar\ncoarsely cracked pepper\n\nMake sure the strawberries are very clean, and hull them. Put in a serving bowl.\nFirst dissolve the sugar in the lemon juice; separately, infuse 3-4 turns of pepper in the oil (mixing them too soon would dissolve the sugar into the oil and trap the pepper in the lemon's acidity).\nChop the mint at the very last moment (don't slice it finely, as it would oxidize faster). It's used raw, not blanched.\nWhisk together the sugar-lemon mixture and the pepper-oil, then combine the two.\nPour over the strawberries, and add the chopped mint.\nToss, cover, and chill for 1/2 hour.\nServe very cold.\n\nNotes:\n- serves as a starter\n- \"citronnette de menthe\" is the name for this finished mixture of lemon juice, pepper, and mint.\n- use fleshy strawberries (Mara des Bois variety); avoid the Gariguette variety.\n- use a fairly robust mint (peppermint or similar).",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "blettes-gratin",
    "title_fr": "Blettes (côtes et vert)",
    "title_en": "Swiss Chard, Gratinéed",
    "course": "sides",
    "images": [
      "images/scans/blettes-gratin.jpg"
    ],
    "french": "Côtes: faire blanchir, puis préparer une sauce blanche (beurre, farine + lait).\nMettre les côtes dedans, les laisser cuire un moment.\nSaupoudrer de gruyère.\nMettre le plat au four à gratiner.\n\nVert (des blettes): blanchir, hacher, égoutter (à l'orange),\n+ farine ou maïzena + crème ou beurre ou jus.",
    "english": "Stalks: blanch, then make a white sauce (butter, flour + milk).\nAdd the stalks, and let them cook for a while.\nSprinkle with Gruyère.\nPut the dish under the broiler to gratin.\n\nGreens (from the chard): blanch, chop, drain (with a touch of orange),\n+ flour or cornstarch + cream or butter or pan juices.",
    "note": "Shares a page with Carrots Vichy and buttered green beans.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "epinards-sylvia-israel",
    "title_fr": "Épinards (Sylvia Israël)",
    "title_en": "Sylvia Israel's Spinach",
    "course": "sides",
    "images": [
      "images/scans/epinards-sylvia-israel.jpg"
    ],
    "french": "Blanchir les épinards (congelés), les égoutter.\nDans une casserole: ail, huile, paprika doux\n+ paprika fort (chili powder)\nAssaisonner, + sel.\nMettre les épinards + 1 à 2 herbes fraîches.\nEn papillote, 1 min — épinards + poisson (filet).",
    "english": "Blanch the spinach (frozen), drain it.\nIn a pan: garlic, oil, sweet paprika\n+ hot paprika (chili powder).\nSeason to taste, add salt.\nAdd the spinach + 1-2 fresh herbs.\nIn a foil parcel, 1 minute — spinach + fish fillet.",
    "note": "Shares a page with a chocolate cake recipe.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "tamar-oignons-coings",
    "title_fr": "Tamar — oignons et coings",
    "title_en": "Tamar's Onion and Quince Stew",
    "course": "sides",
    "images": [
      "images/scans/tamar-oignons-coings.jpg"
    ],
    "french": "Faire frire les oignons,\navec leur peau, confits,\n+ épices: 2 cuillères cannelle,\n1 cuillère 4-épices,\nsel, poivre\n+ eau, enfin.\nCuire 1 heure doucement.\nCouper 2 ou 3 coings en tranches,\n+ jus de 2 citrons,\n2 cuillères à soupe sucre.\nCuire encore 1/2 heure.\n(+ raisins secs, au début)",
    "english": "Fry the onions,\nskin on, until caramelized,\n+ spices: 2 tsp cinnamon,\n1 tsp mixed spice (quatre-épices),\nsalt, pepper,\n+ water, at the end.\nCook gently for 1 hour.\nCut 2 or 3 quinces into slices,\n+ juice of 2 lemons,\n2 tbsp sugar.\nCook for another 1/2 hour.\n(Add raisins at the start, if using)",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "gateau-pommes-tamar",
    "title_fr": "Gâteau de pommes roulé (Tamar)",
    "title_en": "Tamar's Rolled Apple Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-pommes-tamar.jpg"
    ],
    "french": "Moule rectangulaire, beurré/margariné.\n5 pommes, saupoudrées de sucre et cannelle mélangés.\n5 oeufs (blancs et jaunes séparés)\n1 verre de sucre\n1 verre de farine\nun peu de citron\nun peu d'huile\n→ mixer les jaunes avec le sucre, le citron et l'huile, puis ajouter la farine à la main (après avoir incorporé les blancs montés).\n\nÉtalez la pâte sur les pommes, puis enfournez 10 minutes, four 7.\nQuand ça brunit, décollez-le, retournez-le sur un torchon et roulez-le (sans le torchon) tant qu'il est encore chaud.\nDécoration: sucre glace ou chocolat.",
    "english": "Rectangular pan, buttered.\n5 apples, sprinkled with sugar and cinnamon mixed together.\n5 eggs (whites and yolks separated)\n1 glass sugar\n1 glass flour\na little lemon\na little oil\n→ blend the yolks with the sugar, lemon and oil, then fold in the flour by hand (after folding in the whipped whites).\n\nSpread the batter over the apples, then bake 10 minutes, oven setting 7.\nOnce it browns, loosen it, turn it out onto a kitchen towel, and roll it up (without the towel) while it's still warm.\nDecoration: powdered sugar or chocolate.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "poulet-tandoori",
    "title_fr": "Poulet Tandoori",
    "title_en": "Tandoori Chicken",
    "course": "mains",
    "images": [
      "images/scans/poulet-tandoori.jpg"
    ],
    "french": "Mélanger 2 cuillères à soupe de Tandoori + 2 cuillères à soupe de yaourt nature.\nEnrober les morceaux de viande du mélange.\nLaisser au frigo une nuit.\nCuire au four-gril 300°, environ 15 minutes.\nServir avec le reste de sauce.",
    "english": "Mix 2 tbsp tandoori spice mix + 2 tbsp plain yogurt.\nCoat the pieces of meat with the mixture.\nLeave in the fridge overnight.\nCook under the oven broiler at 300°C, about 15 minutes.\nServe with the rest of the sauce.",
    "note": "To make kosher: use a non-dairy yogurt alternative (coconut-based works well) in the marinade in place of the yogurt.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "tapenade",
    "title_fr": "Tapenade",
    "title_en": "Tapenade",
    "course": "starters",
    "images": [
      "images/scans/tapenade.jpg"
    ],
    "french": "300 g olives noires\n150 g anchois au sel\n200 g câpres\n2 petits verres d'huile d'olive\n1 cuillère à café de moutarde\npoivre + 1 citron\n\nFaire dessaler les anchois, ôter les arêtes, les éponger, les couper en petits morceaux.\nDans un mortier, mettre les anchois + olives + câpres.\nPiler le tout avec un pilon en bois jusqu'à obtenir une pâte; ajouter la moutarde + le poivre.\nMélanger et incorporer l'huile d'olive peu à peu en tournant, + un filet de citron.\nLa pâte obtenue doit être assez consistante.\n\nLa tapenade se sert à l'apéritif, sur de fines tranches de pain grillé, ou pour farcir des oeufs durs.",
    "english": "300 g black olives\n150 g salt-packed anchovies\n200 g capers\n2 small glasses olive oil\n1 tsp mustard\npepper + 1 lemon\n\nDesalt the anchovies, remove the bones, pat dry, and cut into small pieces.\nIn a mortar, combine the anchovies + olives + capers.\nPound with a wooden pestle until you get a paste; add the mustard + pepper.\nMix, working in the olive oil little by little while stirring, + a squeeze of lemon.\nThe paste should be fairly thick.\n\nTapenade is served as an aperitif, on thin slices of toasted bread, or used to stuff hard-boiled eggs.",
    "note": "",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "tchoulent",
    "title_fr": "Tchoul'nd",
    "title_en": "Tcholent (Sabbath Stew)",
    "course": "mains",
    "images": [
      "images/scans/tchoulent.jpg"
    ],
    "french": "Pour 6 personnes ou plus\n800 g haricots rouges (cocos roses)\n1 verre d'orge perlé\n2 carottes, 2 navets, 1 poireau, 1 morceau de céleri, 1 petit oignon (à laisser entier)\n2 cubes de bouillon de boeuf\n1 jarret de boeuf (ou 2 petits)\n1 morceau de poitrine de boeuf\n\nLa veille, dès le matin, faire tremper les haricots.\nLe soir, couper les légumes (sauf l'oignon) en petits morceaux.\nRincer l'orge perlé.\nMélanger légumes, haricots et orge dans une cocotte allant au four; y mettre la moitié des légumes.\nPlacer la viande dessus.\nRecouvrir avec le reste des légumes.\nRecouvrir d'eau (3 cm au-dessus du tout).\nAjouter les 2 cubes de bouillon, sel, poivre, paprika doux; recouvrir.\nEnfourner thermostat 6, 1 heure 30, puis baisser à thermostat 1,5-2.\nDéguster le lendemain midi.",
    "english": "Serves 6 or more\n800 g red kidney beans\n1 glass pearl barley\n2 carrots, 2 turnips, 1 leek, 1 piece celery, 1 small onion (left whole)\n2 beef bouillon cubes\n1 beef shank (or 2 small ones)\n1 piece beef brisket\n\nThe day before, soak the beans first thing in the morning.\nThat evening, cut the vegetables (except the onion) into small pieces.\nRinse the pearl barley.\nMix the vegetables, beans, and barley in an ovenproof pot; put in half the vegetables.\nPlace the meat on top.\nCover with the rest of the vegetables.\nCover with water (3 cm above everything).\nAdd the 2 bouillon cubes, salt, pepper, sweet paprika; cover.\nPut in the oven at gas mark 6 for 1.5 hours, then lower to gas mark 1.5-2.\nServe the next day at noon.",
    "note": "",
    "tags": [
      "meat",
      "shabbat"
    ]
  },
  {
    "slug": "tchoutchouka",
    "title_fr": "Tchoutchouka (Chakchouka)",
    "title_en": "Tchoutchouka (Chakchouka)",
    "course": "sides",
    "images": [
      "images/scans/tchoutchouka.jpg"
    ],
    "french": "5 heures, four doux. Pour 6 à 7 personnes.\n2 poivrons\n3 tomates pelées, égouttées\nquelques petits piments confits\n5 gousses d'ail revenues dans l'huile + sel\n+ paprika doux + paprika fort\nAjouter les poivrons → cuire, puis les tomates,\nun peu de sucre, et finir la cuisson.",
    "english": "5 hours, low oven. Serves 6-7.\n2 bell peppers\n3 peeled, drained tomatoes\na few small preserved chili peppers\n5 cloves garlic, browned in oil, + salt\n+ sweet paprika + hot paprika\nAdd the peppers → cook, then the tomatoes,\na little sugar, and finish cooking.",
    "note": "Shares a page with the small bread rolls recipe.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "salade-boeuf-thai",
    "title_fr": "Salade de boeuf thaï (Yam Nüa)",
    "title_en": "Thai Beef Salad (Yam Nüa)",
    "course": "starters",
    "images": [
      "images/scans/salade-boeuf-thai.jpg"
    ],
    "french": "4 personnes\n400 g de filet de boeuf en un morceau, 1 laitue pommée, 8 petits piments verts frais, 2 oignons, 1 c.à.c. de sucre, 4 c.à.c. de sauce soja, 2 citrons verts, 4 c.à.s. de nuoc-mam (sauce de poisson), 4 brins de coriandre fraîche, 4 brins de menthe.\n\nCoupez les piments en fines rondelles après avoir soigneusement débarrassé-les de leurs graines. Émincez les oignons en fines rondelles. Dans un saladier, préparez une marinade avec le jus des citrons verts, le nuoc-mam et le sucre. Dans une poêle et avec une goutte d'huile, faites griller le morceau de boeuf jusqu'à ce qu'il soit cuit à point. Émincez-le ensuite en lamelles aussi fines que possible à l'aide d'un grand couteau bien aiguisé et jetez ces lamelles dans la marinade. Ajoutez les rondelles d'oignon et de piment, ainsi que les feuilles de coriandre. Mélangez et laissez mariner un bon quart d'heure. Sur le plat de service ou sur les assiettes individuelles, dressez un lit de feuilles de laitue, puis répartissez dessus le boeuf et les ingrédients de la marinade. Décorez avec les feuilles de menthe.",
    "english": "Serves 4\n400 g beef fillet, in one piece, 1 head butter lettuce, 8 small fresh green chilies, 2 onions, 1 tsp sugar, 4 tsp soy sauce, 2 limes, 4 tbsp fish sauce, 4 sprigs fresh cilantro, 4 sprigs mint.\n\nDeseed the chilies carefully and slice into thin rounds. Thinly slice the onions. In a bowl, make a marinade with the lime juice, fish sauce, and sugar. In a pan with a drop of oil, sear the beef until cooked to your liking. Slice it as thinly as possible with a sharp knife and add the slices to the marinade. Add the onion and chili, along with the cilantro leaves. Mix and let marinate a good 15 minutes. On the serving dish or individual plates, arrange a bed of lettuce leaves, then top with the beef and the marinade ingredients. Garnish with the mint leaves.",
    "note": "Part of a 2-page spread of Thai recipes.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "recommandations-chef",
    "title_fr": "Recommandations du chef",
    "title_en": "The Chef's Tips",
    "course": "notes",
    "images": [
      "images/scans/recommandations-chef.jpg"
    ],
    "french": "Pour hacher oignon ou échalote:\n- prendre un petit couteau (si le couteau est trop gros, il va écraser l'oignon et l'oxyder); couper en deux pour une meilleure assise.\n- faire une première coupe partielle verticale\n- faire une deuxième coupe partielle horizontale\n- faire une troisième coupe totale verticale, en maintenant l'oignon\n\nIl existe trois qualités d'huile d'olive:\n- extra vierge, qui contient un minimum d'acidité\n- extra\n- huile d'olive tout court: troisième pression à chaud, pâte d'olive dans laquelle on ajoute des émulsifiants\n- les olives noires subissent une surmaturation sur chais; l'huile est toujours un mélange d'olives vertes et noires; le pourcentage de celles-ci modifie le goût de l'huile.\n\nHerbes blanchies:\nle blanchiment fixe et stabilise la chlorophylle; puis on plonge dans l'eau froide et il n'y a plus aucun risque d'oxydation; l'eau doit être salée, car pour faire ressortir les pigmentations, il n'y a rien de mieux que le sel; légèrement trop salée au gros sel dans l'eau bouillante pour que le sel pénètre mieux, légèrement salée au sel fin pour qu'il puisse fondre dans l'eau froide.\n\nPour émincer: prendre un gros couteau dit émincer ou à talon; il faut que le plat de la lame repose sur la phalangette de la main gauche qui guide la coupe. Les doigts poussent les aliments, le couteau ne bouge pas.\n\nPlanches à découper: on a pensé que les planches en plastique étaient saines, car sans germes; mais l'usure les rend cancérigènes. On reprend donc l'utilisation des planches en bois. On les aseptise en les frottant avec du gros sel pour qu'il puisse bien pénétrer dans les fissures, avec un torchon, quand elles sont bien sèches; on laisse agir 3 heures et on essuie avec un autre linge.",
    "english": "Chopping onion or shallot:\n- use a small knife (too large a blade crushes the onion and makes it oxidize); cut in half first for a stable base.\n- make a first partial vertical cut\n- make a second partial horizontal cut\n- make a third, full vertical cut, holding the onion steady\n\nThree grades of olive oil:\n- extra virgin, with minimal acidity\n- extra\n- plain \"olive oil\": a third, hot pressing — olive paste with emulsifiers added\n- black olives are olives left to over-ripen in storage; the oil is always a blend of green and black olives, and the ratio between them changes the flavor.\n\nBlanching herbs:\nblanching fixes and stabilizes the chlorophyll; plunging into cold water afterward removes any risk of oxidation. The water should be salted — nothing brings out the color better than salt: slightly oversalted with coarse salt in the boiling water, so it penetrates better, and lightly salted with fine salt in the cold water, so it dissolves quickly.\n\nSlicing thin (émincer): use a large chef's or slicing knife; the flat of the blade should rest against the knuckle of your guiding left hand. Your fingers push the food forward — the knife itself doesn't move.\n\nCutting boards: plastic boards were once thought hygienic, since they have no pores for germs; but wear and scarring actually makes them carcinogenic over time. Wooden boards are now preferred again. Sanitize them by rubbing with coarse salt so it works into the cracks, using a cloth, once they're fully dry; leave for 3 hours, then wipe with another cloth.",
    "note": "",
    "tags": []
  },
  {
    "slug": "nana-secret-confitures",
    "title_fr": "Le secret des confitures (gelées de fruits)",
    "title_en": "The Secret of Jam-Making (Fruit Jellies)",
    "course": "preserves",
    "images": [
      "images/scans/nana-secret-confitures-1.jpg",
      "images/scans/nana-secret-confitures-2.jpg"
    ],
    "french": "LE SECRET DES CONFITURES — La tradition revient, on fait à nouveau ses confitures comme autrefois. Voici conseils et techniques.\n\nLA CUISSON DU SUCRE\nLes confitures ne deviennent confitures qu'après cuisson des fruits dans le sucre. La préparation n'est pas identique pour toutes les recettes, mais il est toujours indispensable de connaître les étapes de la cuisson du sucre, cet élément conservateur des fruits cuits, soit en confiture avec fruits entiers, en gelée ou en marmelade.\nScientifiquement, on peut contrôler la cuisson du sucre avec un saccharimètre, ou pèse-sirop, qui évalue la densité du sirop. Cet appareil étant peu maniable pour les utilisations ménagères, nous indiquons une méthode empirique de contrôle, qu'avec un peu d'habitude on arrive à utiliser sans appréhension.\nPour 1 kg de sucre, il faut 200 g d'eau, c'est-à-dire la quantité nécessaire pour humidifier complètement le sucre. Prenez du sucre cristallisé ou semoule; évitez le sucre en morceaux. Mettez sucre et eau dans la bassine, ayez près de vous une écumoire, une spatule de bois, un bol d'eau froide, faites partir à très petit feu pour que le sucre fonde uniformément. Ne remuez pas la casserole et ne tournez pas le sucre; il cristalliserait.\n\nLES ÉTAPES DE LA CUISSON\n— Le grand lissé ou nappé: le sucre entre en ébullition. Si vous trempez l'écumoire, il reste en nappe; à ce moment, vous pouvez augmenter la température de la surface de chauffe.\n— Le perlé: des bulles se forment à la surface de la nappe de sucre comme de grosses cloques.\n— Le filet: trempez la spatule de bois dans l'eau froide, rapidement dans le sucre, puis dans le bol d'eau froide. Prenez le sucre resté sur la spatule entre le pouce et l'index: il s'étire lentement d'un doigt à l'autre (les courageuses ne trempent pas à nouveau la spatule dans le bol mais se contentent d'étirer le sucre entre le pouce et l'index).\n— Le petit boulé: trempez à nouveau la spatule dans l'eau, dans le sucre, à nouveau dans l'eau; le sucre se roule entre les doigts en une boule molle.\n— Le grand soufflé: trempez l'écumoire directement dans le sucre, soufflez au travers; le sucre forme de grosses bulles légères. Ce stade ne doit pas être dépassé pour la cuisson des confitures. Cependant, nous donnons les étapes complémentaires.\n— Le cassé: étiré entre deux doigts, le sucre forme des filaments qui cassent comme du verre. Ce stade de la cuisson est utilisé en confiserie pour le trempage des fruits déguisés.\n— Le caramel: le sucre, ne contenant plus d'eau, se colore. Tous ces stades de la cuisson du sucre sont très voisins les uns des autres; il est donc indispensable de surveiller attentivement les différentes étapes. Quand le sucre a atteint le point désiré, il ne doit pas continuer à cuire, les fruits doivent être versés immédiatement. Le sirop trop cuit fait de mauvaises confitures. Si cela arrivait par inadvertance, versez une cuillerée à soupe d'eau et contrôlez à nouveau l'étape de cuisson. Suivant les recettes, les étapes utilisées sont le filet, le boulé ou le soufflé.\n\nLES GELÉES\nElles ne peuvent pas se faire avec n'importe quels fruits. Ceux-ci doivent être riches en \"pectine\", substance organique qui à la cuisson se transforme en gel. C'est elle qui fait prendre la confiture ou la gelée. Il est toujours possible d'enrichir le fruit en pectine en ajoutant un \"gel\" du commerce obtenu à partir de fruits comme les pommes. Certaines préparations enrichissent en pectine en ajoutant des pommes; le goût en est modifié.\nSont riches en pectine: les fruits à grappes (groseilles, cassis); des baies (framboises, myrtilles, mûres); certains fruits à pépins (pommes, coings, oranges — zeste seulement). Les gelées proprement dites se font à partir du jus des fruits.\n\nGelée de groseilles: pour 1,5 kg de groseilles fournit à peu près 700 g de jus, même poids de sucre. Lavez et égrenez les groseilles, mettez-les dans la bassine avec 2 ou 3 cuillerées d'eau, amenez doucement à ébullition en écrasant les fruits avec le dos de l'écumoire. Dès que celle-ci atteint, couvrez la bassine, laissez les fruits crever et rendre leur jus dix minutes. Versez sur un tamis de crin et laissez s'égoutter en pressant de temps en temps (vous pouvez également mettre dans un linge fin et pressez en tordant). Pesez le jus en faisant la tare de la bassine, par exemple, ou d'une terrine. Ajoutez le même poids de sucre, laissez-le complètement fondre, portez à feu doux et laissez monter à ébullition. Quand celle-ci est atteinte, enlevez l'écume. Maintenir une petite ébullition 5 minutes seulement. Vérifiez si la gelée est prise en versant quelques gouttes sur une assiette: elle doit figer immédiatement. Mettez en pots sans attendre. Couvrez 48 heures après, lorsque la gelée est bien prise.\n\nGroseilles blanches aux fraises des bois: mettez les groseilles dans une bassine sans les égrener avec deux verres d'eau. Mettez à bon feu en remuant. Quand les fruits crèvent, versez sur un tamis sans presser. Ajoutez le même poids de sucre que le jus, tournez pour mélanger. Faites cuire 15 minutes. Mettez les tranches de pommes dans la bassine avec l'eau qui doit les recouvrir. Amenez à ébullition, laissez cuire jusqu'à ce que les pommes soient tendres. Versez sur un tamis. Laissez égoutter sans presser (24 heures). Mesurez le jus recueilli. Ajoutez pour un litre de jus 850 g de sucre. Laissez cuire 20 minutes à partir de l'ébullition et en écumant souvent. Filtrez si nécessaire sur un linge très fin. Ajoutez, si vous le désirez, le zeste haché et blanchi (5 minutes à l'eau bouillante) d'un demi-citron, ou d'une demi-orange, ou encore une cuillerée à café d'extrait de vanille, une cuillerée à soupe de rhum. Cette gelée peut être la base d'autres confitures. Elle accepte d'être mélangée avec coing, orange, tomate. La pulpe restée sur le tamis ne doit pas être jetée; elle peut faire une excellente compote ou de la marmelade.\n\nGelée de fruits rouges: pour 4 ou 5 pots de 500 g: 1 kg de cassis, 500 g de groseilles maquereaux, 250 g de framboises, 1 verre d'eau, 1 kg de sucre à vérifier par pesée du jus. Lavez les fruits, mettez-les dans la bassine avec, à feu doux, en les écrasant avec le dos de l'écumoire jusqu'à ce que les fruits aient rendu leur jus. Versez sur un tamis ou pressez dans un torchon. Pesez le jus, ajoutez le même poids de sucre, laissez-le fondre, mettez à feu doux jusqu'à ébullition. Maintenez quinze minutes. Vérifiez la cuisson en versant quelques gouttes sur une assiette.\n\nGelée de mûres: pour 2 kg de mûres bien noires, un verre d'eau, une tasse de mûres très rouges. Mettez les fruits lavés dans une bassine avec l'eau. Laissez \"crever\" en écrasant à l'écumoire. Versez sur tamis en pressant ou non (si vous pressez, la gelée obtenue est moins claire mais plus abondante). Pesez le jus, ajoutez le même poids de sucre, amenez à ébullition. Laissez cuire 20 minutes. Mettez en pots. Préparez de même la gelée de myrtilles.\n\nGroseilles à froid: lavez les groseilles, rouges de préférence, égouttez-les. Mettez dans une bassine avec quelques cuillerées d'eau, écrasez avec l'écumoire jusqu'à ce que le jus s'écoule. À l'ébullition, arrêtez la cuisson, filtrez rapidement. Ajoutez dans le jus encore chaud 1,5 kg de sucre sans cesser de tourner jusqu'à complète dissolution du sucre. Mettez en pots. Tenez deux jours dans un endroit sec avant de couvrir. Cette gelée est de moindre consistance, mais se conserve relativement bien.\n\nPommes au citron: pour 2 kg de pommes (reinettes de préférence), 2 citrons, 3 litres d'eau. Lavez les fruits. Coupez les pommes en quartiers sans enlever les pépins, puis en tranches. Arrosez de jus de citron. Mettez les tranches de pommes dans la bassine avec l'eau qui doit les recouvrir. Amenez à ébullition, laissez cuire jusqu'à ce que les pommes soient tendres. Versez sur un tamis. Laissez égoutter sans presser (24 heures). Mesurez le jus recueilli. Ajoutez pour un litre de jus 850 g de sucre. Laissez cuire 20 minutes à partir de l'ébullition, en écumant souvent. Mettez en pots.\n\nGelée de coings: choisir des coings assez gros, bien mûrs et jaunes, mais ni cotonneux, ni pierreux. Brossez-les énergiquement pour enlever le duvet. Cette gelée se prépare comme la gelée de pommes, mais en ajoutant davantage d'eau, la cuisson étant beaucoup plus longue: il faut pratiquement 2 litres d'eau pour 1 kg de coings. La cuisson peut varier de 40 minutes à 1 h 30 (à petit frémissement, bassine couverte). Égouttez les coings sur un tamis ou dans un torchon suspendu (une nuit minimum). Comptez le même poids de sucre que de jus, et cuisez un quart d'heure avec vanille et zeste de citron. Mettez en pots.",
    "english": "THE SECRET OF JAM-MAKING — Tradition is coming back: homemade jam, the old-fashioned way. Here's advice and technique.\n\nCOOKING SUGAR\nJam only becomes jam once the fruit is cooked in sugar. The method varies from recipe to recipe, but it's always essential to know the stages of cooking sugar — that preserving element for cooked fruit, whether as whole-fruit jam, jelly, or marmalade.\nSugar cooking can technically be measured with a saccharimeter, or syrup gauge, which reads the syrup's density. Since that tool is impractical for home use, here's a hands-on method that, with a little practice, becomes second nature.\nFor 1 kg sugar, use 200 g water — enough to fully moisten the sugar. Use granulated or caster sugar; avoid sugar cubes. Put the sugar and water in the preserving pan, with a skimmer, wooden spatula, and a bowl of cold water close at hand. Start over very low heat so the sugar melts evenly. Don't shake the pan or stir the sugar — it would crystallize.\n\nTHE STAGES OF COOKING SUGAR\n— Smooth / nappé: the sugar comes to a boil. Dip the skimmer — the syrup coats it in a sheet; at this point you can raise the heat.\n— Pearl (perlé): bubbles form on the surface of the syrup, like large blisters.\n— Thread (filet): dip the wooden spatula quickly in cold water, then in the sugar, then back in the cold water. Take the syrup left on the spatula between thumb and forefinger: it stretches slowly into a thread between your fingers (braver cooks skip the second dip and just stretch the syrup straight off the spatula).\n— Soft ball (petit boulé): dip the spatula in water, then sugar, then water again; the syrup rolls between your fingers into a soft ball.\n— Big blown bubbles (grand soufflé): dip the skimmer right into the syrup and blow through it; it forms large, light bubbles. For jam-making, you should never cook sugar past this stage — but here are the later stages too, for reference.\n— Crack (cassé): stretched between two fingers, the syrup forms threads that snap like glass. This stage is used in confectionery, for dipping candied fruit.\n— Caramel: with no water left, the sugar turns color. All these stages follow closely on each other's heels, so watch closely as you go. Once the sugar reaches the stage you want, it must not keep cooking — add the fruit immediately. Overcooked syrup makes poor jam. If that happens by accident, add a tablespoon of water and check the stage again. Depending on the recipe, the stage used is usually the thread, the soft ball, or the blown-bubble stage.\n\nJELLIES\nNot just any fruit will set into a jelly. The fruit needs to be rich in \"pectin,\" a natural substance that turns to gel when cooked — pectin is what makes jam or jelly set. You can always boost a fruit's pectin by adding a store-bought \"gelling\" product made from fruit like apples. Some recipes add apples directly to boost pectin, which changes the flavor a little.\nRich in pectin: cluster fruits (redcurrants, blackcurrants); certain berries (raspberries, blueberries, blackberries); some pitted or seeded fruits (apples, quinces, oranges — zest only). True jellies are made from fruit juice alone.\n\nRedcurrant jelly: 1.5 kg redcurrants yields about 700 g juice; use an equal weight of sugar. Wash and destem the currants, put in the pan with 2-3 spoonfuls water, bring gently to a boil, crushing the fruit with the back of the skimmer. Once boiling, cover the pan and let the fruit burst and release its juice for 10 minutes. Pour through a fine sieve or hair strainer and let drain, pressing occasionally (or tie in a fine cloth and wring it out). Weigh the juice (tare the pan or a bowl first). Add an equal weight of sugar, let it fully dissolve, bring to a gentle boil. Once boiling, skim off the foam. Keep at a light boil for just 5 minutes. Check if it's set by dropping a little onto a plate — it should set immediately. Pot up right away. Cover 48 hours later, once the jelly has fully set.\n\nWhite Currants with Wild Strawberries: put the currants, still on their stems, in the pan with two glasses of water. Bring to a good boil, stirring. Once the fruit bursts, pour through a sieve without pressing. Add an equal weight of sugar to the juice, stir to combine. Cook 15 minutes. [This entry continues with an apple-jelly-style method — see Apple and Lemon Jelly below, which shares its technique.]\n\nRed Fruit Jelly: makes 4-5 jars of 500 g: 1 kg blackcurrants, 500 g gooseberries, 250 g raspberries, 1 glass water, roughly 1 kg sugar (weigh the juice to confirm). Wash the fruit, put in the pan over low heat, crushing with the back of the skimmer until the fruit releases its juice. Pour through a sieve, or press in a cloth. Weigh the juice, add an equal weight of sugar, let dissolve, bring to a boil over low heat. Keep boiling 15 minutes. Check doneness with the plate test.\n\nBlackberry Jelly: for 2 kg very ripe blackberries, a glass of water, a cup of deep red blackberries. Put the washed fruit in the pan with the water. Let it \"burst,\" crushing with the skimmer. Pour through a sieve, pressing or not (pressing gives a more abundant but cloudier jelly). Weigh the juice, add an equal weight of sugar, bring to a boil. Cook 20 minutes. Pot up. Blueberry jelly is made the same way.\n\nCold-Process Redcurrant Jelly: wash the currants (red ones are best), drain. Put in the pan with a few spoonfuls of water, crush with the skimmer until the juice runs. Once boiling, stop cooking and strain quickly. While the juice is still hot, add 1.5 kg sugar, stirring constantly until fully dissolved. Pot up. Leave uncovered in a dry place for two days before covering. This jelly is a little softer, but keeps reasonably well.\n\nApple and Lemon Jelly: for 2 kg apples (reinette variety preferred), 2 lemons, 3 liters water. Wash the fruit. Quarter the apples, seeds and all, then slice. Drizzle with lemon juice. Put the apple slices in the pan with enough water to cover. Bring to a boil, cook until the apples are soft. Pour through a sieve. Let drain without pressing (24 hours). Measure the juice collected. Add 850 g sugar per liter of juice. Boil 20 minutes, skimming often. Pot up.\n\nQuince Jelly: choose fairly large, ripe, yellow quinces — not fuzzy or gritty. Scrub them well to remove the down. This jelly is made the same way as apple jelly, but with more water, since it cooks much longer: you need almost 2 liters water per kg of quinces. Cooking can take anywhere from 40 minutes to 1.5 hours (at a gentle simmer, pan covered). Drain the quinces on a sieve or in a hanging cloth (overnight, at least). Use an equal weight of sugar to juice, and cook 15 minutes with vanilla and lemon zest. Pot up.",
    "note": "Pieced together from two scanned pages.",
    "tags": []
  },
  {
    "slug": "conseil-cuisson-tartes",
    "title_fr": "Conseil: la cuisson des tartes",
    "title_en": "Tip: Baking Tarts",
    "course": "notes",
    "images": [
      "images/scans/conseil-cuisson-tartes.jpg"
    ],
    "french": "Four doux, ne pas saisir.\n1/4 h environ, à surveiller.\nN.B. Faire une tarte avant et profiter du four.\nPour décoller, mettre le papier dans l'eau tiède,\npuis du papier (sulfurisé).",
    "english": "Low oven, don't let it brown too quickly.\nAbout 15 minutes — keep an eye on it.\nN.B. Bake one tart first, to make the most of having the oven on.\nTo loosen the paper, dip it briefly in warm water,\nthen use (parchment) paper.",
    "note": "",
    "tags": []
  },
  {
    "slug": "tiramisu",
    "title_fr": "Tiramisu",
    "title_en": "Tiramisu",
    "course": "desserts",
    "images": [
      "images/scans/tiramisu.jpg"
    ],
    "french": "Pour 6 personnes:\n20 biscuits à la cuiller\n2 cl de whisky\n4 tasses de café très fort\n250 g de crème mascarpone (dans les boutiques italiennes)\n150 g de sucre\n5 oeufs\ncacao en poudre sans sucre\n3/4 de litre de crème anglaise\n\nPréparation: 35 mn. Pas de cuisson.\n\nLE CONSEIL DU CHEF: Jean-Claude Cassé, du restaurant Chez Caruso, à Marseille, vous recommande de boire un vin blanc moelleux avec ce dessert.\n\nSéparez les jaunes des blancs d'oeufs, mélangez les jaunes avec la moitié du sucre jusqu'à ce que le mélange soit homogène, ajoutez le mascarpone. Montez les blancs en neige ferme avec le reste du sucre. Ajoutez-les aux jaunes, en soulevant la masse à l'aide d'une spatule. Imbibez les biscuits avec le café mélangé au whisky. Tapissez le fond d'un moule rectangulaire avec le tiers des biscuits, couvrez de la moitié de la crème, saupoudrez légèrement de cacao, remettez une couche de biscuits, le reste de crème, un peu de cacao. Terminez par des biscuits, saupoudrez d'une bonne couche de cacao, striez-la à l'aide d'une fourchette. Tenez au frais jusqu'au moment de servir. Coupez des parts, dressez-les sur des assiettes individuelles, présentez en même temps une saucière de crème anglaise.",
    "english": "Serves 6:\n20 ladyfinger biscuits\n2 cl (a splash) whisky\n4 cups very strong coffee\n250 g mascarpone (found in Italian delis)\n150 g sugar\n5 eggs\nunsweetened cocoa powder\n3/4 liter crème anglaise (custard)\n\nPrep time: 35 min. No cooking.\n\nTHE CHEF'S TIP: Jean-Claude Cassé, of the restaurant Chez Caruso in Marseille, recommends a sweet white wine with this dessert.\n\nSeparate the egg yolks from the whites; mix the yolks with half the sugar until smooth, then add the mascarpone. Whip the whites to stiff peaks with the rest of the sugar. Fold them into the yolk mixture with a spatula. Soak the biscuits in the coffee mixed with whisky. Line the bottom of a rectangular dish with a third of the biscuits, cover with half the cream, dust lightly with cocoa, add another layer of biscuits, the rest of the cream, a little more cocoa. Finish with a layer of biscuits, dust generously with cocoa, and score it with a fork. Keep chilled until serving. Cut into portions, plate individually, and serve alongside a small pitcher of crème anglaise.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "soupe-farine-grillee",
    "title_fr": "Soupe: farine grillée (base)",
    "title_en": "Toasted Flour Soup Base",
    "course": "soups",
    "images": [
      "images/scans/soupe-farine-grillee.jpg"
    ],
    "french": "Beurre + farine → faire roussir.\nAjouter de l'eau.",
    "english": "Butter + flour → cook until browned.\nAdd water.",
    "note": "One of four short recipes on a single page of notes.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "gaspacho",
    "title_fr": "Gaspacho de tomates et concombres à l'ail nouveau et à la sauge",
    "title_en": "Tomato and Cucumber Gazpacho with New Garlic and Sage",
    "course": "soups",
    "images": [
      "images/scans/gaspacho.jpg"
    ],
    "french": "Pour 6 personnes:\n1 concombre de 350 g\n750 g de tomates bien mûres\n1 oignon nouveau de 50 g (blanc, pas jaune)\n6 feuilles de sauge\n6 gousses d'ail nouveau\n4 c.à.s. d'huile d'olive extra vierge\nsel, poivre du moulin au goût\njus d'1/2 citron\n1 échalote\n\nPelez le concombre, coupez-le en deux dans le sens de la longueur, retirez les pépins, émincez-le et réservez-le avec l'échalote émincée. Salez et poivrez légèrement (poivre blanc). Laissez mariner 20 minutes.\nCoupez les tomates en deux, non pelées, pressez-les pour éliminer les graines, concassez-les grossièrement. Ajoutez 3 gousses d'ail émincées, l'oignon haché et l'huile d'olive, laissez mariner 30 minutes environ. S+P, remuez, filmez pour réserver.\nÉmincez finement les feuilles de sauge, blanchissez-les vivement, rafraîchissez, puis réservez.\nPassez le concombre mariné avec son échalote au blender, puis passez au chinois en foulant bien. Mixez longuement mais pas trop vite pour que ce soit bien onctueux. Assaisonnez. Réservez au frais.\nPassez la marinade de tomates au blender en laissant créer une émulsion, en augmentant la vitesse pour obtenir un liquide bien lisse. Passez au chinois fin, assaisonnez, gardez au frais.\nCoupez en très fines lamelles l'ail restant, blanchissez-les vivement. Égouttez dès que c'est froid.\n\nService: se sert en assiette creuse glacée; versez aux deux tiers de la profondeur de l'assiette la base de tomates. Au centre, versez délicatement la base de concombres. Parsemez de fines tranches d'ail et d'une touffe de sauge.",
    "english": "Serves 6:\n1 cucumber, 350 g\n750 g ripe tomatoes\n1 spring onion, 50 g (white, not yellow)\n6 sage leaves\n6 cloves new-season garlic\n4 tbsp extra virgin olive oil\nsalt, pepper to taste\njuice of 1/2 lemon\n1 shallot\n\nPeel the cucumber, halve lengthwise, remove the seeds, slice, and set aside with the sliced shallot. Season lightly with salt and white pepper. Let marinate 20 minutes.\nHalve the tomatoes (unpeeled), press out the seeds, and chop coarsely. Add 3 sliced garlic cloves, the chopped onion, and the olive oil; marinate about 30 minutes. Season, stir, and cover to rest.\nFinely slice the sage, blanch briefly, refresh in cold water, and set aside.\nBlend the marinated cucumber and shallot, then strain through a fine sieve, pressing well. Blend at length but not too fast, for a smooth texture. Season. Chill.\nBlend the tomato marinade, starting slow to build an emulsion, then increasing speed for a smooth liquid. Strain finely, season, and chill.\nThinly slice the remaining garlic, blanch briefly, and drain once cold.\n\nTo serve: in chilled shallow bowls, pour the tomato base to two-thirds depth. In the center, gently pour the cucumber base. Scatter with thin garlic slices and a few sage leaves.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "tomates-provencales",
    "title_fr": "Tomates provençales",
    "title_en": "Tomatoes, Provençal Style",
    "course": "sides",
    "images": [
      "images/scans/tomates-provencales.jpg"
    ],
    "french": "Faire revenir à l'huile, à la poêle, + persillade.",
    "english": "Sauté in oil, in a pan, + parsley and garlic (persillade).",
    "note": "Shares a page with Purées, Piperade, and Peppers in Mustard Sauce.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "gras-double-hongroise",
    "title_fr": "Gras double à la hongroise",
    "title_en": "Tripe, Hungarian Style",
    "course": "mains",
    "images": [
      "images/scans/gras-double-hongroise.jpg"
    ],
    "french": "Faire découper par le boucher.\nEssuyer dans un linge.\nHuile + oignons taillés. Ajouter le gras double.\nOignons blonds, dorés.\n+ un filet de vinaigre au moment de servir.",
    "english": "Have the butcher cut it for you.\nPat it dry with a cloth.\nOil + sliced onions. Add the tripe.\nGolden, lightly browned onions.\n+ a dash of vinegar just before serving.",
    "note": "One of four short recipes on a single page of notes.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "gras-double-nature",
    "title_fr": "Gras double",
    "title_en": "Tripe, Plain",
    "course": "mains",
    "images": [
      "images/scans/gras-double-nature.jpg"
    ],
    "french": "Découper en lamelles.\nFaire blondir des oignons dans la poêle.\nAjouter la viande.\nCuire doucement, sans couvrir.",
    "english": "Cut into strips.\nBrown onions in the pan.\nAdd the meat.\nCook gently, uncovered.",
    "note": "Shares a page with Veal Lights and Navarin.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "marmitako-thon",
    "title_fr": "Marmitako de thon",
    "title_en": "Tuna Marmitako",
    "course": "mains",
    "images": [
      "images/scans/marmitako-thon.jpg"
    ],
    "french": "Pour 6 personnes:\n1 kg thon\n2 poivrons verts\n2 poivrons rouges\n2 oignons\n2 gousses d'ail\n2 cl huile d'olive\n1 kg pommes de terre moyennes\n1 dl vin blanc\nsel, poivre\nPréparation: 30 mn. Cuisson: 30 mn.\n\nDécoupez le thon en cubes en enlevant la peau et les arêtes. Égrenez les poivrons, émincez-les ainsi que les oignons et l'ail épluchés. Pelez les pommes de terre. Faites chauffer l'huile d'olive, mettez les légumes émincés à revenir, ajoutez les dés de thon, les pommes de terre, mouillez avec le vin blanc en grattant les sucs du fond de la cocotte. Complétez avec l'eau à hauteur, salez, poivrez, couvrez, laissez mijoter 30 minutes. Servez bien chaud.\n\nLe conseil du chef: Christian Duplaissy, de La Tantina de la Playa, à Bidart, vous recommande de boire un vin espagnol rouge avec ce poisson, un murcia par exemple.",
    "english": "Serves 6:\n1 kg tuna\n2 green bell peppers\n2 red bell peppers\n2 onions\n2 cloves garlic\n2 cl (20 ml) olive oil\n1 kg medium potatoes\n1 dl (100 ml) white wine\nsalt, pepper\nPrep: 30 min. Cooking: 30 min.\n\nCut the tuna into cubes, removing the skin and bones. Seed the peppers and slice them, along with the peeled onions and garlic. Peel the potatoes. Heat the olive oil, sauté the sliced vegetables, add the tuna cubes and potatoes, and deglaze with the white wine, scraping up the bits from the bottom of the pot. Top up with water to cover, salt, pepper, cover, and simmer for 30 minutes. Serve piping hot.\n\nThe chef's tip: Christian Duplaissy, of La Tantina de la Playa in Bidart, recommends a Spanish red wine with this fish dish — a Murcia, for example.",
    "note": "Shares a page with Oriental-Style Beets.",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "thon-arachides",
    "title_fr": "Sauté de thon aux arachides",
    "title_en": "Tuna Sauté with Peanuts",
    "course": "mains",
    "images": [
      "images/scans/thon-arachides.jpg"
    ],
    "french": "Pour 6 personnes:\n1 darne de thon, environ 700 g\n250 g de riz long\n2 poivrons verts\n1 poivron rouge\n20 petits oignons\n6 cuillerées à soupe d'huile d'arachide\nsel\nPour la sauce:\n4 cuillerées à soupe d'huile d'arachide\n3 oignons\n2 cuillères à café de curry\n1/2 litre de jus de pomme\n200 g d'arachides salées\nsel, poivre\n\nPréparation: 30 mn. Cuisson: 40 mn.\n\nNOTRE CONSEIL: ce plat d'inspiration africaine peut être préparé à l'avance. Il se réchauffe très bien, couvert, à four doux.\n\nLavez le riz et plongez-le dans une grande quantité d'eau bouillante salée. Arrêtez la cuisson au bout de 10 minutes et égouttez le riz. Faites dorer, dans 2 cuillerées à soupe d'huile chaude, la darne de thon sur ses deux faces, comptez 10 minutes de cuisson. Réservez-la, détaillez-la en gros morceaux. Émincez les poivrons, faites-les fondre doucement à l'huile d'arachide dans une poêle, avec les petits oignons, salez. La sauce: dans une casserole, mettez à fondre dans l'huile les oignons hachés. Ajoutez le curry, le jus de pomme, les arachides pilées, une pincée de sel, un tour de moulin à poivre. Amenez à ébullition, maintenez-la 5 minutes. Mélangez le riz, les poivrons, les oignons et le thon dans une sauteuse, arrosez de sauce et terminez la cuisson sur feu doux pendant encore 10 bonnes minutes.",
    "english": "Serves 6:\n1 tuna steak, about 700 g\n250 g long-grain rice\n2 green bell peppers\n1 red bell pepper\n20 small onions\n6 tbsp peanut oil\nsalt\nFor the sauce:\n4 tbsp peanut oil\n3 onions\n2 tsp curry powder\n1/2 liter apple juice\n200 g salted peanuts\nsalt, pepper\n\nPrep: 30 min. Cooking: 40 min.\n\nOUR TIP: this African-inspired dish can be made ahead. It reheats very well, covered, in a low oven.\n\nRinse the rice and plunge it into a large pot of salted boiling water. Stop cooking after 10 minutes and drain. In 2 tbsp hot oil, brown the tuna steak on both sides, about 10 minutes total. Set it aside and cut it into large chunks. Slice the peppers and cook them gently in peanut oil in a pan, with the small onions; season with salt. For the sauce: in a saucepan, melt the chopped onions in the oil. Add the curry, apple juice, crushed peanuts, a pinch of salt, a turn of the pepper mill. Bring to a boil and keep it boiling for 5 minutes. Combine the rice, peppers, onions, and tuna in a sauté pan, pour the sauce over, and finish cooking over low heat for another good 10 minutes.",
    "note": "",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "mou-de-veau",
    "title_fr": "Mou de veau",
    "title_en": "Veal Lights",
    "course": "mains",
    "images": [
      "images/scans/mou-de-veau.jpg"
    ],
    "french": "Faire couper le morceau.\nFaire revenir à l'huile, puis le sortir.\nFaire blondir la farine + eau, + persillade.\nRemettre le morceau, 1/2 heure, + pommes de terre.",
    "english": "Have the piece cut up.\nBrown it in oil, then remove it.\nMake a blond roux with flour + water, + parsley-garlic (persillade).\nReturn the meat to the pan, 1/2 hour, + potatoes.",
    "note": "Shares a page with Tripe and Navarin.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "purees-legumes",
    "title_fr": "Purées (carotte, pomme de terre, navets)",
    "title_en": "Vegetable Purées (Carrot, Potato, Turnip)",
    "course": "sides",
    "images": [
      "images/scans/purees-legumes.jpg"
    ],
    "french": "Purées: carotte et pomme de terre.\nNavets.",
    "english": "Purées: carrot and potato.\nTurnip.",
    "note": "Shares a page with Tomatoes Provençal, Piperade, and Peppers in Mustard Sauce.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "visitandines",
    "title_fr": "Visitandines",
    "title_en": "Visitandines (Almond Butter Cakes)",
    "course": "desserts",
    "images": [
      "images/scans/visitandines.jpg"
    ],
    "french": "Mettre dans une terrine:\n150 g amandes effilées bien sèches\n200 g de sucre vanillé\nMélangez peu à peu à la spatule.\n4 blancs d'oeufs, sans être fouettés.\nLorsque la pâte a été travaillée environ 10 mn, lui mêler:\n75 g de farine et 200 g de beurre.\nCuit doucement jusqu'à ce qu'il commence à brunir (beurre noisette), le mêler presque froid et cuire la pâte en moules ovales ou ronds, beurrés et farinés, à four chaud, 20 à 25 minutes.\n(Le beurre doit être rigoureusement noisette.)",
    "english": "Put in a bowl:\n150 g well-dried sliced almonds\n200 g vanilla sugar\nGradually mix with a spatula.\n4 egg whites, not whipped.\nOnce the batter has been worked for about 10 minutes, mix in:\n75 g flour and 200 g butter.\nCook the butter gently until it starts to brown (beurre noisette), let it cool almost completely, then fold it in and bake the batter in buttered, floured oval or round molds, in a hot oven, 20-25 minutes.\n(The butter must be properly browned, hazelnut-colored.)",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "gaufres",
    "title_fr": "Gaufres",
    "title_en": "Waffles",
    "course": "desserts",
    "images": [
      "images/scans/gaufres.jpg"
    ],
    "french": "250 g farine\n2 oeufs\n2 cuillères de beurre\n+ eau, pour faire une pâte.\nCuire au fer à gaufres bien chaud.",
    "english": "250 g flour\n2 eggs\n2 tbsp butter\n+ water, to make a batter.\nCook in a well-heated waffle iron.",
    "note": "Shares a page with Nana's Cheese Soufflé.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "gateau-yaourt",
    "title_fr": "Gâteau yaourt",
    "title_en": "Yogurt Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-yaourt.jpg"
    ],
    "french": "1 yaourt\n1 pot huile\n2 pots sucre\n3 pots farine\n2 oeufs\n1 paquet levure\n2 cuillères à soupe rhum\n\nBeurrer le moule, saupoudrer le dessus de sucre.\nFour chaud, 45 minutes.",
    "english": "1 yogurt (use the empty pot to measure the rest)\n1 pot oil\n2 pots sugar\n3 pots flour\n2 eggs\n1 packet baking powder\n2 tbsp rum\n\nButter the pan, sprinkle the top with sugar.\nBake in a hot oven, 45 minutes.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "salade-courgettes-coriandre",
    "title_fr": "Salade de courgettes au coriandre",
    "title_en": "Zucchini Salad with Coriander",
    "course": "starters",
    "images": [
      "images/scans/salade-courgettes-coriandre.jpg"
    ],
    "french": "1,5 kg courgettes\nCouper en 4 dans la longueur, puis en rondelles\n4 ou 5 oignons nouveaux\nHuile d'olive, faire chauffer\nJeter les courgettes, les faire sauter\n+ jus d'1 citron\nSel, poivre, graines de coriandre\nCuire 15 à 20 minutes, à couvert\nMenthe fraîche avant de servir.",
    "english": "1.5 kg zucchini\nCut lengthwise into 4, then into rounds\n4 or 5 spring onions\nOlive oil, heated\nAdd the zucchini, and sauté\n+ juice of 1 lemon\nSalt, pepper, coriander seeds\nCook 15-20 minutes, covered\nFresh mint before serving.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "soupe-courgettes-bassoul",
    "title_fr": "Potage aux courgettes (Bassoul)",
    "title_en": "Zucchini Soup (Bassoul)",
    "course": "soups",
    "images": [
      "images/scans/soupe-courgettes-bassoul-1.jpg",
      "images/scans/soupe-courgettes-bassoul-2.jpg"
    ],
    "french": "1 kg de courgettes\n1 litre d'eau\n1 cube de bouillon de poulet\n100 g (ou 50 g) de crème fraîche\nsel, poivre\n\nFaire cuire les courgettes dans l'eau avec le cube de bouillon, le sel et le poivre. Une fois cuites, les passer au mixeur avec un peu de leur jus de cuisson. Ajouter la purée obtenue et la crème, au jus de cuisson. Mélanger. Faire bouillir 2 à 3 mn.\nServir, si l'on veut, avec du parmesan râpé.\n\nOn peut utiliser d'autres légumes que la courgette. Le procédé est exactement le même:\nEndives\nCarottes\nCarottes + courgettes + pomme de terre (1 ou 2)\nCresson (2 bottes dans un litre d'eau; il faudra passer ensuite le potage au tamis)\nPoireaux + pomme de terre\nHaricots verts\nChampignons\nPetits pois\n\nJ'ai essayé une fois de faire un potage aux herbes, de la même manière. C'était très bon. Il y avait:\nPersil\nCresson (au choix)\nMenthe\nFeuilles de céleri\nBasilic\nEstragon\nFenouil\nUn peu de thym, et une pomme de terre.\nOn peut aussi rajouter d'autres herbes.",
    "english": "1 kg zucchini\n1 liter water\n1 chicken bouillon cube\n100 g (or 50 g) crème fraîche\nsalt, pepper\n\nCook the zucchini in the water with the bouillon cube, salt, and pepper. Once cooked, blend with a little of their cooking liquid. Add the purée and the cream to the rest of the cooking liquid. Mix. Boil 2-3 minutes.\nServe with grated parmesan, if you like.\n\nOther vegetables can replace zucchini — the method is exactly the same:\nEndive\nCarrots\nCarrots + zucchini + potato (1 or 2)\nWatercress (2 bunches in a liter of water; strain the soup through a sieve afterward)\nLeeks + potato\nGreen beans\nMushrooms\nPeas\n\nI once tried making an herb soup the same way. It was very good. It had:\nParsley\nWatercress (optional)\nMint\nCelery leaves\nBasil\nTarragon\nFennel\nA little thyme, and one potato.\nOther herbs can be added too.",
    "note": "To make kosher: use vegetable bouillon instead of chicken, and a non-dairy cream alternative (or just leave the cream out) in place of the crème fraîche and parmesan.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "techniques-de-base",
    "title_fr": "Les bases de cuisine",
    "title_en": "Kitchen Basics for These Recipes",
    "course": "notes",
    "images": [],
    "french": "BIEN MONTER LES BLANCS EN NEIGE\n\nUn grand nombre de ces recettes — surtout les gâteaux sans farine, comme le gâteau Corava, le gâteau chocolat d'Assouline, ou le gâteau chocolat de Pessah — ne lèvent que grâce aux blancs montés en neige, les amandes ou noix moulues remplaçant la farine. La recette se contente souvent d'écrire « blancs en neige » ou « blancs battus en neige ferme » sans plus de détail — en voici donc le rappel.\n\nSéparez les oeufs avec soin: la moindre trace de jaune empêche les blancs de bien monter. Utilisez un saladier parfaitement propre, sec et sans trace de gras (une goutte d'huile ou un bol humide suffit à tout gâcher). Commencez à battre doucement jusqu'à ce que les blancs moussent, puis augmentez la vitesse. Une pincée de sel ou quelques gouttes de jus de citron les aide à bien se tenir. Les blancs « mousseux » ou « en neige molle » gardent une forme mais le bec retombe; en « neige ferme », le bec reste bien droit quand on soulève le fouet, et les blancs sont brillants, ni secs ni granuleux — il ne faut pas les battre au-delà.\n\nPour incorporer les blancs montés à une pâte plus lourde (chocolat, amandes, etc.), ajoutez d'abord environ un tiers des blancs et mélangez franchement pour assouplir la pâte. Puis ajoutez le reste et mélangez délicatement à la spatule, en coupant le centre et en remontant sur les bords, en tournant le saladier au fur et à mesure — sans remuer en rond, ce qui ferait retomber l'air. Quelques traces de blanc ne sont pas graves; l'important est de garder le plus d'air possible, puisque c'est lui qui fait lever le gâteau.\n\nLE BAIN-MARIE\n\nUtilisé de deux façons dans ce recueil. Sur le feu, c'est simplement un récipient posé au-dessus (sans y toucher) d'une casserole d'eau qui frémit doucement — pour faire fondre le chocolat sans le brûler, ou préparer une crème comme la crème anglaise, qu'une chaleur directe ferait tourner. Au four, cela veut dire poser le plat ou le moule rempli dans un plat plus grand, puis verser de l'eau chaude dans ce dernier jusqu'à mi-hauteur — c'est ainsi que cuisent en douceur les crèmes, terrines et pâtés (crème renversée, pain de poisson, foie gras), sans se dessécher ni se fendre.\n\nLES TEMPÉRATURES DE FOUR\n\nCes recettes mélangent les anciens numéros de « thermostat », les degrés tout simples, et des indications plus vagues comme « four doux », « four moyen », « four chaud » ou « très chaud ». À titre indicatif:\nThermostat 1-2 (doux) = environ 100-120°C\nThermostat 3-4 = environ 140-160°C\nThermostat 5-6 (moyen) = environ 160-180°C\nThermostat 7-8 (chaud) = environ 200-220°C\nThermostat 9 (très chaud) = environ 240-250°C\n\nLES ANCIENNES MESURES\n\nPlutôt qu'à la balance, beaucoup de ces recettes se mesurent au verre ou à la tasse qu'on avait sous la main. À titre indicatif:\nUn verre vaut environ 200 à 250 ml.\nUne tasse vaut environ 150 à 200 ml.\nUne cuillère à soupe vaut environ 15 ml; une cuillère à café, environ 5 ml.\nUne pincée, c'est tout naturellement ce qui tient entre deux doigts.\nUne noix de beurre est un petit morceau, environ 15 à 20 g.\nUne livre vaut environ 500 g.\n\nCUIRE UNE PÂTE À BLANC\n\nPour les tartes garnies de quelque chose qui demande peu ou pas de cuisson supplémentaire (une crème, un appareil, des fruits frais), on fait souvent cuire la pâte seule d'abord. Tapissez la pâte étalée d'une feuille de papier sulfurisé, garnissez de haricots secs, de riz ou de poids à tarte (pour que le fond ne gonfle pas et que les bords ne s'affaissent pas), et faites cuire jusqu'à ce qu'elle soit prise et légèrement dorée. Retirez le papier et les poids, et prolongez la cuisson quelques minutes si le fond est encore pâle, avant de garnir.\n\nFAIRE UN ROUX\n\nLa base d'une sauce blanche (béchamel), et de la plupart des sauces liées de ce recueil: faites fondre du beurre dans une casserole, ajoutez-y un poids égal de farine, et laissez cuire doucement une minute ou deux sans le laisser brunir (pour une sauce blanche), ou jusqu'à ce qu'il prenne une couleur noisette claire (pour un roux brun, ou « blond », utilisé dans des plats comme le mou de veau ou le navarin). Incorporez ensuite le liquide — lait pour la béchamel, bouillon ou eau pour une sauce brune — peu à peu, hors du feu au début pour éviter les grumeaux, avant de remettre sur le feu pour faire épaissir.",
    "english": "WHIPPING EGG WHITES TO STIFF PEAKS (BLANCS EN NEIGE)\n\nSo many of these recipes — especially the flourless cakes, like the Corava cake, Assouline's chocolate cake, or the Passover chocolate cake — rise entirely on whipped egg whites, with ground almonds or nuts standing in for flour. The recipe will simply say \"blancs en neige\" or \"blancs battus en neige fermes\" and assume you know the rest, so here it is.\n\nSeparate the eggs carefully — even a trace of yolk will stop the whites from whipping properly. Use a completely clean, dry, grease-free bowl (a drop of oil or a wet bowl will also ruin them). Start beating slowly until the whites turn foamy, then increase speed. A pinch of salt or a few drops of lemon juice helps them firm up. \"Soft peaks\" means the whites hold a shape but the tip flops over; \"stiff peaks\" (neige ferme) means the tip stands straight up when you lift the whisk, and the whites look glossy, not dry or grainy — don't overbeat past this point.\n\nTo fold whipped whites into a heavier batter (chocolate, almonds, etc.), add about a third of the whites first and stir it in firmly to loosen the batter. Then add the rest and fold gently with a spatula, cutting down through the middle and sweeping up and around the sides, turning the bowl as you go — not stirring in circles, which knocks the air back out. A few streaks of white are fine; the point is to keep as much air in as possible, since that air is doing the work a leavener would otherwise do.\n\nBAIN-MARIE (WATER BATH)\n\nUsed two ways in this collection. On the stovetop, it just means a bowl or pan set over (not touching) a pot of gently simmering water — for melting chocolate without scorching it, or making a custard like crème anglaise, where direct heat would curdle the eggs. In the oven, it means setting your filled dish or mold inside a larger pan, then pouring hot water into the outer pan so it comes partway up the sides — this is how custards, terrines, and pâtés (crème renversée, pain de poisson, foie gras) cook through gently and evenly without drying out or cracking.\n\nOVEN TEMPERATURES\n\nThese recipes mix old gas-mark \"thermostat\" numbers with plain Celsius and with vaguer instructions like \"four doux\" (low oven), \"four moyen\" (medium), and \"four chaud\" or \"très chaud\" (hot/very hot). As a rough guide:\nThermostat 1-2 (doux/low) = about 100-120°C / 210-250°F\nThermostat 3-4 = about 140-160°C / 285-320°F\nThermostat 5-6 (moyen/medium) = about 160-180°C / 320-355°F\nThermostat 7-8 (chaud/hot) = about 200-220°C / 390-430°F\nThermostat 9 (très chaud/very hot) = about 240-250°C / 465-480°F\n\nOLD-FASHIONED MEASURES\n\nRather than scales, many of these recipes measure by whatever glass or cup was on hand. As a rough guide:\nA verre (glass) is about 200-250 ml.\nA tasse (cup/teacup) is about 150-200 ml.\nA cuillère à soupe (tablespoon) is about 15 ml; a cuillère à café (teaspoon) is about 5 ml.\nA pincée (pinch) is, naturally, whatever fits between two fingers.\nA noix de beurre (\"walnut\" of butter) is a small knob, roughly 15-20 g.\nUne livre (a pound, the old French measure) is about 500 g, not the 454 g of an English pound — close enough for these purposes.\n\nBLIND-BAKING A CRUST (CUIRE À BLANC)\n\nFor tarts filled with something that needs little or no further baking (a custard, a cream, fresh fruit), the crust is often baked on its own first. Line the rolled-out dough with a sheet of parchment paper, fill it with dried beans, rice, or pie weights (so the base doesn't puff up or the sides slump), and bake until set and lightly golden. Remove the paper and weights, and bake a few minutes more if the base still looks pale, before filling.\n\nMAKING A ROUX\n\nThe base of a white sauce (béchamel), and of most of the thickened sauces in this collection: melt butter in a pan, stir in an equal weight of flour, and cook gently for a minute or two without letting it brown (for a white sauce) or until it turns a light hazelnut color (for a brown, or \"blond,\" sauce base, used in dishes like the mou de veau or the navarin). Then whisk in liquid — milk for béchamel, stock or water for a brown sauce — gradually, off the heat at first, to avoid lumps, before returning to the heat to thicken.",
    "note": "",
    "tags": []
  },
  {
    "slug": "creme-cafe-brune",
    "title_fr": "Crème au café dite « crème brune » (parve)",
    "title_en": "Coffee Cream, \"Brown Cream\" (Parve)",
    "course": "desserts",
    "images": [],
    "french": "Pour 8 personnes.\n\n1 cafetière de café fort (10 à 12 tasses), soit environ 1 litre de café fort.\nVerser chaud sur 200 g de sucre en poudre. Le café chaud fera fondre le sucre.\nBattre 8 oeufs entiers.\nLes verser sur le café sucré une fois qu'il est refroidi (il ne faut pas que le café soit chaud, car cela cuirait les oeufs).\nBien battre les oeufs dans le café refroidi.\nAjouter deux cuillères à soupe d'extrait de café (Trablit).\nPasser le tout à la passoire à mailles fines (chinois).\nVerser dans un plat et couvrir.\n\nCuisson: au bain-marie, et non au micro-ondes. Utiliser une cocotte en fonte (type Le Creuset), car le couvercle doit chauffer très fort sur le gaz. Pendant que l'eau du bain-marie chauffe, poser le couvercle bien chaud sur le plat couvert, lui-même posé sur la cocotte d'eau bouillante, pour que la crème cuise à la fois par en dessous et par en dessus. Laisser cuire ainsi environ 10 minutes.\nLaisser reposer, puis mettre au frigidaire.\n\nBon appétit.",
    "english": "Serves 8.\n\n1 pot of strong coffee (10-12 cups), about 1 liter of strong coffee.\nPour it hot over 200 g granulated sugar. The hot coffee will dissolve the sugar.\nBeat 8 whole eggs.\nPour them into the sweetened coffee once it has cooled (the coffee must not be hot, or it will cook the eggs).\nBeat the eggs in well with the cooled coffee.\nAdd two tablespoons of coffee extract (Trablit).\nStrain everything through a fine sieve (chinois).\nPour into a dish and cover.\n\nTo cook: in a bain-marie (water bath), not the microwave. Use a heavy pot (cast iron, like a Le Creuset), since the lid needs to get very hot on the gas burner. While the water in the pot heats, set the very hot lid over the covered dish, which sits on top of the pot of boiling water — so the custard gets gentle heat from below and above at once. Let it cook this way for about 10 minutes.\nLet rest, then refrigerate.\n\nBon appétit.",
    "note": "The original page first called for 15 minutes in the microwave, then had a correction added: cooked in a bain-marie instead, using a very hot heavy lid set over the covered dish for heat from above as well as below. The instructions here follow that correction.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "chnobs",
    "title_fr": "Chnobs",
    "title_en": "Chnobs (Chocolate Charlotte Cake)",
    "course": "desserts",
    "images": [],
    "french": "(12 personnes)\nMettre dans une casserole 300 g de chocolat,\n2 cuillères d'eau.\nFaire ramollir.\n+ 2 cuillères sucre en poudre.\nBien travailler.\nAjouter 1 à 1, 7 jaunes d'œufs, en réservant les blancs.\nPuis peu à peu, par petits morceaux, 260 g de beurre (ramolli). Travailler fortement.\nBattre les blancs en neige très ferme.\nMélanger à la pâte.\nBeurrer un moule à charlotte uni.\nLe remplir et mettre au froid.\nCe gâteau peut se faire la veille.\nPour le démouler, tremper le moule 1 seconde dans l'eau chaude.\nServir avec une crème anglaise au café.\nPour 8 personnes : 4 œufs, 250 g chocolat, 130 g beurre",
    "english": "(Serves 12)\nPut 300 g chocolate and 2 tablespoons water in a saucepan.\nLet it soften.\n+ 2 tablespoons powdered sugar.\nMix well.\nAdd, one at a time, 7 egg yolks, setting the whites aside.\nThen gradually, in small pieces, add 260 g softened butter. Beat vigorously.\nBeat the whites into very stiff peaks.\nFold into the batter.\nButter a plain charlotte mold.\nFill it and refrigerate.\nThis cake can be made the day before.\nTo unmold, dip the mold in hot water for 1 second.\nServe with coffee-flavored custard (crème anglaise).\nFor 8 people: 4 eggs, 250 g chocolate, 130 g butter",
    "note": "From a family recipe collection compiled by Isabelle Taillandier Modiano, from recipes gathered by Monique Taillandier Villard-Job and scanned by Caroline Taillandier Nagi.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "gateau-chocolat-mamie",
    "title_fr": "Gâteau Chocolat Mamie",
    "title_en": "Mamie's Chocolate Cake",
    "course": "desserts",
    "images": [],
    "french": "3 œufs, séparés\nPoids des œufs, en : sucre / beurre / farine / chocolat (à égalité avec le poids des œufs)\nMélanger jaunes + sucre.\n+ 1 cuillère à soupe café\n+ chocolat fondu\n+ beurre\n+ farine\n+ blancs en neige\nCaraméliser le moule.\nFour tiède, au bain-marie.\nCouvrir le gâteau.\nAu four 2h. Démouler.",
    "english": "3 eggs, separated\nWeight of the eggs, matched in: sugar / butter / flour / chocolate (equal to the weight of the eggs)\nMix the yolks with the sugar.\n+ 1 tablespoon coffee\n+ melted chocolate\n+ butter\n+ flour\n+ stiffly beaten egg whites\nCaramelize the mold.\nWarm oven, in a water bath (bain-marie).\nCover the cake.\nBake 2 hours. Turn out of the mold.",
    "note": "From a family recipe collection compiled by Isabelle Taillandier Modiano, from recipes gathered by Monique Taillandier Villard-Job and scanned by Caroline Taillandier Nagi.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "cake-roquefort-poires-noix",
    "title_fr": "Cake au roquefort, aux poires et aux noix",
    "title_en": "Pear, Walnut, and Roquefort Cake",
    "course": "starters",
    "images": [],
    "french": "Pour 6 à 8 personnes. Préparation : 15 min. Cuisson : 50 min.\n\n- 3 oeufs\n- 180 g de farine\n- 1 sachet de levure chimique\n- 10 cl de lait\n- 8 cl d'huile\n- 2 poires\n- 150 g de roquefort\n- 100 g de cerneaux de noix\n- 100 g de gruyère râpé\n- sel, poivre\n\n1. Dans un saladier, battez les oeufs avec la farine et la levure. Incorporez le lait et l'huile. Ajoutez une pincée de sel.\n2. Pelez et coupez les poires en cubes. Coupez le roquefort en petits morceaux. Concassez légèrement les noix. Ajoutez poire, roquefort, noix et gruyère à la préparation. Salez et poivrez.\n3. Versez le mélange dans un moule à cake légèrement huilé. Enfournez 50 min dans le four préchauffé à 180°C. Surveillez la fin de la cuisson en piquant le cake avec la lame d'un couteau : elle doit en ressortir sèche. Laissez refroidir avant de démouler.",
    "english": "Serves 6 to 8. Prep: 15 min. Baking: 50 min.\n\n- 3 eggs\n- 180 g flour\n- 1 packet baking powder\n- 10 cl (scant 1/2 cup) milk\n- 8 cl (1/3 cup) oil\n- 2 pears\n- 150 g Roquefort\n- 100 g walnut halves\n- 100 g grated Gruyère\n- salt, pepper\n\n1. In a mixing bowl, beat the eggs with the flour and baking powder. Stir in the milk and oil. Add a pinch of salt.\n2. Peel and cube the pears. Cut the Roquefort into small pieces. Roughly chop the walnuts. Add the pear, Roquefort, walnuts, and Gruyère to the batter. Season with salt and pepper.\n3. Pour the batter into a lightly oiled loaf pan. Bake for 50 minutes in an oven preheated to 180°C (350°F). Check for doneness by inserting a knife blade — it should come out dry. Let cool before unmolding.",
    "note": "One of Sara's favorites — a savory loaf cake, originally printed from the cooking site Ôdélices rather than handwritten by Mamimonique.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "ratatouille",
    "title_fr": "Ratatouille",
    "title_en": "Ratatouille",
    "course": "sides",
    "images": [],
    "french": "Ingrédients :\n3 aubergines, 5 courgettes, 1 poivron vert, 1 poivron rouge, 1 petit piment (jalapeño), 4 ou 5 tomates.\nLaver les légumes, ne pas les éplucher.\n\n1. Couper les aubergines et les laisser cuire 5 minutes dans une casserole d'eau chaude (les aubergines absorberont moins d'huile lors de la cuisson).\n2. Faire revenir dans l'huile d'olive chaude 3 gousses d'ail coupées en petits morceaux.\n3. Mettre les aubergines dans la casserole et laisser cuire à feu doux 15 minutes en remuant.\n4. Puis y ajouter les courgettes coupées en morceaux. Puis y ajouter les poivrons et le jalapeño coupés en morceaux.\n5. Laisser cuire 30 minutes en remuant de temps en temps. Puis ajouter les tomates coupées.\n6. Sel, 1 feuille de laurier si vous en avez, 1 grosse cuillère d'herbes de Provence.\n\nLaisser cuire doucement 1 heure 1/2 à 2 heures en remuant de temps en temps.",
    "english": "Ingredients:\n3 eggplants, 5 zucchini, 1 green bell pepper, 1 red bell pepper, 1 small chili (jalapeño), 4 or 5 tomatoes.\nWash the vegetables; don't peel them.\n\n1. Cut the eggplants and let them cook for 5 minutes in a pot of hot water (this way they'll absorb less oil during cooking).\n2. Sauté 3 cloves of garlic, cut into small pieces, in hot olive oil.\n3. Add the eggplants to the pot and let cook over low heat for 15 minutes, stirring.\n4. Then add the zucchini, cut into pieces. Then add the bell peppers and jalapeño, cut into pieces.\n5. Let cook for 30 minutes, stirring occasionally. Then add the chopped tomatoes.\n6. Salt, 1 bay leaf if you have one, 1 heaping spoonful of herbes de Provence.\n\nLet cook gently for 1.5 to 2 hours, stirring occasionally.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "carpe-a-la-juive",
    "title_fr": "Carpe à la juive",
    "title_en": "Carp, Jewish-Style",
    "course": "mains",
    "images": [
      "images/scans/carpe-a-la-juive.jpg"
    ],
    "french": "Nettoyer la carpe, la vider, réserver l'eau.\nDécouper les morceaux. Saler largement, surtout l'intérieur de la tête.\n\nMettre à chauffer de l'huile. Faire revenir un oignon haché fin. Quand il est doré, y ajouter une cuillère et demie de farine.\nFaire revenir en faisant blondir.\nMettre de l'eau en quantité suffisante.\nAjouter ail et échalote, hachés fin, et poivre.\n\nQuand la sauce bout, y mettre le poisson.\nBien étaler les morceaux. Préparer un hachis de persil, ail et échalote.\nMettre ce hachis en 3 fois durant la cuisson du poisson.\nLa dernière portion, 5 minutes avant.\n\nÀ manger tiède ou froid.",
    "english": "Clean the carp, gut it, and set the water aside.\nCut it into pieces. Salt generously, especially inside the head.\n\nHeat some oil. Sauté one finely chopped onion. Once golden, add one and a half tablespoons of flour.\nCook until lightly browned.\nAdd enough water to cover.\nAdd garlic and shallot, finely chopped, and pepper.\n\nOnce the sauce is boiling, add the fish.\nArrange the pieces well. Prepare a mixture of chopped parsley, garlic, and shallot.\nAdd this mixture in three additions during the fish's cooking time.\nAdd the last portion 5 minutes before the end.\n\nServe warm or cold.",
    "note": "",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "gateau-louba",
    "title_fr": "Gâteau Louba",
    "title_en": "Louba's Cake (Apple Streusel Cake)",
    "course": "desserts",
    "images": [
      "images/scans/gateau-louba.jpg"
    ],
    "french": "(Faire refroidir à l'avance)\n3 oeufs, blancs en neige\n200 g sucre, 250 g beurre fondu\n500 g farine, 1 paquet levure\n1 cuillère à soupe huile\nsucre vanillé, 1 cuillère cognac\nCouper la pâte en 4 — Frigidaire 1 nuit.\n\nÉtaler 1 boule. Mettre au moule.\nCouper les pommes (2 kg, très fin) + cannelle + sucre + beurre.\nRecouvrir de pâte.\nÉmietter farine + sucre cristallisé + beurre.\nFrigidaire 1h avant de l'enfourner.\nFour 7, 1 heure.",
    "english": "(Chill the dough ahead of time)\n3 eggs, whites beaten stiff\n200 g sugar, 250 g melted butter\n500 g flour, 1 packet baking powder\n1 tablespoon oil\nvanilla sugar, 1 tablespoon brandy\nDivide the dough into 4 — refrigerate overnight.\n\nRoll out one piece. Place in the mold.\nSlice the apples very thin (2 kg) and toss with cinnamon, sugar, and butter.\nCover with more dough.\nCrumble together flour, granulated sugar, and butter for the topping.\nRefrigerate for 1 hour before baking.\nBake at gas mark 7 for 1 hour.",
    "note": "Shares a page with a Passover chocolate cake recipe already on the site. Page order and a couple of quantities (farine, beurre) were hard to make out with full certainty.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "gateau-amandes-germaine",
    "title_fr": "Gâteau aux amandes (façon Germaine)",
    "title_en": "Almond Cake, Germaine-Style",
    "course": "desserts",
    "images": [
      "images/scans/gateau-amandes-germaine.jpg"
    ],
    "french": "Ingrédients :\n- 6 œufs\n- 250 g d'amandes en poudre\n- 280 g de sucre\n- le jus d'un demi-citron\n\nSéparer les jaunes des blancs.\nMélanger le sucre, les jaunes, et le jus de citron ; bien mélanger.\nPuis ajouter la poudre d'amandes et les blancs d'œufs battus en neige.",
    "english": "Ingredients:\n- 6 eggs\n- 250 g ground almonds\n- 280 g sugar\n- the juice of half a lemon\n\nSeparate the egg yolks from the whites.\nMix the sugar, egg yolks, and lemon juice together well.\nThen fold in the ground almonds and the stiffly beaten egg whites.",
    "note": "The page cuts off here — no mold or baking instructions given.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "gateau-pessah-irene",
    "title_fr": "Gâteau Pessah « Irène »",
    "title_en": "Passover Cake (Irène)",
    "course": "desserts",
    "images": [
      "images/scans/gateau-pessah-irene.jpg"
    ],
    "french": "250 g chocolat\n250 g beurre ou margarine\n8 œufs\n250 g sucre\n50 g farine de matzot\n200 g amandes en poudre\n\nCuisson : 40 min\nTherm. : 210\n\nFaire fondre le chocolat dans un peu d'eau (1/3 de verre) avec une cuillérée de Nescafé, ajouter le beurre, les jaunes d'œuf, le sucre, la farine et les amandes.\nBattre les blancs en neige et les ajouter au mélange.\nOn peut ajouter du sucre glace en couverture pour l'esthétique.",
    "english": "250 g chocolate\n250 g butter or margarine\n8 eggs\n250 g sugar\n50 g matzo meal\n200 g ground almonds\n\nBaking time: 40 min\nOven: 210°C\n\nMelt the chocolate in a little water (1/3 glass) with a spoonful of instant coffee, then add the butter, egg yolks, sugar, matzo meal, and almonds.\nBeat the egg whites to stiff peaks and fold them into the mixture.\nYou can dust with powdered sugar on top for looks.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "montecaos",
    "title_fr": "Montécaos",
    "title_en": "Montécaos (Sephardic Sugar Cookies)",
    "course": "desserts",
    "images": [
      "images/scans/montecaos.jpg"
    ],
    "french": "① 1 livre de farine\n② 1 verre 1/2 de sucre cristallisé\n③ 1 verre 1/2 d'huile\n\nMalaxer et faire des petites boules.\nN.B. : utiliser 1 verre à moutarde (comme mesure).\nPréchauffer Th.3, cuisson Th.2, 1/4 heure.",
    "english": "① 1 lb (about 450 g) flour\n② 1½ glasses granulated sugar\n③ 1½ glasses oil\n\nKnead together and shape into small balls.\nN.B.: use a small \"mustard glass\" as your measuring cup.\nPreheat to gas mark 3, bake at gas mark 2 for 15 minutes.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "kneifflich",
    "title_fr": "Kneïfflich",
    "title_en": "Kneïfflich (Matzo Dumplings)",
    "course": "sides",
    "images": [
      "images/scans/kneifflich.jpg"
    ],
    "french": "Kneïfflich (70 boulettes)\n250 g farine de matzo\n6 œufs\n125 g margarine ou graisse d'oie\n1 cuillère à café sel, poivre, 1/2 verre d'eau\n\nMélanger farine, œufs, margarine ramollie, eau, sel, poivre.\n→ Pâte pas trop ferme → former des boulettes.\nCuire à l'eau bouillante salée, à petit bouillon, 1 heure, casserole couverte.\nÉgoutter, dresser.\nRéchauffer dans le bouillon.",
    "english": "Kneïfflich (makes about 70)\n250 g matzo meal\n6 eggs\n125 g margarine or goose fat\n1 teaspoon salt, pepper, 1/2 glass water\n\nMix the matzo meal, eggs, softened margarine, water, salt, and pepper.\n→ The dough shouldn't be too firm → shape into small dumplings.\nCook in salted boiling water, at a gentle simmer, for 1 hour, covered.\nDrain and serve.\nReheat in the broth.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "baba-ganoush",
    "title_fr": "Aubergines (caviar d'aubergines à la crème de sésame)",
    "title_en": "Baba Ganoush (Eggplant and Tahini Dip)",
    "course": "starters",
    "images": [
      "images/scans/baba-ganoush.jpg"
    ],
    "french": "Ingrédients :\n- 3 aubergines\n- le jus de deux ou trois petits citrons\n- 2 gousses d'ail\n- 4 à 5 cuillerées à soupe d'huile d'olive\n- 4 cuillerées à soupe de crème de sésame (tahina)\n- sel\n\n1. Commencer par mettre au four les aubergines, sur une plaque recouverte de papier d'aluminium.\n2. Mettre le four en position « grill » et rôtir l'aubergine en la retournant de temps en temps. La peau va griller et même brûler, c'est normal — il faut que l'aubergine soit molle à l'intérieur. Le temps de cuisson dépend du four ; il faut surveiller.\n3. Laisser refroidir complètement avant de manipuler. Prélever la chair de l'aubergine et la placer dans un récipient.\n4. Écraser la chair avec une cuillère pour réduire en purée.\n5. Ajouter l'huile d'olive.",
    "english": "Ingredients:\n- 3 eggplants\n- the juice of two or three small lemons\n- 2 cloves garlic\n- 4 to 5 tablespoons olive oil\n- 4 tablespoons tahini (sesame paste)\n- salt\n\n1. Start by putting the eggplants in the oven, on a tray lined with aluminum foil.\n2. Set the oven to \"grill\"/broil and roast the eggplant, turning it from time to time. The skin will char and even burn — that's normal; the eggplant should be soft inside. Cooking time depends on the oven, so keep an eye on it.\n3. Let cool completely before handling. Scoop out the eggplant flesh into a bowl.\n4. Mash the flesh with a spoon to make a purée.\n5. Add the olive oil.",
    "note": "From the recipe site La Cuisine de Bernard. The scanned page cuts off after step 5 — the final step (mixing in the garlic, lemon juice, tahini, and salt) is missing.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "beignets-hanouka",
    "title_fr": "Beignets de Hanouka",
    "title_en": "Hanukkah Donuts",
    "course": "desserts",
    "images": [
      "images/scans/beignets-hanouka.jpg"
    ],
    "french": "Pour 6 personnes :\n1. 625 g de farine\n2. 75 g de beurre fondu\n3. 1 litre d'huile\n4. 1 cube de 25 g de levure de boulanger (ou deux sachets)\n5. 2 œufs\n6. 35 cl de lait à température ambiante\n7. 100 g de sucre en poudre\n8. 1 cuillère à café de sel\n\nTemps total : 30 min. Préparation : 10 min. Cuisson : 20 min.\n\n1. Dans un saladier, mélanger la levure et le lait, le sucre, le sel, les œufs, le beurre et la moitié de la farine. Travailler pendant quelques minutes avec une cuillère en bois.\n2. Incorporer le reste de la farine peu à peu. Pétrir pendant environ 5 minutes jusqu'à ce que la pâte soit homogène et élastique. La mettre dans un saladier couvert d'un linge humide.\n3. Laisser lever la pâte pendant 1 heure à température ambiante (ou toute une nuit au frigo si vous faites la pâte la veille).\n4. Placer la boule de pâte sur une surface farinée et l'étendre sur environ 1 cm d'épaisseur.\n5. Détailler les beignets avec un emporte-pièce rond sans oublier de faire le trou au milieu. Laisser reposer à nouveau les beignets entre 45 min à 1h à température ambiante ou pendant 25 min au four à 30°C (thermostat 1) : il faut qu'ils doublent de volume (les mettre sur un torchon légèrement fariné pour éviter qu'ils collent).\n6. Faire chauffer 1 litre d'huile dans une grande casserole à 175°C environ. Cuire les donuts environ 45 sec de chaque côté (attention la cuisson est rapide).\n7. Sucrer, glacer ou fourrer les beignets avec du Nutella avec un pinceau sur le dessus à votre convenance.",
    "english": "Serves 6:\n1. 625 g flour\n2. 75 g melted butter\n3. 1 liter oil (for frying)\n4. 1 cube (25 g) baker's yeast, or two packets\n5. 2 eggs\n6. 35 cl (about 1½ cups) milk, at room temperature\n7. 100 g granulated sugar\n8. 1 teaspoon salt\n\nTotal time: 30 min. Prep: 10 min. Cooking: 20 min.\n\n1. In a mixing bowl, combine the yeast and milk, sugar, salt, eggs, butter, and half the flour. Work together for a few minutes with a wooden spoon.\n2. Gradually incorporate the rest of the flour. Knead for about 5 minutes until the dough is smooth and elastic. Place it in a bowl covered with a damp cloth.\n3. Let the dough rise for 1 hour at room temperature (or overnight in the fridge if making the dough the day before).\n4. Place the dough on a floured surface and roll it out to about 1 cm thick.\n5. Cut out the donuts with a round cutter, remembering to cut the hole in the middle. Let the donuts rest again for 45 minutes to 1 hour at room temperature, or 25 minutes in the oven at 30°C (gas mark 1) — they should double in size (place them on a lightly floured towel so they don't stick).\n6. Heat 1 liter of oil in a large pot to about 175°C. Fry the donuts about 45 seconds per side (they cook fast, so watch closely).\n7. Finish with sugar, glaze, or fill with Nutella, brushed on top as you like.",
    "note": "A modern online recipe, not handwritten by Mamimonique.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "confiture-oranges-colette",
    "title_fr": "Confiture d'oranges (Colette)",
    "title_en": "Orange Marmalade (Colette)",
    "course": "preserves",
    "images": [
      "images/scans/confiture-oranges-colette.jpg"
    ],
    "french": "500 g d'oranges\n1 citron\n750 g d'eau\n1 kg de sucre\n\nCouper les oranges en très fines tranches.\nAjouter l'eau et laisser reposer 48 h.\nCuire 1/2 heure.\nLaisser encore reposer 24 h.\nAjouter le sucre et le jus de citron.\nCuire 3/4 d'heure, voire 1 heure.",
    "english": "500 g oranges\n1 lemon\n750 g water\n1 kg sugar\n\nSlice the oranges very thinly.\nAdd the water and let sit for 48 hours.\nCook for 1/2 hour.\nLet sit again for 24 hours.\nAdd the sugar and lemon juice.\nCook for 3/4 hour, up to 1 hour.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "gateau-fruits-rosette",
    "title_fr": "Gâteau aux fruits Rosette",
    "title_en": "Rosette's Fruit Cake (Apple or Pear)",
    "course": "desserts",
    "images": [
      "images/scans/gateau-fruits-rosette.jpg"
    ],
    "french": "2 œufs + 125 g sucre en poudre, mixer.\n4 cuillères huile.\n8 cuillères lait ou lait de soja.\n200 g farine.\n1 paquet levure.\nFruits coupés : pommes ou poires.\nPapier sulfurisé sur moule rond.\nCuire 30 à 45 minutes, chaleur tournante, 180°.\nSortir, laisser reposer 5 minutes, et saupoudrer de sucre vanillé.",
    "english": "2 eggs + 125 g powdered sugar, mix together.\n4 tablespoons oil.\n8 tablespoons milk or soy milk.\n200 g flour.\n1 packet baking powder.\nCut fruit: apples or pears.\nParchment paper in a round mold.\nBake 30 to 45 minutes, fan oven, 180°C.\nRemove, let sit 5 minutes, and dust with vanilla sugar.",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "gateau-miel-roch-hachana",
    "title_fr": "Gâteau au miel de Roch Hachana (Rosette Hoenig)",
    "title_en": "Rosh Hashana Honey Cake (Rosette Hoenig)",
    "course": "desserts",
    "images": [
      "images/scans/gateau-miel-roch-hachana.jpg"
    ],
    "french": "4 œufs, blancs en neige\n150 g sucre\n150 g miel\ncafé\n10 cuillères huile\n200 g farine\n1/2 sachet de levure chimique\n\nVerser dans un moule sur papier sulfurisé. Cuisson 1h30 à 175 degrés, four à chaleur tournante.",
    "english": "4 eggs, whites beaten stiff\n150 g sugar\n150 g honey\ncoffee (a splash)\n10 tablespoons oil\n200 g flour\n1/2 packet baking powder\n\nPour into a mold lined with parchment paper. Bake for 1.5 hours at 175°C (347°F), fan oven.",
    "note": "The same page also has a longer, more modern recipe for the same cake, but that version was cut off mid-instructions and isn't included here.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "pates-sardines-anne",
    "title_fr": "Pâtes aux sardines (Anne)",
    "title_en": "Pasta with Sardines (Anne)",
    "course": "mains",
    "images": [
      "images/scans/pates-sardines-anne.jpg"
    ],
    "french": "- 2 boîtes de sardines à l'huile\n- un peu de flocons de piment\n- 4 à 5 gousses d'ail\n- 4 à 5 anchois\n- huile d'olive\n- 1 boîte de tomates concassées\n- olives kalamata grecques, 10-15\n\nFaire revenir l'huile, l'ail écrasé, les anchois et le piment à feu moyen jusqu'à ce que les anchois fondent.\nAjouter les 2 boîtes de sardines sans huile et les écraser en mélangeant bien.\nAjouter les tomates concassées et bien mélanger. Couvrir et faire cuire à feu doux au moins 45 minutes.\nÀ tout moment de la cuisson, ajouter les olives coupées en lamelles à la sauce.\nFaire cuire les pâtes séparément dans de l'eau salée. Suivre le temps de cuisson indiqué sur la boîte.\nUne fois cuites, égoutter les pâtes et les mélanger à la sauce en s'assurant que toutes les pâtes sont bien couvertes de sauce.\nServir avec du bon parmesan.",
    "english": "- 2 cans sardines in oil\n- a pinch of red pepper flakes\n- 4 to 5 cloves garlic\n- 4 to 5 anchovies\n- olive oil\n- 1 can crushed tomatoes\n- 10-15 Greek kalamata olives\n\nSauté the oil, crushed garlic, anchovies, and chili flakes over medium heat until the anchovies melt into the oil.\nAdd the 2 cans of sardines (drained) and mash them in, mixing well.\nAdd the crushed tomatoes and mix well. Cover and cook over low heat for at least 45 minutes.\nAt any point during cooking, add the olives, sliced, to the sauce.\nCook the pasta separately in salted water, following the time on the box.\nOnce cooked, drain the pasta and toss it with the sauce, making sure every piece is well coated.\nServe with good Parmesan.",
    "note": "From an email from Anne Taillandier.",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "pate-choux-base",
    "title_fr": "Pâte à choux : recette de base inratable (chouquettes)",
    "title_en": "Choux Pastry: No-Fail Basic Recipe (Chouquettes)",
    "course": "desserts",
    "images": [
      "images/scans/pate-choux-base.jpg"
    ],
    "french": "Pour 6 personnes. Préparation : 40 min. Cuisson : 15 min.\n\nIngrédients :\n- 6 oeufs\n- 375 ml d'eau\n- 150 g de beurre\n- 1 c. à café de sel\n- 1 c. à soupe de sucre\n- 225 g de farine\n- Sucre en grains\n\n1. Dans une casserole, versez l'eau, ajoutez le sel, le sucre et le beurre coupé en morceaux puis faites bouillir.\n2. Hors du feu, ajoutez la farine en une seule fois et mélangez rapidement pour obtenir une pâte lisse et homogène.\n3. Faites-la ensuite dessécher à feu doux en mélangeant doucement.\n4. Versez cette préparation dans le bol du robot et mélangez les oeufs un par un à la pâte sans cesser de battre.\n5. Sur une plaque recouverte de papier cuisson et à l'aide d'une poche à douille ou de deux petites cuillères, formez les chouquettes puis parsemez-les avec les grains de sucre.\n6. Enfournez à 190° pendant 15 à 20 minutes en surveillant.",
    "english": "Serves 6. Prep: 40 min. Baking: 15 min.\n\nIngredients:\n- 6 eggs\n- 375 ml water\n- 150 g butter\n- 1 tsp salt\n- 1 tbsp sugar\n- 225 g flour\n- Pearl sugar\n\n1. In a saucepan, pour in the water, add the salt, sugar, and butter cut into pieces, then bring to a boil.\n2. Off the heat, add the flour all at once and mix quickly to form a smooth, even dough.\n3. Dry it out over low heat, stirring gently.\n4. Transfer the mixture to a stand mixer bowl and beat in the eggs one at a time, without stopping.\n5. On a baking sheet lined with parchment paper, pipe or spoon out small mounds (chouquettes) and sprinkle with pearl sugar.\n6. Bake at 190°C (375°F) for 15 to 20 minutes, watching closely.",
    "note": "From HerveCuisine.com.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "pate-sablee-journal-femmes",
    "title_fr": "Pâte sablée : la meilleure recette",
    "title_en": "Shortcrust Pastry: The Best Recipe",
    "course": "desserts",
    "images": [
      "images/scans/pate-sablee-journal-femmes.jpg"
    ],
    "french": "Pour 4 personnes. Préparation : 10 min. Cuisson : 15 min.\n\nIngrédients :\n- 250 g de farine\n- 125 g de beurre\n- 50 g de sucre glace\n- 1 jaune d'oeuf\n- 30 g d'eau\n- 1 pincée de sel\n\n1. Sabler entre les mains la farine et le beurre coupé en petits cubes. Lorsque le beurre est totalement absorbé par la farine, ajouter le sucre glace (préférable au sucre en poudre : la pâte sera moins cassante, donc plus fondante).\n2. Ajouter le jaune d'oeuf et l'eau froide, puis une pincée de sel. Mélanger pour réunir tous les ingrédients et, dès que la pâte se forme, arrêter de mélanger (sinon elle devient trop élastique). Réunir le tout sur un papier film et emballer. Réfrigérer 30 minutes pour que le beurre raffermisse.\n3. Utiliser très peu de farine pour étaler la pâte : elle n'en sera que meilleure, car moins sèche.",
    "english": "Serves 4. Prep: 10 min. Baking: 15 min.\n\nIngredients:\n- 250 g flour\n- 125 g butter\n- 50 g powdered sugar\n- 1 egg yolk\n- 30 g water\n- 1 pinch salt\n\n1. Rub the flour and butter (cut into small cubes) together between your hands. Once the butter is fully absorbed into the flour, add the powdered sugar (better than granulated sugar here — the dough will be less crumbly and more tender).\n2. Add the egg yolk and cold water, then a pinch of salt. Mix to bring the dough together and stop as soon as it forms (overmixing makes it too elastic). Gather it onto plastic wrap and wrap it up. Chill for 30 minutes so the butter firms up.\n3. Use very little flour when rolling it out — the pastry will be better for it, since it stays less dry.",
    "note": "From Journal des Femmes.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "pudim-portugais",
    "title_fr": "Pudim (recette portugaise authentique)",
    "title_en": "Pudim (Authentic Portuguese Flan)",
    "course": "desserts",
    "images": [
      "images/scans/pudim-portugais.jpg"
    ],
    "french": "Ingrédients :\n- 10 oeufs\n- 1 bol de sucre\n- 1 bol de lait\n- 5 c. à soupe de sucre\n- 20 cl d'eau pour le caramel\n\nDans un grand saladier, bien mélanger tous les ingrédients dans l'ordre oeuf/sucre/lait.\nPréparer un caramel dans une casserole avec les 5 cuillères de sucre et un peu d'eau.\nVerser le caramel dans un moule à gâteau. Il faut napper tous les bords.\nVerser la préparation oeufs/sucre/lait.\nPoser ce moule dans un autre plus grand et rempli d'eau.\nCe pudim se cuit au bain-marie au four à 180°C (thermostat 6).\nCeci peut être plus ou moins long selon les fours.\nIl faut surveiller la cuisson en plantant un couteau : s'il ressort complètement sec, c'est que c'est prêt.\nAttendre un peu avant de démouler dans un joli plat puis mettre au frigo.\nIl se mange bien froid.",
    "english": "Ingredients:\n- 10 eggs\n- 1 bowl sugar\n- 1 bowl milk\n- 5 tbsp sugar\n- 20 cl water, for the caramel\n\nIn a large mixing bowl, mix all the ingredients together well in this order: egg, sugar, milk.\nMake a caramel in a saucepan with the 5 tablespoons of sugar and a little water.\nPour the caramel into a cake mold, coating all the sides.\nPour in the egg/sugar/milk mixture.\nSet this mold inside a larger one filled with water.\nBake this pudim in a water bath (bain-marie) in the oven at 180°C (gas mark 6).\nBaking time may vary depending on the oven.\nCheck for doneness by inserting a knife — if it comes out completely dry, it's ready.\nLet it rest a bit before unmolding onto a nice serving plate, then refrigerate.\nBest eaten cold.",
    "note": "From Marmiton.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "brisket-anne",
    "title_fr": "Poitrine de boeuf braisée (Anne)",
    "title_en": "Beef Brisket (Anne)",
    "course": "mains",
    "images": [
      "images/scans/brisket-anne.jpg"
    ],
    "french": "Ingrédients :\n- 4 grosses gousses d'ail, écrasées\n- 1/2 cuillère à café de sel casher, plus un peu pour assaisonner\n- 4 branches de romarin frais, effeuillées et hachées\n- 1/4 tasse d'huile d'olive extra-vierge\n- 1 poitrine de boeuf (environ 1,8 kg), première coupe\n- Poivre noir grossièrement moulu\n- 4 grosses carottes, coupées en tronçons de 7-8 cm\n- 3 branches de céleri, coupées en tronçons de 7-8 cm\n- 4 gros oignons rouges, coupés en deux\n- 2 tasses de vin rouge sec\n- 1 boîte (450 g) de tomates entières, écrasées à la main\n- 1 poignée de persil plat frais\n- 3 feuilles de laurier\n- 1 cuillère à soupe de farine (facultatif)\n\nPréchauffer le four à 160°C.\nSur une planche à découper, écraser l'ail et 1/2 cuillère à café de sel avec le plat d'un couteau jusqu'à obtenir une pâte. Ajouter le romarin et continuer à écraser jusqu'à incorporation. Mettre la pâte ail-romarin dans un petit bol et ajouter 2 cuillères à soupe d'huile d'olive ; mélanger.\nAssaisonner les deux côtés de la poitrine de boeuf généreusement de sel casher et de poivre noir moulu. Faire chauffer une grande cocotte à feu moyen-vif et y verser le reste de l'huile d'olive. Mettre la poitrine à saisir pour former une belle croûte dorée des deux côtés. Disposer les légumes tout autour de la viande et verser la pâte au romarin sur le tout. Ajouter le vin et les tomates ; ajouter le persil et les feuilles de laurier. Couvrir hermétiquement de papier aluminium et transférer au four. Cuire environ 3 à 4 heures, en arrosant du jus de cuisson toutes les 30 minutes, jusqu'à ce que la viande soit fondante.\nRetirer la poitrine sur une planche à découper et laisser reposer 15 minutes. Retirer les légumes de la cocotte et les déposer sur un plat, couvrir pour garder au chaud.",
    "english": "Ingredients:\n- 4 large garlic cloves, smashed\n- 1/2 teaspoon kosher salt, plus more for seasoning\n- 4 sprigs fresh rosemary, needles stripped from the stem and chopped\n- 1/4 cup extra-virgin olive oil\n- 1 (4 pound) beef brisket, first-cut\n- Coarsely ground black pepper\n- 4 large carrots, cut in 3-inch chunks\n- 3 celery stalks, cut in 3-inch chunks\n- 4 large red onions, halved\n- 2 cups dry red wine\n- 1 (16-ounce) can whole tomatoes, hand-crushed\n- 1 handful fresh flat-leaf parsley leaves\n- 3 bay leaves\n- 1 tablespoon all-purpose flour (optional)\n\nPreheat the oven to 325°F (160°C).\nOn a cutting board, mash the garlic and 1/2 teaspoon of the salt together with the flat side of a knife into a paste. Add the rosemary and continue to mash until incorporated. Put the garlic-rosemary paste in a small bowl and add 2 tablespoons of olive oil; stir to combine.\nSeason both sides of the brisket with a fair amount of kosher salt and ground black pepper. Place a large roasting pan or Dutch oven over medium-high heat and coat with the remaining olive oil. Put the brisket in the roasting pan and sear to form a nice brown crust on both sides. Lay the vegetables all around the brisket and pour the rosemary paste over the whole thing. Add the wine and tomatoes; toss in the parsley and bay leaves. Cover the pan tightly with aluminum foil and transfer to the oven. Bake for about 3 to 4 hours, basting every 30 minutes with the pan juices, until the beef is fork tender.\nRemove the brisket to a cutting board and let it rest for 15 minutes. Scoop the vegetables out of the roasting pan and onto a platter, cover to keep warm.",
    "note": "From a recipe Anne Taillandier emailed to Monique Taillandier in 2010. Partial capture — the sauce-finishing step at the very end wasn't included in the scan.",
    "tags": [
      "meat"
    ]
  },
  {
    "slug": "crepes",
    "title_fr": "Crêpes",
    "title_en": "Crêpes",
    "course": "desserts",
    "images": [
      "images/scans/crepes.jpg"
    ],
    "french": "1 1/2 verre de farine\n2 oeufs\n2 verres de lait\n1 pincée de sel\n1/2 c. d'huile\n1 c. de sucre - 1 c. de rhum",
    "english": "1 1/2 glasses flour\n2 eggs\n2 glasses milk\n1 pinch salt\n1/2 tbsp oil\n1 tbsp sugar - 1 tbsp rum",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "gateau-pavot-graines",
    "title_fr": "Gâteau aux graines de pavot",
    "title_en": "Poppy Seed Cake",
    "course": "desserts",
    "images": [
      "images/scans/gateau-pavot-graines.jpg"
    ],
    "french": "Pour un moule carré de 21 cm sur 21 cm.\n\nPâte sucrée :\n- 210 g de farine\n- 125 g de beurre doux froid\n- 35 g de sucre glace\n- 25 g de poudre d'amande\n- 50 g d'oeuf battu\n- Vanille en poudre\n\nFarce aux graines de pavot (pour une couche épaisse) :\n- 375 g de graines de pavot\n- 450 ml de lait demi-écrémé\n- 135 g de miel\n- 200 g de sucre\n- 200 g de poudre d'amandes\n- 125 g d'oeuf\n- 90 g de raisins secs\n\n(Pour une couche moins épaisse : 300 g de graines de pavot, 360 ml de lait, 105 g de miel, 160 g de sucre, 160 g de poudre d'amandes, 100 g d'oeuf [2 oeufs], 80 g de raisins secs.)\n\nPréparer la pâte sucrée : mettre tous les ingrédients sauf l'oeuf dans le bol du robot. Battre avec la feuille (le K) jusqu'à incorporation du beurre. Ajouter l'oeuf battu au préalable, remettre en marche juste pour l'incorporer, pas plus. Mettre la pâte en boule, l'envelopper de film et la placer au frais le temps de préparer le reste.\n\nPendant ce temps, mettre le pavot et le lait dans une casserole, sur feu modéré, en mélangeant constamment à la cuillère en bois. Le mélange va bouillir ; laisser les graines absorber le lait. Au bout d'une demi-heure, le lait a presque entièrement disparu.",
    "english": "For a 21cm x 21cm square pan.\n\nSweet pastry:\n- 210 g flour\n- 125 g cold unsalted butter\n- 35 g powdered sugar\n- 25 g almond flour\n- 50 g beaten egg\n- Ground vanilla\n\nPoppy seed filling (for a thick layer):\n- 375 g poppy seeds\n- 450 ml semi-skimmed milk\n- 135 g honey\n- 200 g sugar\n- 200 g almond flour\n- 125 g egg\n- 90 g raisins\n\n(For a thinner layer: 300 g poppy seeds, 360 ml milk, 105 g honey, 160 g sugar, 160 g almond flour, 100 g egg [2 eggs], 80 g raisins.)\n\nPrepare the sweet pastry: put all ingredients except the egg in a stand mixer bowl. Beat with the paddle attachment until the butter is incorporated. Add the pre-beaten egg, mix briefly just to incorporate it — no more. Shape the dough into a ball, wrap in plastic, and chill while you prepare the rest.\n\nMeanwhile, put the poppy seeds and milk in a saucepan over medium heat, stirring constantly with a wooden spoon. The mixture will come to a boil; let the seeds absorb the milk. After about half an hour, the milk will have almost completely disappeared.",
    "note": "Transcribed from a typed recipe found among the family's recipe files — the baking and assembly steps weren't captured in the scan.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "soupe-epicee-carotte",
    "title_fr": "Soupe épicée à la carotte",
    "title_en": "Spiced Carrot Soup",
    "course": "soups",
    "images": [
      "images/scans/soupe-epicee-carotte.jpg"
    ],
    "french": "Pour 1,25 litre.\n\n- 80 ml d'huile d'olive\n- 2 c. à café de miel\n- 3 c. à café de cumin moulu\n- 3 c. à café de graines de coriandre concassées\n- 1,5 kg de carottes épluchées et coupées en morceaux de 3 cm environ\n- 2 bâtons de cannelle coupés en deux\n- 750 ml de bouillon de volaille\n- 100 ml de crème fraîche\n- 3 c. à soupe de feuilles de coriandre fraîches\n\n1. Préchauffer le four à 200°C (th. 6). Mélanger l'huile, le miel, le cumin, les graines de coriandre, 1 cuillerée à café de sel et du poivre noir concassé dans un plat à rôtir et bien mélanger avec les carottes et les bâtons de cannelle de façon à bien les enrober d'épices.\n2. Faire rôtir le mélange au four pendant 1 heure, jusqu'à ce que les carottes soient tendres, en agitant de temps en temps le plat en cours de cuisson. Retirer du four, retirer la cannelle et laisser les carottes tiédir.\n3. Mixer la moitié des carottes au robot avec 375 ml de bouillon de volaille et 250 ml d'eau jusqu'à obtention d'une pâte lisse. Passer le mélange au tamis au-dessus d'une casserole. Répéter l'opération avec les carottes restantes et 250 ml de bouillon. Faire chauffer la soupe à feu doux et laissez-la mijoter 10 minutes. Ajouter la crème fraîche, assaisonner selon votre goût. Verser la soupe dans des tasses. Déposer un peu de crème fraîche sur le dessus et décorer avec une feuille de coriandre.\n\nCette soupe se conserve deux jours au réfrigérateur (incorporez la crème fraîche au moment de servir).",
    "english": "Makes 1.25 liters.\n\n- 80 ml olive oil\n- 2 tsp honey\n- 3 tsp ground cumin\n- 3 tsp crushed coriander seeds\n- 1.5 kg carrots, peeled and cut into roughly 3 cm chunks\n- 2 cinnamon sticks, halved\n- 750 ml chicken stock\n- 100 ml crème fraîche\n- 3 tbsp fresh coriander (cilantro) leaves\n\n1. Preheat the oven to 200°C (gas mark 6). Mix the oil, honey, cumin, coriander seeds, 1 teaspoon of salt, and crushed black pepper in a roasting dish, then toss well with the carrots and cinnamon sticks to coat them evenly in the spices.\n2. Roast in the oven for 1 hour, until the carrots are tender, shaking the pan occasionally during cooking. Remove from the oven, discard the cinnamon, and let the carrots cool slightly.\n3. Blend half the carrots in a food processor with 375 ml of the stock and 250 ml water until smooth. Strain through a sieve into a saucepan. Repeat with the remaining carrots and 250 ml stock. Warm the soup gently over low heat and simmer for 10 minutes. Stir in the crème fraîche, season to taste. Pour into cups, top with a little extra crème fraîche, and garnish with a coriander leaf.\n\nThis soup keeps two days in the fridge (stir in the cream just before serving).",
    "note": "",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "sauce-nantua-sans-homard",
    "title_fr": "Sauce Nantua sans bisque de homard",
    "title_en": "Nantua Sauce without Lobster Bisque",
    "course": "sauces",
    "images": [
      "images/scans/sauce-nantua-sans-homard.jpg"
    ],
    "french": "Pour 6 personnes. Préparation : 10 min. Cuisson : 35 min.\n\n- 6 quenelles\n- 1/2 l de lait\n- 200 g de crème fraîche épaisse\n- 40 g de beurre\n- 40 g de farine\n- 1 c. à soupe de cognac\n- Sel, poivre\n\n1. Préchauffer le four à th.6 (200°C).\n2. Dans une casserole, faire fondre le beurre, puis ajouter la farine en pluie tout en remuant. Délayer avec le lait.\n3. Faire cuire à feu doux tout en remuant jusqu'à épaississement puis ajouter la crème. Mélanger et poursuivre la cuisson pendant 15 min. Verser le cognac, saler, poivrer et mélanger.\n4. Dans un plat allant au four (un plat à gratin par exemple), disposer les quenelles et les recouvrir de sauce Nantua.\n5. Faire cuire pendant 20 min.\n\nAstuce : pour épaissir un peu plus la sauce, on peut ajouter quelques pincées de Maïzena, en remuant bien entre chaque ajout.",
    "english": "Serves 6. Prep: 10 min. Cooking: 35 min.\n\n- 6 quenelles\n- 1/2 liter milk\n- 200 g thick crème fraîche\n- 40 g butter\n- 40 g flour\n- 1 tbsp Cognac\n- Salt, pepper\n\n1. Preheat the oven to 200°C (gas mark 6).\n2. In a saucepan, melt the butter, then whisk in the flour. Thin with the milk.\n3. Cook over low heat, stirring, until it thickens, then add the cream. Mix and continue cooking for 15 minutes. Add the Cognac, season with salt and pepper, and mix.\n4. In an oven-safe dish (a gratin dish works well), arrange the quenelles and cover with the Nantua sauce.\n5. Bake for 20 minutes.\n\nTip: to thicken the sauce a bit more, add a pinch of cornstarch at a time, stirring well between additions.",
    "note": "From CuisineAZ — a lobster-bisque-free version of Nantua sauce.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "spheries-pessah",
    "title_fr": "Sphériès",
    "title_en": "Sphériès (Passover Matzo-Meal Fritters)",
    "course": "desserts",
    "images": [
      "images/scans/spheries-pessah.jpg"
    ],
    "french": "Pour 10 personnes. Préparation : 10 min. Cuisson : 3 min.\n\n- 12 c. à soupe de farine de matsa\n- 12 oeufs\n- 1 grosse pincée de sel\n- 1 jus d'orange ou de citron\n- Cannelle (facultatif)\n- Fleur d'oranger ou rhum (facultatif)\n\nPour le sirop :\n- 400 g de sucre\n- 75 cl d'eau\n\n1. Dans un saladier, verser la farine de matsa.\n2. Ajouter en remuant les oeufs un à un. Mettre la pincée de sel, le jus d'orange et bien mélanger jusqu'à ce que la pâte devienne onctueuse.\n3. Façonner la pâte en petites boules et les faire frire dans l'huile chaude jusqu'à ce qu'elles soient bien dorées. Préparer le sirop en faisant chauffer le sucre et l'eau, puis y tremper les boules chaudes avant de servir.",
    "english": "Serves 10. Prep: 10 min. Cooking: 3 min.\n\n- 12 tbsp matzo meal\n- 12 eggs\n- 1 large pinch of salt\n- 1 orange or lemon, juiced\n- Cinnamon (optional)\n- Orange blossom water or rum (optional)\n\nFor the syrup:\n- 400 g sugar\n- 75 cl water\n\n1. Pour the matzo meal into a mixing bowl.\n2. Stir in the eggs one at a time. Add the pinch of salt and the citrus juice, and mix well until the batter turns smooth.\n3. Shape the batter into small balls and fry in hot oil until nicely golden. Make the syrup by heating the sugar and water together, then dip the warm fritters in it before serving.",
    "note": "From Journal des Femmes. The frying and syrup step is reconstructed from the ingredient list and photos — the exact wording wasn't captured in the scan.",
    "tags": [
      "parve",
      "passover"
    ]
  },
  {
    "slug": "sticky-buns-bread-machine",
    "title_fr": "Petits pains collants (machine à pain)",
    "title_en": "Sticky Buns (Bread Machine)",
    "course": "breads",
    "images": [
      "images/scans/sticky-buns-bread-machine.jpg"
    ],
    "french": "Pour 10 petits pains. Prêt en 1 heure environ (pâte préparée à la machine à pain).\n\nPâte :\n- 300 ml de lait\n- 1 c. à café d'extrait de vanille\n- 3 c. à soupe de beurre\n- 3 tasses de farine tout usage\n- 3 c. à soupe de sucre\n- 1 1/4 c. à café de sel\n- 2 c. à café de levure instantanée\n\nGarniture :\n- 3/4 tasse de sucre roux\n- 1 c. à soupe de cannelle\n- 6 c. à soupe de beurre, ramolli\n\nNappage caramel :\n- 1/3 tasse de beurre\n- 1 tasse de sucre roux\n- 1/4 tasse de sirop de maïs clair\n- 1 tasse de noix de pécan concassées\n\n1. Mettre la farine, le sucre blanc, le sel, la levure, le lait, la vanille et 3 cuillères à soupe de beurre dans la machine à pain, selon le mode d'emploi. Programmer le cycle « Pâte ».\n2. Pendant que la pâte se prépare, mélanger les 3/4 tasse de sucre roux et la cannelle pour la garniture. Laisser les 6 cuillères à soupe de beurre ramollir à température ambiante.\n3. Graisser le fond et les bords d'un moule de 33 x 23 cm.\n4. Lorsque le cycle de pâte est presque terminé, préparer le nappage en faisant fondre le 1/3 tasse de beurre, la tasse de sucre roux et le sirop de maïs dans une petite casserole à feu modéré, en remuant jusqu'à dissolution. Verser dans le moule et étaler. Parsemer les noix de pécan concassées par-dessus.\n5. Une fois le cycle terminé, sortir la pâte et l'étaler sur un plan de travail fariné en un rectangle de 30 x 38 cm.\n\nÉtaler le beurre ramolli sur la pâte, saupoudrer du mélange sucre-cannelle, puis rouler la pâte sur elle-même dans le sens de la longueur. Couper en 10 tranches et les disposer sur le nappage caramel-pécan. Laisser lever 45 minutes à température ambiante, couvert d'un film plastique, jusqu'à ce que les petits pains soient gonflés. Cuire au four préchauffé jusqu'à ce qu'ils soient dorés. Démouler immédiatement en retournant le moule sur un plat.",
    "english": "Makes 10 buns. Ready in about 1 hour (dough made in a bread machine).\n\nDough:\n- 1 1/4 cups milk\n- 1 tsp vanilla extract\n- 3 tbsp butter\n- 3 cups all-purpose flour\n- 3 tbsp sugar\n- 1 1/4 tsp salt\n- 2 tsp instant yeast\n\nFilling:\n- 3/4 cup brown sugar\n- 1 tbsp cinnamon\n- 6 tbsp butter, softened\n\nCaramel topping:\n- 1/3 cup butter\n- 1 cup brown sugar\n- 1/4 cup light corn syrup\n- 1 cup pecans, chopped\n\n1. Place the flour, white sugar, salt, yeast, milk, vanilla, and 3 tablespoons of butter into your bread machine as directed in your user's manual. Program it for the \"Dough\" cycle.\n2. While the dough is mixing, prepare the filling by mixing the brown sugar and cinnamon together. Let the 6 tablespoons of butter come to room temperature.\n3. Grease the bottom and sides of a 13\"x9\" baking pan.\n4. When the dough cycle is nearly finished, make the caramel topping by combining the butter, brown sugar, and corn syrup in a small pan over moderate heat. Heat and stir until the syrup dissolves, then pour it into the baking pan and spread it out. Sprinkle the chopped pecans over the caramel.\n5. When the dough cycle ends, remove the dough and place on a lightly floured surface. Roll it out to make a 12\" by 15\" rectangle.\n\nSpread the softened butter across the dough, sprinkle with the cinnamon-sugar mixture, then roll the dough up lengthwise. Slice into 10 rounds and arrange them over the caramel-pecan layer. Let rise, lightly covered with plastic wrap, about 45 minutes at room temperature, until puffy. Bake in a preheated oven until golden. Unmold immediately by inverting the pan onto a serving plate.",
    "note": "From Food.com (submitted by buckeye1953). The scan cuts off partway through the rolling/baking step — the final paragraph is standard sticky-bun assembly, not verbatim from the source.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "strudel-pavot-parve",
    "title_fr": "Strudel au pavot (parve)",
    "title_en": "Poppy Seed Strudel (Parve)",
    "course": "desserts",
    "images": [
      "images/scans/strudel-pavot-parve.jpg"
    ],
    "french": "Pâte :\nPréparer la pâte 1 à 2 heures à l'avance et la garder au réfrigérateur.\n- 400 g de farine\n- 50 g de levure du boulanger délayée dans un verre d'eau tiède\n- 4 c. à soupe de sucre semoule\n- 200 g de margarine fondue (type Arcy)\n- 1 paquet de sucre vanillé\n- 2 oeufs entiers battus\n\nBien mélanger, pétrir. Mettre la pâte dans une boîte couverte au réfrigérateur 1h ou 2h.\n\nFarce :\nGraines de pavot 200g, laissées 1h ou 2 au congélateur puis moulinées, mélangées à de la cannelle en poudre et à 200g de sucre poudre.\n\nSéparer la pâte en 4 boules pour faire 4 roulés. Étaler finement chaque boule de pâte en formant un rectangle, sur un fond de farine pour que la pâte ne colle pas.\nBadigeonner un peu d'huile, au pinceau, sur la pâte étalée.\nSaupoudrer le mélange (placé dans un « chinois ») pavot, cannelle, sucre poudre sur toute la surface de la pâte.\nRecouvrir ce mélange de pommes à cuire, épluchées et coupées en fines lamelles.\nRouler la pâte et fermer à chaque bout et le long du roulé en la « collant » avec un peu d'huile. Recommencer avec chaque boule de pâte.\nPlacer les 4 roulés sur une plaque du four, sur un papier sulfurisé ou aluminium huilé.\nCuisson : 180° (6) 40 minutes. 10' avant la fin de la cuisson, dorer les roulés à l'oeuf.\nCouper des tranches de 2 cm quand le gâteau est encore chaud.",
    "english": "Dough:\nPrepare the dough 1 to 2 hours ahead and keep it in the fridge.\n- 400 g flour\n- 50 g baker's yeast, dissolved in a glass of warm water\n- 4 tbsp caster sugar\n- 200 g melted margarine (Arcy brand or similar)\n- 1 packet vanilla sugar\n- 2 whole eggs, beaten\n\nMix well, knead. Put the dough in a covered container in the fridge for 1 to 2 hours.\n\nFilling:\n200 g poppy seeds, left in the freezer for 1-2 hours then ground, mixed with ground cinnamon and 200 g powdered sugar.\n\nDivide the dough into 4 balls to make 4 rolls. Roll out each ball thinly into a rectangle, on a floured surface so the dough doesn't stick.\nBrush a little oil over the rolled-out dough with a pastry brush.\nSprinkle the poppy seed/cinnamon/powdered sugar mixture (sifted through a fine strainer) over the whole surface of the dough.\nCover this with cooking apples, peeled and thinly sliced.\nRoll up the dough and seal both ends and along the roll by pinching it together with a little oil. Repeat with each ball of dough.\nPlace the 4 rolls on a baking sheet, on parchment paper or oiled aluminum foil.\nBaking: 180°C (gas mark 6), 40 minutes. 10 minutes before the end of baking, brush the rolls with beaten egg.\nCut into 2 cm slices while the cake is still warm.",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "terrine-agrumes-sophie",
    "title_fr": "Terrine d'agrumes, sauce à l'orange (Sophie)",
    "title_en": "Citrus Terrine with Orange Sauce (Sophie)",
    "course": "desserts",
    "images": [
      "images/scans/terrine-agrumes-sophie.jpg"
    ],
    "french": "Pour la terrine :\n- 2 pamplemousses blancs\n- 2 pomelos roses\n- 6 grosses oranges\n- 5 citrons verts\n- 100 g de sucre roux\n- 5 feuilles de gélatine\n- Feuilles de menthe\n\nPour la sauce à l'orange :\n- Le jus de 5 oranges\n- 70 g de sucre\n- 2 c. à soupe de Maïzena\n\nMettre les feuilles de gélatine à tremper dans un bol d'eau froide. Peler les agrumes à vif puis détacher les quartiers en récupérant le jus. Porter ce jus à ébullition avec le sucre. Hors du feu, ajouter la menthe et laisser infuser 5 minutes. Ajouter alors la gélatine essorée et bien mélanger.\n\nRépartir les agrumes dans un moule à cake, verser le jus chaud par-dessus et laisser refroidir. Mettre au réfrigérateur pendant au moins 3 heures.\n\nPour la sauce, mettre dans une casserole le jus des oranges, le sucre et la Maïzena. Porter à ébullition en fouettant constamment avec un fouet. Baisser le feu et poursuivre la cuisson pendant quelques minutes. Laisser refroidir. Cette sauce se déguste tiède. Et voilà le travail !",
    "english": "For the terrine:\n- 2 white grapefruits\n- 2 pink grapefruits (pomelos)\n- 6 large oranges\n- 5 limes\n- 100 g brown sugar\n- 5 gelatin sheets\n- Mint leaves\n\nFor the orange sauce:\n- Juice of 5 oranges\n- 70 g sugar\n- 2 tbsp cornstarch\n\nSoak the gelatin sheets in a bowl of cold water. Peel the citrus down to the flesh, then separate the segments, catching the juice as you go. Bring this juice to a boil with the sugar. Off the heat, add the mint and let infuse for 5 minutes. Squeeze out the gelatin and stir it in.\n\nArrange the citrus segments in a loaf pan, pour the hot juice over them, and let cool. Refrigerate for at least 3 hours.\n\nFor the sauce, put the orange juice, sugar, and cornstarch in a saucepan. Bring to a boil, whisking constantly. Lower the heat and continue cooking for a few minutes. Let cool. This sauce is served warm. And that's it!",
    "note": "",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "tiramisu-espace-casher",
    "title_fr": "Tiramisu (Espace Casher Strasbourg)",
    "title_en": "Tiramisu (Espace Casher Strasbourg)",
    "course": "desserts",
    "images": [
      "images/scans/tiramisu-espace-casher.jpg"
    ],
    "french": "Pour 6 personnes, en barquette alu de 2L.\n\nIngrédients :\n- 48 boudoirs\n- 2 sachets de sucre vanillé\n- 200 g de sucre roux\n- 6 oeufs\n- 500 g de mascarpone\n- 1 L de café fort\n- 60 g de cacao amer\n\nConseil de pro : pour éviter que le cacao ne soit trop vite imbibé, saupoudrez d'abord votre tiramisu de sucre glace avant de saupoudrer de cacao.\n\nPréparation :\n- Séparer les blancs des jaunes d'oeufs.\n- Mélanger les jaunes avec le sucre roux et le sucre vanillé.\n- Ajouter le mascarpone au fouet.\n- Monter les blancs en neige et les incorporer délicatement à la spatule au mélange précédent. Réserver.\n- Mouiller les biscuits dans le café rapidement avant d'en tapisser le fond du plat.\n- Recouvrir d'une couche de crème au mascarpone puis répéter l'opération en alternant couche de biscuits et couche de crème, en terminant par cette dernière.\n- Saupoudrer de cacao.\n- Mettre au réfrigérateur 4 heures minimum puis déguster frais.",
    "english": "Serves 6, in a 2L foil tray.\n\nIngredients:\n- 48 ladyfingers (boudoirs)\n- 2 packets vanilla sugar\n- 200 g brown sugar\n- 6 eggs\n- 500 g mascarpone\n- 1 liter strong coffee\n- 60 g unsweetened cocoa powder\n\nPro tip: to keep the cocoa from getting soaked in too quickly, dust the tiramisu with powdered sugar first, then with cocoa.\n\nMethod:\n- Separate the egg whites from the yolks.\n- Mix the yolks with the brown sugar and vanilla sugar.\n- Whisk in the mascarpone.\n- Beat the egg whites to stiff peaks and gently fold them into the mixture with a spatula. Set aside.\n- Quickly dip the ladyfingers in the coffee before lining the bottom of the dish.\n- Cover with a layer of the mascarpone cream, then repeat, alternating layers of biscuits and cream, finishing with a layer of cream.\n- Dust with cocoa.\n- Refrigerate for at least 4 hours, then serve chilled.",
    "note": "From a flyer for Espace Casher, Strasbourg.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "cake-pavot-betty-bossi",
    "title_fr": "Cake aux graines de pavot (Betty Bossi)",
    "title_en": "Poppy Seed Cake (Betty Bossi)",
    "course": "desserts",
    "images": [
      "images/scans/cake-pavot-betty-bossi.jpg"
    ],
    "french": "Pour 8 personnes. Mise en place et préparation : env. 30 min. Cuisson au four : env. 1 h.\n\nIngrédients :\n150 g de beurre, mou\n150 g de sucre\n1.5 c.c. de sucre vanillé\n5 jaunes d'œufs\n5 blancs d'œufs\n1 pincée de sel\n2 c.s. de sucre\n125 g d'amandes moulues\n200 g de graines de pavot (moulues)\n\nGlaçage :\n150 g de sucre glace\n1 citron\n1 c.s. d'eau\n2 c.c. de kirsch\nun peu de graines de pavot, selon goût\n\nPréparation :\n1. Préchauffer le four à 180°C. Mélanger dans un grand bol beurre, sucre et sucre vanillé. Incorporer les jaunes d'œufs, travailler encore jusqu'à ce que la masse blanchisse.\n2. Monter les blancs d'œufs en neige ferme avec le sel, ajouter le sucre, fouetter encore jusqu'à ce que la neige brille. Mélanger les amandes et les graines de pavot, incorporer à la masse en alternant avec la neige. Remplir le moule chemisé.\n3. Cuisson : env. 1 h dans la moitié inférieure du four. Retirer, laisser tiédir un peu, démouler, déposer sur une grille.\n4. Mettre le sucre glace dans un bol. Ajouter 2 c.c. de jus du citron, l'eau et le kirsch, mélanger en un glaçage épais. Napper le cake encore chaud de glaçage, parsemer éventuellement de graines de pavot.\n\nMoule : pour un moule à cake de 30 cm, chemisé de papier cuisson.\nConservation : env. 1 semaine au réfrigérateur, enveloppé dans du film alimentaire.\nRemarque : moulues, les graines de pavot développent un arôme plus intense. Les placer env. 2 h au congélateur, puis les moudre finement au hachoir électrique.",
    "english": "Serves 8. Prep: approx. 30 min. Baking: approx. 1 hour.\n\nIngredients:\n150 g butter, softened\n150 g sugar\n1.5 tsp vanilla sugar\n5 egg yolks\n5 egg whites\n1 pinch salt\n2 tbsp sugar\n125 g ground almonds\n200 g poppy seeds (ground)\n\nGlaze:\n150 g powdered sugar\n1 lemon\n1 tbsp water\n2 tsp kirsch\na little poppy seed, to taste\n\nMethod:\n1. Preheat the oven to 180°C (350°F). In a large bowl, mix the butter, sugar, and vanilla sugar. Beat in the egg yolks and keep working until the mixture turns pale.\n2. Whisk the egg whites to stiff peaks with the salt, add the sugar, and keep whisking until glossy. Mix the ground almonds and poppy seeds together, then fold into the batter alternating with the egg whites. Fill the lined pan.\n3. Bake for about 1 hour in the lower half of the oven. Remove, let cool slightly, unmold, and set on a rack.\n4. Put the powdered sugar in a bowl. Add 2 tsp lemon juice, the water, and the kirsch, and mix into a thick glaze. Glaze the cake while still warm, and sprinkle with a few extra poppy seeds if you like.\n\nPan: a 30 cm loaf pan, lined with parchment paper.\nStorage: about 1 week in the fridge, wrapped in plastic film.\nNote: grinding the poppy seeds brings out a stronger flavor — freeze them for about 2 hours first, then grind finely in an electric mill.",
    "note": "From a printed Betty Bossi recipe card found among the family recipes.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "louba",
    "title_fr": "Gâteau au miel (Louba)",
    "title_en": "Honey Cake (Louba)",
    "course": "desserts",
    "images": [
      "images/scans/louba.jpg"
    ],
    "french": "1 verre du miel ≈ 430 gr\nun peu de bicarbonate de soude\n6 oeufs (très gros)\n180 gr du sucre + 90 gr. du sucre\n2 citrons, vanille, un bocal de confiture de cerises\n2 cuillères à soupe d'huile\n480 gr de farine.\n\nFaire chauffer le miel, hors feu ajouter bicarbonate de soude, bien mélanger, laisser refroidir.\nBlanchir les 6 jaunes d'oeufs avec 200gr de sucre, ajouter les citrons (zestes et jus), l'huile, vanille, farine, confiture, noix de pecan ou autres...\nBattre les blancs d'oeufs avec 90gr du sucre et petit à petit mélanger avec le reste.\nVerser l'appareil dans un moule et piquer les noix.\nEnfourner à 200° ≈ 20 min, baisser la température à 180° encore 20 min., vérifier avec un couteau...\n\nBon courage et bon appétit.",
    "english": "1 glass honey ≈ 430 g\na little baking soda\n6 eggs (very large)\n180 g sugar + 90 g sugar\n2 lemons, vanilla, a jar of cherry jam\n2 tablespoons oil\n480 g flour\n\nHeat the honey, then off the heat stir in the baking soda, mix well, and let cool.\nBeat the 6 egg yolks with 200 g sugar until pale, then add the lemons (zest and juice), the oil, vanilla, flour, jam, and pecans or other nuts...\nBeat the egg whites with 90 g sugar and gradually fold into the rest.\nPour the batter into a pan and stud with the nuts.\nBake at 200°C for about 20 min, then lower to 180°C for another 20 min; check with a knife...\n\nGood luck and bon appétit.",
    "note": "A classic honey cake — \"Louba\" may be the name of whoever shared the recipe.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "macarons-ginette-bloch",
    "title_fr": "Macarons (Ginette Bloch)",
    "title_en": "Macaroons (Ginette Bloch)",
    "course": "desserts",
    "images": [
      "images/scans/macarons-ginette-bloch.jpg"
    ],
    "french": "3 blancs d'oeuf\n250 Grs de sucre\n250 Grs d'amandes en poudre\n1 pincée de sel\n\nMélanger le tout (sans battre les blancs en neige).\n\nMettre au four à 150° pendant 20 minutes.\n\nBonne réussite et bonne fête.",
    "english": "3 egg whites\n250 g sugar\n250 g ground almonds\n1 pinch of salt\n\nMix everything together (no need to whip the egg whites first).\n\nBake at 150°C (300°F) for 20 minutes.\n\nGood luck, and happy holiday!",
    "note": "Shared by Ginette Bloch over email in 2009, for the holidays.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "nougat-glace",
    "title_fr": "Nougat glacé",
    "title_en": "Frozen Nougat",
    "course": "desserts",
    "images": [
      "images/scans/nougat-glace-1.jpg",
      "images/scans/nougat-glace-2.jpg",
      "images/scans/nougat-glace-3.jpg",
      "images/scans/nougat-glace-4.jpg"
    ],
    "french": "Alliance subtile de fruits secs, de fruits confits et de miel, rehaussée par le parfum de la fleur d'oranger, un dessert délicieux, simple à réaliser.\n\nPréparation : 45 min. Cuisson : 10 min. 6/8 personnes. Pour 1 moule à cake de 25 cm de long :\n\n- 50 g d'amandes mondées\n- 100 g de pistaches non salées décortiquées\n- 75 g de fruits confits assortis\n- 50 g de cerises confites\n- 120 g de miel d'acacia\n- 2 oeufs entiers\n- 2 blancs d'oeufs\n- 100 g de sucre en poudre\n- 20 cl de crème fleurette\n- 1 cuill. à soupe d'eau de fleur d'oranger\n\nMettez les amandes à chauffer dans une poêle antiadhésive. Dès qu'elles commencent à dorer, saupoudrez-les d'une cuillerée à café de sucre. Remuez jusqu'à un début de caramélisation. Procédez de la même manière avec les pistaches et une cuillerée à soupe de sucre. Laissez refroidir. Découpez les fruits confits et les cerises en tout petits dés. Hachez finement les amandes et les pistaches.\n\nCassez les oeufs en séparant les blancs des jaunes. Déposez les blancs dans une jatte avec les deux autres, montez-les en neige ferme en incorporant une cuillerée à soupe de sucre. Versez le miel dans une casserole, faites-le chauffer 1 min. Puis versez-le en filet sur les blancs tout en fouettant. Continuez à battre pendant 3 min après l'absorption complète du miel.\n\nDans une jatte, fouettez les jaunes avec le reste du sucre jusqu'à ce que le mélange devienne mousseux. Ajoutez peu à peu les blancs en neige, puis l'eau de fleur d'oranger, toujours en fouettant. Incorporez les amandes et les pistaches hachées à la préparation, puis les fruits confits. Mélangez délicatement.\n\nFouettez légèrement la crème fleurette et incorporez-la rapidement.\n\nTapissez le moule de film transparent. Versez la préparation. Égalisez la surface avec une spatule. Faites prendre au moins 12 h au congélateur.\n\nAu moment de servir, démoulez le nougat glacé sur le plat de service et retirez le film transparent. Dégustez, accompagné d'un coulis de fruits rouges ou d'un coulis de mangues.",
    "english": "A subtle blend of dried fruit, candied fruit, and honey, lifted with orange-blossom water — a delicious dessert, simple to make.\n\nPrep: 45 min. Cooking: 10 min. Serves 6-8. For one 25 cm loaf pan:\n\n- 50 g blanched almonds\n- 100 g unsalted shelled pistachios\n- 75 g assorted candied fruit\n- 50 g candied cherries\n- 120 g acacia honey\n- 2 whole eggs\n- 2 egg whites\n- 100 g granulated sugar\n- 20 cl (scant 1 cup) light whipping cream\n- 1 tablespoon orange-blossom water\n\nToast the almonds in a nonstick pan. As soon as they start to turn golden, sprinkle with a teaspoon of sugar and stir until lightly caramelized. Do the same with the pistachios and a tablespoon of sugar. Let cool. Dice the candied fruit and cherries very finely. Finely chop the almonds and pistachios.\n\nSeparate the eggs. Put the whites in a bowl with the 2 extra whites, and whip to stiff peaks, adding a tablespoon of sugar as you go. Warm the honey in a saucepan for 1 minute, then pour it in a thin stream over the whites while whisking. Keep beating for 3 minutes after all the honey is incorporated.\n\nIn a separate bowl, whisk the yolks with the remaining sugar until foamy. Gradually fold in the whipped whites, then the orange-blossom water, still whisking. Fold in the chopped almonds and pistachios, then the candied fruit. Mix gently.\n\nLightly whip the cream and fold it in quickly.\n\nLine the pan with plastic wrap. Pour in the mixture. Smooth the surface with a spatula. Freeze for at least 12 hours.\n\nTo serve, unmold the frozen nougat onto a serving plate and peel off the plastic wrap. Serve with a red-berry or mango coulis.",
    "note": "From a torn magazine page (\"Cuisine gourmandise\"), pieced together from several photos of the same page.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "oeuf-legumes-aspic",
    "title_fr": "Aspic d'oeuf et de légumes",
    "title_en": "Egg and Vegetable Aspic",
    "course": "starters",
    "images": [
      "images/scans/oeuf-legumes-aspic.jpg"
    ],
    "french": "Pour 4 personnes. Durée : 1h15.\n\nIngrédients :\n- 500 g de bouillon (marmite ou autre, au choix)\n- 7 feuilles de gélatine (ou 3 g d'agar-agar)\n- 2 oeufs durs (ou 4 oeufs pochés)\n- 150 g de carottes\n- 150 g de navets\n- 80 g de petits pois\n- 80 g de haricots verts\n\nPréparation :\n1. Préparer tous les ingrédients.\n2. Tailler les carottes et les navets en fine brunoise.\n3. Cuire à l'anglaise, séparément, les haricots verts, les petits pois, les carottes et les navets ; rafraîchir et égoutter chaque légume. Tailler les haricots verts en petits dés.\n4. Mettre à tremper la gélatine dans l'eau froide.\n\n(La suite de la recette — montage et prise en gelée — n'a pas été scannée.)",
    "english": "Serves 4. Time: 1h15.\n\nIngredients:\n- 500 g broth (your choice)\n- 7 sheets gelatin (or 3 g agar-agar)\n- 2 hard-boiled eggs (or 4 poached eggs)\n- 150 g carrots\n- 150 g turnips\n- 80 g peas\n- 80 g green beans\n\nMethod:\n1. Prepare all the ingredients.\n2. Cut the carrots and turnips into a fine dice.\n3. Blanch the green beans, peas, carrots, and turnips separately, refresh in cold water, and drain each. Finely dice the green beans.\n4. Soak the gelatin in cold water.\n\n(The rest of the recipe — assembling and setting the aspic — wasn't scanned.)",
    "note": "Printed from a cooking website (meilleurduchef.com); only the first page was captured, so the final assembly steps are missing.",
    "tags": [
      "parve"
    ]
  },
  {
    "slug": "blinis-benoit-castel",
    "title_fr": "Blinis (Benoît Castel)",
    "title_en": "Blinis (Benoît Castel)",
    "course": "starters",
    "images": [
      "images/scans/blinis-benoit-castel.jpg"
    ],
    "french": "Pour environ 35 blinis.\n\nIngrédients :\n175 gr de farine de sarrazin\n175 gr de farine T45\n5 gr de levure chimique\n500 gr de lait\n75 gr de beurre\n3 oeufs\nUne pincée de sel\nUne pincée de sucre\n\nFaire tiédir le lait avec le beurre.\nMélanger les matières sèches (farines, levure, sel et sucre).\nAjouter le lait, puis les jaunes d'oeufs.\nIncorporer les blancs montés en neige.\nBeurrer légèrement la poêle. Déposer la pâte et cuire les blinis.",
    "english": "For about 35 blinis.\n\nIngredients:\n175g buckwheat flour\n175g T45 flour\n5g baking powder\n500g milk\n75g butter\n3 eggs\nA pinch of salt\nA pinch of sugar\n\nWarm the milk with the butter.\nMix the dry ingredients (flour, yeast, salt and sugar).\nAdd the milk, then the egg yolks.\nStir in the whisked egg whites.\nLightly butter the blini pan. Put in the dough and cook the blinis.",
    "note": "From a printed recipe card by Benoît Castel, already bilingual.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "carpe-juive-jeddefesch",
    "title_fr": "Carpe à la juive (Jeddefesch)",
    "title_en": "Jewish-Style Carp (Jeddefesch)",
    "course": "mains",
    "images": [
      "images/scans/carpe-juive-jeddefesch.jpg"
    ],
    "french": "Alsace. Préparation 20 mn / Cuisson 10 mn.\n\nTrois carpes de 600 g / Quatre gros oignons / Huile 5 cl\nFarine de pain azyme (Matzemehl) 50 g / Persil haché 50 g\nTrois gousses d'ail / Eau 1/2 l / Sel et poivre / Gingembre\n\nLa veille : Écailler et vider les carpes. Les couper en morceaux qu'on salera et que l'on mettra toute une nuit dans une terrine couverte, à température ambiante.\n\nLe lendemain : Hacher les oignons épluchés, mettre l'huile à chauffer, faire colorer légèrement les oignons. Ajouter la farine, la laisser blondir. Verser ensuite l'eau froide, remuer jusqu'à ébullition, y verser alors les morceaux de carpe ainsi que le jus rendu durant la nuit.\n\nVers la mi-cuisson (5 mn environ) mettre le persil haché et assaisonner. (Mettre la tête à cuire en premier, car sa cuisson dure plus longtemps.)\n\nAprès la cuisson, laisser refroidir, puis reconstituer les carpes et les napper de la sauce. Servir froid.",
    "english": "Alsace. Prep 20 min / Cooking 10 min.\n\nThree 600 g carp / Four large onions / Oil, 5 cl\nMatzo meal 50 g / Chopped parsley 50 g\nThree cloves garlic / Water, 1/2 liter / Salt and pepper / Ginger\n\nThe day before: Scale and gut the carp. Cut into pieces, salt them, and leave covered in a dish overnight at room temperature.\n\nThe next day: Chop the peeled onions, heat the oil, and lightly color the onions. Add the matzo meal and let it turn golden. Pour in the cold water, stir until it boils, then add the pieces of carp along with the juices they released overnight.\n\nAbout halfway through cooking (around 5 min), add the chopped parsley and season. (Cook the head first, since it takes longer.)\n\nOnce cooked, let cool, then reassemble the carp and coat with the sauce. Serve cold.",
    "note": "From a printed Alsatian regional cookbook page — a different source from any other carpe à la juive on this site; worth comparing if there's overlap.",
    "tags": [
      "fish"
    ]
  },
  {
    "slug": "le-kfil-pessah",
    "title_fr": "Le Kfil (plat principal marocain de Pessah)",
    "title_en": "Le Kfil (Moroccan Passover Main Dish)",
    "course": "mains",
    "images": [
      "images/scans/le-kfil-pessah.jpg"
    ],
    "french": "Rédigé par Rahel.\n\nIngrédients pour 8 personnes :\n5 branches de cardes\n5 branches de céleri\n300 g de fèves vertes\n1/2 chou blanc\nSel, poivre\n1 c.s. de curcuma\n2 pincées de muscade ou macis\nViande\n5 c.s. d'huile\n\nPréparation :\nCommencer par laver, effiler et vinaigrer les branches de céleri et carde. Laver, vinaigrer et émincer le chou et préparer la viande. Dans une marmite, mettre l'huile, la viande, les légumes ainsi que les épices. Remplir d'eau froide à hauteur et cuire sur feu doux. Laisser mijoter pendant 2 heures ou jusqu'à ce que la viande soit cuite. Ajouter assez d'eau pour que le kfil soit comme une soupe. Au moment de servir, casser les galettes dans un grand récipient et arroser de bouillon. Servir dans un autre grand récipient les légumes et la viande.",
    "english": "Written by Rahel.\n\nIngredients, serves 8:\n5 stalks Swiss chard\n5 stalks celery\n300 g fava beans\n1/2 head white cabbage\nSalt, pepper\n1 tbsp turmeric\n2 pinches nutmeg or mace\nMeat\n5 tbsp oil\n\nMethod:\nStart by washing, stringing, and dressing with vinegar the celery and chard stalks. Wash, dress with vinegar, and shred the cabbage, and prepare the meat. In a pot, put the oil, the meat, the vegetables, and the spices. Fill with cold water to cover and cook over low heat. Let simmer for 2 hours, or until the meat is cooked through. Add enough water that the kfil is soup-like. To serve, break the flatbreads into a large bowl and ladle the broth over them. Serve the vegetables and meat in a separate large dish.",
    "note": "A Moroccan Passover dish, from a blog post dated April 2020.",
    "tags": [
      "meat",
      "passover"
    ]
  },
  {
    "slug": "flans-carottes-parmesan",
    "title_fr": "Flans carottes et parmesan",
    "title_en": "Carrot and Parmesan Flans",
    "course": "starters",
    "images": [
      "images/scans/flans-carottes-parmesan.jpg"
    ],
    "french": "Préparation 15 mn. Cuisson 15 mn. Temps total 30 mn. Pour 6 personnes.\n\nIngrédients :\n7 carottes\n15 cl de crème liquide\n50 g de beurre fondu\n1 cuillère à café de moutarde\n2 oeufs\n40 g de parmesan\nsel et poivre\n\nPréparation :\n1. Faites bouillir deux litres d'eau salée. Épluchez vos carottes et découpez-les en tranches assez épaisses, mettez-les dans l'eau bouillante et faites cuire pendant 20 minutes.\n2. Une fois cuites, égouttez vos carottes et versez-les dans un mixeur. Ajoutez la crème liquide et le beurre fondu. Mixez bien. Ajoutez ensuite la moutarde, les oeufs, le parmesan, un peu de sel et de poivre. Mixez à nouveau.\n3. Versez la préparation dans des ramequins, vous pouvez saupoudrer un peu de parmesan sur le dessus pour que la préparation gratine.\n\nPour finir : Faites cuire au four à 180°C pendant 15 minutes. Sortez du four et laissez tiédir, puis dégustez !",
    "english": "Prep 15 min. Cooking 15 min. Total time 30 min. Serves 6.\n\nIngredients:\n7 carrots\n15 cl (scant 2/3 cup) heavy cream\n50 g melted butter\n1 teaspoon mustard\n2 eggs\n40 g Parmesan\nsalt and pepper\n\nMethod:\n1. Bring two liters of salted water to a boil. Peel the carrots and cut into fairly thick slices, add to the boiling water, and cook for 20 minutes.\n2. Once cooked, drain the carrots and put them in a blender. Add the cream and melted butter. Blend well. Then add the mustard, eggs, Parmesan, and a little salt and pepper. Blend again.\n3. Pour the mixture into ramekins — you can sprinkle a little more Parmesan on top so it gratins.\n\nTo finish: Bake at 180°C (350°F) for 15 minutes. Remove from the oven, let cool slightly, and enjoy!",
    "note": "From Le Journal des Femmes.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "pancakes-benoit-castel",
    "title_fr": "Pancakes (Benoît Castel)",
    "title_en": "Pancakes (Benoît Castel)",
    "course": "desserts",
    "images": [
      "images/scans/pancakes-benoit-castel.jpg"
    ],
    "french": "Pour environ 35 pancakes.\n\nIngrédients :\n320 gr de farine\n1 gr de sel\n40 gr de sucre semoule\n8 gr de levure chimique\n40 gr de jaunes d'oeufs\n500 gr de lait entier\n70 gr de beurre\nVanille liquide\n90 gr de blancs d'oeufs\n\nMélanger toutes les poudres ensemble dans un récipient (farine, sel, sucre, levures).\nDans une casserole, mélanger les jaunes d'oeufs, le lait et la vanille et faire tiédir en remuant.\nAjouter 1/3 du lait tiédi, le beurre pommade et les jaunes dans le mélange de farine.\nBien mélanger puis ajouter le reste de lait tiède.\nMonter les blancs en neige et les ajouter délicatement.\nBeurrer légèrement la poêle à pancakes.\nDéposer la pâte. Lorsque le pancake est gonflé, le retourner afin de le faire dorer.",
    "english": "For about 35 pancakes.\n\nIngredients:\n320g flour\n1g salt\n40g caster sugar\n8g baking powder\n40g egg yolks\n500g whole milk\n70g butter\nVanilla essence\n90g egg whites\n\nMix all the powders together in a bowl (flour, salt, sugar, baking powder).\nIn a saucepan, mix the egg yolks, milk and vanilla essence and warm while stirring.\nAdd 1/3 of the warmed milk, softened butter and egg yolks to the flour mixture.\nMix well and then add the rest of the warm milk.\nWhisk the egg whites and add them slowly.\nLightly butter the pancake pan.\nPut in the dough. When the pancake has risen, turn it over to brown it.",
    "note": "From the same printed recipe card series by Benoît Castel as the blinis, already bilingual.",
    "tags": [
      "dairy"
    ]
  },
  {
    "slug": "tarte-citron-meringue-amande",
    "title_fr": "Tarte citron meringuée (pâte sablée amande)",
    "title_en": "Lemon Meringue Tart (Almond Shortcrust)",
    "course": "desserts",
    "images": [
      "images/scans/tarte-citron-meringue-amande.jpg"
    ],
    "french": "Pâte sablée amande :\n160 g farine\n23 g amande\n65 g sucre glace\n1 g vanille en poudre\n2 g sel\n95 g beurre\n33 g oeuf\n\nPréparation : Mélanger le beurre ainsi que les oeufs, ajouter ensuite le sucre et continuer à mélanger. Ajouter la poudre d'amande et mélanger et enfin la farine et le sel. Étaler la pâte dans un film alimentaire et placer au frigo au minimum 30 minutes. Étaler à 2 mm et foncer la pâte dans un cercle de 18 ou 20 cm. Mettre au frigo. Pour cuire la pâte, il y a plusieurs possibilités. Pour cuire à blanc il faudra cuire à 160 pendant environ 15-20 minutes.\n\nCrème citron :\n135 g jus de citron\n150 g oeuf\n105 g sucre\n16 g maïzena\n85 g beurre\nZeste de 1 citron\n\nPréparation : Mettre dans une casserole le jus de citron, le sucre, les oeufs, et la maïzena. Démarrer la cuisson et cuire à feu moyen jusqu'à la première bulle. Débarrasser rapidement la préparation, couvrir au contact, et réserver. À 40°C ajouter le beurre et créer une émulsion. Filmer au contact et placer au frigo jusqu'au montage.\n\nMeringue suisse : (quantités non capturées sur ce scan)",
    "english": "Almond shortcrust pastry:\n160 g flour\n23 g almond (ground)\n65 g powdered sugar\n1 g vanilla powder\n2 g salt\n95 g butter\n33 g egg\n\nMethod: Mix the butter and the eggs, then add the sugar and keep mixing. Add the ground almond and mix, then finally the flour and salt. Wrap the dough in plastic film and refrigerate for at least 30 minutes. Roll out to 2 mm and line an 18 or 20 cm tart ring. Refrigerate. There are several ways to bake the shell; to blind-bake, bake at 160°C for about 15-20 minutes.\n\nLemon cream:\n135 g lemon juice\n150 g egg\n105 g sugar\n16 g cornstarch\n85 g butter\nZest of 1 lemon\n\nMethod: Put the lemon juice, sugar, eggs, and cornstarch in a saucepan. Cook over medium heat until the first bubble. Quickly transfer the mixture, cover with plastic wrap pressed to the surface, and set aside. At 40°C, whisk in the butter to create an emulsion. Cover with plastic wrap pressed to the surface and refrigerate until assembly.\n\nSwiss meringue: (quantities weren't captured on this scan)",
    "note": "A different lemon meringue tart from the other one already on this site — this version uses an almond shortcrust and Swiss meringue. The meringue quantities weren't captured in the scan.",
    "tags": [
      "dairy"
    ]
  }
];
