# arabic2franko
> converting Arabic to Franko

usage
``` bash
npm i arabic2franko
```
``` js
const arabic2franko = require('arabic2franko');
let
  text = `لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.
`,
  arr = ["أ", "ح", "م", "د"]

console.log(arabic2franko(text))
/*
lwrym eybswm(Lorem Ipsum) hw bbsa6a n9 4kly (bm3na an al3'aya hy al4kl wlys alm7twa) wyost5dm fy 9na3at alm6ab3 wdwr aln4r. kan lwrym eybswm wlayzal alm3yar lln9 al4kly mnd' al2rn al5ams 34r 3ndma 2amt m6b3a mghwla br9 mgmw3a mn ala7rf b4kl 34waey a5d'tha mn n9، ltkwwn ktyyb bmthaba dlyl aw mrg3 4kly lhd'h ala7rf. 5msa 2rwn mn alzmn lm t29'y 3la hd'a aln9، bl anh 7ta 9ar mst5dman wb4klh ala9ly fy al6ba3a waltn9'yd alelktrwny. ant4r b4kl kbyr fy stynyyat hd'a al2rn m3 e9dar r2ae2 "lytrasyt" (Letraset) alblastykya t7wy m2a63 mn hd'a aln9، w3ad lynt4r mra a5ra mo5raa m3 zhwr bramg aln4r alelktrwny mthl "aldws bayg maykr" (Aldus PageMaker) walty 7wt ay9'an 3la ns5 mn n9 lwrym eybswm.
*/
console.log(arabic2franko(arr))
// a7md
console.log(arabic2franko())
// يا اسطا فين النص اللي هنحوله ؟

```
