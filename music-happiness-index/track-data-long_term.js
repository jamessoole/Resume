const names = ["BLEACH", "Empty", "Humongous", "bellyache", "I THINK", "NEW ORLEANS", "SUMMER", "EARFQUAKE", "Fallen", "GONE, GONE / THANK YOU", "Buttercup", "See You Again (feat. Kali Uchis)", "IGOR'S THEME", "NEW MAGIC WAND", "Electric Love", "Brazil", "GOLD", "Haircut", "Boredom (feat. Rex Orange County & Anna of the North)", "Sunday Candy", "SWEET", "QUEER", "Loving Is Easy", "ZIPPER", "Paracetamol", "After The Storm (feat. Tyler, The Creator & Bootsy Collins)", "Who Dat Boy (feat. A$AP Rocky)", "1998 TRUMAN", "WHAT'S GOOD", "ocean eyes", "XXX. FEAT. U2.", "&burn (with Vince Staples)", "911 / Mr. Lonely (feat. Frank Ocean & Steve Lacy)", "WEIGHT", "A BOY IS A GUN*", "SAN MARCOS", "I Ain't Got Time!", "With You", "In My Dreams", "For Whom The Bell Tolls", "FourFiveSeconds", "Where This Flower Blooms (feat. Frank Ocean)", "COPYCAT", "Tamale", "idontwannabeyouanymore", "Bored", "ARE WE STILL FRIENDS?", "Stan", "'Till I Collapse", "Carry Me Out"]
const artists = ["BROCKHAMPTON", "Kevin Abstract", "Declan McKenna", "Billie Eilish", "Tyler, The Creator", "BROCKHAMPTON", "BROCKHAMPTON", "Tyler, The Creator", "Jaden", "Tyler, The Creator", "Hippo Campus", "Tyler, The Creator", "Tyler, The Creator", "Tyler, The Creator", "BØRNS", "Declan McKenna", "BROCKHAMPTON", "Ryan Beatty", "Tyler, The Creator", "Donnie Trumpet & The Social Experiment", "BROCKHAMPTON", "BROCKHAMPTON", "Rex Orange County", "BROCKHAMPTON", "Declan McKenna", "Kali Uchis", "Tyler, The Creator", "BROCKHAMPTON", "Tyler, The Creator", "Billie Eilish", "Kendrick Lamar", "Billie Eilish", "Tyler, The Creator", "BROCKHAMPTON", "Tyler, The Creator", "BROCKHAMPTON", "Tyler, The Creator", "Noname", "Kali Uchis", "J. Cole", "Rihanna", "Tyler, The Creator", "Billie Eilish", "Tyler, The Creator", "Billie Eilish", "Billie Eilish", "Tyler, The Creator", "Eminem", "Eminem", "Mitski"]
const energies = [0.657, 0.498, 0.806, 0.573, 0.579, 0.815, 0.55, 0.498, 0.712, 0.492, 0.763, 0.559, 0.672, 0.73, 0.797, 0.617, 0.647, 0.495, 0.578, 0.596, 0.628, 0.625, 0.609, 0.681, 0.683, 0.656, 0.485, 0.713, 0.909, 0.363, 0.619, 0.379, 0.61, 0.746, 0.689, 0.503, 0.725, 0.58, 0.839, 0.416, 0.272, 0.429, 0.388, 0.93, 0.412, 0.318, 0.497, 0.768, 0.847, 0.382]
const valences = [0.718, 0.504, 0.486, 0.408, 0.431, 0.4, 0.542, 0.413, 0.231, 0.471, 0.199, 0.62, 0.0648, 0.464, 0.518, 0.665, 0.29, 0.546, 0.239, 0.554, 0.722, 0.676, 0.537, 0.687, 0.133, 0.83, 0.144, 0.482, 0.449, 0.169, 0.293, 0.346, 0.297, 0.273, 0.505, 0.53, 0.547, 0.52, 0.907, 0.185, 0.354, 0.27, 0.234, 0.967, 0.247, 0.112, 0.313, 0.507, 0.1, 0.113]
const modes = [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]
const danceabilities = [0.595, 0.59, 0.35, 0.695, 0.826, 0.639, 0.497, 0.554, 0.499, 0.518, 0.623, 0.558, 0.467, 0.621, 0.611, 0.687, 0.808, 0.779, 0.559, 0.511, 0.718, 0.773, 0.756, 0.835, 0.489, 0.718, 0.706, 0.607, 0.458, 0.511, 0.568, 0.776, 0.48, 0.451, 0.417, 0.388, 0.549, 0.521, 0.606, 0.595, 0.582, 0.686, 0.679, 0.742, 0.483, 0.614, 0.216, 0.78, 0.548, 0.154]
const tempos = [156.093, 80.022, 115.065, 99.939, 121.075, 159.903, 79.955, 79.635, 82.523, 78.848, 108.871, 78.558, 163.1, 139.566, 120.041, 121.08, 110.036, 128.992, 79.938, 158.063, 92.107, 82.004, 117.023, 113.989, 83.993, 79.394, 115.414, 134.994, 118.227, 144.892, 170.115, 82.531, 90.034, 160.259, 79.568, 73.965, 108.822, 83.78, 165.951, 74.556, 205.846, 130.09, 124.909, 129.986, 170.163, 119.959, 187.308, 80.063, 171.447, 75.495]
const artworks = ["https://i.scdn.co/image/ab67616d0000b273ef51817e6a6563b6f7ce5872", "https://i.scdn.co/image/ab67616d0000b273030b3a60e1041ebec36d2a73", "https://i.scdn.co/image/ab67616d0000b273ec8be21d32e663885fbb244e", "https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795", "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", "https://i.scdn.co/image/ab67616d0000b273de91214392394303e66d1cb6", "https://i.scdn.co/image/ab67616d0000b2737d15fb20303a589acc1ab98b", "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", "https://i.scdn.co/image/ab67616d0000b2736aafb01504b69173c877bdca", "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", "https://i.scdn.co/image/ab67616d0000b273d65c698f7b03031930a2a570", "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3", "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", "https://i.scdn.co/image/ab67616d0000b273cc2cf912462d8ae4ef856434", "https://i.scdn.co/image/ab67616d0000b273ec8be21d32e663885fbb244e", "https://i.scdn.co/image/ab67616d0000b273a0c4a585a7d73b4943b9bf13", "https://i.scdn.co/image/ab67616d0000b273f5836791fd265b08343034cd", "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3", "https://i.scdn.co/image/ab67616d0000b27342bf3f893586a144871b35a8", "https://i.scdn.co/image/ab67616d0000b2737d15fb20303a589acc1ab98b", "https://i.scdn.co/image/ab67616d0000b2737d15fb20303a589acc1ab98b", "https://i.scdn.co/image/ab67616d0000b273280a72fdd9bd502bcba6ada8", "https://i.scdn.co/image/ab67616d0000b273ef51817e6a6563b6f7ce5872", "https://i.scdn.co/image/ab67616d0000b273ec8be21d32e663885fbb244e", "https://i.scdn.co/image/ab67616d0000b273479ab0eacb3b370b9ae47d8a", "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3", "https://i.scdn.co/image/ab67616d0000b2735bb7c4230cc169f272818c10", "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", "https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795", "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699", "https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795", "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3", "https://i.scdn.co/image/ab67616d0000b273de91214392394303e66d1cb6", "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", "https://i.scdn.co/image/ab67616d0000b273de91214392394303e66d1cb6", "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3", "https://i.scdn.co/image/ab67616d0000b273b44b3ed14ccac465147b96f1", "https://i.scdn.co/image/ab67616d0000b27390b4e1905b1fc48c537ec053", "https://i.scdn.co/image/ab67616d0000b273f4ca75192df162f78a24023e", "https://i.scdn.co/image/ab67616d0000b27336a9ed72b45e54ff307641be", "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3", "https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795", "https://i.scdn.co/image/ab67616d0000b2734893508eb6495df8ddb015e0", "https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795", "https://i.scdn.co/image/ab67616d0000b273e0f2af91be409aad81bba98c", "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42", "https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4", "https://i.scdn.co/image/ab67616d0000b27350f8ace2690355fa20e58227", ]
const previews = ["https://p.scdn.co/mp3-preview/0275a1e91ff158f4dd33f8aaa9bc88a1a2c3c901?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/e2057c32537989cd4a051730fc7be488f34755b6?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/ce0d26421211169e9be9cc3b8c43c1b8a6783cd9?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/0072db53fb276effff139d588f0cb6412f60ba9a?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/02728662c29717a7607f50a038dcf43fecbaa891?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/20d2d1b1258a54fee933ccdcae7a6d4cd83c25fc?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/68b7d89d66636b801a0f32db21d425bd9de315c0?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/d6528c193bac76f7a04bdf1ea9453ec016a94f88?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/39a3ca3f13c56631bb7e31d3393724f916e0a392?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/1aa624b1d03e219a02ea09e04b26d622c067ba4b?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/0d8fd66e26f3edb840a77333f9401006468232ac?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/e9e8d9fce04ab59c61ed9708d9bee03910d5e205?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/1de2c6a55e578f83db57d2cc4394170929a9f9ab?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/58710a799e86472a166e050ffbb9d76121a3b01e?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/eaab7f0c56f60b49304a8ec0579d2580c4df67e5?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/f38ba32aa9bbc5ce21f81e3b12598171aac00c73?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/fdf0d2d8f206ecb26aa68faf4fdf62bbebfdb632?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/e5715e682ea0897580c126882a5b371b66d934b7?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/ee5750bdd065b2bab155601ca00994bcfeee1537?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/7a6944ec3bd4bd1ea1a5a27cc15ef81fe229a707?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/644f5d422d5d59244245c938d3402f23176e3ed3?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/45a7fadff51bf3832514ce331f019b9756f7ffb6?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/bce0365b96538116e07cb65fe3b3dbec560faae6?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/957936e50e30976dd28c937f0a11420555cf35e8?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/809beb411ba8022c5f96f60a2ac5d5419d958661?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/b05e3ce55b03c9af3a8a50181351cb43c4c3da94?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/b150fc166941abb97b0c12d622ddbdcd54b00d11?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/01202d242467b19ece31abef634d357273d7a52b?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/87940f109373e35e9eb2fa8025b20678628b6b4f?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/2213085e3d5611f116df5c3fa3e27086505977b3?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/a75fce007387ea20675a3f4ea4faae4d436c476d?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/c1576ab6d2d6c28c594cfd86b540cca75ec77294?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/002eb6aa7a732e4c44dc98d2a20f0828995b594a?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/366734cb13a7c2a9dab670c3b8c156abddae54d8?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/46094bdb549ff10e73bff72f444c25390aac166f?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/3cfa27cf763b453839c71314f2f932d0ddb90217?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/91bcf8d0270ffc682bcce8b2c44677db5aa2eb72?cid=774b29d4f13844c495f206cafdad9c86", " ", "https://p.scdn.co/mp3-preview/d95c2a7d03b291a4e651ad6b2fcd82d3c4b84812?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/f3c961fe508e56a8ed59595caebc1541ba2c85ab?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/942547055d6705cf1010c800c63c03371c03e6db?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/bb4bc51e1bd0b4cb806a108f6d68c8e42ac5a659?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/608e4aadf30fe6a06d2fbcc59fdea61e13e740b2?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/71a0b191501415327c53121e7913ae2de817c36b?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/490212950b01e9f42b200a7a0134fee75a25480b?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/1cf5253743fe07824265c404ce1f09eb3b284035?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/6b9c28b662670fa219c1fc1cb8a753ef9f9a9e5a?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/bf13d42615a883ac55907ff694c267b2494a2376?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/e187a68b2932880bfe9586d4f4a809d7b50f38ea?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/9f998db8993087b78dfe5ca7c756ff2aec16c8e6?cid=774b29d4f13844c495f206cafdad9c86", ]
