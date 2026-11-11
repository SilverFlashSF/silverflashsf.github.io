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
//  name_ja / note_ja: Japanese versions for the language menu.
//  name_my / note_my: Burmese versions for the language menu.
// ============================================================
const PRODUCTS = [
  {
    name: "lilyeve Grow Turn Exosome Brush Ampoule (100ml)",
    name_ja: "lilyeve グロウターン エクソソーム ブラシアンプル (100ml)",
    name_my: "lilyeve Grow Turn Exosome Brush Ampoule (100ml)",
    emoji: "🧴",
    img: "https://gd.image-qoo10.jp/ai/983/945/7890945983_02.g_600-w-st_g.jpg",
    category: "Hair care",
    note: "A Korean scalp ampoule with a brush built into the tip, so it goes straight onto the scalp without getting your hands messy. Non-sticky, no fragrance, with biotin, caffeine and peptides.",
    note_ja: "先端にブラシが付いた韓国製の頭皮用アンプル。手が汚れず、直接頭皮に塗れます。ベタつかず無香料、ビオチン・カフェイン・ペプチド配合です。",
    note_my: "ထိပ်မှာ ဘရပ်ရှ်ပါတဲ့ ကိုရီးယား ဦးရေပြား ampoule ပါ။ လက်မညစ်ဘဲ ဦးရေပြားပေါ် တိုက်ရိုက်လိမ်းလို့ရတယ်။ စေးကပ်မှုမရှိ၊ အနံ့မပါ၊ biotin, caffeine နဲ့ peptides ပါဝင်ပါတယ်။",
    link: "https://link.amazon/B06hhxh1G",
    tag: "hair care"
  },
  {
    name: "Hatomugi Gel — naturie Skin Conditioning Gel (180g)",
    name_ja: "ハトムギジェル — ナチュリエ スキンコンディショニングジェル (180g)",
    name_my: "Hatomugi Gel — naturie Skin Conditioning Gel (180g)",
    emoji: "🫙",
    img: "https://images.amazon.com/images/P/B01BSJ5ZSI.01._SCLZZZZZZZ_.jpg",
    category: "Skin care",
    note: "Leaves my face feeling smooth, with no sticky feeling afterwards — and it's genuinely cheap for such a big 180g tub. No fragrance, no colouring, alcohol-free, so it suits sensitive skin too. One of those rare products that is both affordable and actually good.",
    note_ja: "顔がつるつるになって、ベタつきも残りません — しかも180gの大容量で本当に安いんです。無香料・無着色・アルコールフリーで、敏感肌の人にも。安いのにちゃんと良い、珍しい商品です。",
    note_my: "မျက်နှာကို ချောမွေ့စေပြီး စေးကပ်တဲ့ခံစားချက် မကျန်ပါဘူး — ပြီးတော့ 180g အကြီးကြီးကို တကယ်ဈေးသက်သာတယ်။ အနံ့မပါ၊ အရောင်မပါ၊ alcohol မပါလို့ ထိခိုက်လွယ်တဲ့ အသားအရေအတွက်လည်း သင့်တော်ပါတယ်။ ဈေးသက်သာပြီး တကယ်ကောင်းတဲ့ ရှားပါးပစ္စည်းတစ်ခုပါ။",
    link: "https://link.amazon/B0iBOe1PD",
    tag: "skin care"
  },
  {
    name: "YOLU Calm Night Repair Shampoo (refill)",
    name_ja: "YOLU カームナイトリペア シャンプー (詰め替え)",
    name_my: "YOLU Calm Night Repair Shampoo (ပြန်ဖြည့်ထုပ်)",
    emoji: "🫧",
    img: "https://images.amazon.com/images/P/B0DT9PMWP7.01._SCLZZZZZZZ_.jpg",
    category: "Hair care",
    note: "The scent genuinely lasts — two, even three days after washing, my hair still smells of neroli and peony. It's a night-care shampoo that repairs damage while you sleep, and the refill pouch is cheaper and uses less plastic.",
    note_ja: "香りが本当に長持ちします — 洗ってから2日、3日経ってもネロリとピオニーの香りが残ります。寝ている間にダメージを補修する夜用シャンプーで、詰め替えは安くてプラスチックも少なくて済みます。",
    note_my: "အနံ့က တကယ်ကြာကြာခံတယ် — ခေါင်းလျှော်ပြီး ၂ ရက်၊ ၃ ရက်ကြာတဲ့အထိ neroli နဲ့ peony အနံ့ ကျန်နေတုန်းပဲ။ အိပ်နေတုန်း ပျက်စီးမှုကို ပြင်ပေးတဲ့ ညသုံး shampoo ဖြစ်ပြီး၊ ပြန်ဖြည့်ထုပ်က ဈေးသက်သာပြီး ပလတ်စတစ်လည်း နည်းပါတယ်။",
    link: "https://link.amazon/B09joeMbI",
    tag: "hair care"
  },
  {
    name: "YOLU Calm Night Repair Treatment (refill)",
    name_ja: "YOLU カームナイトリペア トリートメント (詰め替え)",
    name_my: "YOLU Calm Night Repair Treatment (ပြန်ဖြည့်ထုပ်)",
    emoji: "🌙",
    img: "https://images.amazon.com/images/P/B0DT9NB14Q.01._SCLZZZZZZZ_.jpg",
    category: "Hair care",
    note: "After using this, my hair feels fluffy and smooth — soft, never weighed down. It's the matching treatment for the YOLU shampoo: repair overnight, wake up with hair that's easy to run your fingers through.",
    note_ja: "使うと髪がふんわりサラサラ — 重たくならず、柔らかいまま。YOLUシャンプーとペアのトリートメントで、夜の間に補修して、朝は指通りの良い髪になります。",
    note_my: "ဒါသုံးပြီးရင် ဆံပင်က ဖောင်းဖောင်းနဲ့ ချောချောမွေ့မွေ့ — လေးသွားတာမျိုး မရှိဘဲ နူးညံ့နေတယ်။ YOLU shampoo နဲ့ အတွဲလိုက် treatment ပါ — ညဘက်မှာ ပြင်ပေးပြီး၊ မနက်ကျတော့ လက်နဲ့သပ်လိုက်ရင် ချောနေတဲ့ ဆံပင်နဲ့ နိုးလာတာပေါ့။",
    link: "https://link.amazon/B0b1DbU5x",
    tag: "hair care"
  },
  {
    name: "Anker Nano Charger (70W, 3 Ports)",
    name_ja: "Anker Nano 充電器 (70W, 3ポート)",
    name_my: "Anker Nano အားသွင်းစက် (70W, 3 Ports)",
    emoji: "⚡",
    img: "https://m.media-amazon.com/images/I/61ty6FitB2L._AC_SL1500_.jpg",
    category: "Charging",
    note: "I run my iPad and iPhone on this at the same time, and it still handles my Apple Watch on top — all three charging together, and it works perfectly. One small charger that covers everything I carry.",
    note_ja: "iPadとiPhoneを同時に充電して、そのうえApple Watchまで — 3台同時でも問題なく動きます。持ち歩くもの全部をカバーするので、小さな充電器ひとつで十分です。",
    note_my: "ဒါနဲ့ iPad နဲ့ iPhone ကို တစ်ချိန်တည်း အားသွင်းတယ်၊ အဲဒီအပေါ်မှာမှ Apple Watch ကိုပါ ထပ်သွင်းနိုင်သေးတယ် — ၃ မျိုးလုံး တစ်ပြိုင်တည်း အဆင်ပြေပြေ အလုပ်လုပ်တယ်။ သယ်သွားသမျှ အကုန်လုံးကို လွှမ်းခြုံပေးတဲ့ အားသွင်းစက် သေးသေးလေး တစ်ခုတည်းနဲ့ လုံလောက်ပါတယ်။",
    link: "https://link.amazon/B02oyGkzJ",
    tag: "charging"
  },
  {
    name: "Anker Zolo USB-C Cable (braided)",
    name_ja: "Anker Zolo USB-Cケーブル (編み込み)",
    name_my: "Anker Zolo USB-C Cable (ကျစ်ထားသောကြိုး)",
    emoji: "🔋",
    img: "https://m.media-amazon.com/images/I/61IudO-rzGL._AC_SL1500_.jpg",
    category: "Charging",
    note: "Cheap cables kept fraying on me. This braided one has survived being yanked out of my bag every day for months. Buy two, thank yourself later.",
    note_ja: "安いケーブルはすぐほつれてダメになりました。この編み込みタイプは、毎日バッグから引っ張り出しても何ヶ月も無事です。2本買っておくと、後で自分に感謝しますよ。",
    note_my: "ဈေးပေါတဲ့ ကြိုးတွေက ခဏခဏ ပြတ်ထွက်ပြီး ပျက်ကုန်တယ်။ ဒီ ကျစ်ထားတဲ့ ကြိုးကတော့ နေ့တိုင်း အိတ်ထဲက ဆွဲထုတ်နေတာတောင် လနဲ့ချီ ခံခဲ့တယ်။ ၂ ချောင်း ဝယ်ထားပါ၊ နောင်မှ ကျေးဇူးတင်မိလိမ့်မယ်။",
    link: "https://www.amazon.co.jp/s?k=Anker+Zolo+USB-C+cable",

    tag: "charging"
  },
  {
    name: "USB-C Charger for Apple Watch / iPhone",
    name_ja: "Apple Watch / iPhone用 USB-C充電器",
    name_my: "Apple Watch / iPhone အတွက် USB-C အားသွင်းစက်",
    emoji: "⌚",
    img: "https://product.hstatic.net/1000379731/product/apple_watch_magnetic_charger_to_usb_c_cable_0_3_m_8ea14997068949c9b0e9ce5a1ea8bb3c_grande.jpg",
    category: "Charging",
    note: "If you're in the Apple ecosystem, one magnetic puck at your desk ends the cable mess. Simple thing, but my desk finally looks clean.",
    note_ja: "Apple製品を使っているなら、デスクにマグネット式の充電パックがひとつあるだけで、ケーブルのごちゃごちゃが終わります。シンプルだけど、デスクがようやくすっきりしました。",
    note_my: "Apple ပစ္စည်းတွေ သုံးတဲ့သူဆိုရင် စားပွဲပေါ်မှာ သံလိုက်အားသွင်းစက် တစ်ခုရှိရုံနဲ့ ကြိုးရှုပ်ထွေးမှုတွေ ပြီးဆုံးသွားတယ်။ ရိုးရှင်းတဲ့ပစ္စည်းပေမယ့် ကျွန်တော့်စားပွဲ နောက်ဆုံးတော့ သန့်ရှင်းသွားပြီ။",
    link: "https://www.amazon.co.jp/s?k=Apple+Watch+charger+USB-C",
    tag: "charging"
  },
  {
    name: "Kirin Labelless Natural Water (2L × 9)",
    name_ja: "キリン ラベルレス 天然水 (2L × 9本)",
    name_my: "Kirin လေဘယ်မပါ သဘာဝရေ (2L × 9)",
    emoji: "💧",
    img: "https://images.amazon.com/images/P/B0BXLKNTJL.01._SCLZZZZZZZ_.jpg",
    category: "Home",
    note: "No labels to peel off before recycling, and a case shows up at the door. In Japan that small laziness adds up — I reorder this constantly.",
    note_ja: "リサイクルの前にラベルを剥がす手間がなく、ケースでドアまで届きます。日本ではこの小さな手間が積み重なるので、切らさないように何度も注文しています。",
    note_my: "Recycle လုပ်ခင် လေဘယ်ခွာရတဲ့ အလုပ်မရှိဘဲ၊ တစ်ကတ်လုံး အိမ်တံခါးဆီ ရောက်လာတယ်။ ဂျပန်မှာ ဒီအလုပ်သေးသေးလေးတွေက စုပုံလာတာမို့ ဒါကို အမြဲတမ်း ပြန်မှာဖြစ်နေပါတယ်။",
    link: "https://link.amazon/B01BrpzdJ",
    tag: "home"
  },
  {
    name: "By Amazon Blended Rice (5kg)",
    name_ja: "by Amazon 国産ブレンド米 (5kg)",
    name_my: "by Amazon ဂျပန်ဆန် Blended Rice (5kg)",
    emoji: "🍚",
    img: "https://images.amazon.com/images/P/B0GFHVZYH7.01._SCLZZZZZZZ_.jpg",
    category: "Home",
    note: "Decent everyday rice at a fair price, delivered. Nothing fancy — that's the point. It's a staple, it should be boring and reliable.",
    note_ja: "手頃な価格で届けてくれる、普段使いのお米。特別なものじゃない — そこがポイントです。主食は、退屈なくらい安定しているのが一番だと思います。",
    note_my: "ဈေးသင့်ပြီး အိမ်အရောက် ပို့ပေးတဲ့ နေ့စဉ်သုံး ဆန်ပါ။ ထူးထူးခြားခြား မဟုတ်ဘူး — အဲဒါကိုက အဓိကပဲ။ အဓိကအစားအစာဆိုတာ ပျင်းစရာကောင်းလောက်အောင် စိတ်ချရမှ ကောင်းတာ။",
    link: "https://link.amazon/B08go2oxm",
    tag: "home"
  }];
