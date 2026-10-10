// The Living Arcana: all content lives here. Edit text freely; app.js only renders it.
// Public edition: the archetypes, the ladder, Christopher's own path, and the Reading.

window.ARCANA = {};

ARCANA.houses = [
  { id: "seers", numeral: "I", name: "The Seers", verb: "They perceive",
    intro: `Their first relationship to the sacred is contact. They see, hear and travel where others can't, and their whole test is coming back.`,
    members: ["mystic", "oracle", "shaman"] },
  { id: "keepers", numeral: "II", name: "The Keepers", verb: "They hold the threshold",
    intro: `They stand between the people and the holy and keep the doorway open. These are functions, not genders. A man can carry the Priestess's gift, and the Path further down this page is proof.`,
    members: ["priest", "priestess", "high-priest", "high-priestess"] },
  { id: "workers", numeral: "III", name: "The Workers", verb: "They move power",
    intro: `They work with force itself. What separates them is direction: the Magician channels it, the Wizard understands it, the Alchemist transforms it, the Sorcerer grabs it.`,
    members: ["magician", "wizard", "alchemist", "sorcerer"] },
  { id: "sovereigns", numeral: "IV", name: "The Sovereigns", verb: "They hold the realm",
    intro: `Moore and Gillette's four pillars of the mature masculine, with the Queen seated beside the King. Together they make a whole person: order, nourishment, force and aliveness.`,
    members: ["king", "queen", "warrior", "lover"] },
  { id: "wise", numeral: "V", name: "The Wise", verb: "They carry distilled time",
    intro: `Wisdom in three costumes: the lantern, the crown of years, and the jester's hat.`,
    members: ["sage", "elder", "fool"] }
];

ARCANA.distinctions = [
  `The Mystic <em>merges</em>. The Sage <em>distills</em>. The Wizard <em>guides</em>. The Sorcerer <em>grabs</em>.`,
  `The Priest knows the ritual. The Priestess knows why it works. The High Priest holds the keys to the inner room. The High Priestess <em>is</em> the inner room.`,
  `The Oracle says what's coming. The Shaman goes and gets it. The Elder remembers it already happened once.`,
  `The Magician moves the energy. The Alchemist changes what it is. The Fool laughs, and it moves on its own.`
];

ARCANA.ladder = [
  { n: "I", name: "Seed", text: `The immature form. Drawn to the power, mostly in fantasy and borrowed language.` },
  { n: "II", name: "Shadow", text: `The power is real and it runs you, swinging between an active pole (too much) and a passive pole (too little).` },
  { n: "III", name: "Apprentice", text: `You meet the mature form on good days and lose it under pressure. A state, not yet a trait.` },
  { n: "IV", name: "Embodied", text: `You live there most days, without effort. It has become who you are.` },
  { n: "V", name: "Initiator", text: `Other people wake up into it around you. You pass the fire on.` }
];

ARCANA.archetypes = {
  mystic: {
    name: "The Mystic", house: "seers",
    card: { file: "hanged-man", title: "XII · The Hanged Man" },
    essence: `Goes in. Wants union with the divine, not information about it.`,
    cardWhy: `He hangs by choice, not punishment, and the halo says it worked. Surrender turns the world upside down until it finally reads right.`,
    distinction: `The Oracle lets God speak out. The Mystic disappears into God and often comes back with nothing to say, which is the point.`,
    gift: `Direct contact. Knowing by dissolving.`,
    seed: { name: "The Spiritual Tourist", text: `Collects ceremonies, retreats and peak states like passport stamps. Loves the high, skips the integration.` },
    active: { name: "The Chosen One", text: `Spiritual inflation. The experience becomes a credential and the ego quietly takes the throne.` },
    passive: { name: "The Dissolved One", text: `Top-heavy, all crown and no root. Can talk to God, cannot find the car keys.` },
    mature: { name: "The Contemplative", text: `Lives in union and still does the dishes. The ordinary day is the temple.` },
    knowBy: `Rumi spinning. Teresa of Ávila on the floor. Kabir laughing at the priests.`,
    practice: `Ground every opening in the body: feet in the dirt before and after any reaching upward.`
  },
  oracle: {
    name: "The Oracle", house: "seers",
    card: { file: "moon", title: "XVIII · The Moon" },
    essence: `Lets the unseen speak through. The voice of what is coming.`,
    cardWhy: `A path runs between two towers into country nobody has mapped, lit only by reflected light. The Oracle walks it so others don't have to walk blind.`,
    distinction: `The Mystic merges; the Oracle transmits. The Priestess tends the temple; the Oracle is the voice inside it.`,
    gift: `Clear transmission. Seeing what is not yet visible and saying it cleanly.`,
    seed: { name: "The Fortune Teller", text: `Prediction as performance. Wants to be impressive, or wants to be right.` },
    active: { name: "The Doomsayer", text: `Uses sight to steer people. "I saw it, so do as I say." Vision becomes leverage.` },
    passive: { name: "The Muted Seer", text: `Sees clearly and swallows it, because saying it would cost something.` },
    mature: { name: "The Clear Channel", text: `Speaks what comes through, then lets go of the outcome. Delivers the message, not the verdict.` },
    knowBy: `The Pythia at Delphi. Everyone who says "I don't know why, but…" and turns out to be right.`,
    practice: `Say the thing you received, then release it. Your job ends at delivery.`
  },
  shaman: {
    name: "The Shaman", house: "seers",
    card: { file: "death", title: "XIII · Death" },
    essence: `Walks between worlds and comes back with medicine for the tribe.`,
    cardWhy: `Every shamanic tradition begins with a death: illness, dismemberment, the old self taken apart. The rider on the white horse is the initiation. The sun rising between the towers is the return.`,
    distinction: `The Mystic goes up and in. The Shaman goes out and down, into the underworld and the spirit world, and the whole job is coming back with something useful.`,
    gift: `Medicine. The wounded healer who returned.`,
    seed: { name: "The Thrill Walker", text: `Journeys for the rush. Goes out often, brings nothing back.` },
    active: { name: "The Power Broker", text: `Medicine as power over people. The brujo who keeps the tribe dependent.` },
    passive: { name: "The Lost Walker", text: `Goes out and doesn't fully come back. Half here, half elsewhere, calling it gifted.` },
    mature: { name: "The Bridge", text: `Holds the threshold of death and rebirth for others, and walks them home.` },
    knowBy: `The drum, the plant, the night. Anyone who has sat at the edge of someone else's dying and stayed.`,
    practice: `Return fully every time. The medicine only counts if it reaches the village.`
  },
  priest: {
    name: "The Priest", house: "keepers",
    card: { file: "ace-of-cups", title: "Ace of Cups" },
    essence: `Holds the form. The guardian of how.`,
    cardWhy: `A dove descends with the wafer into the chalice: the sacrament itself. The Priest keeps the cup clean and the rite exact, so the dove has somewhere to land.`,
    distinction: `The Priest knows the ritual. The Priestess knows why it works.`,
    gift: `Liturgy and sacrament. A container strong enough that ordinary people can approach the holy without getting burned.`,
    seed: { name: "The Altar Boy", text: `Loves the robes and the rules. Devotion to the costume.` },
    active: { name: "The Inquisitor", text: `Form over spirit. The rule becomes a weapon and the doctrine a wall.` },
    passive: { name: "The Functionary", text: `Says all the right words. Nobody home.` },
    mature: { name: "The Celebrant", text: `Does the rite so well the sacred can walk straight through it.` },
    knowBy: `The officiant whose wedding made strangers cry. The one who holds the space so cleanly you forget it's being held.`,
    practice: `Keep one daily rite exact, and keep it alive by asking every time who it is for.`
  },
  priestess: {
    name: "The Priestess", house: "keepers",
    card: { file: "star", title: "XVII · The Star" },
    essence: `Holds the mystery. The vessel the sacred moves through.`,
    cardWhy: `She pours one jug into the pool and one onto the land, a foot on each: spirit and matter, both watered. Naked, because a vessel hides nothing.`,
    distinction: `The Priest talks about God. The Priestess lets God move through her body. At Delphi, the god spoke through a woman's mouth.`,
    gift: `Embodiment. Tending the flame. The body as temple.`,
    seed: { name: "The Maiden", text: `Devotion without discernment. Gives her water to whoever asks.` },
    active: { name: "The Gatekeeper", text: `Holds the mystery as exclusivity. Insiders and outsiders.` },
    passive: { name: "The Poured-Out One", text: `Gives the water until the vessel is cracked and empty.` },
    mature: { name: "The Living Vessel", text: `Pours from overflow, never from the bottom of the jar.` },
    knowBy: `The one who makes a room sacred just by walking into it. Usually without a title.`,
    practice: `Fill before you pour. Your own body is the first altar you tend.`
  },
  "high-priest": {
    name: "The High Priest", house: "keepers",
    card: { file: "hierophant", title: "V · The Hierophant" },
    essence: `Holds the keys. Carries the whole people into the innermost room.`,
    cardWhy: `Crossed keys at his feet, two initiates kneeling before him. He is the bridge of lineage, passing the transmission down so others can stand where he stands.`,
    distinction: `The Priest serves the rite. The High Priest is responsible for everyone, and is allowed into the room nobody else enters: in the Hebrew temple, the Holy of Holies, once a year, on Yom Kippur.`,
    gift: `Lineage, initiation, and the weight of the whole community.`,
    seed: { name: "The Ambitious Acolyte", text: `Wants the keys, not the weight.` },
    active: { name: "The Pope-King", text: `Lineage as power. Hierarchy, dogma, and the people kept small.` },
    passive: { name: "The Absent Abbot", text: `Holds the title, no longer enters the room. Burned out behind the vestments.` },
    mature: { name: "The Initiator", text: `Uses the keys to open doors for others into their own direct contact.` },
    knowBy: `The teacher who ordains students who go on to surpass them, and is glad.`,
    practice: `Initiate someone this season. Hand over a key you've been holding.`
  },
  "high-priestess": {
    name: "The High Priestess", house: "keepers",
    card: { file: "high-priestess", title: "II · The High Priestess" },
    essence: `Is the room. Knows without looking.`,
    cardWhy: `She sits between the black pillar and the white, a veil of pomegranates behind her, a scroll half hidden in her lap, the moon at her feet. She doesn't keep the mystery. She is the mystery, seated.`,
    distinction: `The Priestess tends the temple. The High Priestess embodies it. The first named author in human history was one: Enheduanna, high priestess of the moon god at Ur, around 2300 BCE.`,
    gift: `Deep knowing. Feeling as intelligence. Keeping the inner sanctum.`,
    seed: { name: "The Secret Keeper", text: `Loves knowing what others don't.` },
    active: { name: "The Enchantress", text: `Uses intuition to steer people. Mystery as control.` },
    passive: { name: "The Veiled One", text: `Knows, and never says. Withdraws behind the curtain.` },
    mature: { name: "The Living Temple", text: `Her presence is the sanctuary. People come home to themselves near her.` },
    knowBy: `The one who sees through you in a single look, and loves what she sees.`,
    practice: `Trust what you know before you can explain it, and speak it once.`
  },
  magician: {
    name: "The Magician", house: "workers",
    card: { file: "magician", title: "I · The Magician" },
    essence: `Knows the hidden forces and channels them. As above, so below.`,
    cardWhy: `One hand raised to heaven, one pointing to earth, all four tools on the table: wand, cup, sword, coin. He is the conduit, not the source.`,
    distinction: `The Magician channels power in the moment. The Wizard studies its laws for a lifetime. The Sorcerer bends it toward himself.`,
    gift: `Mastery of energy and technology. Making the invisible useful.`,
    seed: { name: "The Precocious Child", text: `Brilliant, curious, and a little too pleased with being clever.` },
    active: { name: "The Detached Manipulator", text: `Uses knowledge to stay above people and move them around.` },
    passive: { name: "The Innocent Denier", text: `Has the power and pretends not to, so nothing can be asked of him.` },
    mature: { name: "The Ritual Elder", text: `Holds hidden knowledge in service of everyone's transformation.` },
    knowBy: `The one who builds in ninety minutes what takes others a month, and hands you the keys.`,
    practice: `Before you work any magic, say out loud who it serves.`,
    source: "Moore & Gillette"
  },
  wizard: {
    name: "The Wizard", house: "workers",
    card: { file: "wheel", title: "X · Wheel of Fortune" },
    essence: `Studies the laws beneath the world and guides other people's quests.`,
    cardWhy: `The wheel is inscribed with alchemical signs, and the four creatures in the corners are reading their books. The Wizard knows how the cycles turn, which is why he never panics on the way down.`,
    distinction: `Gandalf never carries the ring. The Wizard serves the hero's journey and never takes the throne.`,
    gift: `Understanding. Long apprenticeship. Knowing which lever moves what.`,
    seed: { name: "The Apprentice Know-It-All", text: `All spellbook, no wisdom.` },
    active: { name: "The Puppeteer", text: `Moves the hero like a chess piece and calls it guidance.` },
    passive: { name: "The Tower Recluse", text: `All the knowledge in the world, and no quest to spend it on.` },
    mature: { name: "The Guide", text: `Teaches the hero to carry the ring themselves, then gets out of the way.` },
    knowBy: `Merlin. Gandalf. The mentor who shows up exactly when you're ready and leaves before you depend on him.`,
    practice: `Pick one hero and serve their quest without needing credit for it.`
  },
  alchemist: {
    name: "The Alchemist", house: "workers", proposed: true,
    card: { file: "temperance", title: "XIV · Temperance" },
    essence: `Transmutes lead into gold: wound into medicine, shadow into gift.`,
    cardWhy: `The angel pours between two cups, one foot in water and one on land. In the Thoth deck this card is renamed "Art," meaning the alchemical art itself: solve et coagula, dissolve and rejoin.`,
    distinction: `The Magician moves energy. The Alchemist changes its nature, and the first metal it transforms is always the alchemist.`,
    gift: `Transformation that holds. Patience with the dark phase.`,
    seed: { name: "The Gold Seeker", text: `Wants the gold, skips the lead.` },
    active: { name: "The Forcer", text: `Rushes the process. Fake gold. Bypass by premature transformation.` },
    passive: { name: "The Stuck Crucible", text: `Stays in the blackening so long the dark phase becomes the identity.` },
    mature: { name: "The Living Stone", text: `Becomes the gold. Their presence transmutes what it touches.` },
    knowBy: `The person whose worst year became their best teaching.`,
    practice: `Name one piece of lead in your life and stay with it until it changes, without forcing.`
  },
  sorcerer: {
    name: "The Sorcerer & Sorceress", short: "The Sorcerer", house: "workers",
    card: { file: "devil", title: "XV · The Devil" },
    essence: `Bends reality toward will. Power through desire, born with it or bargained for.`,
    cardWhy: `Look closely: the chains around the two figures' necks are loose. They could lift them off any time. That is the whole teaching of sorcery: the pact only binds the one who believes in it.`,
    distinction: `The line between Magician and Sorcerer is consent and direction: power through, versus power over. A footnote with teeth: "sorceress" was often what frightened men called any woman with real power. Circe and Morgan le Fay got bad press from scribes who couldn't do what they did.`,
    gift: `Raw will. The ability to make things happen.`,
    seed: { name: "The Wisher", text: `Wants it all, takes responsibility for none of it.` },
    active: { name: "The Controller", text: `Power over people. Outcomes bent without consent.` },
    passive: { name: "The Bound One", text: `Enslaved to their own desire or bargain. The spell cast on themselves.` },
    mature: { name: "The Redeemed Will", text: `Will surrendered to the Higher Will. Words cast as blessings instead of hooks.` },
    knowBy: `Everyone who has ever said "words are spells" and meant it.`,
    practice: `Before you cast, ask whose will this is. Then cast.`
  },
  king: {
    name: "The King", house: "sovereigns",
    card: { file: "emperor", title: "IV · The Emperor" },
    essence: `Orders the realm and blesses its people.`,
    cardWhy: `Ram heads on the throne, armor under the robe, bare mountains behind him. The King makes structure where there was none, so life can grow inside it.`,
    distinction: `The Warrior defends the realm. The King decides what the realm is for.`,
    gift: `Order, blessing, generativity. Seeing people and naming their worth.`,
    seed: { name: "The Divine Child", text: `The center of the universe. Adored, and expecting it.` },
    active: { name: "The Tyrant", text: `Rules through fear, and envies anyone who shines.` },
    passive: { name: "The Weakling", text: `Abdicates. Won't decide, won't bless, won't stand.` },
    mature: { name: "The Sovereign", text: `Holds the center steady and blesses others into their own power.` },
    knowBy: `The man in the circle whose "I see you" makes the other men stand taller.`,
    practice: `Bless someone out loud today. Name what you see in them.`,
    source: "Moore & Gillette"
  },
  queen: {
    name: "The Queen", house: "sovereigns", proposed: true,
    card: { file: "empress", title: "III · The Empress" },
    essence: `Holds the realm through nourishment and boundary.`,
    cardWhy: `Wheat ripening at her feet, a stream running through her garden, Venus on her shield. Her sovereignty is fertile: things grow where she sits.`,
    distinction: `The King orders the realm. The Queen makes it worth living in, and decides who gets a seat at the table.`,
    gift: `Sovereign nourishment. Abundance with a spine.`,
    seed: { name: "The Princess", text: `Waiting to be chosen.` },
    active: { name: "The Ice Queen", text: `Rules by withholding warmth. Control dressed as standards.` },
    passive: { name: "The Abdicated Queen", text: `Gives her throne away and serves everyone but herself.` },
    mature: { name: "The Sovereign Mother", text: `Sets the table and the boundary with the same hand.` },
    knowBy: `The one who gets the better price, feeds everyone, and still tells you the truth.`,
    practice: `Receive something today without paying it back.`
  },
  warrior: {
    name: "The Warrior", house: "sovereigns",
    card: { file: "chariot", title: "VII · The Chariot" },
    essence: `Disciplined force in service of something larger than himself.`,
    cardWhy: `Two sphinxes, one black and one white, pulling different ways, and no reins in his hands. He steers by will alone.`,
    distinction: `The Warrior serves a cause. Without a King to serve, he becomes a mercenary.`,
    gift: `Focus, discipline, courage, the clean cut.`,
    seed: { name: "The Hero", text: `Proving himself. Needs the dragon to know he's real.` },
    active: { name: "The Sadist", text: `Force for its own sake, including against himself.` },
    passive: { name: "The Masochist", text: `Takes it and takes it, and calls collapse loyalty.` },
    mature: { name: "The Spiritual Warrior", text: `Aware of his death, loyal to his mission, never mistaking the battle for the point.` },
    knowBy: `The laser. The one who says "I'll handle it," and does.`,
    practice: `Choose one battle worth your whole force, and lay down the rest.`,
    source: "Moore & Gillette"
  },
  lover: {
    name: "The Lover", house: "sovereigns",
    card: { file: "lovers", title: "VI · The Lovers" },
    essence: `Fully alive. Feels everything, connects to everything.`,
    cardWhy: `The man looks at the woman, the woman looks up at the angel. Love as a ladder: human connection that opens onto the divine.`,
    distinction: `The King sees you. The Lover feels you.`,
    gift: `Aliveness, sensuality, empathy, the capacity to be moved.`,
    seed: { name: "The Oedipal Child", text: `Wants to be the one most loved.` },
    active: { name: "The Addicted Lover", text: `Lost in the feeling. Needs the next high, the next connection, the next yes.` },
    passive: { name: "The Impotent Lover", text: `Numb. Flat. The color drained out of life.` },
    mature: { name: "The Lover", text: `Connected to everything, held by the boundary of the King.` },
    knowBy: `Someone it is genuinely impossible not to love.`,
    practice: `Let yourself be loved today without checking whether it's returned.`,
    source: "Moore & Gillette"
  },
  sage: {
    name: "The Sage", house: "wise",
    card: { file: "hermit", title: "IX · The Hermit" },
    essence: `Comes back down the mountain and distills it into something a stranger can use.`,
    cardWhy: `He stands on the summit, but the lantern is held out, not in. The light is for the ones still climbing.`,
    distinction: `The Mystic went to the mountaintop. The Sage came back down and opened a tea stand. The Wizard knows the laws; the Sage knows which ones matter.`,
    gift: `Distilled wisdom. Saying less, landing more.`,
    seed: { name: "The Know-It-All Student", text: `Quotes the masters. Hasn't bled for any of it.` },
    active: { name: "The Pontificator", text: `Unasked-for advice. Wisdom as a pulpit, and a wall.` },
    passive: { name: "The Hermit", text: `Keeps the lantern indoors. "Nobody's ready for this."` },
    mature: { name: "The Sage in the Marketplace", text: `Answers only what's asked. Needs to be needed not at all. The tenth Ox-Herding picture: returning to the market with open hands.` },
    knowBy: `Lao Tzu. Late Ram Dass. Anyone whose "be here now" comes with lunch.`,
    practice: `Carry the lantern into the marketplace: share one true thing publicly this week.`
  },
  elder: {
    name: "The Elder", house: "wise",
    card: { file: "world", title: "XXI · The World" },
    essence: `Has lived the whole cycle, and now blesses rather than builds.`,
    cardWhy: `The dancer at the center of the wreath, the four creatures at peace in the corners. The journey that began with the Fool is complete, and she dances anyway.`,
    distinction: `You can claim Sage. You cannot claim Elder. The village gives it to you.`,
    gift: `Generativity. The memory of the village. Giving away the throne.`,
    seed: { name: "The Old Man", text: `Aged without ripening. Years used as a credential.` },
    active: { name: "The Curmudgeon", text: `"Back in my day." Withholds blessing from the young.` },
    passive: { name: "The Retired One", text: `Checked out. No longer invests in who comes next.` },
    mature: { name: "The Blessing Elder", text: `Mentors, steps aside, and is delighted to be surpassed.` },
    knowBy: `The grandmother everyone visits before the big decision.`,
    practice: `Mentor one person this year with no agenda but their flourishing.`
  },
  fool: {
    name: "The Holy Fool", house: "wise", proposed: true,
    card: { file: "fool", title: "0 · The Fool" },
    essence: `Wisdom in a jester's hat. The truth delivered so lightly it gets past the guard.`,
    cardWhy: `Zero: before the journey and beyond it. He steps off the cliff with a white rose in his hand and a dog at his heels. Trust as a spiritual practice.`,
    distinction: `The court jester was the only one allowed to tell the king the truth. In Lakota tradition the Heyoka does everything backwards to wake the village up.`,
    gift: `Humor as medicine. Disarming the ego so the heart can hear.`,
    seed: { name: "The Class Clown", text: `Humor as deflection. Funny, so nobody looks closer.` },
    active: { name: "The Cynic-Jester", text: `Humor as a weapon. Mockery dressed as honesty.` },
    passive: { name: "The Hider", text: `Laughs so no one sees the pain.` },
    mature: { name: "The Holy Fool", text: `Laughter with teeth underneath. The joke opens the door and the truth walks through it.` },
    knowBy: `Ram Dass laughing. Anyone who made you laugh and changed your life in the same sentence.`,
    practice: `Find the joke inside the thing you're most afraid of, then say both.`
  }
};

// ---------- Christopher's path ----------
ARCANA.path = [
  { when: "2007 to 2022", title: "The Hero in a Suit", card: "chariot", tags: ["Warrior · I Seed"],
    text: `Nearly two decades in sales. The Warrior in his boy form: proving, winning, carrying the weight. Real skill was forged here, presence under pressure and reading a room. It was the training ground, not the mission.` },
  { when: "December 2020", title: "The Truth Told", card: "tower", tags: ["Lover", "Warrior"],
    quote: `I told her everything. Not to be forgiven, but to be free.`,
    text: `The Tower: lightning, the crown knocked off, everything false falling. The Warrior turns his sword on the lie and the Lover begins again on truth. Every station after this one stands on this ground.` },
  { when: "2021 to 2023", title: "The Threshold Keeper", card: "death", tags: ["Shaman · IV", "High Priest · IV"],
    text: `Nearly 500 Bufo ceremonies held or facilitated across three years, holding people at the literal threshold of death and rebirth. Holy of Holies work, on repeat. Then, in 2023, the season closed.` },
  { when: "December 10, 2022", title: "The Crown Opens", card: "moon", tags: ["Oracle", "Mystic"],
    quote: `A sudden pop of the crown of my head.`,
    text: `Then voices that introduced themselves as his guides and teachers. The Oracle's initiation: the channel opens, uninvited and unmistakable.` },
  { when: "2022 to 2023", title: "Top-Heavy", card: "hanged-man", tags: ["Mystic · II The Dissolved One"],
    quote: `Top heavy, all in the upper chakras, disconnected from my root.`,
    text: `Every mystic meets this pole. Wide open above, unrooted below. The Hanged Man before he understands why he's hanging.` },
  { when: "April 2023", title: "Met God, Chose Life", card: "judgement", tags: ["Mystic · the dark night"],
    quote: `I overdosed. I met God. I chose life. Days later, I checked myself into rehab.`,
    text: `The angel's trumpet and the dead rising. The Mystic's dark night, gone all the way to the bottom and answered. The choice to return is the hinge of the whole path.` },
  { when: "2023 onward", title: "Rooting", card: "strength", tags: ["Sage · III Apprentice"],
    quote: `I learned how to root. How to return to breath. To stillness. To prayer. To Earth.`,
    text: `Strength is a woman closing a lion's jaws with her bare hands, gently. Patience, not force. That sentence is the exact moment a Mystic starts becoming a Sage.` },
  { when: "2022 onward", title: "Brotherhood and the Pulpit", card: "emperor", tags: ["King · IV", "Priest · IV"],
    text: `Divine Masculine Embodied, born from a guys' weekend. Men's Team 2025 with five brothers. Ordained a minister. The King learning to bless other men, and the Priest learning to hold the form.` },
  { when: "2026", title: "The Marketplace", card: "sun", tags: ["Sage · crossing to IV", "Oracle · going public"],
    quote: `Moving from living the practice quietly to becoming a visible demonstration of what's possible.`,
    text: `215-plus clients and the first group channeling cohort. The Sun: a child on a white horse, arms open, nothing hidden. In the Ox-Herding pictures this is the tenth and final image, returning to the marketplace with open hands. In the chart it is the Root Flame, Aries Sun in the 4th house, rising through the structure into the open.` },
  { when: "Ahead", title: "The Horizon", card: "world", tags: ["Elder · given, not claimed"],
    text: `The village hands this card over when the men he blessed start blessing other men without him in the room. It has already started: the practice now runs two generations past the room it began in.` }
];

ARCANA.christopher = {
  stand: { id: "sage", level: "III → IV · Apprentice, crossing to Embodied",
    text: `His Human Design says why it's earned rather than studied: a Generator with a 1/3 profile, the Investigator who digs to the foundation and the Martyr who learns by breaking things until the true shape shows. And his own line is pure Sage: "The work succeeds when they need me less, not more."` },
  carried: [
    { id: "oracle", note: "IV · the channel, the gift" },
    { id: "mystic", note: "IV · the origin" },
    { id: "high-priest", note: "IV · a season completed, 2021 to 2023" },
    { id: "fool", note: "IV · the voice: humor first, teeth underneath" },
    { id: "wizard", note: `self-named: "logistics, and casting spells. Look at my staff."` },
    { id: "alchemist", note: "the name he gave his own assistant: Sacred Alchemy Guide Embodied" }
  ],
  crossing: { id: "sage", pole: "The Hermit",
    text: `The lantern kept indoors. In practice: the announcement unsent, the invitation not drafted. A sage who stays on the mountain because the marketplace has email is a hermit with excellent posture.` },
  going: { id: "sage", far: "elder",
    text: `The Sage in the Marketplace, IV moving to V. And on the far horizon, the Elder, which nobody gets to claim.` },
  priestess: `A Priestess's gift in a man's body. Channeling, the hollow bone, the oracle's chair: the role history coded feminine. Divine Masculine Embodied doing the Priestess's oldest job is not a contradiction. It is the transmission.`
};

// ---------- The Reading ----------
// Each option scores archetypes. Scores are normalized by each archetype's maximum,
// so an archetype that appears in fewer answers is not disadvantaged.
ARCANA.quiz = [
  { q: "A friend calls at midnight, in crisis. Your first move?", a: [
    ["Drop everything and drive over.", { warrior: 2, lover: 1 }],
    ["Listen, then quietly say the one thing that cuts through.", { sage: 2, "high-priestess": 1 }],
    ["Feel what's underneath before they finish the sentence.", { oracle: 2, priestess: 1 }],
    ["Make them laugh until they can breathe again.", { fool: 2, lover: 1 }],
    ["Hold the space and walk them through it like a ceremony.", { shaman: 2, priest: 1 }],
    ["Help them see this is raw material for who they're becoming.", { alchemist: 2, elder: 1 }]
  ]},
  { q: "Your relationship with God, Source, Spirit, whatever the word is, feels most like:", a: [
    ["A lover I disappear into.", { mystic: 2, lover: 1 }],
    ["A voice that speaks through me.", { oracle: 2, priestess: 1 }],
    ["A lineage I serve and carry.", { "high-priest": 2, priest: 1 }],
    ["A set of laws I'm learning to read.", { wizard: 2, magician: 1 }],
    ["A presence I feel in my body and in the land.", { shaman: 1, queen: 1, "high-priestess": 1 }],
    ["A cosmic joke I'm finally in on.", { fool: 2, sage: 1 }]
  ]},
  { q: "You walk into a room of strangers. What do they feel first?", a: [
    ["Order. The room organizes itself around me.", { king: 2, warrior: 1 }],
    ["Warmth. Somebody's about to get fed.", { queen: 2, lover: 1 }],
    ["Mystery. They can't quite read me.", { "high-priestess": 2, sorcerer: 1 }],
    ["Intensity. Something's about to happen.", { warrior: 1, sorcerer: 1, magician: 1 }],
    ["Ease. The tension leaves the second I laugh.", { fool: 2 }],
    ["Stillness. People lower their voices.", { sage: 1, elder: 1, mystic: 1 }]
  ]},
  { q: "Your favorite kind of power:", a: [
    ["Knowing how things actually work.", { wizard: 2, magician: 1 }],
    ["Turning pain into something precious.", { alchemist: 2, shaman: 1 }],
    ["Getting what I want, cleanly and fast.", { sorcerer: 2, warrior: 1 }],
    ["Building something that outlives me.", { elder: 2, king: 1 }],
    ["Making a space holy enough that people change inside it.", { priest: 1, "high-priest": 1, priestess: 1 }],
    ["Seeing what nobody else can see.", { oracle: 1, "high-priestess": 1, mystic: 1 }]
  ]},
  { q: "When everything falls apart, you tend to:", a: [
    ["Go inward and dissolve into prayer.", { mystic: 2 }],
    ["Get a download about what it all means.", { oracle: 2 }],
    ["Fight harder.", { warrior: 2 }],
    ["Take charge and set the plan.", { king: 2 }],
    ["Quietly rearrange the pieces until it works.", { magician: 2, wizard: 1 }],
    ["Burn it down and start the experiment again.", { alchemist: 2, fool: 1 }],
    ["Pour myself out for everyone else first.", { priestess: 1, queen: 1, lover: 1 }]
  ]},
  { q: "Be honest. The shadow you're most likely to get caught in:", a: [
    ["Bypassing. Floating above it all.", { mystic: 2 }],
    ["Control. Steering people for their own good.", { sorcerer: 2, king: 1 }],
    ["Hoarding wisdom. Nobody's ready for it.", { sage: 2, wizard: 1 }],
    ["Martyrdom. Giving until I'm empty.", { priestess: 2, queen: 1 }],
    ["Chasing intensity. The next ceremony, the next high.", { lover: 2, shaman: 1 }],
    ["Deflecting with a joke.", { fool: 2 }]
  ]},
  { q: "What do people come to you for?", a: [
    ["The ritual, done right.", { priest: 2, "high-priest": 1 }],
    ["The truth, said plainly.", { sage: 1, fool: 1, warrior: 1 }],
    ["The vision of what's coming.", { oracle: 2, wizard: 1 }],
    ["The feeling of being completely loved.", { lover: 2, queen: 1 }],
    ["Protection.", { warrior: 2, king: 1 }],
    ["Initiation into something bigger.", { "high-priest": 2, shaman: 1, elder: 1 }]
  ]},
  { q: "Pick a place to spend a day alone:", a: [
    ["A cave with one candle.", { mystic: 1, sage: 1, "high-priestess": 1 }],
    ["The jungle at night, with a drum.", { shaman: 2 }],
    ["A library with locked rooms.", { wizard: 2 }],
    ["A garden you planted yourself.", { queen: 2, elder: 1 }],
    ["A temple at dawn.", { priest: 1, priestess: 1, "high-priest": 1 }],
    ["A crossroads at midnight.", { sorcerer: 2, magician: 1 }]
  ]},
  { q: "Your relationship with rules:", a: [
    ["I keep them. The form protects the fire.", { priest: 2, king: 1 }],
    ["I know which ones hold up the roof and which are decoration.", { sage: 1, wizard: 1, elder: 1 }],
    ["I bend them. Reality is more negotiable than people think.", { magician: 2, sorcerer: 1 }],
    ["I break them on purpose to wake people up.", { fool: 2 }],
    ["I write them, so the realm can run.", { king: 2, queen: 1 }],
    ["Rules? I follow the inner nudge.", { mystic: 1, oracle: 1, lover: 1 }]
  ]},
  { q: "How do you want to be remembered?", a: [
    ["They loved without holding back.", { lover: 2 }],
    ["They saw us before we saw ourselves.", { "high-priestess": 2, oracle: 1 }],
    ["They turned their wounds into medicine.", { alchemist: 2, shaman: 1 }],
    ["They made the village stronger.", { elder: 2, king: 1 }],
    ["They made us laugh at exactly the right moment.", { fool: 2 }],
    ["They walked their talk until it was just walking.", { sage: 2, mystic: 1 }]
  ]}
];
