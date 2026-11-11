// ============================================================
//  YOUR AMAZON ASSOCIATES TAG — change this one line.
//  Sign up at https://affiliate.amazon.co.jp/ and you get a
//  tag like "yourname-22". Put it here and every button on
//  the site earns you commission automatically.
// ============================================================
const AFFILIATE_TAG = "silverflash-22";

// ============================================================
//  YOUR PRODUCTS — add / remove / edit freely.
//  link:  paste the product link from Amazon (the /dp/... part
//         is enough). The tag above is added automatically.
//  img:   the real product photo. If it ever fails to load,
//         the card falls back to the emoji automatically.
//  note:  write it like you'd tell a friend. Short and honest
//         beats salesy, every time.
//  name_ja / note_ja: the Japanese versions, shown when the
//         visitor switches the site language to Japanese.
// ============================================================
const PRODUCTS = [
  {
    name: "lilyeve Grow Turn Exosome Brush Ampoule (100ml)",
    name_ja: "lilyeve グロウターン エクソソーム ブラシアンプル (100ml)",
    emoji: "🧴",
    img: "https://gd.image-qoo10.jp/ai/983/945/7890945983_02.g_600-w-st_g.jpg",
    category: "Hair care",
    note: "A Korean scalp ampoule with a brush built into the tip, so it goes straight onto the scalp without getting your hands messy. Non-sticky, no fragrance, with biotin, caffeine and peptides.",
    note_ja: "先端にブラシが付いた韓国製の頭皮用アンプル。手が汚れず、直接頭皮に塗れます。ベタつかず無香料、ビオチン・カフェイン・ペプチド配合です。",
    link: "https://link.amazon/B06hhxh1G",
    tag: "hair care"
  },
  {
    name: "Hatomugi Gel — naturie Skin Conditioning Gel (180g)",
    name_ja: "ハトムギジェル — ナチュリエ スキンコンディショニングジェル (180g)",
    emoji: "🫙",
    img: "https://images.amazon.com/images/P/B01BSJ5ZSI.01._SCLZZZZZZZ_.jpg",
    category: "Skin care",
    note: "Leaves my face feeling smooth, with no sticky feeling afterwards — and it's genuinely cheap for such a big 180g tub. No fragrance, no colouring, alcohol-free, so it suits sensitive skin too. One of those rare products that is both affordable and actually good.",
    note_ja: "顔がつるつるになって、ベタつきも残りません — しかも180gの大容量で本当に安いんです。無香料・無着色・アルコールフリーで、敏感肌の人にも。安いのにちゃんと良い、珍しい商品です。",
    link: "https://link.amazon/B0iBOe1PD",
    tag: "skin care"
  },
  {
    name: "YOLU Calm Night Repair Shampoo (refill)",
    name_ja: "YOLU カームナイトリペア シャンプー (詰め替え)",
    emoji: "🫧",
    img: "https://images.amazon.com/images/P/B0DT9PMWP7.01._SCLZZZZZZZ_.jpg",
    category: "Hair care",
    note: "The scent genuinely lasts — two, even three days after washing, my hair still smells of neroli and peony. It's a night-care shampoo that repairs damage while you sleep, and the refill pouch is cheaper and uses less plastic.",
    note_ja: "香りが本当に長持ちします — 洗ってから2日、3日経ってもネロリとピオニーの香りが残ります。寝ている間にダメージを補修する夜用シャンプーで、詰め替えは安くてプラスチックも少なくて済みます。",
    link: "https://link.amazon/B09joeMbI",
    tag: "hair care"
  },
  {
    name: "YOLU Calm Night Repair Treatment (refill)",
    name_ja: "YOLU カームナイトリペア トリートメント (詰め替え)",
    emoji: "🌙",
    img: "https://images.amazon.com/images/P/B0DT9NB14Q.01._SCLZZZZZZZ_.jpg",
    category: "Hair care",
    note: "After using this, my hair feels fluffy and smooth — soft, never weighed down. It's the matching treatment for the YOLU shampoo: repair overnight, wake up with hair that's easy to run your fingers through.",
    note_ja: "使うと髪がふんわりサラサラ — 重たくならず、柔らかいまま。YOLUシャンプーとペアのトリートメントで、夜の間に補修して、朝は指通りの良い髪になります。",
    link: "https://link.amazon/B0b1DbU5x",
    tag: "hair care"
  },
  {
    name: "Anker Nano Charger (70W, 3 Ports)",
    name_ja: "Anker Nano 充電器 (70W, 3ポート)",
    emoji: "⚡",
    img: "https://m.media-amazon.com/images/I/61ty6FitB2L._AC_SL1500_.jpg",
    category: "Charging",
    note: "I run my iPad and iPhone on this at the same time, and it still handles my Apple Watch on top — all three charging together, and it works perfectly. One small charger that covers everything I carry.",
    note_ja: "iPadとiPhoneを同時に充電して、そのうえApple Watchまで — 3台同時でも問題なく動きます。持ち歩くもの全部をカバーするので、小さな充電器ひとつで十分です。",
    link: "https://link.amazon/B02oyGkzJ",
    tag: "charging"
  },
  {
    name: "Anker Zolo USB-C Cable (braided)",
    name_ja: "Anker Zolo USB-Cケーブル (編み込み)",
    emoji: "🔋",
    img: "https://m.media-amazon.com/images/I/61IudO-rzGL._AC_SL1500_.jpg",
    category: "Charging",
    note: "Cheap cables kept fraying on me. This braided one has survived being yanked out of my bag every day for months. Buy two, thank yourself later.",
    note_ja: "安いケーブルはすぐほつれてダメになりました。この編み込みタイプは、毎日バッグから引っ張り出しても何ヶ月も無事です。2本買っておくと、後で自分に感謝しますよ。",
    link: "https://www.amazon.co.jp/s?k=Anker+Zolo+USB-C+cable",

    tag: "charging"
  },
  {
    name: "USB-C Charger for Apple Watch / iPhone",
    name_ja: "Apple Watch / iPhone用 USB-C充電器",
    emoji: "⌚",
    img: "https://product.hstatic.net/1000379731/product/apple_watch_magnetic_charger_to_usb_c_cable_0_3_m_8ea14997068949c9b0e9ce5a1ea8bb3c_grande.jpg",
    category: "Charging",
    note: "If you're in the Apple ecosystem, one magnetic puck at your desk ends the cable mess. Simple thing, but my desk finally looks clean.",
    note_ja: "Apple製品を使っているなら、デスクにマグネット式の充電パックがひとつあるだけで、ケーブルのごちゃごちゃが終わります。シンプルだけど、デスクがようやくすっきりしました。",
    link: "https://www.amazon.co.jp/s?k=Apple+Watch+charger+USB-C",
    tag: "charging"
  },
  {
    name: "Kirin Labelless Natural Water (2L × 9)",
    name_ja: "キリン ラベルレス 天然水 (2L × 9本)",
    emoji: "💧",
    img: "https://images.amazon.com/images/P/B0BXLKNTJL.01._SCLZZZZZZZ_.jpg",
    category: "Home",
    note: "No labels to peel off before recycling, and a case shows up at the door. In Japan that small laziness adds up — I reorder this constantly.",
    note_ja: "リサイクルの前にラベルを剥がす手間がなく、ケースでドアまで届きます。日本ではこの小さな手間が積み重なるので、切らさないように何度も注文しています。",
    link: "https://link.amazon/B01BrpzdJ",
    tag: "home"
  },
  {
    name: "By Amazon Blended Rice (5kg)",
    name_ja: "by Amazon 国産ブレンド米 (5kg)",
    emoji: "🍚",
    img: "https://images.amazon.com/images/P/B0GFHVZYH7.01._SCLZZZZZZZ_.jpg",
    category: "Home",
    note: "Decent everyday rice at a fair price, delivered. Nothing fancy — that's the point. It's a staple, it should be boring and reliable.",
    note_ja: "手頃な価格で届けてくれる、普段使いのお米。特別なものじゃない — そこがポイントです。主食は、退屈なくらい安定しているのが一番だと思います。",
    link: "https://link.amazon/B08go2oxm",
    tag: "home"
  }];
