"""Apply one auditable Japanese-name crosswalk to Redfreshet and Altema."""
import csv
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / 'src/research/gift-sources/2026-11-21'
MAPPING_FILE = ROOT / 'data/jp-name-mapping.csv'

characters = {
    'アスワン':'Aswan','アナトリア':'Anatolia','アレキサンドラ':'Alexandra',
    'イオ':'Io','イニオニ':'Inyoni','ウーシュラ':'Ursula','ウルタンド':'Ultand',
    'エスメラルダ':'Esmeralda','オリンピア':'Olympia','オルヘル':'Orchel',
    'カイ':'Cai','カターニャ':'Catania','キリーク':'Creek','キロイカ':'Kiroc',
    'クラプカ':'Klapka','グザラン':'Guzran','ゲイツ':'Gaitz','コウカ':'Hong Hua',
    'ゴライアス':'Goliath','ザーコネ':'Zarcone','サラン':'Sha Lan','シモン':'Simon',
    'シロッコ':'Sirocco','ジェスター':'Jester','ジャスミン':'Jasmine',
    'セオドラ':'Theodora','セテス':'Seteth','セントリオン':'Centurio',
    'ソフィア':'Sofia','タホウニア':'Tahonia','タリムーン':'Talimun',
    'ダイトウ':'Dadao','ダンテ':'Dante','ティアラ':'Tialla','ディエゴ':'Diego',
    'ディートリヒ':'Dietrich','トビヤス':'Tobias','トロイア':'Troy',
    'ナジャ':'Nezha','ニネ':'Ninae','ヌッツォ':'Nuzzuo','ヌディーヌ':'Nydine',
    'ネイサン':'Nathan','ノクチュラ':'Noctula','ハルヴィン':'Halvin',
    'バッカニア':'Buccar','ピーテル':'Peter','ファビオ':'Fabio','フィアナ':'Fianna',
    'ペぺ':'Peppe','ベルトラン':'Bertrand','ベンディッツ':'Benditz',
    'ペペ':'Peppe','レダ':'Leda',
    'ボナパルテ':'Bonaventure','マジーデ':'Majide','ミカエラ':'Mikaela',
    'ムウ':'Mu','ヨーカイ':'Yang Jie','ライサンダー':'Lysander',
    'リリアン':'Lilian','ルルディヤー':'Ludia','ロレッタ':'Loretta',
}

gifts = {}
def add(english, *japanese):
    for name in japanese:
        gifts[name] = (english, 'Japanese translation or spelling alias')

add('Flexible Fishing Rod','しなやかな釣り竿')
add('Crafting Knives','よく切れる彫刻刀')
add('Wing Fletching','風裂きの矢羽根')
add('Alecto Garum','アレクトーガルム')
add('Orgus Coffee','オーガスのテフ')
add('Garum','ガルム')
add('Ginji Cervi','ギンジ入りセルビ','ギンジの実')
add('Saraminian Sweets','サラミスの菓子')
add('Jamel Milk','ジャーメルの乳')
add('Dagda Beard Grass','ダグザヒゲシバ')
add('The Works of Dante','ダンテ戯曲全集','ダンテ戯')
add('Coffee Pastries','テフ入り焼き菓子','テフ入りの焼き菓子')
add('Niiza Garum','ニーザ産ガルム')
add('Fodlan Tea','フォドラの紅茶')
add('Morfis Tea','モルフィスの紅茶')
add('Yarc Milk','ヤクの乳')
add('Portrait of Yu Phas','ユ・ファスの肖像','ユ・ファス')
add('Sturdy Rucksack','丈夫な背負い革袋')
add('Poems of the Greats','世界の名詩集')
add('Dual Fish Knives','二振りの魚包丁')
add('Ceremonial Spear','儀礼用の鋭い槍','儀式用の鋭い槍')
add('Energizing Ghosh','刺激的なゴーシュ','刺激的なゴージュ')
add('Southern Ghosh','南方のゴーシュ','南方のゴージュ')
add('Southern Coffee','南方の薫るテフ')
add('Southern Coffee','南方のテフ')
add('Rare Southern Seeds','南部の珍しい種子')
add('Meaty Delicacy','獣肉と砂虫の珍味')
add('Rare Southern Seeds','南部の珍しい種子')
add('Strong Seasonings','味わい深い調味料')
add('Select Coffee','大粒のテフ')
add('Ahm Lu Cloth','天露水')
add('Sun Ghosh','太陽のゴーシュ','太陽のゴージュ')
add('Pickled Bulbs','球根の酢漬け')
add('The Knight’s Suitors','女騎士と求婚者')
add('Rancid Garum','嫌なガルム')
add('Special “Medicine”','百薬の雫')
add('Kitten Figurine','子猫の置物')
add('Full Sewing Kit','実用的な裁縫道具')
add('Home-Recipe Book','家庭料理大全')
add('Flower Painting','小さい白い花の絵')
add('Common Coffee','小粒のテフ')
add('Honey Pastries','少し甘い焼き菓子')
add('Huge Fish Eyeball','巨大魚の目玉')
add('Bow Repair Kit','弓の手入れ道具','弓の手入れ')
add('School Scandal','教職員事件簿')
add('Trader’s Handbook','旅の老師の口伝録')
add('Trader’s Handbook','貿易取引入門')
add('Village Recipes','村の素朴な料理集')
add('Eastern Black Silk','東方の漆黒絹')
add('Eastern Earrings','東方の耳飾り')
add('Pastry Cookbook','栄養満点お菓子本','栄養満点のお菓子本')
add('Training Weights','武術訓練用の重り')
add('Gaudy Bangle','派手すぎる腕輪')
add('Pack of Pastels','淡い色の画材')
add('Smooth Garum','淡麗なガルム')
add('Strong Cervi','濃いセルビ')
add('Concentrated Garum','濃厚なガルム')
add('Volcano Ghosh','火の山のゴーシュ','火の山のゴージュ')
add('Mature Ghosh','熟成ゴーシュ','熟成ゴージュ')
add('Mature Shosh','熟成ソウシュ')
add('Mature Dried Cervi','熟成干しセルビ')
add('Rare Spices','珍しい香辛料')
add('Candy Crystals','繊細な氷砂糖')
add('Aromatic Shosh','芳醇なソウシュ','芳醇ソウシュ')
add('Strategy Manuscript','軍略書の写本','軍略本の写本')
add('Potted Vegetables','野菜の鉢植え')
add('Exquisite Ring','派手すぎる指輪','派手で美しい指輪')
add('Tales of Adventure','南洋冒険奇譚')
add('Tome from Away','海の向こうの古書')
add('Rugged Blade','無骨な業物')
add('Pure-White Cervi','純白のセルビ')
add('Training Bracelet','鍛錬用の装飾指輪')
add('Brined Fish Guts','魚の内蔵の塩漬け')
add('Ebony Game Board','黒檀の盤上遊戯')
add('Odd Vegetable Seeds','奇妙な野菜の種子')
add('Thick Foreign Tome','異邦の分厚い書物')
add('Board-Game Tactics','盤上遊戯の定跡集')
add('Shield Portrait','盾たちの肖像画')
add('Crimson Ghosh','真紅のゴーシュ','真紅のゴージュ')
add('Crimson Bull Figure','真紅の牛の像')
add('Red-Rose Bouquet','真紅の薔薇の花束')
add('Arrowhead Gem','矢じりの形の宝石')
add('Secret Ghosh','秘伝のゴーシュ','秘伝のゴージュ')
add('Magic-Trick Set','簡単な手品道具')
add('Spirit Board Game','精霊の盤上遊戯')
add('Protection Figurine','精霊の護人形')
add('Weak Cervi','薄いセルビ')
add('Rustic Ghosh','素朴なゴーシュ','素朴なゴージュ')
add('Simple Pastries','素朴な焼き菓子')
add('Blue-Rose Bouquet','蒼い薔薇の花束')
add('Blue Shosh','蒼空のソウシュ')
add('Herbal Recipe Guide','薬草料理大全')
add('Honey Milk','蜂蜜入りの乳','蜂蜜入の乳')
add('Honey Pastries','蜂蜜入り焼き菓子','蜂蜜入りの焼き菓子')
add('Training Pillar','訓練用の石柱','鍛錬用の石柱')
add('Trader’s Handbook','貿易取引入門')
add('Sharp Fishhook','鋭い釣り針')
add('Sharp Dagger','鋭く小さな短剣')
add('Training Bracelet','鍛錬用の装飾腕輪','訓練用の装飾腕輪','鍛錬用の装飾道具')
add('Joint-Relief Gloves','関節保護用長手袋')
add('Tales of the Arena','闘技場物語の写本')
add('Decorative Arrows','美しい飾り矢')
add('Coffee Pastries','香ばしい焼き菓子')
add('Horse-Grooming Kit','馬のお手入れ道具','馬の手入れ道具')
add('Mane Ornament','鬣飾り')
add('Antique Medal','骨董の戦功章','骨蓋の戦功章')
add('Divination Bagua','高級八卦占い道具','高級八掛占い道具')
add('Jade Ghosh','翡翠色のゴーシュ','翡翠色のゴージュ','翡翠色ゴーシュ')
add('Jade Panther Figure','翡翠色の豹の像')
add('Imitation Medal','模造の武功章')
add('Eastern Tea Leaves','東方の最高級茶葉','東方の最高茶葉')
add('Eastern Board Game','東方の盤上遊戯')
add('Eastern Love Story','東方恋愛見聞録')
add('Morfis Almanac','モルフィス歳時記')
add('Pickled Vegetables','野菜の瓶漬け')
add('Outdoor Cooking Set','野外調理道具','野外調理用具')
add('Pegasus Panorama','ペガサスの風景画','ペガサスの風刺画')
add('Solomon Coffee','幻のソロモンテフ')
add('Legendary Garum','幻のガルム')
add('Light Shosh','軽妙なソウシュ')
add('Young Ghosh','若いゴーシュ','若いゴージュ')
add('Young Shosh','若いソウシュ')
add('Jade Ghosh','翡翠色のゴーシュ','翡翠色のゴージュ','翡翠色ゴーシュ')
add('Decorative Arrows','美しい飾り矢')
add('Eastern Board Game','東方の盤上遊戯')

# These labels are category/profile prose in Altema's preference fields rather
# than catalog gifts. Preserve them in the source CSV without a gift mapping.
non_gifts = {
    'テフ','ブリギットの民','サラミスの民の幸福','セイロス教の教え',
    '太陽','精霊たち','精霊との会話','自分','一人の時間','美しいものの解剖',
    '「美しい」と感じるもの','美しい女性','女','いい女','いい顔の男','おじいさま',
    'お掃除','お料理','お酒','お洗濯','お料理','かわいそうな人','すべての女性たち',
    'サラミスの民の幸福','家族','家事全般','家族','家事全般',
}

altema_rows = list(csv.DictReader((ARCHIVE / 'altema-reactions.csv').open(encoding='utf-8-sig')))
refresh = ARCHIVE / 'current-refresh'
game8_rows = list(csv.DictReader((refresh / 'game8-reactions.csv').open(encoding='utf-8-sig')))
redfreshet_path = refresh / 'redfreshet-reactions.csv'
redfreshet_rows = list(csv.DictReader((redfreshet_path if redfreshet_path.exists() else
    ROOT / 'src/research/gift-sources/2026-10-23/redfreshet-all-characters.csv').open(encoding='utf-8-sig')))
character_names = ({r['character_name_ja'] for r in altema_rows}
                   | {r['character_name_ja'] for r in redfreshet_rows}
                   | {r['character_name_ja'] for r in game8_rows})
gift_names = ({r['gift_name_ja'] for r in altema_rows}
              | {r['gift_name_ja'] for r in redfreshet_rows}
              | {r['gift_name_ja'] for r in game8_rows})

mapping_rows = []
for source_name in sorted(character_names):
    english = characters.get(source_name)
    mapping_rows.append(['character', source_name, english or '', 'mapped' if english else 'unresolved', 'canonical English roster name'])
for source_name in sorted(gift_names):
    if source_name in gifts:
        english, method = gifts[source_name]
        status = 'mapped'
        note = method
    elif source_name in non_gifts:
        english, status, note = '', 'not_a_catalog_gift', 'profile/category phrase or non-item text'
    else:
        english, status, note = '', 'unresolved', 'requires review; raw source label retained'
    mapping_rows.append(['gift', source_name, english, status, note])

with MAPPING_FILE.open('w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow(['entity_type','source_name_ja','canonical_english_name','mapping_status','mapping_note'])
    writer.writerows(mapping_rows)

crosswalk = {(r[0], r[1]): (r[2], r[3]) for r in mapping_rows}
mapped_rows = []
unmapped_rows = []
for row in altema_rows:
    character, char_status = crosswalk[('character', row['character_name_ja'])]
    gift, gift_status = crosswalk[('gift', row['gift_name_ja'])]
    (mapped_rows if character and gift and char_status == gift_status == 'mapped' else unmapped_rows).append(
        [row['character_name_ja'], character, row['gift_name_ja'], gift, row['source_tier_ja'], row['source_page_line']]
    )
with (ARCHIVE / 'altema-reactions-mapped.csv').open('w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow(['character_name_ja','character','gift_name_ja','gift','source_tier_ja','source_page_line'])
    writer.writerows(mapped_rows)
with (ARCHIVE / 'altema-reactions-unmapped.csv').open('w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow(['character_name_ja','gift_name_ja','source_tier_ja','source_page_line'])
    writer.writerows([[r[0], r[2], r[4], r[5]] for r in unmapped_rows])

game8_mapped, game8_unmapped = [], []
for row in game8_rows:
    character, char_status = crosswalk[('character', row['character_name_ja'])]
    gift, gift_status = crosswalk[('gift', row['gift_name_ja'])]
    entry = [row['character_name_ja'], character, row['gift_name_ja'], gift,
             row['source_tier_ja']]
    (game8_mapped if character and gift and char_status == gift_status == 'mapped' else
     game8_unmapped).append(entry)
with (refresh / 'game8-reactions-mapped.csv').open('w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow(['character_name_ja','character','gift_name_ja','gift','source_tier_ja'])
    writer.writerows(game8_mapped)
with (refresh / 'game8-reactions-unmapped.csv').open('w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow(['character_name_ja','gift_name_ja','source_tier_ja'])
    writer.writerows([[r[0], r[2], r[4]] for r in game8_unmapped])

redfreshet_mapped, redfreshet_unmapped = [], []
for row in redfreshet_rows:
    character, char_status = crosswalk[('character', row['character_name_ja'])]
    gift, gift_status = crosswalk[('gift', row['gift_name_ja'])]
    entry = [row['character_name_ja'], character, row['gift_name_ja'], gift,
             row['reaction_label_ja'], row['reaction_class']]
    (redfreshet_mapped if character and gift and char_status == gift_status == 'mapped' else redfreshet_unmapped).append(entry)
with (refresh / 'redfreshet-reactions-mapped.csv').open('w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow(['character_name_ja','character','gift_name_ja','gift','source_tier_ja','source_reaction_class'])
    writer.writerows(redfreshet_mapped)
with (refresh / 'redfreshet-reactions-unmapped.csv').open('w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow(['character_name_ja','gift_name_ja','source_tier_ja','source_reaction_class'])
    writer.writerows(redfreshet_unmapped)

print(f'crosswalk: {len(mapping_rows)} names; Altema {len(mapped_rows)}/{len(altema_rows)}; Game8 {len(game8_mapped)}/{len(game8_rows)}; Redfreshet {len(redfreshet_mapped)}/{len(redfreshet_rows)}')
